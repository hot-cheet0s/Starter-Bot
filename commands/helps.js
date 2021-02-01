const { MessageEmbed } = require("discord.js")


module.exports = {
    name: 'Helpers',
    execute(message, args) {

        const emb = new MessageEmbed()
          .setTitle('HELPS')
          .setDescription(`Which Help?
                           -----------
                           Admin 
                           Fun
                           Games
                           Rank
                           -----------`)
            .setColor(0xa905f0)
        
            message.channel.send(emb);

    
    }

}
