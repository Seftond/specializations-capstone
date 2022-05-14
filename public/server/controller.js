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
        `).then(dbRes => {
            res.status(200).send(dbRes[0])
        }).catch(err => res.status(400).send("Error retrieving events"))
    },

}