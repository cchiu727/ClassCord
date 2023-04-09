// Discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
// get token from config.js
const { token } = require('../config.json');

// create new client instance
const client = new Client({ intents: [GatweayIntentBits.Guilds] });

// log when client is ready
client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with client token
client.login(token);