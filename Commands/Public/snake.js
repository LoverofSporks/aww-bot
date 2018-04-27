module.exports = {
  run: async (bot, msg, args) => {
    const Discord = require("discord.js")
    let snakeembed = new Discord.RichEmbed()
    .setColor(0x00ff00)
    .setTitle("Here's a snek!")
    .setImage('https://snek.jackz.me/random')
    .setFooter("Who's a good snek?")
    msg.channel.send(snakeembed)
    .catch(err => msg.channel.send(`Aw Heck! There's an error. If it continues please use 'awsuggest' and report the error: ${err.body}`))
        },
      help: {
        name: "snake",
        description: "Uploads a picture of a snake!",
        usage: "snake"
      },
      config: {}
  }
