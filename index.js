'use strict';
module.exports = function (buf) {
	if (!buf || buf.length < 10) {
		return false;
	}

	return buf[8] === 0x43 && buf[9] === 0x52;
};
