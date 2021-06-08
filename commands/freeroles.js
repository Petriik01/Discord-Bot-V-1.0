module.exports = {
    name: 'givemerole',
    description: "Give free role to member",
    execute(message, args){
        
        

        if(message.member.roles.cache.some(r => r.name === "Green member :)")){
            message.channel.send('You already have this role.');
 
        } else {
            message.channel.send('You got a new role! :)');
            message.member.roles.add('role id').catch(console.error);
        }
    }
}
