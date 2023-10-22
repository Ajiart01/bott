let gplay = require('google-play-scraper')

let handler = async (m, { conn, text }) => {
	if (!text) throw 'Input Query'
	let res = await gplay.search({ term: text })
	if (!res.length) throw `Query "${text}" not found :/`
	let opt = { contextInfo: { externalAdReply: { title: res[0].title, body: res[0].summary, thumbnail: (await conn.getFile(res[0].icon)).data, sourceUrl: res[0].url }}}
	res = res.map((v) => `*Title:* ${v.title}\n*Dev:* ${v.developer}\n*Price:* ${v.priceText}\n*Score:* ${v.scoreText}\n*Link:* ${v.url}`).join`\n\n`
	m.reply(res, null, opt)
}
handler.help = ['playstore']
handler.tags = ['internet']
handler.command = /^(playstore)$/i
handler.limit = true

module.exports = handler


/*const hx = require('hxz-api')
let handler = async (m, { conn, text, usedPrefix, command }) => {
//let txt = args.join` `
if(!text) return m.reply('Text nya kak?')
    /*        let play = await hx.playstore(`${txt}`)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 *PLAY STORE* 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }*/
  /*var a = await hx.playstore(text)
var b = a.map((v, i) => `*${i + 1}. 「 PLAY STORE 」*\n📜 Title: _${v.name}_\n🧑‍💻 Developer: _${v.developer}_\n*🔗 Link:* ${v.link}`).join('\n❉─────────────────────❉\n')
  m.reply(b)
      //      conn.reply(store)
            }
handler.help = ['playstore']
handler.tags = ['internet']
handler.command = /^(playstore)$/i
handler.limit = true
handler.group = false

module.exports = handler*/
