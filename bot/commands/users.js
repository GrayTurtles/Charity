const Discord = require('discord.js');

const pxls = require('../../handlers/pxls');

module.exports = {
	name: 'users',
	description: 'Gets the number of users placing on the canvas.',
	aliases: [],
	guildOnly: true,
	permissions: '',
	cooldown: 3,
	options: [],
	async execute(interaction) {
		if (!interaction.deferred && !interaction.replied) await interaction.deferReply();

		const users = await pxls.users();

		const embed = new Discord.MessageEmbed()
			.setColor(process.env.BOT_COLOR)
			.setTitle('Users!')
			.setDescription(`There are ${users} user(s) on the site right now.`);

		await interaction.editReply({ embeds: [embed] });
	},
};