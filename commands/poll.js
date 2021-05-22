module.exports = {
    name: "poll",
    async execute(Discord,client,message,args) {
        const channel1 = client.channels.cache.find(channel => channel.id === '813472412091154522')
        if(!args[1]) {
            return message.reply('Please provide the vote details!')
        } else {
            const voteDetails = args.slice(1).join(" ");
            const embed = new Discord.MessageEmbed()
            .setTitle('New Poll!')
            .setDescription(voteDetails)
            const msgEmbed = await channel1.send(embed)
            msgEmbed.react('✅')
            msgEmbed.react('❌')
        }
    }
}