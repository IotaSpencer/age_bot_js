// Require required discord.js classes
const {Client, Intents} = require('discord.js');
const {token} = require('~/.age_bot/config.json');

// Create the client
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MESSAGES]});

// When the client is ready, run this (only once)
client.once('ready', () => {
  console.log('Ready!');
});

// Login to discord
client.login(token);
