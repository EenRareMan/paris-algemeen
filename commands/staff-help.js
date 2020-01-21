const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Jij kan dit niet doen.");

    return message.author.send("**Staff commands** \n \n -aflssen - las een training af \n -ban - ban een gebruiker \n -claim - claim een ticket \n -clear - doe een aantal weg \n -kick - kick een gebruiker \n -spolice - krijg de vragen van de politie sollicitatie \n -staff-help - krijg dit menu \n -staffwarn - geef staff een warn (beschikbaar van OC) \n -training1 - plan een ambulance training in \n -training2 - plan een RAID training in \n -training3 - plan een pompier training in \n -training4 - plan een police training in \n -unstaffwarn - unstaffwarn een staff (beschikbaar van OC) -unwarn - unwarn een gebruiker (beschikbaar van OC) \n -warn - warn een grbuiker (beschikbaar van OC)").then(message.delete);

}

module.exports.help = {
    name: "staff-help",
    description: ""
}