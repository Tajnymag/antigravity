const { platform } = require('os');
const { spawnSync } = require('child_process');

class Webbrowser {
	constructor(test_platform = null) {
		this.platform = test_platform || platform();
	}

	open(url) {
		const opening_methods = {
			win32: [
				{ command: 'start', args: [url]},
				{ command: 'explorer', args: [url]}
			],
			linux: [
				{ command: 'xdg-open', args: [url]},
				{ command: 'elinks', args: [url]},
				{ command: 'lynx', args: [url]},
				{ command: 'w3m', args: [url]}
			],
			darwin: [
				{ command: 'open', args: [url]}
			],
			sunos: [
				{ command: 'sdtwebclient', args: [url]},
				{ command: 'elinks', args: [url]},
				{ command: 'lynx', args: [url]},
				{ command: 'w3m', args: [url]}
			]
		};

		switch(this.platform) {
			case 'win32':
				this.tryMethods(opening_methods.win32);
				break;
			case 'linux':
			case 'freebsd':
			case 'openbsd':
			case 'android':
				this.tryMethods(opening_methods.linux);
				break;
			case  'darwin':
				this.tryMethods(opening_methods.darwin);
				break;
			case 'sunos':
				this.tryMethods(opening_methods.sunos);
				break;
			default:
				this.tryMethods(opening_methods.linux);
				break;
		}
	}

	tryMethods(methods) {
		for (let i = 0; i < methods.length; ++i) {
			try {
				const spawned_process = spawnSync(methods[i].command, methods[i].args, {shell: true, stdio: [process.stdin, process.stdout]});
				if (spawned_process.status === 0) {
					return;
				}
			} catch (err) {
				console.error(err);
			}
		}
		console.error('false');
	}
}

module.exports = Webbrowser;
