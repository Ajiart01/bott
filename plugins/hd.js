let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

let handler = async(m, { conn, usedPrefix, command }) {
  try {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || q.mediaType || '';
    if (/^image/.test(mime) && !/webp/.test(mime)) {
      await m.reply('Sek Loading...')
      const img = await q.download();
      const out = await uploadImage(img);
      const api = await fetch(`https://xzn.wtf/api/torch-srgan?url=${out}&apikey=${global.senpaikey}`);
       const image = await api.buffer();
       conn.sendFile(m.chat, image, 'output.jpg', 'Nih Banh😁👍', m);
    } else {
      m.reply(`Kirim gambar dengan caption ${usedPrefix + command} atau tag gambar yang sudah dikirim.`);
    }
  } catch (e) {
    console.error(e);
    m.reply(`Error :v`);
  }
}
}

handler.help = ['hd'];
handler.tags = ['tools'];
handler.command = /^(hd|jernih|remini)$/i
handler.premium = true;
handler.limit = true;

module.exports = handler