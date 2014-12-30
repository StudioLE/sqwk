// Node modules
var chalk = require('chalk')

module.exports = {

	/**
	 * The array to store our logs in
	 *
	 * @property logs
	 * @type array
	 * @default []
	 */
	logs: [],
	
	/**
	 * An object of the default styles and their shortcodes
	 *
	 * @property styles
	 * @type Object
	 * @default 
	 */
	styles: {
		'{bold}': 'bold',
		'{dim}': 'dim',
		'{italic}': 'italic',
		'{underline}': 'underline',
		'{inverse}': 'inverse',
		'{hidden}': 'hidden',
		'{strikethrough}': 'strikethrough',

		'{black}': 'black',
		'{red}': 'red',
		'{green}': 'green',
		'{yellow}': 'yellow',
		'{blue}': 'blue',
		'{magenta}': 'magenta',
		'{cyan}': 'cyan',
		'{white}': 'white',
		'{gray}': 'gray',

		'{bgBlack}': 'bgBlack',
		'{bgRed}': 'bgRed',
		'{bgGreen}': 'bgGreen',
		'{bgYellow}': 'bgYellow',
		'{bgBlue}': 'bgBlue',
		'{bgMagenta}': 'bgMagenta',
		'{bgCyan}': 'bgCyan',
		'{bgWhite}': 'bgWhite'
	},

	/**
	 * Add a line or array of lines to the log
	 * 
	 * @method log
	 * @param message {string, array}
	 * @return 
	 */
	log: function(message) {
		if(Array.isArray(message)) {
			for(var i in message) {
				// If an array within an array
				if(Array.isArray(message[i])) {
					this.add_array(message[i])
				}
				else {
					this.add(message[i])
				}
			}
			//this.logs = this.logs.concat(message)
		}
		else {
			this.add(message)
		}
	},

	/**
	 * Return a horizontal rule
	 * 
	 * @method hr
	 * @param num {int} Number of characters in rule
	 * @return {string}
	 */
	hr: function(num) {
		num = 60
		var hr = ''
		for(var i = 0; i < num; i ++) {
			hr = hr + '-'
		}
		return hr
	},

	/*
	 * Parse the message and then add it to the log array
	 * 
	 * @method add
	 * @param message {string}
	 * @return 
	 */
	add: function(message) {
		// @todo Replace this method with searching for a key in an object
		if(message == '<hr>' || message == '{hr}') {
			message = this.hr()
		}
		this.logs.push(message)
	},

	/**
	 * Parse a stripe array and add it to the log
	 * 
	 * @method add_array
	 * @param message {array}
	 * @return 
	 */
	add_array: function(message) {
		// Check to see if the first item in the array is a shortcode for a style
		if(this.styles[message[0]] == undefined) {
			color = 'white'
		}
		else {
			color = this.styles[message.shift()]
		}
		// Run stripe across the remaining elements in the array
		this.stripe(message, color)
	},

	/**
	 * Clear the log array
	 * 
	 * @method clear
	 * @return 
	 */
	clear: function() {
		this.logs = []
	},

	/**
	 * Append message, return and then clear the logs
	 * 
	 * @method return
	 * @param message {string, array}
	 * @return logs
	 */
	return: function(message) {
		if(message) {
			this.ln(message)
		}
		logs = []
		for(var i in this.logs) {
			logs.push(chalk.gray(this.logs[i]))
		}
		this.clear()
		return logs
	},

	/**
	 * Send the logs to the terminal with the appended message then clear logs
	 * 
	 * @method send
	 * @param message {string, array}
	 * @return 
	 */
	send: function(message) {
		logs = this.return(message)
		for(var i in logs) {
			console.log(logs[i])
		}
	},

	/**
	 * Apply alternate colours to each item in an array before joining them together and adding to the log
	 * 
	 * @method stripe
	 * @param message {string, array} The message to stripe
	 * @return 
	 */
	stripe: function(message, style) {
		// If the message is an array join with a zebra color effect
		// red grey red grey etc
		if(Array.isArray(message)) {
			for(var i in message) {
				if(i % 2 == 0) {
					message[i] = chalk[style](message[i])
				}
			}
			message = message.join(' ')
		}
		else {
			message = chalk[style](message)
		}
		this.ln(message)
	},

	/**
	 * Send an error to the console
	 * 
	 * @method error
	 * @param message {string, array} The error message
	 * @param exit {boolean} Exit the program?
	 * @return 
	 */
	error: function(message, exit) {
		this.stripe(message, 'red')
		this.send()
		if(exit) process.exit()
	},

	/**
	 * Deprecated. Wrapper for log method
	 * 
	 * @method ln
	 * @param message {string, array}
	 * @return 
	 */
	ln: function(message) {
		return this.log(message)
	},

	/**
	 * Deprecated. Wrapper for stripe method
	 * 
	 * @method zebra
	 * @param message {string, array} The message to stripe
	 * @return 
	 */
	zebra: function(message, style) {
		return this.stripe(message, style)
	}

}