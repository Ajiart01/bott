let handler = async (m, { conn, args }) => {
  if (m.fromMe) throw 'Jadi kan bot sebagai admin'
  // if (isAdmin) throw 'Padahal udah jadi admin'
   let who = no(args[0]) + "@s.whatsapp.net"
  await conn.groupParticipantsUpdate(m.chat, [who], "remove")
}
handler.command = /^tendang!$/i
handler.owner = true
handler.botAdmin = true
module.exports = handler

function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }
