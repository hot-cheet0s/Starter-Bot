const { MessageEmbed } = require('discord.js');
const randomPuppy = require('random-puppy');



module.exports = {
    name: 'smile',
    description: 'Sends meme',
   async execute(message, args) {

     const  subReddits = ["MadeMeSmile"];
     const random = subReddits[Math.floor(Math.random() * subReddits.length)];

     const img = await randomPuppy(random);
     
     const embed = new MessageEmbed()
     .setColor('RANDOM')
     .setImage(img)
     .setTitle(`From /r/${random}`)
     .setURL(`https://reddit.com/r/${random}`);

     message.channel.send(embed)

    }

}