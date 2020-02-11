const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // ID van de categorie van de tickets.
    const categoryId = "676850444257198110";

    // ID van de roles
    // var roleID = message.guild.roleId;

    var role = message.guild.roles.find(r => r.name == "Support");


    // Verkrijg Gebruikersnaam
    var userName = message.author.username;
    // Verkrijg discriminator
    var userDiscriminator = message.author.discriminator;

    // Als ticket al gemaakt is
    var bool = false;

    // Kijk na als ticket al gemaakt is.
    message.guild.channels.forEach((channel) => {

        // Als ticket is gemaakt, zend bericht.
        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {

            message.channel.send("Je hebt al een ticket aangemaakt");

            bool = true;

        }

    });

    // Als ticket return code.
    if (bool == true) return;

    var embedCreateTicket = new discord.RichEmbed()
        .setTitle("Hoi, " + message.author.username)
        .setFooter("Je ticket wordt aangemaakt.");

    message.channel.send(embedCreateTicket);

    // Maak kanaal en zet in juiste categorie.
    message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => { // Maak kanaal

        createdChan.setParent(categoryId).then((settedParent) => { // Zet kanaal in category.

            // Zet perms voor iedereen
            settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
            // Zet perms voor de gebruiker die ticket heeft aangemaakt.
            settedParent.overwritePermissions(message.author, {

                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": true, "ADD_REACTIONS": true

            })

            settedParent.overwritePermissions(message.guild.roles.find('name', "Support"), {

                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": true, "ADD_REACTIONS": true
            });

            settedParent.overwritePermissions(message.guild.roles.find('name', "OC ||Réalisateur"), {

                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": true, "ADD_REACTIONS": true
            });

            var embedParent = new discord.RichEmbed()
                .setTitle("Hoi, " + message.author.username.toString())
                .setDescription("Dit is jouw ticket hier kan je jouw vraag/bericht inzetten. \n Het support team helpt je zo snel mogelijk.")
                .setFooter("Support service Paris.");

            settedParent.send(embedParent);
            
        }).catch(error => {
            message.channel.send("Er is iets fout gelopen.");
        });

    }).catch(error => {
        message.channel.send("Er is iets fout gelopen.");
    });

}
module.exports.help = {
    name: "new"
}
