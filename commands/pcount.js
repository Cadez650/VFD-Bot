
module.exports = {
    name: "pcount",
    async execute(client, message, args, Discord, noblox, placeInfo) {
        let equation = placeInfo.OnlineCount + 1
        const msg = placeInfo.OnlineCount + ` are playing ${placeInfo.Name} join now to make it ` + equation
        const embed = new Discord.MessageEmbed()
        .setTitle(`${placeInfo.Name}`)
        .setColor()
        .setDescription(`${placeInfo.OnlineCount} playing. Join now to make it ${equation}!`)
        .setFooter(`Reqeusted by ${message.author.tag}`)
        .setURL(placeInfo.Url)
        message.channel.send(embed)
    }
}