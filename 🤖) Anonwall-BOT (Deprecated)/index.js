const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
// const Discord = require('discord.js');
const config = require('./resources/config.json')

client.on('ready', () => {
    console.log("✔ El bot está listo para ser usado.");
    client.user.setPresence({
        game: {
            name: "StellarSquad Community",
            type: "WATCHING"
        }
    })
});

client.on("message", (message) => {

    if (message.content === "prueba"){
        var date = new Date();
        var horas = date.getHours();
        var minutos = date.getMinutes();
        return message.channel.send("Tiempo actual: "+horas+":"+minutos);
    }
    if (message.content === "help"){
        return message.channel.send("Si necesitas ayuda contacta con el dueño: Tyranzx#0296");
    }
});

client.login(config.TOKEN); 
