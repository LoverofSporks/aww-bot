module.exports = {
  run: async (bot, msg, args) => {
    const Discord = require("discord.js")
    const superagent = require("superagent")
    let {body} = await (superagent)
    .get(`https://catfact.ninja/fact`);

    let catembed = new Discord.RichEmbed()
    .setColor(0x00ff00)
    .setTitle("Cat Fact:")
    .setDescription(body.fact)
    .setFooter("Interesting, isn't it...")
    .setThumbnail("https://images.pexels.com/photos/54632/cat-animal-eyes-grey-54632.jpeg?auto=compress&cs=tinysrgb&h=350")
    msg.channel.send(catembed)
      .catch(err => msg.channel.send(`Aw heck, there's an error. If it continues please use 'awsuggest' and say the error: \`${err.body}\``));
        },
      help: {
        name: "catfact",
        description: "Gives a fact about a cat!",
        usage: "catfact"
      },
      config: {}
  }
