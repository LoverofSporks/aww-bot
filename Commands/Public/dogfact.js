module.exports = {
  run: async (bot, msg, args) => {
    const Discord = require("discord.js")
    const superagent = require("superagent")
    let {body} = await (superagent)
    .get(`https://dog-api.kinduff.com/api/facts`);

    let dogfactEmbed = new Discord.RichEmbed()
    .setColor(0x00ff00)
    .setTitle("Dog Fact:")
    .setDescription(body.facts)
    .setFooter("Interesting, isn't it...")
    .setThumbnail("http://www.dogster.com/wp-content/uploads/2018/01/A-dog-looking-confused-and-surprised.jpg")
    msg.channel.send(dogfactEmbed)
      .catch(err => msg.channel.send(`Aw heck, there's an error. If it continues please use 'awsuggest' and say the error: \`${err.body}\``));
        },
      help: {
        name: "dogfact",
        description: "Gives a fact about a dog!",
        usage: "dogfact"
      },
      config: {}
  }
