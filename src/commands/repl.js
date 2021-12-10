const {Command, flags} = require('@oclif/command')
class ReplCommand extends Command {
  async run() {
    const repl = require('repl');
    repl.start({"prompt": '> ', "useColors": true, "ignoreUndefined": true}).context.m = 'message';
  }
}

ReplCommand.description = `Open Repl for bot
...
Only needs to be used when commands are updated/added/removed from the bot.
`

ReplCommand.flags = {
}

module.exports = ReplCommand
