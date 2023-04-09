// read all
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('getAssingments')
		.setDescription('Displays a list of assinments for the class!'),
	async execute(interaction) {
		var options = {encoding:'utf-8', flag:'r'};
    		var buffer = fs.readFileSync(assingmentList.txt, options);
    		await interaction.reply('"File content : " + buffer;');
	},
};