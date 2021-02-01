const { MessageEmbed } = require('discord.js'); 

module.exports = {
    name: 'info',
  execute(msg, args) {

    const embed = new MessageEmbed()
                  .setTitle('User Profile')
                  .addField('Username', msg.author.username)
                  .addField('ID', msg.author.id)
                  .addField('Current Server', msg.guild.name)
                  .setColor(0xF91111)
                  .setThumbnail(msg.author.AvatarURL)
              msg.channel.send(embed); 
            
  }

}

    