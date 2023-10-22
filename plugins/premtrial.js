let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, usedPrefix, isPrems }) => {
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }

  var hl = []
  //hl[0] = text.split('|')[0]
  hl[0] =  m.sender //no(hl[0]) + "@s.whatsapp.net"
  hl[1] = 7
  if (isPrems) return m.reply(`kamu sudah menjadi Rakyat berduit!`)
  if (!text) return conn.reply(m.chat, `Code nya mana? gapunya codenya? Klik link berikut\n\nhttps://cutt.ly/xN8qTzQ\n\nuntuk mendapatkan codenya`, m)
    
    //if (text != 2406) conn.reply(m.chat, `Code yang anda masukkan salah!\n Klik link berikut\n\nhttps://cutt.ly/xN8qTzQ\n\nuntuk mendapatkan codenya`, m)
  if (typeof db.data.users[hl[0]] == 'undefined') throw 'Pengguna tidak ada didalam data base'
  var jumlahHari = 86400000 * hl[1]
  // var jumlahHari = 1000 * text
  var now = new Date() * 1
  db.data.users[hl[0]].premium = true
  if (now < db.data.users[hl[0]].premiumDate) db.data.users[hl[0]].premiumDate += jumlahHari
  else db.data.users[hl[0]].premiumDate = now + jumlahHari
  conn.reply(m.chat,`*@${hl[0].split('@')[0]}* telah mengklaim premium trial selama *${hl[1]} hari*.\n\n*Premium : ${msToDate(db.data.users[hl[0]].premiumDate - now)}*`,m,{ contextInfo: { mentionedJid: [hl[0]] } })
  //conn.sendText(`6281310253704-1616818532@g.us`, {text: `*@${hl[0].split('@')[0]}* telah mengklaim premium trial selama *${hl[1]} hari*.\n\n*Premium : ${msToDate(db.data.users[hl[0]].premiumDate - now)}*`, contextInfo: { mentionedJid: [hl[0]] } })
//conn.sendText(`6281310253704-1616818532@g.us`, {text: `*@${hl[0].split('@')[0]}* telah mengklaim premium trial selama *${hl[1]} hari*.\n\n*Premium : ${msToDate(db.data.users[hl[0]].premiumDate - now)}*`},  contextInfo: { mentionedJid: [hl[0]] } )
}
handler.help = ['prem *@tag|days*']
handler.tags = ['owner']
handler.command = /^(premtrial)$/i
handler.owner = true
handler.fail = null
module.exports = handler

function msToDate(ms) {
  temp = ms
  days = Math.floor(ms / (24*60*60*1000));
  daysms = ms % (24*60*60*1000);
  hours = Math.floor((daysms)/(60*60*1000));
  hoursms = ms % (60*60*1000);
  minutes = Math.floor((hoursms)/(60*1000));
  minutesms = ms % (60*1000);
  sec = Math.floor((minutesms)/(1000));
  return days+"H "+hours+"J "+ minutes + "M";
  // +minutes+":"+sec;
}
