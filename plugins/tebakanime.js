let fetch = require('node-fetch')
let axios = require ("axios")
let cheerio = require('cheerio')

let timeout = 180000
let poin = 500
let tiketcoin = 1
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakanime = conn.tebakanime ? conn.tebakanime : {}
  let id = m.chat
  if (id in conn.tebakanime) {
    conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakanime[id][0])
    throw false
  }
 // let res = await fetch(global.API('restapi', '/api/tebak-anime', {}, 'apikey'))
  // if (res.status !== 200) throw await res.text()
  let res = await tebakanime()
  let json = JSON.parse(JSON.stringify(res))
 // let json = await res.json()
  // if (!json.status) throw json
  let caption = `
Anime: *${json.anime}*

Ketik *${usedPrefix}nime* untuk clue
Timeout *${(timeout / 1000).toFixed(2)} detik*
Bonus: ${poin} XP
TiketCoin: ${tiketcoin}
    `.trim()
  conn.tebakanime[id] = [
    await conn.sendFile(m.chat, json.img, 'tebakanime.jpg', caption, m, false, { thumbnail: Buffer.alloc(0) }),
    json, poin,
    setTimeout(() => {
      if (conn.tebakanime[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.name}*`, conn.tebakanime[id][0])
      delete conn.tebakanime[id]
    }, timeout)
  ]
}
handler.help = ['tebakanime']
handler.tags = ['game']
handler.command = /^tebakanime/i
handler.limit = true
handler.group = true

module.exports = handler

async function tebakanime() {
    let limit = Math.floor(Math.random() * (500 - 1 + 1) + 1)
    let html = await (await axios.get('https://myanimelist.net/character.php?limit=' + limit)).data
    $ = cheerio.load(html)
    let collect = { r: [], anime: [] }
    $('table > tbody > tr > td').each(function (i, e) {
        let txt = $(e).find('a').text().trim()
        let url
        url = $(e).find('img').attr('data-srcset') ? $(e).find('img').attr('data-srcset') : $(e).find('a').attr('href')
        let low = url ? url.replace('https://', '').split('/')[1] : ''
        collect[low]?.push({ text: txt.replace(',', ''), url })
    })
    let rand = Math.floor(Math.random() * collect.r.length)
    let r = collect.r[rand]
    let anime = collect.anime[rand]
    return { 
     status: true, 
     name: r.text, 
     anime: anime.text != null ? anime.text : '', 
     img: r.url.split(',')[1].trim().split(' ')[0]
    }
}
