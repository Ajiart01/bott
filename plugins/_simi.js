/*let fetch = require('node-fetch')
let handler = m => m

handler.before = async (m) => {
    let chat = db.data.chats[m.chat]
    if (chat.simi && !chat.isBanned && !m.fromMe) {
        if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
        let res = await fetch(API(`https://simsimi.info/api/?text=${encodeURIComponent(m.text)}&lc=id`)) // let res = await fetch(API(`https://sun3haxor.my.id/simi/?query=${encodeURIComponent(m.text)}`))
        if (!res.ok) throw 'Maaf server simi sedang error..'
        let json = await res.json()
        if (json.message == 'Aku tidak mengerti apa yang kamu katakan.Tolong ajari aku.') await m.reply("simi tidak mengerti apa yang kamu katakan")
        await m.reply(`${json.message}`)
   // m.reply(`${json.success}`)
        return !0
    }
    return true
}
module.exports = handler
*/


let fetch = require('node-fetch')
let handler = m => m

handler.before = async (m) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.simi && !chat.isBanned && !m.fromMe) {
        if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
        let res = await fetch(API('https://simsimi.info', '/api/', { text: encodeURIComponent(m.text), lc: "id", cf: false }, ''))
        if (!res.ok) throw 'Maaf server simi sedang error..'
        let json = await res.json()
        if (json.message == 'Aku tidak mengerti apa yang kamu katakan.Tolong ajari aku.') await m.reply("simi tidak mengerti apa yang kamu katakan")
        await m.reply(`${json.message}`)
   // m.reply(`${json.success}`)
        return !0
    }
    return true
}
module.exports = handler
