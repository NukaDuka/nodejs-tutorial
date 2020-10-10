const _chalk = require('chalk');
const chalk = new _chalk.Instance({level: 3});

console.log(chalk.bold.keyword('lime').underline('Success!!'))
