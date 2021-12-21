const {Command, flags} = require('@oclif/command')
const os = require('os')
const pro = require(`/home/${os.userInfo().username}/age_bot_js`)
class DeployCommand extends Command {
  async run() {
    pro
  }
}

DeployCommand.description = `Deploy Slash(/) commands
...
Only needs to be used when commands are updated/added/removed from the bot.
`

DeployCommand.flags = {
}

module.exports = DeployCommand
