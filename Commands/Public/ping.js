module.exports = {
  run: (bot, msg, args) => {
    const Discord = require("discord.js");
    msg.channel.send("Pinging bot....").then(function(m) {
    const embed = new Discord.RichEmbed()
    .setColor(0x0000ff)
    .setTitle("Pong! :ping_pong:")
    .addField("Time taken: ", `${m.createdTimestamp - msg.createdTimestamp}ms`)
    .setThumbnail("https://78.media.tumblr.com/be43242341a7be9d50bb2ff8965abf61/tumblr_o1ximcnp1I1qf84u9o1_500.gif")
    .setFooter(`Requested by ${msg.author.username}.`)
    m.edit(embed)
        .catch(err => msg.channel.send(`Aw heck, there's an error. If it continues please use 'awsuggest' and say the error: \`${err.body}\``));
  })
        },
      help: {
        name: "ping",
        description: "Checks the bot's ping.",
        usage: "ping"
      },
      config: {}
  }
