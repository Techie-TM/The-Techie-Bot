const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "join",
    aliases: ["j"],
    category: "Music",
    description: "Join voice channel",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    player: false,
    inVoiceChannel: true,
    sameVoiceChannel: false,
 execute: async (message, args, client, prefix) => {
  
		const { channel } = message.member.voice;

        const emojiJoin = message.client.emoji.join;

        if(!message.guild.me.voice.channel) {
            
            const player = message.client.manager.create({
                guild: message.guild.id,
                voiceChannel: channel.id,
                textChannel: message.channel.id,
                volume: 50,
                selfDeafen: true,
            });
        player.connect();
        const search = 'https://youtu.be/0sYmPDc4XzA';
        let res;
        res = await player.search(search, message.author);
        var track = res.tracks[0];
        player.queue.add(track);
        player.play();
            let thing = new MessageEmbed()
                .setColor(client.embedColor)
                .setDescription(`${emojiJoin} **Join the voice channel**\nJoined <#${channel.id}> and bound to <#${message.channel.id}>`)
             return message.channel.send({embeds: [thing]});
 
        } else if (message.guild.me.voice.channel !== channel) {

            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription(`You must be in the same channel as ${message.client.user}`);
            return message.channel.send({embeds: [thing]});
        }

            
            
        
    }
};