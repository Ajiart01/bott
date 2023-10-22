let fetch = require("node-fetch");
const { sticker } = require('../lib/sticker');

let handler = async (m, { conn, text }) => {
  if (!text) throw "masukkan query";
  let nama = conn.getName(m.sender)
  let b = await fetch(
    `https://tenor.googleapis.com/v2/search?q=${text}&key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&client_key=my_test_app`
  );
  let f = await b.json();
  for (let i of f.results) {
    await conn.delay(2000);
let stiker = await sticker(false, i.media_formats.mediumgif.url, `Made with ❤ by`, nama)
			conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
  }
setTimeout(() => {
       m.reply("*_Selesai_*");
       }, 4000);
};
handler.help = ['stikerly'];
handler.tags = ['sticker'];
handler.command = /^(stikerly)$/i;
handler.limit = true;
handler.premium = true;

module.exports = handler;
