const Discord = require("discord.js")
const bot = new Discord.Client();
const embed = new Discord.RichEmbed()

const fs = require("fs");
let prefix = ("aw")

const commands = new Map();
const pmCommands = new Map();
fs.readdir(`./Commands/Public`, (err, files) => {
  if(err) {
    console.error(err)
  } else {
    files.forEach(file => {
     let command = require(`./Commands/Public/${file}`)
     commands.set(command.help.name, command)
   })
  }
})


bot.login(ur token here lol)

bot.on("ready",() => {

bot.user.setActivity(`${bot.guilds.size} servers | awhelp`, { type: 'WATCHING' });
  bot.user.setStatus('dnd')
console.log(`hey this bot is online: ${bot.user.tag}`)
})

bot.on("message", (msg) => {
    const dmchannel = bot.channels.find("name", "messages");
    const dmEmbed = new Discord.RichEmbed()
    .setTitle(`New DM!`)
    .setDescription(`It's from ${msg.author.username}#${msg.author.discriminator}. Their ID is: ${msg.author.id}`)
    .addField(`Message Content`, `${msg.content}`)
    .setColor(0x00ff00)
    .setFooter(`DM's are interesting...`)
    dmchannel.send(dmEmbed)
    }
});

bot.on("guildCreate", guild => {
  const guildchannel = bot.channels.find("name", "servers")
const newguildembed = new Discord.RichEmbed()
  .setColor(0x00ff00)
  .setTitle("New Guild!")
  .setThumbnail(`${guild.iconURL}`)
  .setDescription(`Guild name: ${guild.name}`)
  .addField("Total Guilds: ", `${bot.guilds.size}`)
  .addField("Guild's ID:", `${guild.id}`)
  .addField("Total Users: ", `${guild.memberCount}`)
  .addField("Guild created on:", `${guild.createdAt}`)
  .addField("Is the guild large? (250+ users)", `${guild.large}`)
  .addField("Owner's ID: ", `${guild.ownerID}`)
  .addField("Guild region: ", `${guild.region}`)

  guildchannel.send(newguildembed)
});

  bot.on("guildDelete", guild => {
    const guildchannel = bot.channels.find("name", "servers")
  const lostguildembed = new Discord.RichEmbed()
  .setColor(0xff0000)
  .setTitle("Lost a Guild...")
  .setDescription(`Guild name: ${guild.name}`)
  .addField("Total Guilds: ", `${bot.guilds.size}`)
  .addField("Guild's ID:", `${guild.id}`)
  .setThumbnail(`${guild.iconURL}`)

  guildchannel.send(lostguildembed)
  });

bot.on("message", (msg) => {
  if(msg.author.bot || !msg.content.startsWith(prefix)) {
    return;
  }
  if(msg.guild)
  var command = msg.content.split(" ")[0].slice(prefix.length).toLowerCase()
  var args = msg.content.split(" ").slice(1);
  var cmd = commands.get(command)
  if(cmd) {
    try {
      cmd.run(bot, msg, args)
    } catch(err) {
      console.error(err)
      msg.channel.send("Aw heck! There's an error. If it continues please use the `awsuggest` command to report it. https://cdn3.bigcommerce.com/s-nq6l4syi/products/16517/images/21038/71882-1024__10025.1516616292.500.659.jpg?c=2")
    }
  }
})
