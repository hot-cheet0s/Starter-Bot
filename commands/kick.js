module.exports = {
    name: 'kick',
    description: 'kicks the user',
 execute(message, args) {

 
    const member = message.mentions.users.first();
    if (member) {
        const memberTarger = message.guild.members.cache.get(member.id);
        memberTarger.kick();
        message.channel.send(" User has been kicked")

    } else {
        message.channel.send('Tag the user you want to kick dumbo!')
    }
    if (member) {



    }

            
        
 }
}