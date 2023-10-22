// let fs = require('fs')
// let moment = require('moment-timezone')
// let fetch = require('node-fetch')

// let handler = m => m

// handler.all = async function (m) {
//     if (m.chat.endsWith('status@broadcast')) {
//         console.log('Status Whatsapp..')
//     }
//     let setting = db.data.settings[this.user.jid]
//     let user = db.data.users[m.sender]
    
    
// // update status
//     if (new Date() * 1 - setting.status > 1000) {
//         let _uptime = process.uptime() * 1000
//         let uptime = clockString(_uptime)
//         await this.setBio(`🗓️Runtime ${uptime} | Mode : ${opts['self'] ? 'Private' : setting.groupOnly ? 'Hanya Grup' : 'Publik'} | Aine`).catch(_ => _)
//         setting.status = new Date() * 1
//     }
    
//     // backup db
//      if (setting.backup) {
//         if (new Date() * 1 - setting.backupDB > 1000 * 60 * 5) {
//             let d = new Date
//             let date = d.toLocaleDateString('id', {
//                 day: 'numeric',
//                 month: 'long',
//                 year: 'numeric'
//             })
//             await db.write()
//             let a = this.reply(owner[0] + '@s.whatsapp.net', `Database: ${date}`, null)
//             let sesi = await fs.readFileSync('./database.json')
//             return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'database.json' }, { quoted: a })
//             setting.backupDB = new Date() * 1
//         }
//     }

//     return !0
// }

// module.exports = handler
// function ucapan() {
//     const time = moment.tz('Asia/Jakarta').format('HH')
//     res = "Selamat dinihari"
//     if (time >= 4) {
//         res = "Selamat pagi"
//     }
//     if (time > 10) {
//         res = "Selamat siang"
//     }
//     if (time >= 15) {
//         res = "Selamat sore"
//     }
//     if (time >= 18) {
//         res = "Selamat malam"
//     }
//     return res
// }

// function clockString(ms) {
//     let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
//     let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
//     let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
//     return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
// }

// function pickRandom(list) {
//     return list[Math.floor(Math.random() * list.length)]
// }
