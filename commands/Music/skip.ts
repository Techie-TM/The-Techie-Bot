

module.exports = {
	name: "skip",
	aliases: ["s"],
	category: "Music",
	description: "Skip the currently playing song",
	args: false,
    usage: "",
    permission: [],
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
	 execute: async (message, args, client, prefix) => {
        const { MessageEmbed } = require("discord.js");
		const player = message.client.manager.get(message.guild.id);

        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription("There is no music playing.");
            return message.channel.send({embeds: [thing]});
        }

        const autoplay = player.get("autoplay");
        const song = player.queue.current;

        if (autoplay === false) {
            player.stop();
        } else {
            player.stop();
            player.queue.clear();
            player.set("autoplay", false);
        }
		
		const emojiskip = message.client.emoji.skip;
		let thing = new MessageEmbed()
			.setDescription(`<:Skip:876007419724054548>  **Skipped the song**\n**[${song.title}](${song.uri})**`)
			.setColor(message.client.embedColor)
			.setTimestamp()
		return message.channel.send({embeds: [thing]});
	
    }
};