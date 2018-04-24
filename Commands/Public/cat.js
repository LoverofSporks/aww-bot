module.exports = {
  run: async (bot, msg, args) => {
    const Discord = require("discord.js")
    const superagent = require("superagent")
    let {body} = await (superagent)
    .get(`https://nekos.life/api/v2/img/meow`);

    let catembed = new Discord.RichEmbed()
    .setColor(0x00ff00)
    .setTitle("Here's a catto!")
    .setImage(body.url)
    .setFooter("Who's a good kitty?")
    msg.channel.send(catembed)
      .catch(err => msg.channel.send(`Aw heck, there's an error. If it continues please use 'awsuggest' and say the error: \`${err.body}\``));
        },
      help: {
        name: "cat",
        description: "Uploads a picture of a cat!",
        usage: "cat"
      },
      config: {}
  }
