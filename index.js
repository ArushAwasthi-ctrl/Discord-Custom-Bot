const dotenv = require('dotenv').config();
const { log } = require('console');
const { Client, Events, GatewayIntentBits, Message } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds , GatewayIntentBits.GuildMessages , GatewayIntentBits.MessageContent] });

client.on('messageCreate', (message)=>{
    console.log(message);
    console.log(message.content);
});
client.on('messageCreate', (message)=>{
    if(message.author.bot)
    {
        return;
    }
    message.reply({
        content:'Hello from bot'
    })
});
client.login(`${process.env.Token}`);
