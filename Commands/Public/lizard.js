const Discord = require("discord.js");
const superagent = require("superagent");
module.exports = {
  run: async (bot, msg, args) => {

  let {body} = await (superagent)
  .get(`http://nekos.life/api/v2/img/lizard`);

  let lizardembed = new Discord.RichEmbed()
  .setColor(0x00ff00)
  .setTitle("Here's a lizard!")
  .setImage(body.url)
  .setFooter("Who's a good lizard?")
  msg.channel.send(lizardembed)
      .catch(err => msg.channel.send(`Aw heck, there's an error. If it continues please use 'awsuggest' and say the error: \`${err.body}\``));
  },
    help: {
      name: "lizard",
      description: "Uploads a picture of a lizard!",
      usage: "lizard"
    },
    config: {}
}
