'use strict';
var path = require('path');
var readChunk = require('read-chunk');
var test = require('ava');
var isCr2 = require('../');

test(function (t) {
	t.plan(2);

		readChunk(path.join(__dirname, 'fixtures/test.CR2'), 0, 11, function (err, buf) {
		t.assert(!err, err);
		t.assert(isCr2(buf));
	});
});
