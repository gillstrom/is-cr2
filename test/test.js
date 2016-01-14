import path from 'path';
import readChunk from 'read-chunk';
import test from 'ava';
import m from '../';

test.cb(t => {
	t.plan(2);

	readChunk(path.join(__dirname, 'fixtures/test.CR2'), 0, 10, (err, buf) => {
		t.true(!err, err);
		t.true(m(buf));
		t.end();
	});
});
