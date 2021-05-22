module.exports = {
    name: "member",
async execute(client, message, args, Discord, config) {
    message.channel.send(`Watching ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} members.`)
  }
}