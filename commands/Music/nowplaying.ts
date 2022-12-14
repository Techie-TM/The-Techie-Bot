

module.exports = {
	name: "nowplaying",
    aliases: ["np"],
    category: "Music",
    description: "Show now playing song",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    player: true,
    inVoiceChannel: false,
    sameVoiceChannel: false,
	 execute: async (message, args, client, track, prefix) => {
        const { MessageEmbed } = require("discord.js");
        const { convertTime } = require('../../utils/convert.js');
        const { progressbar } = require('../../utils/progressbar.js')
        const player = message.client.manager.get(message.guild.id);
        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription("There is no music playing.");
            return message.channel.send(thing);
        }

        const song = player.queue.current

        const emojimusic = message.client.emoji.music;

        // Progress Bar
        var total = song.duration;
        var current = player.position;
        var size = 20;
        var line = '▬';
        var slider = '🔘';

        let embed = new MessageEmbed()
            .setDescription(`<a:diska:876363187119857687> **Now Playing**\n**[${song.title}](${song.uri})** - \`[${convertTime(song.duration)}]\``)
            .setImage(song.displayThumbnail("hqdefault"))
            .setColor(message.client.embedColor)
            .addField("\u200b", progressbar(total, current, size, line, slider))
            .addField("\u200b", `\`${convertTime(current)} / ${convertTime(total)}\``)
         return message.channel.send({embeds: [embed]})
            
    }
};