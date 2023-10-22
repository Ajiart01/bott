let handler = async (m, { conn, usedPrefix }) => {
 // const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  //this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
  conn.sendMessage(m.chat, { text: '@6283117172006 adalah ownerku yang baik dan tammpan', mentions: ['6283117172006@s.whatsapp.net'] }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler