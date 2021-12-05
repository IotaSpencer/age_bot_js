const {Command, flags} = require('@oclif/command')
class ReplCommand extends Command {
  async run() {
    const repl = require('repl');
    const msg = 'message';
    repl.start('> ').context.m = msg;
  }
}

ReplCommand.description = `Deploy Slash(/) commands
...
Only needs to be used when commands are updated/added/removed from the bot.
`

ReplCommand.flags = {
}

module.exports = ReplCommand
