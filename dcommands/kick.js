exports.run = (client, message, [mention, ...reason]) => {
  var config = require('../config.json');
if(message.member.roles.find("name", "Trebled Soul Admin") || message.member.roles.find("name", "Trebled Soul Moderator")){
  if (message.mentions.members.size === 0)
    return message.reply("Please mention a user to kick");

  if (!message.guild.me.hasPermission("KICK_MEMBERS"))
    return message.reply("I do not have a high enough permission level to kick this player!");

  const kickMember = message.mentions.members.first();

  kickMember.kick(reason.join(" ")).then(member => {
    message.reply(`${member.user.username} was succesfully kicked.`);
  });
}};
