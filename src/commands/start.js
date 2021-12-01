const {Command, flags} = require('@oclif/command')

class StartCommand extends Command {
  async run() {
    const {flags} = this.parse(StartCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from .\\src\\commands\\hello.js`)
  }
}

StartCommand.description = `Describe the command here
...
Extra documentation goes here
`

StartCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = StartCommand
