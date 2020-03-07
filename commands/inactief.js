const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Jij kan dit niet doen.");

    var splitser = "//";

    if (args[0] == null) {

        var useMessage = new discord.RichEmbed()
            .setTitle("**Gebruik**")
            .setColor("#00ee00")
            .setDescription(`Maak een inactiefheid door gebruik te maken van: \n -inactief van ${splitser} tot ${splitser} reden`);

        return message.channel.send(useMessage);

    }

    args = args.join(" ").split(splitser);

    var options = {

        van: args[0] || "Niet gegeven",
        tot: args[1] || "Niet gegeven",
        reden: args[2] || "Niet gegeven"

    }

    var inactiefer = message.author;

    var inactiefEmbed = new discord.RichEmbed()
        .setTitle("Inactief")
        .setColor("#00ee00")
        .setDescription(`Naam: ${inactiefer} \n Van: ${options.van} \n Tot: ${options.tot} \n Reden: ${options.reden}`);

    var inactiefChannel = message.guild.channels.find(`name`, "inactief");
    if(!inactiefChannel) return; 

    inactiefChannel.send(inactiefEmbed);


}

module.exports.help = {
    name: "inactief",
    description: "Maak je inactief."
}