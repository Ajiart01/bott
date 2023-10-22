let handler = async (m, { conn, usedPrefix }) => {
         let paus = db.data.users[m.sender].paus 
         let kepiting = db.data.users[m.sender].kepiting
         let gurita = db.data.users[m.sender].gurita 
         let cumi = db.data.users[m.sender].cumi 
         let buntal = db.data.users[m.sender].buntal 
         let dory = db.data.users[m.sender].dory 
         let lumba = db.data.users[m.sender].lumba 
         let lobster = db.data.users[m.sender].lobster 
         let hiu = db.data.users[m.sender].hiu 
         let udang = db.data.users[m.sender].udang
         let ikan = db.data.users[m.sender].ikan 
         let orca = db.data.users[m.sender].orca 
         let pancingan = db.data.users[m.sender].pancingan
         let _pancingan = db.data.users[m.sender].anakpancingan 
         let aineh = `
*Fish Pond*
Hiu: ${hiu}
Ikan: ${ikan}
Dory: ${dory}
Orca: ${orca}
Paus: ${paus}
Cumi: ${cumi}
Gurita: ${gurita}
Buntal: ${buntal}
Udang: ${udang}
Lumba²: ${lumba}
Lobster: ${lobster}
Kepiting: ${kepiting}

*Level Pancingan:*
Pancingan: *${pancingan == 0 ? 'Tidak Punya' : '' || pancingan == 1 ? 'Level 1' : '' || pancingan == 2 ? 'Level 2' : '' || pancingan == 3 ? 'Level 3' : '' || pancingan == 4 ? 'Level 4' : '' || pancingan == 5 ? 'Level MAX' : ''}*

╭────────────────
│pancingan ${pancingan == 0 ? 'Tidak Punya' : '' || pancingan > 0 && pancingan < 5 ? `Level *${pancingan}* To level *${pancingan + 1}*\n│Exp *${_pancingan}* -> *${pancingan *10000}*` : '' || pancingan == 5 ? '*Max Level*' : ''}
╰────────────────
`.trim()

conn.reply(m.chat, aineh, m)
}

handler.help = ['kolam']
handler.tags = ['rpg']
handler.command = /^(kolam)$/i
handler.limit = true
handler.group = true
module.exports = handler

