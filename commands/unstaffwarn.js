const discord = require("discord.js");
const fs = require("fs");

const warns = JSON.parse(fs.readFileSync("./staffwarnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

    // !warn gebruiker uqdsqusduqgufgus fggqysfgyq

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Jij kan dit niet doen");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!user) return message.channel.send("Geef een gebruiker op of de gebruiker is niet op deze server");

   //  if (user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Deze persoon kan je niet warnen");

    var reason = args.join(" ").slice(22);

    if (!reason) return message.channel.send("Geef een redenen op.");

    if (!warns[user.id]) warns[user.id] = {
        warns: 0
    };

    warns[user.id].warns--;

    fs.writeFile("./staffwarnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

    var warnEmbed = new discord.RichEmbed()
        .setDescription("**unstaffwarn**")
        .setColor("ee0000")
        .addField("unwarned gebruiker", user)
        .addField("Geunwarned door", message.author)
        .addField("Aantal staffwarns", warns[user.id].warns)
        .addField("Reden", reason);

    var warnChannel = message.guild.channels.find(`name`, "staff-waarschuwingen");
    if (!warnChannel) return message.guild.send("Kan het kanaal niet vinden");

    warnChannel.send(warnEmbed);

    message.delete;
}

module.exports.help = {
    name: "unstaffwarn",
    description: "Geef iemand een staffwarn"
}