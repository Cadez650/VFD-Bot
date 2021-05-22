module.exports = {
    name: "phase",
async execute(client, message, args, Discord, config, num, ping) {
    // const ping = '<@&798259328560791552>'
            if (num) {
            const channel1 = client.channels.cache.find(channel => channel.id === "813492748052070450");
            channel1.send(`A ${ping} is being hosted by ${message.member.nickname} Join here https://www.roblox.com/games/6265088199/VFD-Training-Facility`);
        } else message.reply('PROVIDE A NUM')
    }
}