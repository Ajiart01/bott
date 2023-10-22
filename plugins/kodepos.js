/*let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*Perintah ini untuk mencari kode pos berdasarkan kota/pencarian*\n\ncontoh:\n${usedPrefix + command} Lamongan`
    let res = await fetch(global.API('xteam', '/kodepos', { q: text }, 'APIKEY'))
    if (res.status != 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    let mes = json.result.map((v, i) => `${i + 1}. Provinsi: ${v.province}\nKota: ${v.city}\nKecamatan: ${v.subdistrict}\nPerkotaan: ${v.urban}\nKode Pos: ${v.postalcode}`).join('\n\n')
    m.reply(mes)
}
handler.help = ['kodepos <kota>']
handler.tags = ['tools']
handler.command = /^kodepos$/i

handler.limit = true

module.exports = handler*/

let scrap = require("../lib/scraper_kodepos")
let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply(`*Perintah ini untuk mencari kode pos berdasarkan kota/pencarian*\n\ncontoh:\n${usedPrefix + command} Lamongan`)

var s = await scrap.kodepos(text)
let capt = "*KODEPOS SEARCH*\n\n"
for (let i = 0; i < s.length; i++) {
capt +=`*Provinsi:* ${s[i].province}\n*Kota:* ${s[i].city}\n*kecamatan:* ${s[i].subdistrict}\n*perkotaan:* ${s[i].urban}\n*kode:* ${s[i].postalcode}\n\n`
}
m.reply(capt)
}

handler.help = ['kodepos <kota>']
handler.tags = ['internet']
handler.command = /^kodepos$/i
handler.limit = true

module.exports = handler