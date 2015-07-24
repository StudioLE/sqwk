// Node modules
var chalk = require('chalk')

/**
 * @exports options
 */
module.exports = {
  /**
   * @var {String} title Title
   */
  title: require('../../../../package.json').name,

  /**
   * @var {Boolean} reset Clear console before each write?
   */
  reset: true,

  /**
   * @var {Object} menu Options passed to terminal-menu
   */
  menu: { width: 70 },

  /**
   * @var {Function} formatTitle A function to format the title
   */
  formatTitle: function() {
    return chalk.bold(this.title + chalk.dim(require('../../../../package.json').version))
  }
}
