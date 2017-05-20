// chihiro-bot source code

'use strict';

const
  express = require('express'),
  bodyParser = require('body-parser'),
  request = require('request'),
  config = require('config');

let app = express();

const trick = 4;
const placeholder = (trick==config.get('aS')) ?
  true :
  false;

console.log(placeholder)