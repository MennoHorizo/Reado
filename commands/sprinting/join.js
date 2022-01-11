// Deconstructing prefix from config file to use in help command
const { prefix } = require("../../config.json");

const addNewUserToSprint = require('../../functions/addUser')

// Deconstructing MessageEmbed to create embeds within this command
const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "join",
	description: "Joins a sprint!",
	aliases: ["commands"],
	usage: "",
	cooldown: 2,

	execute(message, arguments) {
		const client = message.client;

		const userid = message.member.user.id;
		const username = message.member.user.username;
		const serverid = message.guild.id;
		const channelname = message.channel.name

		let starting_lc;
		if (arguments[0] != '' || arguments[0] == undefined) {
			starting_lc = arguments[0];
		} else {
			//creating embeded
			const Embed = new MessageEmbed()
				.setColor('#d33a1b')
				.setTitle('Error')
				.setDescription('Helaas is er iets mis gegaan! Probeer het opnieuw! Als je er niet uit komt kan je altijd **!help** gebruiken!')
				.setTimestamp()
				.setFooter({text: `Message send from ${client.user.tag}!`})
		
			//sending it
			message.channel.send({embeds: [Embed]})
		}

		addNewUserToSprint.addUser(userid, username, starting_lc, serverid, channelname)
	}
};
