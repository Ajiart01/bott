const cheerio = require('cheerio')
const fetch = require('node-fetch')
const axios = require('axios')

let handler = async (m, { conn, text, args, usedPrefix, command }) => {

    let a = await hoax()
    let b = JSON.parse(JSON.stringify(a))
    let c = await conn.rand(b)
    let { title, desc, date, link, thumbnail } = c
    let txt = `📺 *Hoax*
📢 *Judul:* ${title} 
📘 *Deskripsi:* ${desc}
🗓️ *Tanggal:* ${date}
📎 *Link:* ${link}`
conn.sendButton(m.chat, txt, wm, thumbnail, [['Hoax', '.hoax']], m, {jpegThumbnail: await(await fetch(thumbnail)).buffer()})
}
handler.help = ['hoax']
handler.tags = ['berita']
handler.command = /^hoax$/i
handler.limit = true

module.exports = handler

function hoax() {
return new Promise((resolve, reject) => {
axios.get(`https://turnbackhoax.id/`).then( ainehh => {
const $ = cheerio.load(ainehh.data)
hasil = []
$("figure.mh-loop-thumb").each(function(a, b) {
$("div.mh-loop-content.mh-clearfix").each(function(c, d) {
link = $(d).find("h3.entry-title.mh-loop-title > a").attr('href');
img = $(b).find("img.attachment-mh-magazine-lite-medium.size-mh-magazine-lite-medium.wp-post-image").attr('src');
title = $(d).find("h3.entry-title.mh-loop-title > a").text().trim();
desc = $(d).find("div.mh-excerpt > p").text().trim();
date = $(d).find("span.mh-meta-date.updated").text().trim();
const Data = {

title: title,
thumbnail: img,
desc: desc,
date: date,
link: link
}
hasil.push(Data)
})
})
resolve(hasil)
}).catch(reject)
});
}
