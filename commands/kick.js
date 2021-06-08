module.exports = {
    name: 'kick',
    description: "kick command",
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send("Člen byl vyhozen!")
        }else{
            message.channel.send('SYNTAX: !kick <user>');
        }
    }
}