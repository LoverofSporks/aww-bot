const Discord = require("discord.js");
const superagent = require("superagent");
module.exports = {
  run: async (bot, config, msg, args) => {
  let member = msg.mentions.members.first();

  let {body} = await (superagent)
  .get(`https://nekos.life/api/v2/img/hug`);

  let nopingEmbed = new Discord.RichEmbed()
  .setColor(0xffb6c1)
  .setTitle("Hugs!")
  .setDescription(`${bot.user} hugged ${msg.author}`)
  .setImage(body.url)

  if(!member) return msg.channel.send(nopingEmbed);

  let pingEmbed = new Discord.RichEmbed()
  .setColor(0xffb6c1)
  .setTitle("Hugs!")
  .setDescription(`${msg.author} hugged ${member}`)
  .setImage(body.url)
  msg.channel.send(pingEmbed)

  },
    help: {
      name: "hug",
      description: "Hug a user! or yourself, if you're lonely.",
      usage: "hug"
    },
    config: {}
}
