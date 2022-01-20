const addNewUserToSprint = require('../../functions/addUser')
const checkForSprint = require('../../database/functions/checkForSprint')
const checkForUser = require('../../database/functions/checkIfUserAlreadyExists')

// Deconstructing MessageEmbed to create embeds within this command
const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "join",
	description: "Joins a sprint!",
	aliases: ["commands"],
	usage: "",
	cooldown: 2,

	async execute(message, arguments) {
		const client = message.client;

		const userid = message.member.user.id;
		const username = message.member.user.username;
		const serverid = message.guild.id;
		const channelname = message.channel.name

		const sprintActive = await checkForSprint.check(serverid, channelname)
		const userJoinedAlready = await checkForUser.check(serverid, channelname, userid)
		console.log(sprintActive)

		if (sprintActive == false) {
			const Embed = new MessageEmbed()
				.setColor('#d33a1b')
				.setTitle('Error')
				.setDescription('Er is geen sprint gaande in dit kanaal! Start er een met **!readsprint**')
				.setTimestamp()
				.setFooter({text: `Message send from ${client.user.tag}!`})
			//sending it
			message.channel.send({embeds: [Embed]})
			return
		}
		console.log(userJoinedAlready)

		if (userJoinedAlready == true) {
			const Embed = new MessageEmbed()
			.setColor('#d33a1b')
			.setTitle('Error')
			.setDescription(`je heb deze sprint al gejoined! <@${userid}>`)
			.setTimestamp()
			.setFooter({text: `Message send from ${client.user.tag}!`})
	
			//sending it
			message.channel.send({embeds: [Embed]})
			return
		}

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

		const Embed = new MessageEmbed()
			.setColor('#1bd321')
			.setTitle('Succes!')
			.setDescription(`Je hebt de sprint gejoined met **${starting_lc}** regels! <@${userid}>`)
			.setTimestamp()
			.setFooter({text: `Message send from ${client.user.tag}!`})
		//sending it
		message.channel.send({embeds: [Embed]})
		return
	}
};
