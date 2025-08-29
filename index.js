import dotenv from 'dotenv'
dotenv.config();
import { Client, Events, GatewayIntentBits, Message }  from 'discord.js';
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
client.on('interactionCreate',interatction=>{
    console.log(interatction);
    interatction.reply({
        content:"Pong"
    });
    
})
client.login(process.env.TOKEN);
