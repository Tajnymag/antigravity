const { platform } = require('os');
const { execFileSync } = require('child_process');

class Webbrowser {
	constructor() {
		this.platform = platform();
	}
	linuxOpen(url) {
		try {
			execFileSync('xdg-open', ['https://xkcd.com/']);
		} catch (err) {
			
		}
	}
}

module.exports = Webbrowser;
