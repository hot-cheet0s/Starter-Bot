const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'swear',

 execute(message, args) {

    const emb = new MessageEmbed()
      .setImage('https://cdn.discordapp.com/attachments/694385797306253363/805752160516046928/1j4f2q.png')
      .setDescription('** No swearing **') 
      .setColor("RANDOM")

      message.channel.send(emb);

 }
}