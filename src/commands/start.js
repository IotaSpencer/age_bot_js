const {Command, flags} = require('@oclif/command')
const os = require('os')
const pro = require(`/home/${os.userInfo().username}/age_bot_js/src/bot`)
class StartCommand extends Command {
  async run() {
    pro
  }
}

StartCommand.description = `Start the bot
...
Extra documentation goes here
`

StartCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = StartCommand
