'use strict';
const services = {
    r: require('rethinkdbdash')
  },
  config = {
    host: 'rethinkdb',
    port: 28015,
    db: 'test'
  }
  ;

function curry(fn, services) {
  return function(connectionObj) {
    return fn(services, connectionObj);
  };
}

function bootRethinkdb(service, connectionObj) {
  let conn = service.r(connectionObj);

  return conn;
}

let connection = curry(bootRethinkdb, services)(config);

console.log('i have a connection:  ', connection);



