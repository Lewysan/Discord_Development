const config = require('./resources/config.json')
const Discord = require('discord.js')
const client = new Discord.Client(
  { intents : [ "Guilds", "GuildMessages", "GuildMessageTyping", "MessageContent", "DirectMessages" ] }
)
client.on('ready', () => 
  {
    console.log("✔ El bot está listo para ser usado.");
})

client.login(config.TOKEN);
