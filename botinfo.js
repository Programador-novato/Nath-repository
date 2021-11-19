const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setThumbnail("https://cdn.discordapp.com/avatars/910273401833267200/d6d2241030aad7f8e53aa14ce5e15d4e.png?size=1024")
    .setDescription(`Olá ${message.author}, abaixo está uma listinha sobre mim:`)
    .setTimestamp()
    .setFooter(`Comando feito por: ${message.author.username}`)
    .addFields(
        {
            name: 'Meu nome e minha #',
            value: `${client.user.tag}`,
            inline: false
        },
        {
            name: 'Servidores:',
            value: `Estou em **${client.guilds.cache.size}** servidores.`,
            inline: false
        },
        {
            name: 'Canais:',
            value: `Tenho **${client.channels.cache.size}** canais de texto.`,
            inline: false
        },
        {
            name: 'Usuários:',
            value: `Cuido de **${client.users.cache.size}** usuários.`,
            inline: false
        },
        {
            name: 'Meu ping:',
            value: `**${Math.round(client.ws.ping)}** ms`,
            inline: false
        },
        {
            name: 'Meu criador:',
            value: '**@Pomo de ouro#5947**',
            inline: false
        },
        {
           name: 'Foto de perfil',
           value: 'Eu usei uma foto do pinterest, não sei se é uma fanart de algum personagem, mas eu adorei. Link: https://br.pinterest.com/pin/798122365222724734/',
           inline: false
        }
    )
    message.channel.send(embed);
}

//botinfo = infobot
