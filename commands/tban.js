// module.exports = {
//     name: "tban",
//     async execute(client, message, args, Discord, config, Trello, trello, noblox, suspect1) {
//         const command = args.shift().toLowerCase();
//         if (command === 'tban') {
//             if(!message.member.roles.cache.some(role => role.name === 'TBan Permission')) 
//                     return message.channel.send({embed: {
//                         color: 15406156,
//                         description: "You do not have permission to use this command.",
//                         author: {
//                             name: message.author.tag,
//                             icon_url: message.author.displayAvatarURL
//                         }
//                     }});
//             let suspect = args[0]
//             if (!suspect) {
//                return message.channel.send({embed: {
//                         color: 15406156,
//                         description: "Use this format: `!tban [Username][banReason]`",
//                         author: {
//                             name: message.author.tag,
//                             icon_url: message.author.displayAvatarURL
//                         }
//                     }});
//             }
//             let reason = args.slice(1).join(" ");
//             if (!reason) {
//                return message.channel.send({embed: {
//                         color: 15406156,
//                         description: "Use this format: `!tban [Username:UserID][banReason]`",
                        
//                         author: {
//                             name: message.author.tag,
//                             icon_url: message.author.displayAvatarURL
//                         }
//                     }}); 
//             }
//               trello.addCard(suspect, reason, config.listID,
//               function (error, trelloCard) {
//                   if (error) {
//                       console.log("An error occured", error)
//                        return message.channel.send({embed: {
//                         color: 15406156,
//                         description: "An error occured. Please try again later. \n ERROR:" + error,
//                         author: {
//                             name: message.author.tag,
//                             icon_url: message.author.displayAvatarURL
//                         }
//                     }}); 
//                   }
//                   else {
//                       console.log('Added card:', trelloCard);
//                       return message.channel.send({embed: {
//             color: 3447003,
//             author: {
//               name: client.user.username,
//               icon_url: client.user.avatarURL
//             },
//             title: "Trello ban card created!",
//             description: "Card details:",
//             fields: [{
//                 name: "Suspect:",
//                 value: suspect,
//               },
//               {
//                 name: "Ban Reason",
//                 value: reason,
//               },
//             ],
//             timestamp: new Date(),
//             footer: {
//               icon_url: client.user.avatarURL,
//               text: "Trello Bans."
//             }
//           }
//         });
//                   }
//               });
//           }
//     }
// }