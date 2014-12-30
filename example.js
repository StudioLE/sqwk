sqwk = require('./index')

// Send a title block to the console
sqwk.send([
	'{hr}',
	['{cyan}', 'Squawk', '- Enhanced console output'],
	'{hr}',
	['{magenta}', 'Default file name:', 'index.js'],
	['{magenta}', 'Export directory:', 'path/to/export'],
	['{magenta}', 'Export format:', 'txt'],
	'{hr}'
])

// Store a single line
sqwk.log('A single line');

// Store an array of lines
sqwk.log([
	'This line is contained in an array',
	'So is this one',
	sqwk.hr()
]);

// Send all the logged lines to the console
sqwk.send();

// Join a string by striping with style
sqwk.stripe([
	'These words', 'will be', 'joined', 'with alternating', 'styles'
], 'green');


sqwk.stripe([
	'', 'This is a great way to', 'add emphasis', 'to', 'certain words', 'within a line'
], 'white');

// Send all the logged lines to the console
sqwk.send();

// Send a horizontal rule
sqwk.send('{hr}')

// Send an error
sqwk.error(['Could not locate file', 'not-exist.js'])