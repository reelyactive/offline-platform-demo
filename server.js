/**
 * Copyright reelyActive 2017-2018
 * We believe in an open Internet of Things
 */

const http = require('http');
const express = require('express');
const cors = require('cors');
const hlcserver = require('hlc-server');
const jsonsilo = require('json-silo');


// ----- Begin user-editable parameters -----
const PASSWORD = 'admin';
// ----- End user-editable parameters -----


const SNIFFYPEDIA_PORT = 3000;
const HLC_SERVER_PORT = 3001;
const JSON_SILO_PORT = 3002;
const SNIFFYPEDIA_ROOT = 'http://localhost:' + SNIFFYPEDIA_PORT + '/';
const HLC_SERVER_ROOT = 'http://localhost:' + HLC_SERVER_PORT + '/';
const JSON_SILO_ROOT = 'http://localhost:' + JSON_SILO_PORT + '/';
const UDP_LISTENER_PATH = '0.0.0.0:50000';


// ----- SNIFFYPEDIA ---------------------------------------------------------

// Create the Express app, server and router
var app = express();
var server = http.createServer(app);
var router = express.Router();

// Define the Express routes to serve Sniffypedia with CORS enabled
app.use(cors());
app.use('/', express.static(__dirname + '/sniffypedia'));
app.use('/', router);

// Listen on Sniffypedia port
server.listen(SNIFFYPEDIA_PORT, function() {
  console.log('Sniffypedia hosted on', SNIFFYPEDIA_ROOT);
});


// ----- HLC-SERVER ----------------------------------------------------------

// Define the hlc-server options
var options = {
    httpPort: HLC_SERVER_PORT,
    protectedRequests: [
        { path: "/associations/", methods: [ "DELETE" ] }
    ],
    chickadee: {
        associationsRootUrl: SNIFFYPEDIA_ROOT
    }
};

// Create the hlc-server using the above options
var hlc = new hlcserver(options);

// Listen on USB for a minimal starter kit
hlc.bind( { protocol: 'serial', path: 'auto' } );

// Listen for UDP from other reelyActive hardware and starter kits
hlc.bind( { protocol: 'udp', path: UDP_LISTENER_PATH } );

console.log('hlc-server hosted on', HLC_SERVER_ROOT);


// ----- JSON-SILO -----------------------------------------------------------

// Define the json-silo options
options = {
    httpPort: JSON_SILO_PORT,
    useCors: true,
    stations: [],
    directories: [],
    durations: [ { title: "1 year", value: "365d" },
                 { title: "1 week", value: "7d" },
                 { title: "1 day", value: "24h" } ],
    password: PASSWORD,
    identifierLength: 4
};

// Create the json-silo using the above options
var silo = new jsonsilo(options);


// ----- CONSOLE INSTRUCTIONS ------------------------------------------------

console.log('\r\n--------------------------------------' +
            '------------------------------------------');
console.log('--> Browse to ' + HLC_SERVER_ROOT +
            ' for the reelyActive offline demo');
console.log('--> Browse to ' + JSON_SILO_ROOT +
            ' to onboard devices');
console.log('------------------------------------------' +
            '--------------------------------------\r\n');

