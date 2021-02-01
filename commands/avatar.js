const { MessageEmbed } = require('discord.js'); 

module.exports = {
    name: 'avatar',
   execute(msg, args) {

    
    
        
        if(msg.mentions.users.size){
            let member=msg.mentions.users.first()
        if(member){
            const emb=new MessageEmbed().setImage(member.displayAvatarURL()).setTitle(member.username)
            msg.channel.send(emb)
            
        }
        else{
            msg.channel.send("Sorry none found with that name")

        }
        }else{
            const emb= new MessageEmbed().setImage(msg.author.displayAvatarURL()).setTitle(msg.author.username)
            msg.channel.send(emb)
        }
}

   
}