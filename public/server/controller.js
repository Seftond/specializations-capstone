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
    updateEvent: (req, res) => {
        let { name } = req.params
        let { type } = req.body;

        if(type === "add"){
            sequelize.query(`
            UPDATE events 
            SET number_going = number_going + 1 
            WHERE event_name = '${name}'
            `).catch(err => console.log(err))
        } else if( type === "subtract"){
            sequelize.query(`
            UPDATE events 
            SET number_going = number_going - 1 
            WHERE event_name = '${name}'
            `).catch(err => console.log(err))
        }
    }

}