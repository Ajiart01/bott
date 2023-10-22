let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn, args, usedPrefix, command, text }) => {
                       
                    let timexx = 1000
                    let timecx = 60000
                    let timezx = 120000
                    let timexz = 1000
                    let timecz = 60000
                    let timezz = 120000
                    let timecc = 1000
                    let timexc = 60000
                    let timezc = 120000
                    let type = (args[0] || '').toLowerCase()
                        switch (type) {
                           case 'easy':
                                          let kucinge = global.db.data.users[m.sender].kucing
                                          let rubahs = global.db.data.users[m.sender].rubah
                                          let kudas = global.db.data.users[m.sender].kuda 
                                          let __waktuez = (new Date - global.db.data.users[m.sender].lasteasy)
                                          let _waktuez = (600000 - __waktuez)
                                          let waktuez = clockString(_waktuez)
                                          if (kucinge == 0 || kudas == 0 || rubahs == 0) return m.reply('*Kamu belum memiliki Pet Kucing , Pet Kuda Dan Pet Rubah*')
                                          if (new Date - global.db.data.users[m.sender].lasteasy > 600000) {
                                          if (global.db.data.users[m.sender].kucing > 4) {
                                          if (global.db.data.users[m.sender].kuda > 4) {
                                          if (global.db.data.users[m.sender].rubah > 4) {
                                          let _easyz = `${pickRandom(['1','2'])}`.trim()
                                          let _easyx = `${pickRandom(['1','2'])}`.trim()
                                          let _easyc = `${pickRandom(['1','2'])}`.trim()
                                          let _makananz = `${Math.floor(Math.random() * 20)}`.trim()
                                          let _expz = `${Math.floor(Math.random() * 5000)}`.trim()
                                          let _petz = `${pickRandom(['1','2','3','4','5'])}`.trim()
                                          let _boxsz = `${Math.floor(Math.random() * 10)}`.trim()
                                          let _legendaryz = `${Math.floor(Math.random() * 20)}`.trim()
                                          let _moneyz = `${Math.floor(Math.random() * 1000000)}`.trim()
                                          let _bospetz = `${pickRandom(['50', '49', '48', '47', '46', '45', '44', '43', '42', '41', '40','39','38','37','36','35','34','33','32','31','30'])}`.trim()
                                          let bospetz = (_bospetz * 1)
                                          let makananz = (_makananz * 1)
                                          let boxsz = (_boxsz * 1)
                                          let legendaryz = (_legendaryz * 1)
                                          let expz = (_expz * 1)
                                          let petz = (_petz * 1)
                                          let moneyz = (_moneyz * 1)
                                          let easyz = (_easyz * 1)
                                          let easyx = (_easyx * 1)
                                          let easyc = (_easyc * 1)
                                                  global.db.data.users[m.sender].kucing -= easyz * 1
                                                  global.db.data.users[m.sender].kuda -= easyx * 1
                                                  global.db.data.users[m.sender].rubah -= easyc * 1
                                                  global.db.data.users[m.sender].makananpet += makananz * 1
                                                  global.db.data.users[m.sender].money += moneyz * 1
                                                  global.db.data.users[m.sender].exp += expz * 1
                                                  global.db.data.users[m.sender].pet += petz * 1
                                                  global.db.data.users[m.sender].cupon += 1
                                                  global.db.data.users[m.sender].tiketcoin += 1
                                                  global.db.data.users[m.sender].boxs += boxsz * 1
                                                  global.db.data.users[m.sender].legendary += legendaryz * 1
                                                  global.db.data.users[m.sender].lasteasy = new Date * 1
                                         let srcz = `
Berhasil melawan Bosraid..
Bos pet aine telah dikalahkan..

Pet kamu telah turun level..!! 😲
Kucing Level : *-${easyz}*
Kuda Level : *-${easyx}*
Rubah Level : *-${easyc}*

_*Bonus:*_
Pet : *+${petz}*
Exp : *+${expz}*
Money : *+${moneyz}*
Cupon : *+1*
Tiketcoin : *+1*
Boxs : *+${boxsz}*
Legendary : *+${legendaryz}*
Makanan Pet : *+${makananz}*
`.trim()
                                                setTimeout(() => {
                                                       conn.reply(m.chat, srcz, m)
                                                 }, timezx)
                                                 setTimeout(() => {
                                                       conn.reply(m.chat, `Pet aine telah berkurang *HP -${bospetz}*\nWaktunya berevolusi.. ☯️`, m)
                                                 }, timecx)
                                                 setTimeout(() => {
                                                       conn.reply(m.chat, 'Persiapan untuk melawan *Bos Pet Aine*\nDarah pet aine saat ini *+100*', m)
                                                 }, timexx)
                                             } else conn.reply(m.chat, 'Minimal rubah kamu *Level 5* untuk bertarung melawan *Pet Aine*', m)
                                          } else conn.reply(m.chat, 'Minimal kuda kamu *Level 5* untuk bertarung melawan *Pet Aine*', m)
                                       } else conn.reply(m.chat, 'Minimal kucing kamu *Level 5* untuk bertarung melawan *Pet Aine*', m)
                                    } else m.reply(`Kamu sudah melawan _Bos Raid Easy_ Mohon untuk menunggu *${waktuez}* lagi`)
                           break
                           case 'normal':
                                          let griffinz = global.db.data.users[m.sender].griffin
                                          let phonixz = global.db.data.users[m.sender].phonix
                                          let serigalax = global.db.data.users[m.sender].serigala 
                                          let __waktuex = (new Date - global.db.data.users[m.sender].lasteasy)
                                          let _waktuex = (600000 - __waktuex)
                                          let waktuex = clockString(_waktuex)
                                          if (griffinz == 0 || phonixz == 0 || serigalax == 0) return m.reply('*Kamu belum memiliki Pet Griffin , Pet Phonix Dan Pet Serigala*')
                                          if (new Date - global.db.data.users[m.sender].lastnormal > 600000) {
                                          if (global.db.data.users[m.sender].griffin > 6) {
                                          if (global.db.data.users[m.sender].phonix > 6) {
                                          if (global.db.data.users[m.sender].serigala > 6) {
                                          let _normalz = `${pickRandom(['1','2','3','4'])}`.trim()
                                          let _normalx = `${pickRandom(['1','2','3','4'])}`.trim()
                                          let _normalc = `${pickRandom(['1','2','3','4'])}`.trim()
                                          let _makananx = `${Math.floor(Math.random() * 40)}`.trim()
                                          let _makanangriffinx = `${Math.floor(Math.random() * 20)}`.trim()
                                          let _makananphonixx = `${Math.floor(Math.random() * 20)}`.trim()
                                          let _expx = `${Math.floor(Math.random() * 100000)}`.trim()
                                          let _petx = `${pickRandom(['1','2','3','4','5','6','7','8','9','10'])}`.trim()
                                          let _boxsx = `${Math.floor(Math.random() * 50)}`.trim()
                                          let _legendaryx = `${Math.floor(Math.random() * 40)}`.trim()
                                          let _moneyx = `${Math.floor(Math.random() * 10000000)}`.trim()
                                          let _bospetx = `${pickRandom(['50', '49', '48', '47', '46', '45', '44', '43', '42', '41', '40','39','38','37','36','35','34','33','32','31','30'])}`.trim()
                                          let bospetx = (_bospetx * 1)
                                          let makananx = (_makananx * 1)
                                          let makanangriffinx = (_makanangriffinx * 1)
                                          let makananphonixx = (_makananphonixx * 1)
                                          let boxsx = (_boxsx * 1)
                                          let legendaryx = (_legendaryx * 1)
                                          let expx = (_expx * 1)
                                          let petx = (_petx * 1)
                                          let moneyx = (_moneyx * 1)
                                          let normalz = (_normalz * 1)
                                          let normalx = (_normalx * 1)
                                          let normalc = (_normalc * 1)
                                                  global.db.data.users[m.sender].griffin -= normalz * 1
                                                  global.db.data.users[m.sender].phonix -= normalx * 1
                                                  global.db.data.users[m.sender].serigala -= normalc * 1
                                                  global.db.data.users[m.sender].makananpet += makananx * 1
                                                  global.db.data.users[m.sender].makanangriffin += makanangriffinx * 1
                                                  global.db.data.users[m.sender].makananphonix += makananphonixx * 1
                                                  global.db.data.users[m.sender].money += moneyx * 1
                                                  global.db.data.users[m.sender].exp += expx * 1
                                                  global.db.data.users[m.sender].pet += petx * 1
                                                  global.db.data.users[m.sender].cupon += 2
                                                  global.db.data.users[m.sender].tiketcoin += 3
                                                  global.db.data.users[m.sender].boxs += boxsx * 1
                                                  global.db.data.users[m.sender].legendary += legendaryx * 1
                                                  global.db.data.users[m.sender].lastnormal = new Date * 1
                                         let srcx = `
Berhasil melawan Bosraid..
Bos pet aine telah dikalahkan..

Pet kamu telah turun level..!! 😲
Griffin Level : *-${normalz}*
Phonix Level : *-${normalx}*
Serigala Level : *-${normalc}*

_*Bonus:*_
Pet : *+${petx}*
Exp : *+${expx}*
Money : *+${moneyx}*
Cupon : *+2*
Tiketcoin : *+2*
Boxs : *+${boxsx}*
Legendary : *+${legendaryx}*
Makanan Pet : *+${makananx}*
Makanan Griffin : *+${makanangriffinx}*
Makanan Phonix : *+${makananphonixx}*
`.trim()
                                                setTimeout(() => {
                                                       conn.reply(m.chat, srcx, m)
                                                 }, timezz)
                                                 setTimeout(() => {
                                                       conn.reply(m.chat, `Pet aine telah berkurang *HP -${bospetx}*\nWaktunya berevolusi.. ☯️`, m)
                                                 }, timecz)
                                                 setTimeout(() => {
                                                       conn.reply(m.chat, 'Persiapan untuk melawan *Bos Pet Aine*\nDarah pet aine saat ini *+100*', m)
                                                 }, timexz)
                                             } else conn.reply(m.chat, 'Minimal serigala kamu *Level 7* untuk bertarung melawan *Pet Aine*', m)
                                          } else conn.reply(m.chat, 'Minimal phonix kamu *Level 7* untuk bertarung melawan *Pet Aine*', m)
                                       } else conn.reply(m.chat, 'Minimal griffin kamu *Level 7* untuk bertarung melawan *Pet Aine*', m)
                                    } else m.reply(`Kamu sudah melawan _Bos Raid Easy_ Mohon untuk menunggu *${waktuex}* lagi`)
                           break
                           case 'hard':
                                          let nagac = global.db.data.users[m.sender].naga
                                          let kyubic = global.db.data.users[m.sender].kyubi
                                          let centaurc = global.db.data.users[m.sender].centaur 
                                          let __waktuec = (new Date - global.db.data.users[m.sender].lasteasy)
                                          let _waktuec = (600000 - __waktuec)
                                          let waktuec = clockString(_waktuec)
                                          if (nagac == 0 || kyubic == 0 || centaurc == 0) return m.reply('*Kamu belum memiliki Pet Naga , Pet Kyubi Dan Pet Centaur*')
                                          if (new Date - global.db.data.users[m.sender].lastnormal > 600000) {
                                          if (global.db.data.users[m.sender].naga > 9) {
                                          if (global.db.data.users[m.sender].kyubi > 9) {
                                          if (global.db.data.users[m.sender].centaur > 9) {
                                          let _hardz = `${pickRandom(['4','5','6'])}`.trim()
                                          let _hardx = `${pickRandom(['4','5','6'])}`.trim()
                                          let _hardc = `${pickRandom(['4','5','6'])}`.trim()
                                          let _makanannagac = `${Math.floor(Math.random() * 60)}`.trim()
                                          let _makanankyubic = `${Math.floor(Math.random() * 60)}`.trim()
                                          let _makanancentaurc = `${Math.floor(Math.random() * 60)}`.trim()
                                          let _expc = `${Math.floor(Math.random() * 1000000)}`.trim()
                                          let _petc = `${Math.floor(Math.random() * 15)}`.trim()
                                          let _boxsc = `${Math.floor(Math.random() * 100)}`.trim()
                                          let _legendaryc = `${Math.floor(Math.random() * 60)}`.trim()
                                          let _moneyc = `${Math.floor(Math.random() * 1000000000)}`.trim()
                                          let _bospetc = `${pickRandom(['50', '49', '48', '47', '46', '45', '44', '43', '42', '41', '40','39','38','37','36','35','34','33','32','31','30'])}`.trim()
                                          let bospetc = (_bospetc * 1)
                                          let makanannagac = (_makanannagac * 1)
                                          let makanankyubic = (_makanankyubic * 1)
                                          let makanancentaurc = (_makanancentaurc * 1)
                                          let boxsc = (_boxsc * 1)
                                          let legendaryc = (_legendaryc * 1)
                                          let expc = (_expc * 1)
                                          let petc = (_petc * 1)
                                          let moneyc = (_moneyc * 1)
                                          let hardz = (_hardz * 1)
                                          let hardx = (_hardx * 1)
                                          let hardc = (_hardc * 1)
                                                  global.db.data.users[m.sender].naga -= hardz * 1
                                                  global.db.data.users[m.sender].kyubi -= hardx * 1
                                                  global.db.data.users[m.sender].centaur -= hardc * 1
                                                  global.db.data.users[m.sender].makanannaga+= makanannagac * 1
                                                  global.db.data.users[m.sender].makanankyubi+= makanankyubic * 1
                                                  global.db.data.users[m.sender].makanancentaur+= makanancentaurc * 1
                                                  global.db.data.users[m.sender].money += moneyc * 1
                                                  global.db.data.users[m.sender].exp += expc * 1
                                                  global.db.data.users[m.sender].pet += petc * 1
                                                  global.db.data.users[m.sender].cupon += 3
                                                  global.db.data.users[m.sender].tiketcoin += 5
                                                  global.db.data.users[m.sender].boxs += boxsc * 1
                                                  global.db.data.users[m.sender].legendary += legendaryc * 1
                                                  global.db.data.users[m.sender].lasthard = new Date * 1
                                         let srcc = `
Berhasil melawan Bosraid..
Bos pet aine telah dikalahkan..

Pet kamu telah turun level..!! 😲
Naga Level : *-${hardz}*
Kyubi Level : *-${hardx}*
Centaur Level : *-${hardc}*

_*Bonus:*_
Pet : *+${petc}*
Exp : *+${expc}*
Money : *+${moneyc}*
Cupon : *+3*
Tiketcoin : *+5*
Boxs : *+${boxsc}*
Legendary : *+${legendaryc}*
Makanan Naga : *+${makanannagac}*
Makanan Kyubi : *+${makanankyubic}*
Makanan Centaur : *+${makanancentaurc}*
`.trim()
                                                setTimeout(() => {
                                                       conn.reply(m.chat, srcc, m)
                                                 }, timezc)
                                                 setTimeout(() => {
                                                       conn.reply(m.chat, `Pet aine telah berkurang *HP -${bospetc}*\nWaktunya berevolusi.. ☯️`, m)
                                                 }, timexc)
                                                 setTimeout(() => {
                                                       conn.reply(m.chat, 'Persiapan untuk melawan *Bos Pet Aine*\nDarah pet aine saat ini *+100*', m)
                                                 }, timecc)
                                             } else conn.reply(m.chat, 'Minimal centaur kamu *Level 10* untuk bertarung melawan *Pet Aine*', m)
                                          } else conn.reply(m.chat, 'Minimal kyubi kamu *Level 10* untuk bertarung melawan *Pet Aine*', m)
                                       } else conn.reply(m.chat, 'Minimal naga kamu *Level 10* untuk bertarung melawan *Pet Aine*', m)
                                    } else m.reply(`Kamu sudah melawan _Bos Raid Easy_ Mohon untuk menunggu *${waktuec}* lagi`)
                           break 
                              default:
                                  return conn.reply(m.chat, `${usedPrefix + command} [easy | normal | hard]\nContoh penggunaan: *${usedPrefix + command} easy*`, m)
                           }
                      }

handler.help = ['bosraid <mode>']
handler.tags = ['game']
handler.command = /^(bosraid)$/i
handler.limit = true
handler.group = true

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
