let fs = require('fs')

let handler = async (m, { conn }) => {
let helloaine = fs.readFileSync('./mp3/sama-sama.mp3') 
conn.sendFile(m.chat, helloaine, '', '', m, true)
//conn.sendMessage(m.chat, helloaine, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
// await conn.sendMessage(m.chat, { audio: { url: helloaine }, mimetype: 'audio/mp4'}, m)
}

handler.customPrefix = /^Terimakasih|Terima kasih|Makasih$/i
handler.command = new RegExp

handler.limit = true


module.exports = handler
