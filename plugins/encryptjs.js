let util = require("util")
let handler = async (m, {
  conn, text
}) => {
  if (!text && !m.quoted) throw "masukkan teks"
  let teks = text ? text: m.quoted && m.quoted.text ? m.quoted.text: m.text
  try {
    let f = await encJS(teks)
    m.reply(f)
  } catch(e) {
    await m.reply("Itu bukan kode javascript atau ada kesalahan sintaks")
    await conn.reply(owner[0]+"@s.whatsapp.net", util.format(e), m)
  }}
handler.help = ["obfuscator"]
handler.alias = ["encjs", "encjavascript", "obfus", "encryptjs"]
handler.tags = ["tools"]
handler.command = /^(obfus(cator)?|enc(rypt)?j(ava)?(s(cript)?)?)/i
module.exports = handler

let obfus = require("javascript-obfuscator")
function encJS(code) {
  if (!code) return code;
  let f = obfus.obfuscate(code);
  return f.getObfuscatedCode();
}
