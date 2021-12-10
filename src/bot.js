const fs = require('fs');
const os = require('os');
const path = require('path');
const _ = require('lodash/get');

// Require required discord.js classes
const {Client, Collection, Intents} = require('discord.js');
const cfgpath = path.join(os.homedir(),'.age_bot','config.json')
const cfg = require(cfgpath)
const token = cfg["bot"]["token"]

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
const commandFiles = fs.readdirSync('src/bot/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`src/bot/commands/${file}`);
  // Set a new item in the Collection
  // With the key as the command name and the value as the exported module
  client.commands.set(command.data.name, command);
}
const logger = require('../src/logger').logger;

client.on('ready', () => logger.info('The bot is online'));
client.on('debug', m => logger.debug(m));
client.on('warn', m => logger.warn(m));
client.on('error', m => logger.error(m));
// Login to discord
const pro = client.login(token);
module.exports.pro = pro
