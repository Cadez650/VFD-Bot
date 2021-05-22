
module.exports = {
   name: "ban",
   async execute(client, message, args, Discord) {
      const id = message.mentions.users.first().id
      if (!id) return message.reply("Please mention a user to ban!")
         let reason = args.slice(2).join(" ") || "No reason was provided!";
      try {

         const user = await message.guild.members.ban(id, { reason : reason })

         const embed = new Discord.MessageEmbed()
         .setTitle('User Banned')
         .setDescription(`${user.user.username || user.username} was banned by ${message.author}!`)
         .addField('Reason', reason)

      message.channel.send(embed)
      }  catch (error) {
         message.reply('user not found.')
      }
   }
}