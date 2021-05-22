module.exports = {
    name: "8ball",
async execute(client, message, args, Discord, config) {
    let qeustion = message.content.split(`${config.prefix}8ball`).join("")
    if (!qeustion) {
        return message.reply('Ask a qeustion please!')
       }else if (qeustion){
           let responses =[
               "Yes",
               "No",
               "Definitely",
               "Maybe",
               "Absolutely",
               "Not in a million years.",
               "Noob"
           ]
           let Response = responses[Math.floor(Math.random()*(responses.length)-1)]
           let embed = new Discord.MessageEmbed()
           .setTitle('8ball')
           .setColor('RANDOM')
           .setDescription('Your qeustion: '+qeustion+"\nMy reply: "+Response)
           message.channel.send(embed)
       }
    }
}