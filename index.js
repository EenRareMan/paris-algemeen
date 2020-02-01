const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const levelFile = require("./data/levels.json");

const fs = require("fs");

const active = new Map();

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Kon geen files vinden.");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`)
        console.log(`De file ${f} is geladen.`);

        bot.commands.set(fileGet.help.name, fileGet);

    })

});



bot.on("ready", async () => {

    console.log(`${bot.user.username} is online!`)

    bot.user.setActivity("Paris Roleplay", { type: "PLAYING" });

});

bot.on("guildMemberAdd", member => {

    var role = member.guild.roles.find("name", "Burger");
    var role1 = member.guild.roles.find("name", "Verified");
    var role2 = member.guild.roles.find("name", "Mentions Trainingen");

    if (!role) return;

    member.addRole(role);
    member.addRole(role1);
    member.addRole(role2);

    const channelWelkom = member.guild.channels.find("name", "logs");

    if (!channelWelkom) return;

    channelWelkom.send(`${member} is gejoind!`);


});


bot.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);

    var commands = bot.commands.get(command.slice(prefix.length));


    var options = {

        active: active

    }


    if (!message.content.startsWith(prefix)) return;
    if (commands) commands.run(bot, message, arguments, options);


    var randomXp = Math.floor(Math.random(1) * 15) + 1;

    var idUser = message.author.id;

    if (!levelFile[idUser]) {

        levelFile[idUser] = {

            xp: 0,
            level: 0

        }

    }

    levelFile[idUser].xp += randomXp;

    var levelUser = levelFile[idUser].level;
    var xpUser = levelFile[idUser].xp;
    var nextLevelXp = levelUser * 300;

    if (nextLevelXp === 0) nextLevelXp = 100;

    if (xpUser >= nextLevelXp) {

        levelFile[idUser].level += 1;

        fs.writeFile("./data/levels.json", JSON.stringify(levelFile), err => {

            if (err) console.log(err);

        });

        var levelEmde = new discord.RichEmbed()
        .setDescription("**Level hoger**")
        .setColor("#ee0000")
        .addField("Nieuw level:", levelFile[idUser].level);

        message.channel.send(levelEmde);
    }


});


//bot.login(botConfig.token);
bot.login(process.env.token);