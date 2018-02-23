#!/usr/bin/env node

const Webbrowser = require('./webbrowser.js');

const browser = new Webbrowser();
browser.open('https://xkcd.com/353/');
