let handler  = async (m, { conn, args }) => {
  let pp = `https://telegra.ph/file/6a9145ce608433c69d87d.jpg`
  
  let teks = `*Syarat & Ketentuan RaisaBot*

1. Teks dan nama pengguna WhatsApp anda kami simpan di dalam server selama bot aktif.
2. Data anda akan di hapus ketika bot offline.
3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim.
4. Kami tidak pernah meminta anda untuk memberikan informasi pribadi.
5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot.
6. Cukup perintah 1x jika bot tidak merespon harap ulangi kembali, Jika di ulangi kembali tidak merespon, Bot tidak aktif
7. Jika anda spam, Kami akan membenned anda
8. Dilarang spam, Share virus virtex, Telpon, Video call, Kami akan blockir anda.
9. Apapun yang anda perintah pada bot ini,
*KAMI TIDAK BERTANGGUNG JAWAB!*

TERIMA KASIH !~`.trim()
    //conn.sendFile(m.chat, pp, 'pp.png', teks, m)
    conn.sendButton(m.chat, teks, wm, pp, [[`PING`, `.ping`],[`INFOBOT`, `.infobot`]], m)
 } 

 handler.help = ['rules']
 handler.tags = ['info']
 handler.command = /^rules$/i
 
 module.exports = handler
