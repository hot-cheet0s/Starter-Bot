const Discord = require('discord.js');
const bot = new Discord.Client();

const got = require('got');

const token = ' YOUR BOT_TOKEN ';

const prefix = '>';

const fs = require('fs');

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file =>
    file.endsWith('js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}

bot.on('ready', () => {
    console.log('Nevan Personal Assistant is ON');
    bot.user.setActivity('Nevan');
});

bot.on('message', message => {

    let args = message.content.substring(prefix.length).split(" ");

    if (message.content === 'Hi') {
        message.reply('Bacot');


    }

    if (message.content === 'Nevan') {
        message.channel.send('Apa?');
    }
    if (message.content === '1+1') {
        message.channel.send('2');
    }

    if (message.content === 'fuck') {
        bot.commands.get('swear').execute(message, args);
      
    }

   


    switch (args[0]) {

        case 'Hello':
            message.channel.send('Hello')
            break;
        case 'meme':
            bot.commands.get('meme').execute(message, args);
            break;
        case 'image':
            bot.commands.get('image').execute(message, args);
        break ;
        case 'my-info':
            bot.commands.get('info').execute(message, args);
        break ;
        case 'avatar':
            bot.commands.get('avatar').execute(message, args);
        break ;
        case 'kick':
            bot.commands.get('kick').execute(message, args);
        break ;
        case 'ban':
            bot.commands.get('ban').execute(message, args);
        break ;
        case 'help':
            bot.commands.get('help').execute(message, args);
        break ;
        case 'purge':
            bot.commands.get('purge').execute(message, args);
        break ;
        case 'smile':
            bot.commands.get('smile').execute(message, args);
        break ;
        case 'Help':
            bot.commands.get('Helpers').execute(message, args);
        break ;
        case 'Help-Admin':
            bot.commands.get('HELP_ADMINS').execute(message, args);
        break ;
        case 'Help-Fun':
            bot.commands.get('HELP_FUN').execute(message, args);
        break ;
        case 'DM-ME':
            bot.commands.get('dm').execute(message, args);
            
        break ;
           


    }
})


bot.login(token);
