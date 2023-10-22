let handler = async (m, { conn, usedPrefix }) => {
    let chats = Object.entries(db.data.chats).filter(chat => chat[1].isBanned)
    let users = Object.entries(db.data.users).filter(user => user[1].banned)
    let now = new Date() * 1
    let listChats = chats && await Promise.all(chats.map(async([jid], i) => `│ ${i + 1}. ${await conn.getName(jid) == undefined ? 'Unknown' : await conn.getName(jid)}
│ ${jid}
`.trim()))
    
    m.reply(`
┌「 *Daftar Chat Terbanned* 」
│ Total : ${chats.length} Chat
${listChats ? listChats.join('\n') : ''}
└────

┌ *Daftar User Terbanned*
│ Total : ${users.length} User${users ? '\n' + users.map(([jid], i) => `
│ ${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
│ wa.me/${jid.split('@')[0]}
│ ${(db.data.users[jid].bannedDate - now) > 1 ? msToDate(db.data.users[jid].bannedDate - now) : '*Permanen!*'}
`.trim()).join('\n') : ''}
└────
`.trim())
}
handler.help = ['listbanned']
handler.tags = ['info']
handler.command = /^listban(ned)?|ban(ned)?list|daftarban(ned)?$/i
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
		return days+" Hari "+hours+" Jam "+ minutes + " Menit";
		// +minutes+":"+sec;
  }
