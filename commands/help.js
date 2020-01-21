const botConfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    return message.channel.send("**Commands** \n \n -help - Krijg dit menu \n -play - Speel muziek af \n -leave - laat de bot leaven van het spraakkanaal \n - skip - Skip een liedje \n -queue - Bekijk de wachtlijst van de liedjes \n -report - Report een geruiker \n -suggestie - Dien een idee in \n -ticket - Maak een ticket aan \n -user-info - krijg de info van jou \n -help - krijg dit menu");

}

module.exports.help = {
    name: "help",
    description: "Geeft dit menu"
}