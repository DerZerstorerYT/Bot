const { RichEmbed } = require("discord.js");



module.exports = {

    name: "help",

    category: "info",

    description: "Returns latency and API ping",

    run: async (client, message, args) => {



        const embed = new RichEmbed()

        .setTitle("Server Commands")

        .setDescription("Hier siehst du alle Commands")

        .setColor("#000000")

        .addField("/ping", "Zeigt dir den aktuellen Ping")

        .addField("/help", "Zeigt dir diese Nachricht")

        .addField("/report <@name> <reason>", "Reportet einen Spieler")




        .setFooter("Programmier by DerZerstorerYT");

    message.channel.send(embed);
    

    }

}