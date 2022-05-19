const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
  });

  const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "584edd4e",
  apiSecret: "dHK67KI9xmSnx6qU"
})


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
        let { number, message, eventName } = req.body

            sequelize.query(`
            UPDATE events 
            SET number_going = number_going + 1 
            WHERE event_name = '${eventName}';

            INSERT INTO users(user_id, phone_number)
            VALUES (DEFAULT, '${number}');

            INSERT INTO users_events (user_id, event_id, reminder)
            VALUES ((SELECT user_id FROM users WHERE phone_number = '${number}'), (SELECT event_id FROM events WHERE event_name = '${eventName}'), ${message});

            UPDATE events
            SET number_going = number going + 1
            WHERE event_name = '${eventName}'
            `)
    }

}