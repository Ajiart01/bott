const free = 5000
const prem = 150000
const limitfree = 5
const limitprem = 30
const moneyfree = 500
const moneyprem = 5000

let handler = async (m, { conn, text, isPrems }) => {
   
let xpi = [Math.floor(Math.random() * prem)] 
let duit = [Math.floor(Math.random() * moneyprem)] 
let limiit = [Math.floor(Math.random() * limitprem)]
	if(isNaN(text)) {
  	var number = text.split`@`[1]
  } else if(!isNaN(text)) {
  	var number = text
  }
	const nama = conn.getName(m.sender)
	if(!text && !m.quoted) return conn.reply(m.chat, `*${nama} mau ewe siapa? tag orang nya dong..*`, m)
		if(isNaN(number)) return conn.reply(m.chat, `*Nomor tidak valid.*`, m)
  if(number.length > 15) return conn.reply(m.chat, `*Format is Invalid.*`, m)
  try {
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {
    let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {}
    let participants = m.isGroup ? groupMetadata.participants : []
    let users = m.isGroup ? participants.find(u => u.jid == user) : {}
    if(!user) return conn.reply(m.chat, `*Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini.*`, m)
    if(user === m.sender) return conn.reply(m.chat, `*Tidak bisa ewe diri sendiri`, m)
    if(user === conn.user.jid) return conn.reply(m.chat, `ih kak ${nama} jahat mau ewe aku, aku cepuin ke ownerku ni....`, m)
   // let time = global.db.data.users[m.sender].lastweekly + 604800000
  //if (new Date - global.db.data.users[m.sender].lastweekly < 604800000) throw `Anda sudah mengklaim, klaim mingguan ini\ntunggu selama ${msToTime(time - new Date())} lagi`
    //    conn.reply(m.chat, `Anda sudah mengklaim dan mendapatkan :`, m)
        //global.db.data.users[m.sender].exp += isPrems ? prem : free
        //global.db.data.users[m.sender].money += isPrems ? moneyprem : moneyfree
        //global.db.data.users[m.sender].limit += isPrems ? limitprem : limitfree
       // global.db.data.users[m.sender].legendary += 3
       // conn.reply(m.chat, `Selamat kamu mendapatkan bayaran berupa:\n\n+${isPrems ? prem : free} Exp\n+${isPrems ? moneyprem : moneyfree} Money\n+${isPrems ? limitprem : limitfree} Limit\n\nKarena telah melayani @${user.split('@')[0]} sampe puas crottt `, m)
        //global.db.data.users[m.sender].lastweekly= new Date * 1
//global.db.data.users[m.sender].exp += xpi
//global.db.data.users[m.sender].money += duit
//global.db.data.users[m.sender].limit += limiit
let namauser = conn.getName(user)
let txttt = `Selamat kamu mendapatkan bayaran berupa:\n\n+${xpi} Exp\n+${duit} Money\n+${limiit} Limit\n\nKarena telah melayani ${namauser} sampe puas crottt `
    let baileys = require('@adiwajshing/baileys')
let money = 5
  let note = {
    "extendedTextMessage": {
      "text": txttt
} 
  }
 let {key, message} = await baileys.generateWAMessageFromContent(m.chat, {
  "requestPaymentMessage": {
    "currencyCodeIso4217": "IDR",
    "amount1000": money * 1000,
    "requestFrom": m.sender,
    "noteMessage": note,
    "expiryTimestamp": "0",
    "amount": {
      "value": money * 1000,
      "currencyCode": "IDR"
    },
  }
}, {quoted:m})
 return conn.relayMessage(key.remoteJid, message, {messageId: key.id})
    }
}
handler.help = ['layani @tag']
handler.tags = ['rpgabsen']
handler.command = /^(ewe|perkosa|entot|entod|layani)$/i
handler.limit = true
handler.fail = null

module.exports = handler

/*function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
    weeks = Math.floor((duration / (1000 * 60 * 60 * 24)) % 168)

  weeks  = (weeks < 10) ? "0" + weeks : weeks
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return weeks + " hari " +  hours + " jam " + minutes + " menit"
}*/