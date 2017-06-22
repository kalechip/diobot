let commandInfo = {
        ping: {
                name:"ping", // Whatever the command name is, so [ping is ping, [help is help, etc.
                usage:"ping", // Whatever options for a command, key is: (optional) [required] (optional with | different available | choices) [required with | different available | choices]
                description:"Sends you a message of how much delay it takes for the bot to send a message, could also be used to see if the bot is alive.", // Well, I mean, the description
                shortDescription:"Sends back ping, if the bot is alive", // A shorter description
                permission:0 // 0: everyone (eg ping), 1: server moderators (eg kick), 2: bot admins (eg eval)
        },
        help: {
                name:"help", // Whatever the command name is, so [ping is ping, [help is help, etc.
                usage:"help (command name)", // Whatever options for a command, key is: (optional) [required] (optional with | different available | choices) [required with | different available | choices]
                description:"Sends you a DM of all commands, or if command name is added it shows information about that command.", // Well, I mean, the description
                shortDescription:"Sends you this list of commands you see right now", // A shorter description
                permission:0 // 0: everyone (eg ping), 1: server moderators (eg kick), 2: bot admins (eg eval)
        }
}

exports.run = (bot, msg, args) => {
	if (args.length == 0) {
		let msgArray = [];
		msgArray.push("DioBot Commands List")
		msgArray.push("")
		commandInfo.forEach(cmd => {
			msgArray.push(`**${cmd.name}**: ${cmd.description}`)
		})
	}
	else if (args.length == 1) {
		// Do this later //
	}
	else {
		let msgArray = [];
		msgArray.push("Woah, there, that's too much for me!")
		msgArray.push("```Usage:")
		msgArray.push("help -- Sends a list of all commands to your DM")
		msgArray.push("help (command name) -- Sends you detailed information about a command```")
		msg.channel.send(msgArray)
	}
}
