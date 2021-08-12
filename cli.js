#!/usr/bin/env node
import meow from 'meow';
import {fileUtiSync} from 'file-uti';

const cli = meow(`
	Example
	  $ uti unicorn.md
	  net.daringfireball.markdown
`, {
	importMeta: import.meta,
});

console.log(fileUtiSync(cli.input[0]));
