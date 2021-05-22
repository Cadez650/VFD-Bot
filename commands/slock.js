module.exports = {
    name: "slock",
    async execute(message,client,Discord) {
        const channel1 = client.channels.cache.find(channel => channel.id === '813492748052070450')
        channel1.send('This seisson has been SLOCKED!')
    }
}