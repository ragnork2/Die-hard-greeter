require("dotenv").config();
const token = process.env.DISCORD_TOKEN
const Discord = require('discord.js');


const client = new Discord.Client();
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('guildMemberAdd', member => {
  
  const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
 
  if (!channel) return;
  
  channel.send(`https://tenor.com/view/welcome-to-the-party-gif-4879842
   ${member}`);
});


client.login(token);