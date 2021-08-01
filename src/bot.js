require("dotenv").config();  // this will load the .env file 

const {Client} = require('discord.js');

const client = new Client();

client.on('message', (message) =>{
console.log(`[${message.author.tag}]:${message.content} `);     // It will log the msg our                      // Discord.js DOC
const reply = message.content.toLowerCase();

if(reply == "hello"){
    message.reply("Hello! Nice to meet you");
}
})


client.login(process.env.TOKEN); // to start the bot

