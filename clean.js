const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "clear",
    category: "moderação",
    run: async (client, message, args) => {
        if (!message.member.permissions.has("MANAGE_MESSAGES")) // permissão para fazer o comando
            return message.channel.send(
                `Você não tem as permissões corretas para fazer esta ação, ${message.author.username}` // aaaa
            );
        if (!args[0]) {
            return message.channel.send(`Por favor, insira o comando novamente e insira um valor de 1 a 1000`)
        }

        let deleteAmount;

        if (parseInt(args[0]) > 1000 ) {
            deleteAmount = 1000;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        await message.channel.bulkDelete(deleteAmount, true);

        const embed = new MessageEmbed()
            .setTitle(`${message.author.username}`)
            .setThumbnail(message.author.displayAvatarURL())
            .setDescription(`${message.author} as ${deleteAmount} mensagens 
            foram excluídas com sucesso`)
            .setFooter(message.author.username, message.author.displayAvatarURL())
            .setColor('#f2f2f2')
        await message.channel.send(embed)
        .then(msg => msg.delete({timeout: 5000}))
    }
}
