module.exports = {
    name: "offline",
   async execute(message,client) {
    const channel1 = client.channels.cache.find(channel => channel.id === '813479337872326687')
    channel1.send('Bot is offline for the night due to @Cadez#4524 not having server hosting.')
    }
}