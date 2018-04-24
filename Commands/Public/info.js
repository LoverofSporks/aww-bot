module.exports = {
  run: (bot, msg, args) => {
    const Discord = require("discord.js")
    const embed = new Discord.RichEmbed()
    .setColor(0x0095ff)
    .setTitle("Aww Bot's info.")
    .setDescription("Prefix: `aw`")
    .setColor("#0095ff")
    .setThumbnail(`${bot.user.avatarURL}`)  
    .addField("Language", "Discord.js")
    .addField("Developer:", `LoverofSporks#9967`)
    .addField("Total Guilds: ", `${bot.guilds.size}`)
    .addField("Best bot:", `${bot.user.username}`)
    msg.channel.send(embed)
      .catch(err => msg.channel.send(`Aw heck, there's an error. If it continues please use 'awsuggest' and say the error: \`${err.body}\``));
      },
      help: {
        name: "info",
        description: "Shows information about the bot.",
        usage:"info"
      },
      config: {}
  }
