const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const path = require("path");
const os = require("os");
const fs = require('fs');
const { packageDirectory } = require('pkg-dir')
const cfgpath = path.join(os.homedir(),'.age_bot','config.json')
const serverdbpath = path.join(os.homedir(), '.age_bot', 'serverdb.json')
const cfg = require(cfgpath)
const serverdb = require(serverdbpath)
const commands = [];
const commandFiles = fs.readdirSync('./bot/commands').filter(file => file.endsWith('.js'));

// Place your client and guild ids here
// do looping on commands for servers here
const clientId = '123456789012345678';
const guildId = '876543210987654321';

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
