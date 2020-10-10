const chalk = require('chalk')
const yargs = require('yargs')
yargs.version('1.1.2')

const c = new chalk.Instance({ level: 3 })

yargs.command({
  command: 'add',
  describe: 'Add new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    console.log(c.bold('Adding new note:'), argv.title, 'with body:', argv.body)
  }
})

yargs.command({
  command: 'remove',
  describe: 'Remove note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    console.log(c.bold('Removing new note:'), argv.title)
  }
})

yargs.command({
  command: 'list',
  describe: 'List all notes',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    console.log(c.bold('Listing all notes'), argv.title)
  }
})

yargs.command({
  command: 'read',
  describe: 'Read note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    console.log(c.bold('Reading note'), argv.title)
  }
})

yargs.parse()
