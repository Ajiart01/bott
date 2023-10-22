/*
By : Aine
*/
let handler = m => m

handler.before = function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = db.data.chats[m.chat]
  let sender = db.data.chats[m.sender]
  

  let isDoc = m.mtype
  if (chat.antiDoc && isDoc) {
    if(isDoc === "documentMessage"){
      if (opts) {
        if (isAdmin || !isBotAdmin){		  
        }else{
         // m.reply('Pesan suara ini akan di hapus 😅') // ganti text terserah kamu 
          setTimeout(() => {
          this.sendMessage(m.chat, { delete: m.key })
           }, 10000)
          // this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
        }return true
      }
    }
  }
  return true
}

module.exports = handler
