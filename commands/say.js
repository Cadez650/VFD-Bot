
const cooldown = new Set()
module.exports = {
    name: "say",
    async execute(client, message, args, Discord, config) {
        if (cooldown.has(message.author.id)) {
            message.reply('Please wait 5 seconds before using this command again!')
        }
        setTimeout(() => {
            cooldown.delete(message.author.id)
        }, 5000);
        if (cooldown.has(message.author.id)) return
        let say = args.slice(1).join(" ");
        message.channel.send(say)
        cooldown.add(message.author.id)
    }
}