

module.exports = {
	name: "resume",
    aliases: ["r"],
    category: "Music",
    description: "Resume currently playing music",
    args: false,
    usage: "<Number of song in queue>",
    permission: [],
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
	 execute: async (message, args, client, prefix) => {
        const { MessageEmbed } = require("discord.js");
		const player = message.client.manager.get(message.guild.id);
        const song = player.queue.current;

        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription("There is no music playing.");
            return message.channel.send({embeds: [thing]});
        }

        const emojiresume = message.client.emoji.resume;

        if (!player.paused) {
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription(`<:Techie:892664283090001931> The player is already **resumed**.`)
                .setTimestamp()
          return message.channel.send({embeds: [thing]});
        }

        player.pause(false);

        let thing = new MessageEmbed()
            .setDescription(`<:Techie:892664283090001931> **Resumed**\n**[${song.title}](${song.uri})**`)
            .setColor(message.client.embedColor)
            .setTimestamp()
        return message.channel.send({embeds: [thing]});
	
    }
};