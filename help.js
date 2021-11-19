const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setTitle(`Ajuda aos membros`)
    .setDescription(`${message.author} Estou aqui para ajudar a staff. Antes de perguntar algo, verifique que a resposta já não está aqui 😉
    
    Aperte em uma reação pra ver tal pagina 
    
     ️💻  - Comandos

      📢  - Avisos`)
    .setColor("#4082f0")    
    message.channel.send(embed).then(msg => {
      msg.react("💻")
      msg.react("📢")

      let filtro1 = (r, u) => r.emoji.name === '💻' && u.id === message.author.id;
      let filtro2 = (r, u) => r.emoji.name === '📢' && u.id === message.author.id

      let coletor = msg.createReactionCollector(filtro1);
      let coletor2 = msg.createReactionCollector(filtro2)
      

       coletor2.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Avisos`)
        .setDescription(`
        **AVISOS DO BOT**
        _Sem Avisos_
        
        **AVISOS DO SERVIDOR**
        _Sem avisos_`)
        .setColor("RANDOM")

        msg.edit(embed)
      })

      coletor.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Comandos `)
        .setDescription(`${message.author} **Essa é minha lista de comandos:**
    

    **n!anunciar**
    Eu anuncio algo em um canal escolhido por você!

    **n!infobot** ou **n!botinfo**
    Mostra algumas informações minhas!

    **n!emoji**
    Eu pesquiso os emojis presentes no servidor.

    **n!ideia**
    Você manda uma sugestão para melhorar o servidor e eu posto no canal escolhido pelo adiministrador do servidor.
    
    **n!infoserver** ou **n!serverinfo**
    Mostro algumas informações do servidor!
    
    **n!infouser** ou **n!userinfo**
    Mostro as informações do membro que você marcar depois do comando.

    **n!recado**
    Mande um recado no canal selecionado pela staff

    **n!say**
    Me faça dizer algo, mas não coisas feias por favor.
    
    **n!say2** 
    O que você falar será enviado em embed (quadradinho)

    **n!uptime**
    Mostro há quanto tempo eu estou online.

   `)
        .setColor("#08ddf5")
        
        msg.edit(embed)
      })

    })
  }
