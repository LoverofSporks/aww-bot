const Discord = require("discord.js");
const superagent = require("superagent");
module.exports = {
  run: async (bot, msg, args) => {

  let {body} = await (superagent)
  .get(`https://randomfox.ca/floof/`);

  let foxembed = new Discord.RichEmbed()
  .setColor(0x00ff00)
  .setTitle("Here's a fox!")
  .setImage(body.image)
  .setFooter("Who's a good fox?")
  msg.channel.send(foxembed)
      .catch(err => msg.channel.send(`Aw heck, there's an error. If it continues please use 'awsuggest' and say the error: \`${err.body}\``));
  },
    help: {
      name: "fox",
      description: "Uploads a picture of a fox!",
      usage: "fox"
    },
    config: {}
}
