const Discord = require('discord.js');
const config = require('./config.json')
const client = new Discord.Client()
const prefix = '.';
const token = 'ODM4NjEzMTAzODg5MDg4NTg0.YI9pUA.mAJ9701ttxyxUeq78R0vnd2w06k';
const fs = require('fs')
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync(`./commands`).filter(file => file.endsWith('.js'));
const Trello = require("trello");
const trello = new Trello(config.trelloAppKey, config.trelloToken);
const noblox = require('noblox.js');
const { report } = require('process');
const group = 5530436;  
const rblxToken = '_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_38652BF475AB63E4AB22261899FCD9E9850534BF72E906F06E7FB696C912BDA5C2484403E0DF541B9B0351419FF13CC65EC0B974EB79FC9AAB63D64B38181CAEA5257E6EA1BDACBF2EAB19BDC736DF4FE104AC73A94442CE18655127F8613E7B81CC815A2C7D9E89658C6FB721D634CD257557147F70E428532B277865841A1A0933C7BDA7CC4E0E70B7501F7CAF9DCAB9883493C653AFB9A9BA47C2D48F762BD7C64DAC07227F2DCA68385734CB3A30F341C0FE58CA93EE83AEB7954D0F206F5DA9A49FF3EBC313C605D643B3D0930CB70149D80674EF6B0D7DBE07E84A6A77AA191C580DBD30C1F841AB373040AA4B56A38BDD7B1DA61C9A74AFC46D05C3CC1E342A7F931B12F2D72934E416BBC84E8F1BEF8EEA22E34E523C06CC508D30A1911304D9F33A10EC937F2A5C5BACE223E1C9C279';
const channel3 = client.channels.cache.find(channel => channel.id === 733476395753275473)
const BoardID = '60596b5bc2b7a73fdd6eaa46'
const listID = '60596c1c98b65124e3b3f32f'
for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    console.log("✅ loaded " + file)
    client.commands.set(command.name, command);
}

client.on('ready', async() => {
    const group = 5530436
    client.user.setPresence({ activity: { name: ` with Deputy_Alex stench!`, type: 'PLAYING' }, status: "online"});
       console.log(`${client.guilds.cache.size} servers`)
    console.log('bot online!')
    // const jar = noblox.jar()
   await noblox.setCookie("_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_94D01E7B61C496C232BD2DFCE331700CE7D11119171DF3A3B7DCED7A599ED09400E86077AE96DB0114A4C60F86822BEC8DD237788529003C0198095C36566684E6D4DADBA47B5A4EA665415EFC38FB6C56F8DE5C9F8FE8E871389E722A8B1B4B0DD2578438AB5AD2C6658AB975D47BB748F0C5F03A1732A661BFBEE6FEF2097F7E6EF3219CC051F86E878EE755AB066D678DC61A23B2019F827575B8E2AC954364AD06CEAF755C2B0E271A1B4455CD73ED575913DB326CD73AB29446EB2338C458775BA59EC44FB6E4781AE04986EEF717A27223FD21321F51D0E9B59333C3C838F931ECBAFB4DBB9E9ED06148A6029EDC0287E123856F0ED23740E5497E3C30E1F7F3F3739D3863597DA6F209AA3CBF604B1E6E28E9F987A11A89320799841657E5150330483AB50810C5E620142288F0AFB261", true)
    // noblox.demote(group, 663192878)
})

client.on('message', async message => {
    const channel1 = client.channels.cache.find(channel => channel.id === '839371948902580224')
    const placeInfo = await noblox.getPlaceInfo(4764801869)
    const rblx1 = require('noblox.js');
    const args = message.content.slice(prefix.length).trim().split(' ');
    const msg = message.content.toLowerCase()
    if (message.channel.type === 'dm') return;
    if (message.author.bot) return;
    if (message.content.toLowerCase().includes(`sxo`)) {
        message.channel.send("one of the best in the buissness")
    }
    if (message.content.toLowerCase().startsWith(`${prefix}restart`)) {
        client.commands.get("restart").execute(client, Discord, message, config)
    }
    if(message.content.toLowerCase().startsWith(`${prefix}accept`)) {
        if (args[1]) {
            if (message.member.roles.cache.some((role) => role.name === 'HICOMM')) {
            const name = args[1]
            const id = await noblox.getIdFromUsername(name)
            await noblox.handleJoinRequest(group, id, true)
            message.channel.send("Accepted group reqeust for: " + name)
            } else {
                message.reply("Invalid perms!")
            }
        } else {
            message.reply("Proivde a username!")
        }
    }
    if (message.content.toLowerCase().includes(`canadian`)) {
        message.channel.send("One of the best Captains within VFD. :salutes:")
    }
    if(message.content.toLowerCase() === "sus") {
        message.channel.send()
    }
    if(message.content.toLowerCase().includes("jack")) {
        message.channel.send("Sexiest captain in VFD")
    }
    // if(message.content.toLowerCase().includes("porn") || (message.content.toLowerCase().includes("cum"))) {
    //     message.delete()
    //     const adminLogs = client.channels.cache.find(channel => channel.id === '839609030955237429')
    //     adminLogs.send(message.member.nickname + " has sent NSFW. Message: " + `||${message.content}||`)
    // }
    const channel2 = client.channels.cache.find(channel => channel.id === '839609030955237429')
    if (message.content.toLowerCase().startsWith(`${prefix}activitystrike`)) {
        if (message.mentions.users.first() && args[2] && args[3]) {
            if (message.member.roles.cache.some((role) => role.name === 'Captain') || (message.member.roles.cache.some((role) => role.name === 'HICCOM') || (message.member.id === '323687110550749186') || (message.member.id === '444709271213572099'))) {
            const IA_Channel = client.channels.cache.find(channel => channel.id === '733476395753275473')
            const discId = message.mentions.users.first()
            let nickname = args[1]
            const timeInactivity = args[3]
            const username = args[2]
            const id = await noblox.getIdFromUsername(username)
            const rank = await noblox.getRankNameInGroup(group, id)
            discId.send(`You have received a strike in Vancouver Fire Department for failing to submit a log of 1 hour. You may submit a log before 12 AM EST. Reminder: 1 Hour of Patrol time each week. After 3 strikes you will be terminated.`)
            const adminLogs = client.channels.cache.find(channel => channel.id === '839609030955237429')
            adminLogs.send(`${nickname} has been given a activity strike from: ${await message.member.nickname}`)
            IA_Channel.send(`${rank} ${username} Has been striked for inactivity. Total strikes: ${timeInactivity}`)
        } else {
            message.reply("INVALID PERMS")
        }
    }
}
    if (message.content.toLowerCase().startsWith(`${prefix}blacklist`)) {
        if (message.member.roles.cache.some((role) => role.name === 'Internal Affairs')) {
            const adminLogs = client.channels.cache.find(channel => channel.id === '733476395753275473')
            if (args[2] && args[1] && args[3]) {
                const rblxName = args[1]
                let reason = args.slice(3).join(" ") || "No reason was provided!";
                const length = args[2]
                const ID = await noblox.getIdFromUsername(rblxName)
                const rank = await noblox.getRankNameInGroup(group, ID)
                channel2.send(rblxname + ' was striked for: ' + reason + " by " + message.member.nickname)
                adminLogs.send(`${rank} ${rblxName} has been blacklisted for ${length}. And if seen on VFD property please contact a LEO.`)
            } else {
                message.reply("Please use the following format! .blacklist (username) (length add Day/Month to the end) ")
            }
        } else {
            message.reply("Invalid perms.")
        }
    } else if (message.content.toLowerCase().startsWith(`${prefix}release`)) {
        if (message.member.roles.cache.some((role) => role.name === 'Internal Affairs')) {
        const messagee = '[Rank] [ping] has been released from invesitgation, they are free to resume normal duties.'
        if (args[1]) {
            const name = args[1]
            const id = await noblox.getIdFromUsername(name)
            const rankName = await noblox.getRankNameInGroup(group, id)
            channel2.send(name + " was released from investagation by " + message.member.nickname)
            const adminLogs = client.channels.cache.find(channel => channel.id === '733476395753275473')
            adminLogs.send(`${rankName} ${name} has been released from invesitgation, they are free to resume normal duties.`)
        }
    } else {
      return message.reply("Invalid perms!")
    }
    }
    if (message.content.toLowerCase().startsWith(`${prefix}strike`)) {
        if (args[1] && args[2]) {
            if (message.member.roles.cache.some((role) => role.name === 'Internal Affairs')) {
                const adminLogs = client.channels.cache.find(channel => channel.id === '733476395753275473')
                const name = args[1]
                let reason = args.slice(2).join(" ") || "No reason was provided!";
                const id = await noblox.getIdFromUsername(name)
                const rank = await noblox.getRankNameInGroup(group, id)
                channel2.send(name + ' was striked for: ' + reason + " by " + message.member.nickname)
                adminLogs.send(rank + " " + name + ' has been released from investagation with a strike for: ' + reason)

            } else {
                message.reply("invalid permissons")
            }
        } else {
            message.reply("please provide username and/or reason!")
    }
    } else if (message.content.toLowerCase().startsWith(`${prefix}warn`)) {
        if (message.member.roles.cache.some((role) => role.name === 'Internal Affairs')) {
        const adminLogs = client.channels.cache.find(channel => channel.id === '733476395753275473')
        if (args[1]) {
            const name = args[1]
            const id = await noblox.getIdFromUsername(name)
            const rank = await noblox.getRankNameInGroup(group, id)
            message.channel.send('MSG sent.')
            channel2.send(message.member.nickname + " released " + name + " from investigation with a stern warning ")
            adminLogs.send(rank + " " + name + " has been released from investigation with a stern warning, and is free to resume normal duties.")
        } else {
            message.reply('Please provide the username!')
        }
       }
    }
    // if (message.content.toLowerCase().includes('reset')) {
    //     message.channel.send("a very very funy man.")
    // }
    
    // if (message.content.toLowerCase().includes('cyclone')) {
    //     message.channel.send('Big man Deputy Chief.')
    // }
    function emoji(id) {
        return client.emojis.get(id).toString()
    }
    const cooldown = new Set()
    if (message.content.toLowerCase().startsWith(`${prefix}ui`)) {
    if (message.member.roles.cache.some((role) => role.name === 'Internal Affairs')) {
        if (cooldown.has(message.author.id)) {
            message.reply('Please wait 30 seconds before using this command again!')
        }
        setTimeout(() => {
            cooldown.delete(message.author.id)
        }, 30000);
        if (cooldown.has(message.author.id)) return message.reply("WAIT 30 MORE SECONDS!")
        if (args[1]) {
            if (message.mentions.users.first()) {
                cooldown.add(message.author.id)
                const rblxName = args[1]
                const id = await noblox.getIdFromUsername(rblxName)
                const rank = await noblox.getRankNameInGroup(group, id)
                const member = message.mentions.members.first();
                const adminLogs = client.channels.cache.find(channel => channel.id === '733476395753275473')
                adminLogs.send(rank + " " + args[2] + " has placed under investigation. During this time he is ordered not to represent the department in any way and must call 10-7 immediately.")
                message.reply(rank + " " + args[1] + '  has been placed under investagation successfully!')
                if (rank === "Battalion Chief" || rank === "Assistant Chief" || rank === "Deputy Chief" || rank === "Fire Chief" || rank === "District Chief") {
                    adminLogs.send('Due to ' + rblxName + " being a HICOMM member this investagation will be done by HICOMM.")
                }
            } else {
                message.reply("Ping/mention the user!")
            }
        } else {
            message.reply('Provide a username!')
        }
    } else {
        message.reply('You need the "Internal Affairs" role to execute this command!')
    }
}
const Captain = message.guild.roles.cache.find(role => role.id === '739567509291794684');
    if (message.content.toLowerCase().startsWith(`${prefix}rank`)) {
        if (args[2] && args[3]) {
            const rank = args.slice(2).join(" ") || args[1];
            const name = args[1]
            const ID = await noblox.getIdFromUsername(name)
            await noblox.setRank(group, ID, rank)
             message.channel.send('Set ' + name + " rank to " + await noblox.getRankNameInGroup(group, ID))
        }
    }
else if (message.content.toLowerCase().startsWith(`${prefix}suspend`)) {
    if (args[1]) {
        const adminLogs = client.channels.cache.find(channel => channel.id === '733476395753275473')
        if (message.member.roles.cache.some((role) => role.name === 'Internal Affairs')) {
        const name = args[1]
        const id = await noblox.getIdFromUsername(name)
        const rankName = await noblox.getRankNameInGroup(group, id)
        if (args[2]) {

            const numOfDays = args[2]
            message.channel.send(name + ' has been suspended successfully')
            adminLogs.send(rankName + " " + name + ` has been suspended for ${numOfDays} days following a Internal Affairs investigation, they are ordered to not represent the department during this time. If seen doing so please gather proof and send evidence to a member of Internal Affairs.`)
        } else {
            message.reply('Provide the number of days!')
        }
    } else {
        message.reply('Invalid permissions!')
    }
  } else {
        message.reply('Please provide a username!')
  }
}
     else if(message.content.toLowerCase().startsWith(`${prefix}terminate`)) {
            if (message.member.roles.cache.some(role => role.name === 'Internal Affairs')) {
                if (args[1] && args[2]) {
                    const adminLogs = client.channels.cache.find(channel => channel.id === '733476395753275473')
                    const name = args[1]
                    const ID = await noblox.getIdFromUsername(name)
                    const rank = await noblox.getRankNameInGroup(group, ID)
                    await noblox.exile(group, ID)
                    let reason = args.slice(2).join(" ");
                    message.channel.send('Successfully Exiled ' + name)
                    adminLogs.send(rank + " " + name + ' Has been Terminated from Vancouver Fire Department. We wish them the best of luck and hope they can enjoy their time in Vancouver. VFD will miss you o7')
                    channel2.send(message.member.nickname + ' exiled ' + await noblox.getUsernameFromId(ID) + " reason: " + reason)

            } else {
               return message.reply('Please provide the username and reason!')
            }
        }}
        if (message.content.toLowerCase() === "gmen") {
            message.channel.send("https://cdn.discordapp.com/attachments/739563622338003015/841755448864538684/Gmens_Funeral__HD360P_001.mp4")
        }
        if (message.content.toLowerCase().startsWith(`${prefix}report`)) {
            if (args[1]) {
                if (args[2]) {
                    if (args[3]) {
                         if (args[4]) {
                                const proof = args[4]
                                const email = args[1]
                                const UserName = args[2]
                                const reportedName = args[3]
                                const whatDidTheyDo = args.slice(5).join(" ");
                                const channel = client.channels.cache.find(channel => channel.id === '795042142271176745')
                                const embed = new Discord.MessageEmbed()
                                .setTitle("Incoming Report!")
                                .addField("proof: ", proof, false)
                                .addField("reported user: ", reportedName, false)
                                .addField("what they did: ", whatDidTheyDo, false)
                                .addField("reported by: ", message.member.nickname , false)
                                channel.send(embed)
                                message.delete()
                                message.reply("Report sent!")
                            } else {
                                message.reply("What did he/she do?")
                            }
                         } else {
                             message.reply("Please provide proof, make sure its a link!")
                         }
                    } else {
                        message.reply('who would you like to report? Please provide a username or discord tag!')
                    }
                } else {
                    message.reply("Do you want your name involved with the report? If so say. Yes, (name)")
                }
        }
    if(message.content.toLowerCase().startsWith(`${prefix}demote`)) {
        if (message.member.roles.cache.some((role) => role.name === 'Internal Affairs') || "HICOMM") {
            if (message.member.roles.cache.some((role) => role.name === 'Internal Affairs')) {
            if (args[1]) {
                const name = args[1]
                const ID = await noblox.getIdFromUsername(name)
                noblox.demote(group, ID)
                message.channel.send('Successfully Demoted ' + name)
                channel2.send(message.member.nickname + ' demoted ' + await noblox.getUsernameFromId(ID))
        } else {
           return message.reply('Please provide the username!')
        }
    }
    } else {
        return message.reply('Invalid perms!')
    }
} else if (message.content.toLowerCase().startsWith(`${prefix}promote`)) {

    if (message.member.roles.cache.some((role) => role.name === 'HICOMM')) {
            // await noblox.handleJoinRequest(group, 663192878, true)
            const name = args[1]
            const ID = await noblox.getIdFromUsername(name)
            .then((ID) => {
                const group = '5530436'
                const noblox = require("noblox.js")
                noblox.promote(group, ID)
                message.channel.send("Successfully Promoted " + name)
            })
            .catch((err) => {
                message.channel.send("user not found!")
            })
    } else {
        message.reply('invalid perms!')
     } 

     if(message.content.toLowerCase().startsWith(prefix+'userinfo')) {
        const user = message.mentions.users.first() || message.author;
        const embed = new Discord.MessageEmbed()
        .setTitle('User Info!')
        .setDescription('Displays User information!')
        .setColor(0x33ECFF)
        .setThumbnail(user.displayAvatarURL())
        .addField('Username: ', user.username)
        .addField('Account created at: ', user.createdAt.toLocaleDateString())
        .setTimestamp()
        .setFooter('Reqeusted by ' + message.author.tag)
        message.delete()
        message.channel.send(embed)
}
}
if(msg === 'alex') {
    

}
 if (msg.startsWith(`${prefix}spam`)) {
     if (message.mentions.users.first() && args[2]) {
        let reason = args.slice(2).join(" ");
        message.reply("spamming " + message.mentions.users.first())
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
         message.mentions.users.first().send(reason)
     }
}


// else if (message.content.toLowerCase() === prefix+'ui') {
// if (message.member.roles.cache.some(role => role.name === 'Internal Affairs')) {
//         if (args[1]) {
//         channel3.send(`${args[1]} has been placed under investigation. During this time he is ordered not to represent the department in any way and must call 10-7 immediately.`)
//         } else {
//             message.reply("Please provide the suspects name!")
//         }
//     }
// }




        



    if (message.content.toLowerCase().startsWith(prefix + "say")) {
        if (message.member.roles.cache.some((role) => role.name === 'Captain') || message.member.id === '834205401427214367') {
        channel1.send(`${message.author.tag} has attempted to execute ${message.content}!`)
        client.commands.get('say').execute(client, message, args, Discord, config)
        } else {
            message.reply("Invalid perms!")
        }
}

    if (message.content.toLowerCase().startsWith(prefix + '8ball')) {
        if (message.channel.id === '739563622338003015') {
        client.commands.get('8ball').execute(client, message, args, Discord, config, noblox)
        } else {
            message.reply("Wrong channel send it in #vfd-photos!")
        }
    }

    if (message.content.toLowerCase().startsWith(prefix + 'members')) {
         channel1.send(`${message.author.tag} has attempted to execute ${message.content}!`)
         client.commands.get('member').execute(client, message, args, Discord, config)
     }
     
        // else if(message.content.toLowerCase().startsWith(prefix + 'kick')) {
        //     if (message.member.hasPermission('KICK_MEMBERS')) {
        //         client.commands.get('kick').execute(client, message, args, Discord)
        //     } else (message.reply('nice try bud'))
        // } 


        // else if (message.content.toLowerCase().startsWith(prefix + 'ban')) {
        //     if (message.member.hasPermission('BAN_MEMBERS')) {
        //     client.commands.get('ban').execute(client, message, args, Discord)
        //     }else (message.reply('lmao noob nope nice try tho'))
        // } 
        
        
//     else if (message.content.toLowerCase().startsWith(prefix + "help")) {
//         channel1.send(`${message.author.tag} has attempted to execute ${message.content}!`)
//         const embed = new Discord.MessageEmbed()
//         .setTitle('Help!')
//         .addField('Command 1: ";membercount" displays number of members in the discord server.', "Teheheheheheh")
//         .addField('Command 2: ";pcount" shows the current amount of players playing the game.', "I code...")
//         .addField('Command 3: ";say" says anything you want it to.', "Vancouver is good.")
//         .addField('Command 4: ";8ball" replys with a totally accurate answer.', "don't forget have a GREAT day")
//         .addField('Command 5: "shift (1/2)"')
//         .addField('Command 6: ";spam"')
//         .addField('Command 7: ";phase (1,2,3) (it pings)')
//         .addField('Command 8: "Slock/Over annocues that the training is slocked or concluded!')
//         message.channel.send(embed)
//     }
//     else if (msg.startsWith(`${prefix}phase`)) {
        
//         if (args[1]) {
//             channel1.send(`${message.author.tag} has attempted to execute ${message.content}!`)
//             if (message.member.roles.cache.some(role => role.name === 'Training Certified')) {
//                 let num = args[1]
//                 if (num == "1") {
//                     const ping = '<@&798258235240742982>'
//                     client.commands.get('phase').execute(client, message, args, Discord, config, num, ping);
//                 } else if (num == "2") {
//                     const ping  = '<@&798258230479421511>'
//                     client.commands.get('phase').execute(client, message, args, Discord, config, num, ping);
//                 }
//                 else if (num == "3") {
//                     const ping = '<@&798258344782987264>'
//                     client.commands.get('phase').execute(client, message, args, Discord, config, num, ping);
//                 }
//             } else {

//                 message.reply('invalid permissons')
//             }
//         } else {
//             message.reply('Provide a phase num!')
//         }
//     }

    

//     else if (msg.startsWith(`${prefix}shift`)) {
//         channel1.send(`${message.author.tag} has attempted to execute ${message.content}!`)
//         if (message.member.roles.cache.some(role => role.name === 'FTO Certified')) {
//             if (args[1]) {
//                 const server = args[1]
//                 client.commands.get('shift').execute(client, message, args, Discord, config, server)
//             } else {
//                 message.reply('Provide a server number please!')
//             }
//         }
//     }  else if (msg.startsWith(`${prefix}grade`)) {

//     if (message.member.roles.cache.some(role => role.name === "Head Instructor" || "TS Command" || "VFD High Command")) {
//         channel1.send(`${message.author.tag} has attempted to execute ${message.content}!`)
//         if (args[1]) {
//             const exam = args[1]
//             if (args[2]){
//                 const name1 = args[2]
//             if (args[3]) {
//                     const passorfail = args[3]
//                 if (args[4]) {
//                     const score = args[4]
//                     if (args[5]) {
//                         const notes = args.slice(5).join(" ");
//                         } else {
//                        return message.reply('please provide notes!')
//                         }
//                     } else {
//                         message.reply('please provide a score!')
//                     }
//                 } else {
//                    return message.reply('Pass/FaiL')
//                 }
//             } else {
//                return message.reply('please provide username!')
//             }
//         } else {
//             return message.reply('please provide name of the exam!')
//         }
//       }
//       const exam = args[1]
//       const name1 = args[2]
//       const passorfail = args[3]
//       const score = args[4]
//       const notes = args.slice(5).join(" ");
//       client.commands.get('grade').execute(client, message, args, Discord, config, name1, exam, score, notes, passorfail)
//     }

//     else if (msg.startsWith(`${prefix}slock`)) {
//         channel1.send(`${message.author.tag} has attempted to execute ${message.content}!`)
//     if (message.member.roles.cache.some(role => role.name === "Head Instructor" || "TS Command" || "VFD High Command")) {
//         client.commands.get('slock').execute(message,client,Discord)
//         message.channel.send('Message sent!')
//         } else {
//             message.reply('invalid permissons!')
//         }
//     }
//     else if (msg.startsWith(`${prefix}over`)) {
//         channel1.send(`${message.author.tag} has attempted to execute ${message.content}!`)
//         client.commands.get('over').execute(Discord,client,message)
//     }

//     else if (msg.startsWith(`${prefix}poll`)) {
//         client.commands.get('poll').execute(Discord,client,message,args)
//         channel1.send(`${message.author.tag} has attempted to execute ${message.content}!`)
//     }

    // else if (msg === prefix + "rank") {
    //     if (message.member.roles.cache.some(role => role.name === "Head Instructor" || "TS Command" || "VFD High Command")) {
    //     if (args[1]) {
    //         const name = args[1]
    //         if (args[2]) {
    //         noblox.setRank(5530436, id, args[2])
    //        channel1.send(`${message.author.tag} has attempted to execute ${message.content}!`)
    //         } else {
    //             message.reply('provide a specific rank!')
    //         }
    //       } else {
    //           message.reply('provide a username!')
    // }}
    })
        
// }}
// })

client.login(token);