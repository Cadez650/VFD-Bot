
module.exports = {
    name: "unban",
    async execute(client, message, args, Discord) {
            let user = args[1]
            if (!user) return message.reply('specifiy an user!')
            try {
                member = await client.users.fetch(args[0])
            } catch (e) {
                console.log(e)
                return message.channel.send('Not a valid user!').then(m => m.delete({ timeout: 5000 }));
            }
            if (user) {
                message.guild.members.unban(user.user.id, reason).then(() => message.channel.send(embed))
        }
    }
}