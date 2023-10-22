/*
By : Aine
*/
let handler = m => m

handler.before = function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = db.data.chats[m.chat]
  let sender = db.data.chats[m.sender]
  

  let isSticker = m.mtype
  if (chat.antiSticker && isSticker) {
    if(isSticker === "stickerMessage"){
      if (opts) {
        if (isAdmin || !isBotAdmin){		  
        }else{
          // m.reply('*Sticker detected*\nSorry I deleted 😅') // ganti text terserah kamu 
          this.sendMessage(m.chat, { delete: m.key })
          // this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
        }return true
      }
    }
  }
  return true
}

module.exports = handler
