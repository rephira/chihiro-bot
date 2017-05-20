//chihiro-bot source code

'use strict';

//requiring node modules
const
  express = require('express'),
  bodyParser = require('body-parser'),
  request = require('request'),
  config = require('config'),
  crypto = require('crypto'),
  https = require('https');

//base setup for connection
let app = express();
app.set('port', process.env.PORT || 5000); 
app.set('view engine', 'ejs'); 
//app.use(bodyParser.json({ check: checkReqSign }));
app.use(express.static('public'));

//verification parameters
const
  APPSEC = (process.env.FBM_APPSEC) ?
  process.env.FBM_APPSEC :
  config.get('appSec'),

  VALTOKEN = (process.env.FBM_VALTOKEN) ?
  process.env.FBM_VALTOKEN :
  config.get('valToken'),

  PAGETOKEN = (process.env.FBM_PAGETOKEN) ?
  process.env.FBM_PAGETOKEN :
  config.get('pageToken'),

  SURL = (process.env.FBM_SURL) ?
  process.env.FBM_SURL :
  config.get('sURL');