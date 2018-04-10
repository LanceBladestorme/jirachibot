exports.run = async (client, message, guild) => {
  var config = require('../config.json');
  if(message.member.roles.find("name", "Trebled Soul Admin") || message.member.roles.find("name", "Trebled Soul Moderator")){
  let args = message.content.split(" ");
  let user = message.mentions.users.first();
  try {
    if (!args[1]){
    return message.channel.send('**Please enter in a user!**')
  }

    var addRole0 = message.guild.roles.get("433344709646221315")
    var addRole1 = message.guild.roles.get("433345351655882783")
    var addRole2 = message.guild.roles.get("433344468826062855")
    message.guild.member(user).setNickname("REJECTED NICKNAME");
    message.mentions.members.first().removeRole(addRole0).catch(console.error).then(
    message.mentions.members.first().addRole(addRole1).catch(console.error)).then(
    message.mentions.members.first().removeRole(addRole2).catch(console.error))
    message.channel.send(`**Target's name has been rejected!**`);
  } catch (err) {
    console.log(err)
    message.channel.send("I cannot change of users that outrank or don't exist!")
  }
} else{ return (console.log( "Error")) }
};
