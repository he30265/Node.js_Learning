 (function() {

     var settings = require('settings');
     var mysql = require('mysql');
     var client = null;

     var default_sql = require

     exports.getDbCon = function() {
         try {
             if (client) {
                 client = mysql.createConnection(settings.mysql);
                 client.connect();
             } else {
                 client = new mysql.createConnection(settings.mysql);
                 client.connect();
             }
         } catch (_error) {
             throw _error;
         }
         return client;
     }

     exports.install = function() {

     }
 })()

