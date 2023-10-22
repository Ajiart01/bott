let handler = async (m, { conn, args, usedPrefix, command, groupMetadata }) => {
  //  if (!args[0] || isNaN(args[0])) throw `Masukan angka mewakili jumlah hari!\n\ncontoh:\n${usedPrefix + command} 30`

  //  let who
    if (m.isGroup) 
  //  else who = args[1]

 //   var jumlahHari = 86400000 * args[0]
    var now = new Date() * 1
    
    let user = db.data.users[m.sender]
    if (user.money == 0) return m.reply('*Pastikan kamu memiliki money*')
    if (db.data.users[m.sender].money > 150000000) {
    if (now < db.data.chats[m.chat].expired) db.data.chats[m.chat].expired += 86400000
    else db.data.chats[m.chat].expired = + 86400000
    m.reply(`Berhasil menetapkan hari kedaluarsa untuk ${groupMetadata.subject} selama +1 hari.\n\n-150000000 Money\n${user.money -= 150000000} Total Money\n\nHitung Mundur : ${msToDate(db.data.chats[m.chat].expired - now)}`)
    } else m.reply(`Pastikan kamu memiliki 150jt money untuk membeli durasi expired group ini`)
}
handler.help = ['bayarexpired']
handler.tags = ['xp']
handler.command = /^(bayarexpired)$/i
handler.limit = true
handler.group = true
module.exports = handler

function msToDate(ms) {
    temp = ms
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    return days + " hari " + hours + " jam " + minutes + " menit";
    // +minutes+":"+sec;
}
