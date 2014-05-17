'use strict';


var kraken = require('kraken-js'),
   app = require('express')(),
   options = require('./lib/spec')(app),
   flash = require('connect-flash'),
   // userLib = require('./lib/user')(),
   port = process.env.PORT || 8000,
   winston = require('winston'),
   expressWinston = require('express-winston');


///**
// * Setup Request logging
// */
//app.use(expressWinston.logger({
//   transports: [
//      new winston.transports.Console({
//         json: true,
//         colorize: true
//      })
//   ],
//   meta: true, // optional: control whether you want to log the meta data about the request (default to true)
//   msg: "HTTP {{req.method}} {{res.statusCode}} {{req.url}}" // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
//}));


app.use(kraken(options));


app.requestStart = function requestStart(server) {
   // Run before most express middleware has been registered.
};


app.requestBeforeRoute = function requestBeforeRoute(server) {
   // Run before any routes have been added.
   server.use(flash());
};


app.requestAfterRoute = function requestAfterRoute(server) {
   // Run after all routes have been added.
};


/**
 * Setup Error logging
 */
app.use(expressWinston.errorLogger({
   transports: [
      new winston.transports.Console({
         json: true,
         colorize: true
      })
   ]
}));


/**
 * Catch & log uncaughtException
 */
process.on('uncaughtException', function (er) {
   console.error(er.stack)
   process.exit(1)
})


/**
 * Listen to the web server
 */
app.listen(port, function (err) {
   console.log('[%s] Listening on http://localhost:%d', app.settings.env, port);
});