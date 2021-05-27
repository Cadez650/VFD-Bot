

module.exports = {
    name: "reactionroles",
 async execute(message,client,Discord) {
        const Role1 = message.guild.roles.cache.get("846896515977183234");
        const channel = '762498219841814550';
        const role = '846894148904026132'
        const emoji = '☑️'
        let embed = new Discord.MessageEmbed()
        .setColor(`#e60000`)
        .setTitle('React with the ' + emoji + " to get notified for QOTD!")
        let msgEmbed = await message.channel.send(embed)
        msgEmbed.react(emoji)

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.fetch();
            if (reaction.partial) await reaction.fetch()
            if (user.bot) return
            if (!reaction.message.guild) return;

                if(reaction.emoji.name === emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add("846896515977183234")
            }
        })
  }
}