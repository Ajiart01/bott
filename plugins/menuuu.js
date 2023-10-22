const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let levelling = require('../lib/levelling')

function ucapan() {
        const hour_now = moment.tz('Asia/Jakarta').format('HH')
        var ucapanWaktu = 'Pagi kak'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Pagi kak'
        } else if (hour_now >= '10' && hour_now <= '15') {
          ucapanWaktu = 'Siang kak'
        } else if (hour_now >= '15' && hour_now <= '17') {
          ucapanWaktu = 'Sore kak'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Selamat Petang kak'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Malam kak'
        } else {
          ucapanWaktu = 'Selamat Malam!'
        }	
        return ucapanWaktu
}

let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mani = global.db.data.users[m.sender].money
    let bri = global.db.data.users[m.sender].bank
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let menunya = `Hai, ${name}! 👋

==============================
https://chat.whatsapp.com/DoT0a1xivzlIbsWlE8XEkO
.do [ Dagangan Owner ]
.lapor [lapor fitur yang bermasalah]
.premtrial [ premium gratis ]
.donasi [ jika kamu ingin donasi ]
==============================
Use the translation if you don't understand the words.
.translate code the text you don't understand.
[for code, type .bahasa to see a list of language codes]
  
Waktu: 
${wib} WIB
${wita} WITA
${wit} WIT
Hari: ${week}
Tanggal: ${date}
Uptime: ${uptime} (${muptime})

Limit : ${limit}
Level : ${level}
XP    : ${exp}
bri   : ${bri}
Duit  : ${mani}
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
===== [ Rpg-Absen ] =====
🍒 .daily (Ⓛ)
🍒 .gethadiah
🍒 .hadiah
🍒 .monthly (Ⓛ)
🍒 .weekly (Ⓛ)


===== [ Rpg ] =====
🍒 .adventure (Ⓛ)
🍒 .pull <jumlah> (Ⓛ)
🍒 .pullall (Ⓛ)
🍒 .atm <jumlah> (Ⓛ)
🍒 .atmall (Ⓛ)
🍒 .berbisnis (Ⓛ)
🍒 .berdagang @tag (Ⓛ)
🍒 .berkebon (Ⓛ)
🍒 .feed [pet type] (Ⓛ)
🍒 .open <crate> (Ⓛ)
🍒 .heal (Ⓛ)
🍒 .inv (Ⓛ)
🍒 .kolam (Ⓛ)
🍒 .bekerja [1-30] (Ⓛ)
🍒 .leaderboard [jumlah user]
🍒 .membunuh @tag (Ⓛ)
🍒 .meracik [type] (Ⓛ)
🍒 .merampok @tag (Ⓛ)
🍒 .mulung (Ⓛ)
🍒 .nambang (Ⓛ)
🍒 .nebang (Ⓛ)
🍒 .ramuan [pet type] (Ⓛ)
🍒 .shop <sell|buy> <args> (Ⓛ)
🍒 .shopfish <sell|buy> <args> (Ⓛ)
🍒 .transfer (Ⓛ)


===== [ Game ] =====
🍒 .asahotak (Ⓛ)
🍒 .caklontong (Ⓛ)
🍒 .crusade [nama room] (Ⓛ)
🍒 .delttt (Ⓛ)
🍒 .duelhero (Ⓛ)
🍒 .dungeon [nama room] (Ⓛ)
🍒 .family100 (Ⓛ)
🍒 .bosraid <mode> (Ⓛ)
🍒 .fighting (Ⓛ)
🍒 .hunter (Ⓛ)
🍒 .kill monster (Ⓛ)
🍒 .mw <select><number><number> (Ⓛ)
🍒 .minesweeper <select><number><number> (Ⓛ)
🍒 .pancing <type> (Ⓛ)
🍒 .spin <jumlah> (Ⓛ)
🍒 .judi <jumlah> (Ⓛ)
🍒 .lengkapikalimat (Ⓛ)
🍒 .math <mode> (Ⓛ)
🍒 .siapakahaku (Ⓛ)
🍒 .sambungkata
🍒 .suit (Ⓛ)
🍒 .suitpvp @tag (Ⓛ)
🍒 .susunkata (Ⓛ)
🍒 .tebakanime (Ⓛ)
🍒 .tebakbendera (Ⓛ)
🍒 .tebakgambar (Ⓛ)
🍒 .tebakgame (Ⓛ)
🍒 .tebakkata (Ⓛ)
🍒 .tebakkimia (Ⓛ)
🍒 .tebaklagu (Ⓛ)
🍒 .tebaklirik (Ⓛ)
🍒 .tebaklogo (Ⓛ)
🍒 .tekateki (Ⓛ)
🍒 .tictactoe [custom room name] (Ⓛ)
🍒 .ttt [custom room name] (Ⓛ)


===== [ Exp, Limit & Pay ] =====
🍒 .bayarexpired (Ⓛ)
🍒 .buy <jumlah limit>
🍒 .buyall
🍒 .cupon [@user] (Ⓛ)
🍒 .dompet [@user]
🍒 .exp [@user]
🍒 .levelup
🍒 .limit [@user]


===== [ Sticker ] =====
🍒 .attp <teks> (Ⓛ)
🍒 .emojimix (Ⓛ)
🍒 .getexif (Ⓛ)
🍒 .semoji (Ⓛ)
🍒 .smeme (Ⓛ)
🍒 .stickercry (Ⓛ)
🍒 .stickerhug (Ⓛ)
🍒 .stickerkiss (Ⓛ)
🍒 .stiker (caption|reply media) (Ⓛ)
🍒 .stiker <url> (Ⓛ)
🍒 .stikergif (caption|reply media) (Ⓛ)
🍒 .stikergif <url> (Ⓛ)
🍒 .stikerly (Ⓛ) (Ⓟ)
🍒 .stikertelegram <url> (Ⓛ) (Ⓟ)
🍒 .triggered (Ⓛ)
🍒 .ttp <teks> (Ⓛ)
🍒 .wanted (Ⓛ)
🍒 .wm <packname>|<author> (Ⓛ)


===== [ Main ] =====
🍒 .afk [alasan] (Ⓛ)
🍒 .buktiss
🍒 .ceksn (Ⓛ)
🍒 .menu
🍒 .ref
🍒 .daftar <nama>.<umur>
🍒 .sewa
🍒 .unreg <SERIAL NUMBER>


===== [ Kerang Ajaib ] =====
🍒 .apakah <teks>? (Ⓛ)
🍒 .kapan <text>? (Ⓛ)
🍒 .kapankah <text>? (Ⓛ)
🍒 .siapa <teks> (Ⓛ)
🍒 .siapakah <teks> (Ⓛ)


===== [ Quotes ] =====
🍒 .quotesanime (Ⓛ)
🍒 .bucin (Ⓛ)
🍒 .kata <opsi> (Ⓛ)
🍒 .quotes (Ⓛ)


===== [ Group ] =====
🍒 .add @user (Ⓛ)
🍒 .demote <@user>
🍒 .enable <option>
🍒 .disable <option>
🍒 .cekexpired
🍒 .infogrup
🍒 .grouplist
🍒 .grouptime <open/close> <number>
🍒 .group open / close
🍒 .inspect (Ⓛ)
🍒 .kick @user
🍒 .gc
🍒 .group
🍒 .linkgroup
🍒 .listadmin
🍒 .listonline (Ⓛ)
🍒 .hidetag [teks] (Ⓛ)
🍒 .promote <@user>
🍒 .readviewonce
🍒 .revoke
🍒 .setdeskgroup <text>
🍒 .setppgroup
🍒 .setwelcome <teks>
🍒 .tagall <pesan>
🍒 .tagme


===== [ Internet ] =====
🍒 .anime <judul> (Ⓛ)
🍒 .brainly <soal> (Ⓛ)
🍒 .cecan (Ⓛ)
🍒 .cerpen (Ⓛ)
🍒 .chordlagu (Ⓛ)
🍒 .cogan (Ⓛ)
🍒 .drakor [text] (Ⓛ)
🍒 .get <url> (Ⓛ)
🍒 .gimage <search> (Ⓛ)
🍒 .githubstalk (Ⓛ)
🍒 .google <search> (Ⓛ)
🍒 .happymod [text]
🍒 .igstalk <username> (Ⓛ)
🍒 .jarak <dari> <ke> (Ⓛ)
🍒 .kbbi <kata> (Ⓛ)
🍒 .kodepos <kota> (Ⓛ)
🍒 .loli (Ⓛ)
🍒 .lirik <teks> (Ⓛ)
🍒 .peta <wilayah> (Ⓛ)
🍒 .neko (Ⓛ)
🍒 .pinterest <text> (Ⓛ)
🍒 .playstore (Ⓛ)
🍒 .ppcouple (Ⓛ)
🍒 .puisi (Ⓛ)
🍒 .resepread <url> (Ⓛ)
🍒 .resepsearch <query> (Ⓛ)
🍒 .spesifikasi <query> (Ⓛ)
🍒 .ss <url> (Ⓛ)
🍒 .ssf <url> (Ⓛ)
🍒 .tiktokstalk (Ⓛ)
🍒 .twitterstalk (Ⓛ)
🍒 .waifu (Ⓛ)
🍒 .wikipedia <text> (Ⓛ)


===== [ Anonymous Chat ] =====
🍒 .start,skip,stop,next
🍒 .sendkontak
🍒 .menfess <nomor|nama pengirim|pesan>


===== [ Downloader ] =====
🍒 .facebook <url> (Ⓛ)
🍒 .fb2 <url> (Ⓛ)
🍒 .gitclone <url> (Ⓛ)
🍒 .ig <url> (Ⓛ)
🍒 .igstory <username> (Ⓛ)
🍒 .joox <judul> (Ⓛ)
🍒 .lirplay (Ⓛ)
🍒 .lirplay2 (Ⓛ)
🍒 .mediafire <url> (Ⓛ)
🍒 .play <pencarian> (Ⓛ)
🍒 .sfile (Ⓛ)
🍒 .soundcloud (Ⓛ)
🍒 .tiktok <url> (Ⓛ)
🍒 .twitter <url> (Ⓛ)
🍒 .ytmp3 (Ⓛ)
🍒 .ytshorts (Ⓛ)
🍒 .ytmp4 (Ⓛ)
🍒 .zippyshare <url> (Ⓛ) (Ⓟ)


===== [ Berita ] =====
🍒 .hoax (Ⓛ)
🍒 .kompasnews (Ⓛ)
🍒 .liputan6 (Ⓛ)
🍒 .metronews (Ⓛ)
🍒 .tribunnews (Ⓛ)


===== [ Tools ] =====
🍒 .bg (color) (Ⓛ) (Ⓟ)
🍒 .calc <expression> (Ⓛ)
🍒 .carigrup <pencarian> (Ⓛ)
🍒 .del (Ⓛ)
🍒 .delete (Ⓛ)
🍒 .obfuscator
🍒 .ephe <0> <1> <7> <90>
🍒 .githubsearch <pencarian> (Ⓛ)
🍒 .kalkulator <soal> (Ⓛ)
🍒 .mycontact (Ⓛ)
🍒 .nobg (reply/caption) (Ⓛ) (Ⓟ)
🍒 .nowa (Ⓛ)
🍒 .ocr (Ⓛ)
🍒 .totext (Ⓛ)
🍒 .qr <teks> (Ⓛ)
🍒 .qrcode <teks> (Ⓛ)
🍒 .readmore <teks>|<teks> (Ⓛ)
🍒 .resize <width> <height>
🍒 .q (Ⓛ)
🍒 .sauce <reply/send image> (Ⓛ)
🍒 .spamcall <nomor> (Ⓛ) (Ⓟ)
🍒 .spammerall <nomor> (Ⓛ) (Ⓟ)
🍒 .tesdelete
🍒 .tinyurl <link> (Ⓛ)
🍒 .todoc <namafile> <reply chat> (Ⓛ)
🍒 .todocument <namafile> <reply chat> (Ⓛ)
🍒 .totalfitur (Ⓛ)
🍒 .tourl (Ⓛ)
🍒 .translate <kodebahasa> <teks> (Ⓛ)
🍒 .tts <lang> <teks> (Ⓛ)
🍒 .upload (caption|reply media) (Ⓛ)
🍒 .whatsmusic <caption/reply> (Ⓛ)
🍒 .ytsearch (Ⓛ)


===== [ Fun ] =====
🍒 .alay (Ⓛ)
🍒 .artinama [name] (Ⓛ)
🍒 .alay (Ⓛ)
🍒 .dare (Ⓛ)
🍒 .halah <teks> (Ⓛ)
🍒 .hilih <teks> (Ⓛ)
🍒 .huluh <teks> (Ⓛ)
🍒 .heleh <teks> (Ⓛ)
🍒 .holoh <teks> (Ⓛ)
🍒 .jadian (Ⓛ)
🍒 .namaninja <teks> (Ⓛ)
🍒 .nomorhoki (Ⓛ)
🍒 .rate (Ⓛ)
🍒 .reaction <reply> (Ⓛ)
🍒 .truth (Ⓛ)
🍒 .umur [tahun-bulan-tanggal]


===== [ Database ] =====
🍒 .delcmd <teks>  (Ⓟ)
🍒 .infocmd <text>
🍒 .listcmd
🍒 .unlockcmd
🍒 .lockcmd
🍒 .setcmd <teks>  (Ⓟ)


===== [ Voting ] =====
🍒 .cekvote
🍒 .hapusvote
🍒 .mulaivote [alasan] (Ⓛ)
🍒 .upvote
🍒 .devote


===== [ Absen ] =====
🍒 .absen
🍒 .cekabsen
🍒 .hapusabsen
🍒 .mulaiabsen [teks]


===== [ Catatan ] =====
🍒 .buatcatatan <title|isi>
🍒 .hapuscatatan title
🍒 .lihatcatatan <title>


===== [ Jadian ] =====
🍒 .cekpacar (Ⓛ)
🍒 .ikhlasin (Ⓛ)
🍒 .putus (Ⓛ)
🍒 .tembak @tag (Ⓛ)
🍒 .terima @tag (Ⓛ)
🍒 .tolak @tag (Ⓛ)


===== [ Islami ] =====
🍒 .alquran <114> <1>
🍒 .asmaulhusna [nomor]
🍒 .hadis
🍒 .kisahnabi <name> (Ⓛ)
🍒 .jadwalsalat <kota> (Ⓛ)


===== [ Owner ] =====
🍒 .addexpired <angka> [jid]
🍒 .prem @tag|days
🍒 .banchat
🍒 .ban @tag|days
🍒 .block <@user>
🍒 .blocklist
🍒 .broadcast <teks>
🍒 .bc <teks>
🍒 .broadcastchats <teks>
🍒 .bcchats <teks>
🍒 .broadcastgroup <teks>
🍒 .bcgc <teks>
🍒 .clearchat
🍒 .clearsessions
🍒 .cleartmp
🍒 .debounce
🍒 .delfitur (file)
🍒 .unprem
🍒 .enable <option>
🍒 .disable <option>
🍒 .delexp
🍒 .expired <hari>
🍒 .getdatabase
🍒 .getplugin <teks>
🍒 .getsessi
🍒 .resetlimit
🍒 .reset
🍒 .savefile <path>
🍒 .sf <path>
🍒 .setmenu <teks>
🍒 .setmenubefore <teks>
🍒 .setmenuheader <teks>
🍒 .setmenubody <teks>
🍒 .setmenufooter <teks>
🍒 .setmenuafter <teks>
🍒 .setbotpp
🍒 .setwelcome <teks>
🍒 .simulate <event> [@mention]
🍒 .otransfer
🍒 .unbanchat
🍒 .unban
🍒 .unblock <@user>


===== [ Advanced ] =====
🍒 >
🍒 =>


===== [ Info ] =====
🍒 .allprofile [@user] (Ⓛ)
🍒 .listbanned
🍒 .infocovid <country>
🍒 .owner
🍒 .creator
🍒 .infocuaca <city> (Ⓛ)
🍒 .database (Ⓛ)
🍒 .user (Ⓛ)
🍒 .donasi
🍒 .infobot (Ⓛ)
🍒 .infogempa (Ⓛ)
🍒 .listpremium (Ⓛ)
🍒 .mfg <text>
🍒 .profile [@user] (Ⓛ)
🍒 .report <fitur> (Ⓛ)
🍒 .rules
🍒 .ping
🍒 .speed
🍒 .speedtest
🍒 .topcmd [angka]


===== [ Audio ] =====
🍒 .tomp3
🍒 .toaudio
🍒 .tovn
🍒 .todocument
🍒 .bass [vn] (Ⓛ)
🍒 .blown [vn] (Ⓛ)
🍒 .deep [vn] (Ⓛ)
🍒 .earrape [vn] (Ⓛ)
🍒 .fast [vn] (Ⓛ)
🍒 .fat [vn] (Ⓛ)
🍒 .nightcore [vn] (Ⓛ)
🍒 .reverse [vn] (Ⓛ)
🍒 .robot [vn] (Ⓛ)
🍒 .slow [vn] (Ⓛ)
🍒 .smooth [vn] (Ⓛ)
🍒 .tupai [vn] (Ⓛ)
🍒 .vibra [vn] (Ⓛ)


===== [ Maker ] =====
🍒 .carbon <text> (Ⓛ)
🍒 .tahta <teks> (Ⓛ)
🍒 .lolice
🍒 .nulis <teks> (Ⓛ)
🍒 .textpro <effect> <text>
🍒 .togif (reply)
🍒 .toimg (reply) (Ⓛ)


Made with ❤ by: ZidanDev
`
let baileys = require('@adiwajshing/baileys')
let money = 500000000
  let note = {
    "extendedTextMessage": {
      "text": menunya
} 
  }
 let {key, message} = await baileys.generateWAMessageFromContent(m.chat, {
  "requestPaymentMessage": {
    "currencyCodeIso4217": "USD",
    "amount1000": money * 1000,
    "requestFrom": m.sender,
    "noteMessage": note,
    "expiryTimestamp": "0",
    "amount": {
      "value": money * 1000,
      "currencyCode": "USD"
    },
  }
}, {quoted:m})
 //conn.relayMessage(m.chat, { text:menunya }, {contextInfo:{forwardingScore: 9999,isForwarded:true,,externalAdReply:{mediaType:1,title:'test', thumbnailUrl:'https://telegra.ph/file/1cb1883766fd1ed6fef57.jpg', sourceUrl:'https://instagram.com/zinyut_', renderLargerThumbnail:true}}})
 //{contextInfo:{isForwarded:true,forwardingScore: 9999,externalAdReply:{mediaType:1,title:a,thumbnail:{url:b},thumbnailUrl:b,sourceUrl:c,renderLargerThumbnail:true}
//return conn.relayMessage(key.remoteJid, message, {messageId: key.id})

// const sendMessageV2 = async (chatId, message, options = {}) => {
//     let generate = await generateWAMessage(chatId, message, options)
//     let type2 = getContentType(generate.message)
//     if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
//     if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
//     return await conn.relayMessage(chatId, generate.message, { messageId: generate.key.id })
//       }

//conn.relayMessage(m.chat, { text:menunya }, {contextInfo:{forwardingScore: 9999,isForwarded:true,,externalAdReply:{mediaType:1,title:'test', thumbnailUrl:'https://telegra.ph/file/1cb1883766fd1ed6fef57.jpg', sourceUrl:'https://instagram.com/zinyut_', renderLargerThumbnail:true}}})


 } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(mendqu)$/i

handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}


