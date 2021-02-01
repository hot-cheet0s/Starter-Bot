module.exports = {
    name: 'ban',
    description: 'bans the user from the guild',
 execute(message, args) {

     const member = message.mentions.users.first();
            if (member) {
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.ban();
                message.channel.send(" User has been banned")

            } else {
                message.channel.send('Tag the user you want to ban dumbo!')
            }
            if (member) {



            
        }

 }

}