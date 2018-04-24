const Discord = require("discord.js");
const superagent = require("superagent");
module.exports = {
  run: async (bot, msg, args) => {

  let {body} = await (superagent)
  .get(`https://dog.ceo/api/breeds/image/random`);

  let doggoembed = new Discord.RichEmbed()
  .setColor(0x00ff00)
  .setTitle("Here's a doggo!")
  .setImage(body.message)
  .setFooter("Who's a good boy?")
  msg.channel.send(doggoembed)
      .catch(err => msg.channel.send(`Aw heck, there's an error. If it continues please use 'awsuggest' and say the error: \`${err.body}\``));
  },
    help: {
      name: "dog",
      description: "Uploads a picture of a dog!",
      usage: "dog"
    },
    config: {}
}
