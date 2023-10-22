let fetch = require('node-fetch')
let winScore = 1000
async function handler(m) {
    this.game = this.game ? this.game : {}
    let id = 'family100_' + m.chat
    if (id in this.game) {
        this.sendButton(m.chat, 'Masih ada kuis yang belum terjawab di chat ini', wm, 'https://telegra.ph/file/a111cb2779252312d273a.jpg', [['Menyerah', 'Nyerah']], this.game[id].msg, { asLocation: true })
        // this.reply(m.chat, 'Masih ada kuis yang belum terjawab di chat ini', this.game[id].msg)
        throw false
    }
  let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
*Soal:* 
${json.soal}

Terdapat *${json.jawaban.length}* jawaban${json.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}

+${winScore} Money tiap jawaban benar
    `.trim()
    this.game[id] = {
        id,
        msg: await conn.sendButton(m.chat, caption, wm, 'https://telegra.ph/file/a111cb2779252312d273a.jpg', [['Menyerah', 'Nyerah']], m, { asLocation: true }), // m.reply(caption),
        ...json,
        terjawab: Array.from(json.jawaban, () => false),
        winScore,
    }
}
handler.help = ['family100']
handler.tags = ['game']
handler.command = /^family100$/i
handler.limit = true
handler.group = true

module.exports = handler
