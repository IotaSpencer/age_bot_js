const fs = require('fs');
const os = require('os');
const path = require('path');
const _ = require('lodash/get');
// Require required discord.js classes
const {Client, Collection, Intents} = require('discord.js');
const cfgpath = path.join(os.homedir(),'.age_bot','config.json')
const cfg = require(cfgpath)
const token = cfg["bot"]["bot_token"]

process.params = require("commandos").parse(process.argv);

// Create the client
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MESSAGES]});
const eventFiles = fs.readdirSync('src/bot/events').filter(file => file.endsWith('.js'));
client.commands = new Collection();
for (const file of eventFiles) {
  const event = require(`./bot/events/${file}`);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

/* old stuff --

const commandFiles = fs.readdirSync('src/bot/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`src/bot/commands/${file}`);
  // Set a new item in the Collection
  // With the key as the command name and the value as the exported module
  client.commands.set(command.data.name, command);
}

-- end of old stuff */
const logger = require(`${__dirname}/logger`).logger;
/* -- new stuff -- */
const glob = require('glob');
logger.debug("CWD="+__dirname+";");
glob("bot/commands/*.js", {}, function (err, theList) {
  logger.debug(`${theList}`)
  if (err) {
    throw err;
  }
  theList.forEach(function (thePath) {
    const command = require(path.join(__dirname, thePath.toString()));
    client.commands.set(command.data.name, command);
    logger.debug("Loaded command: " + command.data.name);
  });
  logger.info("Finished loading " + theList.length + " commands.");
});
/* -- end of new stuff -- */



client.on('ready', () => logger.info('The bot is online'));
client.on('debug', m => logger.debug(m));
client.on('warn', m => logger.warn(m));
client.on('error', m => logger.error(m));
// Login to discord
const pro = client.login(token);
module.exports.pro = pro
