require("dotenv").config();

module.exports = {
  
  development: {
    client: 'postgresql',
    connection: {
      database: 'postgres',
      user: process.env.PG_USER,
      password: process.env.PG_PWD,
      filename: './data/produce.db',
  
    }
  },

  useNullAsDefault: true,

  migrations: {
    directory: './data/migrations'
  },

  seeds: {
    directory: './data/seeds'
  }, 

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
