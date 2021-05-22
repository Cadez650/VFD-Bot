module.exports = {
    name: "over",
    async execute(Discord,client,message) {
    const channel1 = client.channels.cache.find(channel => channel.id === '813492748052070450')
        channel1.send('This seisson has concluded!')
        message.channel.send("Message sent!")
    }
}