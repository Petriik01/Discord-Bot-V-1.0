module.exports = {
    name: 'ban',
    description: "ban member",
        execute(message, args){
            const member = message.mentions.users.first();
            if(member){
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.ban();
                message.channel.send("Člen byl zabanován!")
            }else{
                message.channel.send('SYNTAX: !ban <user>');
            }
    }
}




