const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'HELP_ADMINS',

    execute(message, args) {

        if(message.member.roles.cache.has('805660954703429662')) {
                   
            const emb = new MessageEmbed()
            .setTitle('Admins command')
            .setDescription(`Commands
                             --------
                             >ban **(bans the user)**
                             >kick **(kicks the user)**
                             >mute **(mutes the user)**
                             >slowmode **(Set slowmode to the chat)**

                             *** More coming soon ***`)
           .setColor(0xa905f0)

           message.channel.send(emb);

        
        
                
        }
    }
}