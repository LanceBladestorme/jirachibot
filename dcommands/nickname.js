exports.run = async (client, message, guild) => {
  var config = require('../config.json');
  if(message.member.roles.find("name", "Trebled Soul Admin") || message.member.roles.find("name", "Trebled Soul Moderator")){
  let args = message.content.split(" ");
  let user = message.mentions.users.first();
  let name = args.slice(2).join(' ');
  try {
    await message.guild.member(user).setNickname(name);
    if (name < 1)
    return message.channel.send('**Please enter in a nickname!**')
    message.channel.send(`**Target's name has been changed to: ${name}!**`);
  } catch (err) {
    message.channel.send("I cannot change of users that outrank or don't exist!")
  }
} else{ return (console.log( "Error")) }
};
