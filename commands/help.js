const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    execute(message, args) {

        const embed = new MessageEmbed()
         .setTitle('Help')
         .setDescription(`CMD 1 : BLA BLA 
                          CMD 2 : OL OL 
                          CMD 3 : aaaaa`)
         .setColor(0xa905f0)
    
      message.channel.send(embed);
    
        }
}