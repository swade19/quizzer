const { Sequelize } = require('sequelize');
const express = require('express');
const finale = require('finale-rest');

const app = express()
// Create data model
const database = new Sequelize({
    dialect: 'sqlite',
    storage: './server/test.sqlite',
});

const Quizes = database.define('quizzes', {
  title: Sequelize.STRING,
  subject: Sequelize.STRING,
  form: Sequelize.STRING,
  questions: Sequelize.STRING
});
const Users = database.define('users', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  permission: Sequelize.STRING,
  answered: Sequelize.STRING
});

const port = process.env.SERVER_PORT || 3001;

database.sync().then(() => {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
});

finale.initialize({ 
  app, 
  sequelize: database 
});

finale.resource(
    {
        model: Quizes,
        endpoints: ['/quizzes', '/quizzes/:id'],
    }
);
finale.resource(
    {
        model: Users,
        endpoints: ['/users', '/users/:id'],
        search: {
            param: 'searchForUsername',
            attributes: [ 'username' ]
          }
    }
);

setTimeout(() => {
  (async () => {
      await Users.create(
          {
              username: "DumbledoreA",
              password: "731e2b8ad7b5ed215fb0281d6e9e37457b466cfd", // onlyonehefeared
              permission: "Teacher",
              answered: "N/A"
          }
      )
      console.log("HERE")
      await Users.create(
          {
              username: "HagridR",
              password: "961cb0e22787334676a45f2106d076b22d62448f", // urawizardharry
              permission: "Assistant",
              answered: "N/A"
          }
      )
      await Users.create(
          {
              username: "PotterH",
              password: "89cbea19bab7868613c99967a819becab5ded4c4", // boywholived
              permission: "Student",
              answered: "N/A"
          }
      )
  })();
}, 500);

(async()=> {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  })
