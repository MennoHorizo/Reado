// Deconstructing prefix from config file to use in help command
const { prefix } = require("../../config.json");

const createSprint = require('../../functions/createSprint');
const getRandomEmojis = require('../../functions/getRandomEmoji');

// Deconstructing MessageEmbed to create embeds within this command
const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "readsprint",
	description: "Starts a readingsprint!",
	aliases: ["commands"],
	usage: "",
	cooldown: 2,

	/**
	 * @description Executes when the command is called by command handler.
	 * @author Ashlay Steur
	 * @param {Object} message The Message Object of the command.
	 * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
	 */


	execute(message, arguments) {
		const client = message.client;

		//setting the correct types
		let args = [];
		for (let i= 0; i < arguments.length; i++) {
			const isNumber = isNaN(parseInt(arguments[i]));
			if (isNumber == true) {
				args.push(arguments[i]);
			} else {
				args.push(parseInt(arguments[i]));
			}
		}




		if (typeof args[0] === 'number' && !(isNaN(args[0]))) {
			if(typeof args[1] === 'string' && typeof args[2] === 'number') {
				//!readsprint 10 in 10
			} else {
				//!readsprint 10
			}




		} else if (typeof args[0] === 'string' && args[0] == 'random') {
			if (typeof args[1] === 'string' && args[1] == 'between')  {
				const min = args[2];
				let max = args[3];
				if(typeof args[3] === 'string' && args[3] =='and') {
					//!readsprint random between 5 and 10
					max = args[4];
				}
				//!readsprint random between 5 10
				const randomDuration = Math.floor(Math.random() * (min - max + 1) ) + min;
			} else {
				//!readsprint random
				const randomDuration = Math.floor(Math.random() * 30) + 1;
				const emoji = getRandomEmojis.randomEmoji();
				const Embed = new MessageEmbed()
					.setColor('#1bd321')
					.setTitle('Succes!')
					.setDescription(`Er wordt een sprint gestart van ${randomDuration} minuten!`)
					.setTimestamp()
					.setFooter({text: `Message send from ${client.user.tag}!`})
				message.channel.send({embeds: [Embed]})
				/**
				** @param {durations} duration of the sprint
				 */
				let serverid = message.guild.id;
				let channelname = message.channel.name;
				console.log(serverid, channelname)
				createSprint.createSprint(randomDuration, 60, serverid, channelname)
			}
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
	}
};
