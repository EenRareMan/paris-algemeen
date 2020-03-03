const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const discord = require("discord.js");
 
    module.exports.run = async (bot, message, args) => {
     
        // Vang het idee op.
        var bug = args.join(" ");
     
        // Kijk na als er een idee is meegegeven.
        if (!bug) return message.channel.send("Geen Idee meegegeven gelieve een idee mee te geven.");
     
        // Maak het embed aan.
        var bugEmbed = new discord.RichEmbed()
            .setTitle("Bug")
            .setColor("#000000")
            .addField("Bug: ", bug)
            .addField("Ingezonden door: ", message.author);
     
        // Vind het kanaal.
        var bugChannel = message.guild.channels.find(`name`, "bugs");
        if (!ideeChannel) return message.guild.send("Kan het kanaal niet vinden");
     
        // Verzend het bericht en voeg er reacties aan toe.
        bugChannel.send(bugEmbed)
        
    };
    
        message.channel.send("> Je bug is toegevoegd, we gaan er naar kijken!");
     
        // Einde.
     
    }
     
    module.exports.help = {
        name: "bug",
        description: "Heb je een bug. Dan nemen we een kijkje naar de bug."
    }
