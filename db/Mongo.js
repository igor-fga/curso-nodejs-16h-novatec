var mongojs = require('mongojs'),
    debug   = require('debug')('curso:db'),
    config  = require('config');

'use strict';
var db;

function _connection(env) {
  var username = config.get('mongo.username'),
      password = config.get('mongo.password'),
      server   = config.get('mongo.server'),
      port     = config.get('mongo.port'),
      database = config.get('mongo.database'),

      auth = username ? username + ':' + password + '@' : '';

  return 'mongodb://' + auth + server + ':' + port + '/' + database;
}

function _init(url) {
  debug(url);
  db = mongojs(url);
  db.on('error', function(err) {
    debug(err);
  });
}

_init(_connection(process.env));

module.exports = db;
