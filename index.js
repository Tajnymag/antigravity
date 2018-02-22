#!/usr/bin/env node

const Webbrowser = require('./webbrowser.js');

const browser = new Webbrowser();
browser.linuxOpen('https://xkcd.com');
