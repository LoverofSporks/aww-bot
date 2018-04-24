module.exports = {
  run: async (bot, msg, args) => {
    const Discord = require("discord.js")
    const superagent = require("superagent")
    let {body} = await (superagent)
    .get(`https://random-d.uk/api/v1/random?type=jpg`);

    let duckEmbed = new Discord.RichEmbed()
    .setColor(0x00ff00)
    .setTitle("Here's a duck!")
    .setImage(body.url)
    .setFooter(`Who's a good ducky? ${body.message}`)
    msg.channel.send(duckEmbed)
      .catch(err => msg.channel.send(`Aw heck, there's an error. If it continues please use 'awsuggest' and say the error: \`${err.body}\``));
        },
      help: {
        name: "duck",
        description: "Uploads a picture of a duck!",
        usage: "duck"
      },
      config: {}
  }
