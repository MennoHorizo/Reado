const cancel = require('../../database/functions/cancelSprint')

// Deconstructing MessageEmbed to create embeds within this command
const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "cancel",
	description: "Cancels a sprint!",
	aliases: ["commands"],
	usage: "",
	cooldown: 2,

	async execute(message, arguments) {
        cancel.cancel(message.guild.id, message.channel.name)
		const client = message.client;
		
        const Embed = new MessageEmbed()
				.setColor('#1bd321')
				.setTitle('Oh no.')
				.setDescription(`De sprint is gecanceld door <@${message.author.id}>!`)
				.setTimestamp()
				.setFooter({text: `Message send from ${client.user.tag}!`})
			//sending it
			message.channel.send({embeds: [Embed]})
			return
	}
};
