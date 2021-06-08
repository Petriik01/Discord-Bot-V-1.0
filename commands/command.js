module.exports = {
    name: 'command',
    description: "Embeds!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        
        .setColor('#FEEB00')
        .setTitle('Rules')
        .setURL('https://youtube.com/')
        .setDescription('Tabulkaaa!')
        .addFields(
            {name: 'Rule 1', value: 'Be nice! :D'},
            {name: 'Rule 2', value: 'Dont spam! :D'},
            {name: 'Rule 3', value: 'Be kind :D'}

        )
        .setImage('https://media.npr.org/assets/img/2015/09/23/ap_836720500193_sq-57a032ff491f37e572cb77216b40d978a6f5fff3-s800-c85.jpg')
        .setFooter('Zkontroluj si, že jsi si přečetl pravidla :)');

        message.channel.send(newEmbed);

    }
}