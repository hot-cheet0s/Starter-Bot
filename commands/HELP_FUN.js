const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'HELP_FUN',

    execute(message, args) {

        const emb = new MessageEmbed()
         .setTitle('FUN COMMANDS')
         .setDescription(`COMMANDS
                          --------
                          >meme ** (Sends funny memes from reddit) **

                          *** more coming soon *** 
                          --------`)

            .setColor(0xa905f0)

            message.channel.send(emb);


    }
}