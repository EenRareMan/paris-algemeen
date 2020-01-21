const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var Icon =  message.author.displayAvatarURL

    var userEmbed = new discord.RichEmbed()
        .setDescription(`${message.author}, hier is je informatie.`)
        .setColor("#ee0000")
        .setThumbnail(Icon)
        .addField("Je discord naam", message.author.username)
        .addField("Je bent gejoind op", message.member.joinedAt);

        return message.channel.send(userEmbed);

}

module.exports.help = {
    name: "user-info",
    description: "Heb je een idee. Zet het dan hier en misschien passen we het toe."
}