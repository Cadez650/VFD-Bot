module.exports = {
    name: "restart",
    async execute(client, Discord, message, config) {
    if (message.member.hasPermission('ADMINISTRATOR') || message.member.id === '347930187167563778') {
        message.channel.send('Resetting...')
        .then(msg => client.destroy())
        .then(() => client.login(config.token));
        console.log("RESTARTING BOT....")
      } else {
          message.reply('YOU NEED THE PERMISSION: "ADMINISTRATOR"')
      }
    }
}