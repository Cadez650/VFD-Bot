const cooldown = new Set()

module.exports = {
    name: "spam", 
    async execute(client, message, args, Discord, config) {
        if (cooldown.has(message.author.id)) {
            message.reply('Please wait 20 seconds before using this command again!')
        }
        setTimeout(() => {
            cooldown.delete(message.author.id)
        }, 20000);
        if (cooldown.has(message.author.id)) return
        let user = message.mentions.users.first()
    if (args[1]) {
        const WhoToSpam = user.id
        if (args[2]) {
            const msg = args[2]
            message.channel.send("Spamming")
            user.id.send(msg + "| sent by " + message.member.nickname + " in server " + message.guild.name)
            user.id.send(msg + "| sent by " + message.member.nickname + " in server " + message.guild.name)
            user.id.send(msg + "| sent by " + message.member.nickname + " in server " + message.guild.name)
        } else {
            return message.reply('please provide a message to send the user!')
        }
        }
    }
}