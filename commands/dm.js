const { MessageEmbed } = require("discord.js");
const { execute } = require("./helps");

module.exports = {
    name: 'dm',

    execute(message, args) {

        const emb = new MessageEmbed()
          .setImage('https://cdn.discordapp.com/attachments/694385797306253363/805752160516046928/1j4f2q.png')
          .setDescription('*** I DM YOU ***')

          message.author.send(emb);

    }
}