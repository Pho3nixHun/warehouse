'use strict';

module.exports = {
  mysql: {
    host: process.env.DB_IP,
    port: process.env.DB_PORT,
    database: process.env.DB_SCHEMA,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    ssl  : {
      ca : new Buffer(process.env.DB_CA, 'base64').toString(),
      cert: new Buffer(process.env.DB_CERT, 'base64').toString(),
      key: new Buffer(process.env.DB_KEY, 'base64').toString()
    },
    name: "mysql",
    connector: "mysql"
  }
};
