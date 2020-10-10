const chalk = require('chalk')
const yargs = require('yargs')
yargs.version('1.0.1')

const c = new chalk.Instance({ level: 3 })

yargs.command({
  command: 'add',
  description: 'Add new note',
  handler: function () {
    console.log(c.bold('Adding new note'))
  }
})

yargs.command({
  command: 'remove',
  description: 'Remove note',
  handler: function () {
    console.log(c.bold('Removing new note'))
  }
})

yargs.command({
  command: 'list',
  description: 'List all notes',
  handler: function () {
    console.log(c.bold('Listing all notes'))
  }
})

yargs.command({
  command: 'read',
  description: 'Read note from file',
  handler: function () {
    console.log(c.bold('Reading note from file'))
  }
})
console.log(yargs.argv)
