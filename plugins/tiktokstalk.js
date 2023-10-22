const fetch = require('node-fetch')
let handler = async (m, { conn, text, command, usedPrefix }) => {
if (!text) throw 'Input username!'
try {
let a = await fetch(`https://m.caliph.my.id/api/tiktokuser.php?usr=${text}`)
let json= await a.json()
let src = `
▢ *Verified:* ${json.result.user.verified}
▢ *ID:* ${json.result.user.id}
▢ *Username:* ${json.result.user.uniqueId}
▢ *Nickname:* ${json.result.user.nickname}
▢ *Followers:* ${json.result.stats.followerCount}
▢ *Following:* ${json.result.stats.followingCount}
▢ *Heart:* ${json.result.stats.heartCount}
▢ *Posting Video:* ${json.result.stats.videoCount}
`.trim()
conn.sendMediaFile(m.chat, json.result.user.avatarLarger, null, src, m)
} catch {
  throw 'Username tidak ditemukan\nAtau pencarian tidak ditemukan..'
} 
}
handler.help = ['tiktokstalk']
handler.tags = ['internet']
handler.command = /^ttstalk|tiktokstalk$/i
handler.limit = true

module.exports = handler



/*
let axios = require('axios')
let cheerio = require('cheerio')

let handler = async (m, { conn, text }) => {
  if (!text) throw 'Input username!'
  let res = await tiktokStalk(text), img = res?.pp_user
  delete res.pp_user
  let txt = Object.keys(res).map((v) => `*${v.toUpperCase()}:* ${res[v]}`).join`\n`
  await conn.sendFile(m.chat, img, '', txt, m)
}
handler.help = ['tiktokstalk']
handler.tags = ['internet']
handler.command = /^t(tstalk|iktokstalk)$/i
handler.limit = true

module.exports = handler

async function tiktokStalk(user) {
  let res = await axios.get(`https://urlebird.com/user/${user}/`)
  let $ = cheerio.load(res.data), obj = {}
  obj.pp_user = $('div[class="col-md-auto justify-content-center text-center"] > img').attr('src')
  obj.name = $('h1.user').text().trim()
  obj.username = $('div.content > h5').text().trim()
  obj.followers = $('div[class="col-7 col-md-auto text-truncate"]').text().trim().split(' ')[1]
  obj.following = $('div[class="col-auto d-none d-sm-block text-truncate"]').text().trim().split(' ')[1]
  obj.description = $('div.content > p').text().trim()
  return obj
}
*/
