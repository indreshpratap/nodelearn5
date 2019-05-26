const knex = require('knex');
const path = require('path');

const db = knex({
    client: 'sqlite3',
    useNullAsDefault: true,
    debug:true,
    connection: {
      filename: path.resolve(__dirname,"mydb.sqlite")
    }
  
});

module.exports = db;