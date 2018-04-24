module.exports = {
  run: (bot, msg, args) => {
    const Discord = require("discord.js")
    const embed = new Discord.RichEmbed()
    .setColor(0x00ff00)
    .setTitle("Upvote the bot on Discord Bot List!")
    .setDescription("[Click me to upvote!](https://discordbots.org/bot/419280710805880833/vote)")
    .setFooter("Upvoting the bot really helps, and thanks to anyone who has upvoted.")
    msg.channel.send(embed)
      .catch(err => msg.channel.send(`Aw heck, there's an error. If it continues please use 'awsuggest' and say the error: \`${err.body}\``));
    },
      help: {
        name: "upvote",
        description: "Gives you an invite to the bot.",
        usage: "upvote"
      },
      config: {}
  }
