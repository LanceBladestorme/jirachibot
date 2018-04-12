const Discord = require('discord.js');
const fs = require("fs");
const config = require("./config.json");
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`[Start] ${new Date()}`);
});
fs.readdir("./devents/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./devents/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});
client.on('message', async message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
try {
  let commandFile = require(`./dcommands/${command}.js`);
  commandFile.run(client, message, args);
} catch (err) {
  console.error(err);
}});

client.login(process.env.BOT_TOKEN);
