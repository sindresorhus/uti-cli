#!/usr/bin/env node
'use strict';
const meow = require('meow');
const fileUti = require('file-uti');

const cli = meow(`
	Example
	  $ uti unicorn.jpg
	  net.daringfireball.markdown
`);

console.log(fileUti.sync(cli.input[0]));
