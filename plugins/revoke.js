let handler = async (m, { isAdmin, isOwner, conn, command }) => {
  if (!(isAdmin || isOwner)) {
                global.dfail('admin', m, conn)
                throw false
                }
  conn.groupRevokeInvite(m.chat)
  conn.reply(m.chat, `Sukses ${command} link grup, link telah di kirim ke chat pribadi`, m)
  await delay(1000)
  let linknya = await conn.groupInviteCode(m.chat)
  conn.reply(m.sender, 'https://chat.whatsapp.com/' + linknya, m)
  // conn.sendHydrated(m.sender, `Link group telah di reset..\nCopy link tersebut..`, 'Regards by Aine', null, `https://www.whatsapp.com/otp/copy/https://chat.whatsapp.com/${await conn.groupInviteCode(m.chat)}`, 'Copy Link Group', null, null, [[null,null]], m)
}
handler.help = ['revoke']
handler.tags = ['group']
handler.command = /^revoke$/i

handler.group = true
// handler.admin = true
handler.botAdmin = true

module.exports = handler

const delay = time => new Promise(res => setTimeout(res, time))
