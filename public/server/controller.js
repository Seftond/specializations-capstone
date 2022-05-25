const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
  });


module.exports = {
    getEvents: (req, res) => {
        sequelize.query(`
            SELECT * FROM events
            WHERE event_date >= CURRENT_DATE
            ORDER BY event_date
        `).then(dbRes => {
            res.status(200).send(dbRes[0])
        }).catch(err => res.status(400).send("Error retrieving events"))
    },
    updateUsers: (req, res) => {
        let { number, message, event } = req.body
            sequelize.query(`
            SELECT COUNT(*)
            FROM users
            WHERE phone_number = '${number}'
            `).then(dbRes => {
                if(dbRes[0][0].count === '0'){
                    sequelize.query(`
                    INSERT INTO users(user_id, phone_number)
                    VALUES (DEFAULT, '${number}');
        
                    INSERT INTO users_events (user_id, event_id, reminder)
                    VALUES ((SELECT user_id FROM users WHERE phone_number = '${number}'), (SELECT event_id FROM events WHERE event_name = '${event}'), ${message});
        
                    UPDATE events
                    SET number_going = number_going + 1
                    WHERE event_name = '${event}'
                    `).then(dbRes => res.sendStatus(200))
                    .catch(err => res.sendStatus(400))
                } else {
                    sequelize.query(`
                    SELECT COUNT(*)
                    FROM events e
                    INNER JOIN users_events
                    ON users_events.event_id = e.event_id
                    INNER JOIN users u
                    ON users_events.user_id = u.user_id
                    WHERE phone_number = '${number}'
                    AND event_name = '${event}'
                    `).then(dbRes => {
                        if(dbRes[0][0].count === '0'){
                            sequelize.query(`
                            INSERT INTO users_events (user_id, event_id, reminder)
                            VALUES ((SELECT user_id FROM users WHERE phone_number = '${number}'), (SELECT event_id FROM events WHERE event_name = '${event}'), ${message});
                
                            UPDATE events
                            SET number_going = number_going + 1
                            WHERE event_name = '${event}'
                            `).then(dbRes => res.sendStatus(200))
                        } else{
                            res.sendStatus(401)
                        }
                    })
                }
            })
    },
    addSubscriber: (req, res) => {
        let {email} = req.body;
        sequelize.query(`
        SELECT COUNT(*)
        FROM emails
        WHERE email = '${email}'
        `).then (dbRes => {
            if(dbRes[0][0] === 0){
                sequelize.query(`
                    INSERT INTO emails(email)
                    VALUES ('${email}')
                `).them(dbRes => res.sendStatus(200))
            }
            else {
                res.sendStatus(200)
            }
        })
    }
}