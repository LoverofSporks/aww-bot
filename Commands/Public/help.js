module.exports = {
  run: (bot, msg, args) => {
    const Discord = require("discord.js")
    const embed = new Discord.RichEmbed()
    .setColor(0x0000ff)
    .setTitle("Aww Bot's Commands.")
    .setDescription("**Prefix:** `aw`")
    .setThumbnail("https://cdn.discordapp.com/avatars/419280710805880833/056b6c9c14906a932ebc8c8a83278974.png?size=2048")
    .addField("Animal pictures", "dog, cat, lizard, fox, penguin, duck, shibe, breed")
    .addField("Animal facts", "dogfact, catfact")
    .addField("Utility", "upvote, invite, ping, suggest, changes")
    .setFooter("All your aww needs™!")
    msg.channel.send(embed)
      .catch(err => msg.channel.send(`Aw heck, there's an error. If it continues please use 'awsuggest' and say the error: \`${err.body}\``));
    },
      help: {
        name: "help",
        description: "look commands!",
        usage: "help"
      },
      config: {}
  }
