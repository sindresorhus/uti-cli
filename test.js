import test from 'ava';
import execa from 'execa';

test(async t => {
	const {stdout} = await execa('./cli.js', ['readme.md']);
	t.is(stdout, 'net.daringfireball.markdown');
});
