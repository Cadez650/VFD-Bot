module.exports = {
    name: "grade", 
    async execute(client, message, args, Discord, config, name1, exam, score, notes, passorfail) {
        const channel1 = client.channels.cache.find(channel => channel.id === '798276514071838820')
    const embed = new Discord.MessageEmbed()
    .setTitle("Exam Results")
    .setDescription(`
    Name: ${name1}
    Exam: ${exam}
    Pass/Fail: ${passorfail}
    Score: ${score}
    Notes: ${notes}
    `)
        channel1.send(embed)
    }
}