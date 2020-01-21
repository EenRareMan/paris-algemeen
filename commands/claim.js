const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

 return message.channel.send(`> De ticket is geclaimd door ${message.author.username}!`).then(message.delete);

}

module.exports.help = {
    name: "claim",
    description: "claim een ticket"
}
