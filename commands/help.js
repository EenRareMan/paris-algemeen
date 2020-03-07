const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var commandsList = [];
 
    bot.commands.forEach(command => {
 
        var item = {
 
            name: command.help.name,
            description: command.help.description,
            // category: command.help.category
 
        }
 
        commandsList.push(item);
 
    });
 
    // console.log(commandsList);
 
    var prefix = botConfig.prefix;
    var response = "";
 
    for (var i = 0; i < commandsList.length; i++) {
 
        response += `${prefix}${commandsList[i]["name"]} - ${commandsList[i]["description"]} \r\n`;
 
    }
 
    message.author.send(response).then(() => {
 
        message.channel.send("Al de commando's staan in je privé berichten! :mailbox_with_mail:");
 
    }).catch(() => {
 
        message.channel.send("Je privé berichten staan uit geschakeld, je hebt geen hulp ontvangen");
 
    });

}

module.exports.help = {
    name: "help",
    description: "Krijg dit menu."
}
