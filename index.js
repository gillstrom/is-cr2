'use strict';
module.exports = function (buf) {
	if (!buf || buf.length < 6) {
		return false;
	}

	return buf[0] === 0x49 && buf[1] === 0x49 && buf[2] === 0x2a && buf[3] === 0x0 && buf[4] === 0x10 && buf[5] === 0x0;
};
