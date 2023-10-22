let handler = async (m, { conn, text, usedPrefix, command }) => {
let [jid, teks] = text.split('|')
    if (!jid) return conn.reply(m.chat, 'Silahkan masukan participant yang akan dikirim', m)
    if (!teks) return conn.reply(m.chat, 'Silahkan masukan fake teks', m)
   // if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
    if (text > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)
const q = {
	"key": {
		"remoteJid": "status@broadcast",
                "participant":"0@s.whatsapp.net",
		"fromMe": false,
		"id": ""
	},
	"message": {
		"conversation": "✉️ Kamu mendapatkan sebuah pesan dari owner"
	}
    }
conn.reply(jid+"@s.whatsapp.net", `${teks}\n\n- *Owner*`, q)
let logs = `[!] Berhasil mengirim pesan`
    conn.reply(m.chat, logs, m)
}
handler.command = /^(pesanan)$/i


handler.owner = true 
module.exports = handler
