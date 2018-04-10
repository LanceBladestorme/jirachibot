exports.run = async (client, message) => {
  var config = require('../config.json');
if(message.member.roles.find("name", "Trebled Soul Admin") || message.member.roles.find("name", "Trebled Soul Moderator")){
  const ms = require('ms');
  const args = message.content.split(" ");
  if (!client.lockit) client.lockit = [];
    let time = args[1];
    let validUnlocks = ['release', 'unlock'];
    if (!time) return message.reply('I need to know a set amount of hours, minutes or seconds to lock the channel down!');

    if (validUnlocks.includes(time)) {
      message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: null
      }).then(() => {
        message.channel.send('Lockdown lifted.');
        clearTimeout(client.lockit[message.channel.id]);
        delete client.lockit[message.channel.id];
      }).catch(error => {
        console.log(error);
      });
    } else {
      message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      }).then(() => {
        message.channel.send(`Channel locked down for ${ms(ms(time), { long:true })}`).then(() => {

          client.lockit[message.channel.id] = setTimeout(() => {
            message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: null
            }).then(message.channel.send('Lockdown lifted.')).catch(console.error);
            delete client.lockit[message.channel.id];
          }, ms(time));

        }).catch(error => {
          console.log(error);
        });
      });
    }
  }};
