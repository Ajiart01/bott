let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner, groupMetadata }) => {

let namaa = conn.getName(m.sender)
m.reply(`Maaf, sekarang kak ${namaa} tidak bisa memasukkan bot ke dalam grub menggunakan *.join* karena sekarang bot menggunakan sistem sewa. jika kak ${namaa} ingin memasukkan bot ke dalam grub silahkan sewa. cek daftar harganya di *.sewa*`)

 /*   function msToDate(ms) {
        temp = ms
        days = Math.floor(ms / (24*60*60*1000));
        daysms = ms % (24*60*60*1000);
        hours = Math.floor((daysms)/(60*60*1000));
        hoursms = ms % (60*60*1000);
        minutes = Math.floor((hoursms)/(60*1000));
        minutesms = ms % (60*1000);
        sec = Math.floor((minutesms)/(1000));
        return days+" Hari "+hours+" Jam "+ minutes + " Menit";
        // +minutes+":"+sec;
  }

    let [_, code] = text.match(linkRegex) || []
     let jenenge = conn.getName(m.sender)
    if (!code) throw `Kirim link grub wa nya ${jenenge} bodoh!\n\n\n#join https://chat.whatsapp.com/xnxx`
    //if (db.data.users[m.sender].joinlimit == 0) return m.reply('Maaf kamu sudah tidak bisa menggunakan free join..\nHarap hubungi *owner* kami')
  //  db.data.users[m.sender].joinlimit -= 1
   // let id = m.chat
   // let groupMetadata = await conn.groupMetadata(m.chat)
    let res = await conn.groupAcceptInvite(code)
let apaani = m.sender
    let expired = global.db.data.users[apaani].premiumDate
    let pler = msToDate(global.db.data.users[apaani].premiumDate - new Date() * 1)
   // expired = Math.floor(Math.min(999, Math.max(30, isOwner ? isNumber(expired) ? parseInt(expired) : 0 : 3)))
    m.reply(`Berhasil join grup ${res} selama ${pler ? ` selama ${pler} hari` : ''}`)
   // conn.reply(`Bot telah di undang di group: ${groupMetadata.subject}\nCode ID: ${res}`, `62895330379186@s.whatsapp.net`)
    setTimeout(() => {
    conn.reply(res, `*RaisaBot* adalah bot whatsapp yang di bangun menggunakan Nodejs, diundang oleh @${m.sender.split`@`[0]} durasi selama\n*${expired}*\n\nUntuk Melihat List *Menu* bot ketik *#menu*\n\nJika ingin di perpanjang expired group harap hubungi *owner* kami..`.trim(), null, { contextInfo: { mentionedJid: [m.sender] } })
    }, 1500) 
    let chats = db.data.chats[res].expired += expired
    if (!chats) chats = db.data.chats[res] = {}
    if (expired) chats.expired = +new Date() + expired * 1000 * 60 * 60 * 24 */
}
//handler.help = ['join <chat.whatsapp.com>']
//handler.tags = ['premium']

handler.command = /^join$/i
handler.premium = true

module.exports = handler

const isNumber = (x) => (x = parseInt(x), typeof x === 'number' && !isNaN(x))

function msToDate(ms) {
    temp = ms
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    return days + " Hari " + hours + " Jam " + minutes + " Menit";
    // +minutes+":"+sec;
}