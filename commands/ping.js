exports.run = (bot, msg, args) => {
    msg.channel.send(`Pong! I got **${bot.ping}ms**`).catch(console.error);
}
