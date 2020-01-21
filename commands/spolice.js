const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Jij kan dit niet doen.");

  return message.channel.send("Sollicitatie HR Police Nederlands \n \n 1. Waarom wil jij bij HR worden? \n 2. Wat is jouw naam? \n 3. Wat is jouw leeftijd? \n 4. Wat is prio 1? \n 5. Wat is prio 2? \n 6. Wat is prio 3? \n 7. BTGV? \n 8. Wat doe je als je collega in gevaar is? \n 9. Wat doe je bij een gijzeling? \n 10. Waarvoor dient het groene licht? \n 11. Waarvoor dient het oranje licht? \n 12. Waarom moeten wij jou aannemen? \n 13. Hoe goed is jouw grammatica? \n 14. Bijzonderheden. (ook als je dyslexie hebt zet het er even bij) \n \n Typ klaar als je klaar bent. \n Graag in 1 tekst antwoorden. \n Veel succes!");                    

}

module.exports.help = {
    name: "spolice",
    description: ""
}