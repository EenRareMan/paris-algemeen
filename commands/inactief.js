const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Jij kan dit niet doen.");

    var inactiefEmbed = new discord.RichEmbed()
    .setDescription("**Inactief**")
    .addField("Persoon", message.author)
    .addField("Begin datum", args[0])
    .addField("Eind datum", args[1]);

    var inactiefChannel = message.guild.channels.find(`name`, "afmeldingen");
    if (!inactiefChannel) return message.guild.send("Het kanaal is niet gevonden.");

    inactiefChannel.send(inactiefEmbed);


}

module.exports.help = {
    name: "inactief",
    description: ""
}