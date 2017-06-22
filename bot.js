/****************************************************************\
|                                                                |
|	Whoa there, might want to read this!                     |
|	----------------------------------------                 |
|	This file usually does not need editing.                 |
|	If you would like to add or modify a                     |
|	command, go to the commands folder. If                   |
|	you would like to add or change an event                 |
|	handler, go to the events folder. Please                 |
|	only edit this if you have random errors                 |
|	and you are authorized to edit this file                 |
|	by either Dio Brando or GlitchMasta47.                   |
|                                                                |
\****************************************************************/


let Discord = require('discord.js')
let bot = new Discord.Client()
let config = require('./config.json')
let admins = require('./admins.json')
let fs = require('fs')

fs.readdir('./events/', (err,files) => {
	if (err) return console.error(err)
	files.forEach(file => {
		let func = require(`./events/${file}`)
		let name = file.split('.')[0]
		client.on(name, (...args) => func.run(bot, ...args))
	})
})

bot.on("message", msg => {
	if (msg.author.bot || !msg.content.startsWith(config.prefix)) return;
	let args = message.content.split(" ");
	let command = args.shift().slice(config.prefix.length);
	try {
		let cmdFile = require(`./commands/${command}.js`);
		cmdFile.run(client, msg, args);
	} catch (err) {
		console.error(err);
	}
});
