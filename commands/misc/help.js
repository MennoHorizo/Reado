// Deconstructing prefix from config file to use in help command
const prefix = process.env.PREFIX

// Deconstructing MessageEmbed to create embeds within this command
const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "help",
	description: "List all commands of bot or info about a specific command.",
	aliases: ["commands"],
	usage: "",
	cooldown: 5,

	/**
	 * @description Executes when the command is called by command handler.
	 * @author Naman Vrati
	 * @param {Object} message The Message Object of the command.
	 * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
	 */

	execute(message, args) {
		const { commands, client} = message.client;

		// If there are no args, it means it needs whole help command.

		if (!args.length) {
			/**
			 * @type {Object}
			 * @description Help command embed object
			 */

			let helpEmbed = new MessageEmbed()
				.setColor(0x4286f4)
				.setTitle("List of all my commands")
				.setDescription(
					"`" + commands.map((command) => command.name).join("`, `") + "`"
				)
				.addField(
					"Usage",
					`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`
				)
			message.channel.send({embeds: [helpEmbed]})
		}

		// If argument is provided, check if it's a command.

		/**
		 * @type {String}
		 * @description First argument in lower case
		 */

		const name = args[0].toLowerCase();

		/**
		 * @type {Object}
		 * @description The command object
		 */

		const command =
			commands.get(name) ||
			commands.find((c) => c.aliases && c.aliases.includes(name));

		// If it's an invalid command.

		if (!command) {
			return message.reply({ content: "That's not a valid command!" });
		}

		/**
		 * @type {Object}
		 * @description Embed of Help command for a specific command.
		 */

		let commandEmbed = new MessageEmbed()
			.setColor(0x4286f4)
			.setTitle("Command Help");

		if (command.description)
			commandEmbed.setDescription(`${command.description}`);

		if (command.aliases)
			commandEmbed
				.addField("Aliases", `\`${command.aliases.join(", ")}\``, true)
				.addField("Cooldown", `${command.cooldown || 3} second(s)`, true);
		if (command.usage)
			commandEmbed.addField(
				"Usage",
				`\`${prefix}${command.name} ${command.usage}\``,
				true
			);

		// Finally send the embed.

		message.channel.send({ embeds: [commandEmbed] });
	},
};
