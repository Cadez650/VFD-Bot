var Discord = require('discord.js');

module.exports = {
    name: "kick",
 async execute(client, message, args, Discord) {
   let reason = args.slice(1).join(" ");
    let target = message.mentions.members.first();
    if (!target) return message.reply('mention a user plz');
    let embed = new Discord.MessageEmbed()
    .setTitle("Action: Kick")
    .setDescription(`Kicked ${target} (${target.id})`)
    .setColor("#ff2050")
    .addField("With the reason of: ", reason)
    .setFooter(`Kicked by @${message.author.tag}`);
    message.channel.send(embed)
    if (!reason) {
       reason = 'Undefined'
    }
    target.kick(reason);
 }
}