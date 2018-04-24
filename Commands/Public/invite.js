module.exports = {
  run: (bot, msg, args) => {
    const Discord = require("discord.js")
    const embed = new Discord.RichEmbed()
    .setColor(0x00ff00)
    .setTitle("Invite!")
    .setDescription("[Invite the bot here.](https://discordapp.com/oauth2/authorize?client_id=419280710805880833&scope=bot&permissions=314432)")
    .setFooter("If you come across any errors, please use the 'awsuggest' command to tell me.")
    msg.channel.send(embed)
      .catch(err => msg.channel.send(`Aw heck, there's an error. If it continues please use 'awsuggest' and say the error: \`${err.body}\``));
    },
      help: {
        name: "invite",
        description: "Gives you an invite to the bot.",
        usage: "invite"
      },
      config: {}
  }
