const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();
const content = args.join(" ");

if (!args[0]) {
  return message.channel.send(`${message.author}, escreva a sugestão após o comando`)
} else if (content.length > 1000) {
  return message.channel.send(`${message.author.username}, forneça uma sugestão de no máximo 1000 caracteres.`);
} else {
  var canal = message.guild.channels.cache.find(ch => ch.id === "859113217771176006"); //id do canal, tem que alterar
  const msg = await canal.send(
    new Discord.MessageEmbed()
    .setColor("#68AFD4")
    .addField("Autor:", message.author)
    .addField("Conteúdo", content)
    .setFooter("ID do Autor: " + message.author.id + " | Para enviar sua sugestão também use '.ideia'" + " | Para votar basta reagir" + " | 📗 - aprovado|📙 -em análise|📘 - não se sabe se é uma boa ideia|📕 - negado")
    .setTimestamp()
  );
  await message.channel.send(`${message.author} a mensagem foi enviada com sucesso! Consulte mais ideias em "#《❗》sugestões"`);

  const emojis = ["📗", "📙", "📘", "📕"];

  for (const i in emojis) {
    await msg.react(emojis[i])
  }
}
}
