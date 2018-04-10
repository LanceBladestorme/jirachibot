var config = require('../config.json');
exports.run = (client, message, [mention, ...reason]) => {
if(message.member.roles.find("name", "Trebled Soul Admin") || message.member.roles.find("name", "Trebled Soul Moderator")){
  if (message.mentions.members.size === 0)
    return message.reply("Please mention a user to ban");

  if (!message.guild.me.hasPermission("BAN_MEMBERS"))
    return message.reply("I do not have a high enough permission level to ban this player!");

  const banMember = message.mentions.members.first();

  banMember.ban(reason.join(" ")).then(member => {
    message.reply(`${member.user.username} was succesfully banned.`);
  });
}};
