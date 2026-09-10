// ===================================================
// Techno4 Framework 2 - Threads Studio
// Supported and distributed by CO «CF TECHNO4»
// Licensed under GNU LGPL-3.0-or-later. Original components under MIT License.
// ===================================================

require('techno4-total');

function start(options = {}) {
	const opt = Object.assign({}, options);
	if (opt.port == null && process.argv[2] && (/^\d+$/).test(process.argv[2]))
		opt.port = parseInt(process.argv[2]);
	if (!opt.port)
		opt.port = 8000;
	opt.release = opt.release || process.argv.includes('--release');
	opt.servicemode = opt.servicemode || process.argv.includes('--service') || process.argv.includes('--servicemode');

	F.run(opt);
	return F;
}

function stop() {
	if (global.F && F.server) {
		try {
			F.server.close();
		} catch {}
	}
}

module.exports = {
	start,
	stop
};

// Direct execution
if (require.main === module) {
	start();
}