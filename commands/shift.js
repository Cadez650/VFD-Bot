module.exports = {
    name: "shift",
    async execute(client, message, args, Discord, config, server) {
        const channel1 = client.channels.cache.find(channel => channel.id === "799333074323636225");
        const ping = '<@&802436214048161822>'
        channel1.send(`${ping} A shift is being hosted by ${message.member.nickname} in server ${server}! JOIN HERE: https://www.roblox.com/games/4764801869/City-of-Vancouver?refPageId=a0a31b16-9468-4788-962e-7b252ad74ade`)
        message.channel.send('Shift has began!')
    }
}