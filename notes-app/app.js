const getNotes = require('./utils.js');
const validator = require('validator');
const chalk = require('chalk');

const c = new chalk.Instance({level: 3});

console.log(c.keyword('orange').bgKeyword('lime').bold('test'))
console.log(chalk.red.underline.bold(getNotes()));

console.log(chalk.keyword('brown')('test'))
