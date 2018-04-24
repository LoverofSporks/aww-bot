module.exports = {
  run: (bot, msg, args) => {
    const Discord = require("discord.js")
let changesEmbed = new Discord.RichEmbed()
.setColor(0x00ff00)
.setTitle("New Update!")
.setDescription("Update 1.0.3")
.addField("More Breeds:", `Lots more breeds have been added to the breed command. To see full list [click me](https://hastebin.com/olasemodey.pas)`)
.setThumbnail("https://cdn.glitch.com/1db372e8-3f7d-4e5d-b11b-4f11354590d6%2Fdownload.png?1524114276746")
msg.channel.send(changesEmbed)
      .catch(err => msg.channel.send(`Aw heck, there's an error. If it continues please use 'awsuggest' and say the error: \`${err.body}\``));
    },
      help: {
        name: "changes",
        description: "Show's the lastest changes.",
        usage: "changes"
      },
      config: {}
  }
