'use strict';
module.exports = function (buf) {
	if (!buf || buf.length < 10) {
		return false;
	}

	return (buf[0] === 0x49 && buf[1] === 0x49 && buf[2] === 0x2A && buf[3] === 0x0) || (buf[0] === 0x4D && buf[1] === 0x4D && buf[2] === 0x0 && buf[3] === 0x2A) && buf[8] === 0x43 && buf[9] === 0x52;
};
