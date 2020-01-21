const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Jij kan dit niet doen.");

  return message.channel.send("Sollicitatie RAID Nederlands. \n \n 1. Wat is jouw naam? \n 2. Wat is jouw leeftijd? \n 3. Waarom wil je HR worden? \n 4. Wat is prio 1? \n 5. Wat is prio 2? \n 6. Wat is prio 3? \n 7. Wat doet de RAID allemaal? \n 8. Wat doe je als er een gijzeling is? \n 9. Wat doe je als jouw collega in gevaar is? \n 10. Waarom moeten wij jouw aannemen? \n 11. Bijzonderheden (Ook dyslexie even mededelen). \n\n Graag in 1 tekst antwoorden. \n Typ klaar als je klaar bent. \n Veel succes!!");                    

}

module.exports.help = {
    name: "sRAID",
    description: ""
}