const createSprint = require('../../functions/createSprint');
const getRandomEmojis = require('../../functions/getRandomEmoji');
const startSprint = require('../../functions/startSprint')
const uuid = require('uuid');

// Deconstructing MessageEmbed to create embeds within this command
const { MessageEmbed } = require("discord.js");
const { start } = require("repl");

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
				/*

										!readsprint random

				*/
				const randomDuration = Math.floor(Math.random() * 30) + 1;
				const emoji = getRandomEmojis.randomEmoji();
				const user = message.author;
				const Embed = new MessageEmbed()
					.setColor('#1bd321')
					.setTitle('Succes!')
					.setDescription(`
					${emoji} **Join the sprint!** ${emoji}
					\n\n
					Er wordt een sprint gestart van ${randomDuration} minuten in 1 minuut!
					Join with **_join** {jouw line count}! 
					\n\n\n\n
					Sprint started door <@${user.id}>!
					`)
					.setTimestamp()
					.setFooter({text: `Message send from ${client.user.tag}!`})
				message.channel.send({embeds: [Embed]})

				//Actually starting the sprint, probably need to send another 
				//embed that the sprint started and that you can join

				/*
					What I might do: this one is the sign so you start joining, 
					and then the other embed is the one where it will actually 
					start for the @duration of the sprint

					And when it's finished 2 embeds again, one for saying that the sprint is 
					over and that you need to give your final lc

					And then another in 2 minutes or another time, with the results
				*/
				let serverid = message.guild.id;
				let channelname = message.channel.name;
				createSprint.createSprint(randomDuration, 60, serverid, channelname)
				setTimeout(() => {
					startSprint.startSprint(serverid, channelname, randomDuration)

					//Sending Embed in the channel of the sprint
					const Embed = new MessageEmbed()
						.setColor('#1bd321')
						.setTitle('Succes!')
						.setDescription(`
						${emoji} **De sprint is van start gegaan!** ${emoji}
						\n\n
						Je hebt nu **${randomDuration}** minuten de tijd om te lezen!
						Succes!
						\n\n\n\n
						Deze sprint is gestart door <@${user.id}>!
						`)
						.setTimestamp()
						.setFooter({text: `Message send from ${client.user.tag}!`})
					message.channel.send({embeds: [Embed]})
				}, 60000)//000
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
