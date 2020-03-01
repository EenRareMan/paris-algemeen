const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

 message.author.send("Hier zijn de groepen van Paris Roleplay: \n\n Police: https://www.roblox.com/groups/5477913/Police-de-G-n-ral-FR#!/about \n\n RAID: https://www.roblox.com/groups/5517143/RAID-de-G-n-ral-FR#!/about \n\n Pompiers: https://www.roblox.com/groups/5512434/Pompiers-de-G-n-ral-FR#!/about \n\n Ambulance: https://www.roblox.com/groups/5478101/Ambulance-de-G-n-ral-FR#!/about \n\n Commune: https://www.roblox.com/groups/5473617/Commune-de-Paris#!/about");

}

module.exports.help = {
    name: "groepen",
    description: "Geeft de groepen in DM."
}
