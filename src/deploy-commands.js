const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const cfgpath = path.join(os.homedir(),'.age_bot','config.json')
const cfg = require(cfgpath)
const path = require("path");
const os = require("os");
const commands = [
  new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
  new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
  new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
]
.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(cfg[0].bot.bot_token);

// todo: add code for server id looping, and update the configs on windows and gems
rest.put(Routes.applicationGuildCommands(cfg[0].bot.bot_id, guildId), { body: commands })
.then(() => console.log('Successfully registered application commands.'))
.catch(console.error);
