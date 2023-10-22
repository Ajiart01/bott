// Module disini
let now = new Date()
let tanggal = now.getDate()
let bulan = [1,2,3,4,5,6,7,8,9,10,11,12][now.getMonth()]
let tahun = now.getFullYear()

// Handler
let handler = async(m, { conn, text, usedPrefix }) => {
  // Variable
  let tttt = text.includes(" - ") ? text.split(" - ")[0] : text.split("-")[0]
  let bb = text.includes(" - ") ? text.split(" - ")[1] : text.split("-")[1]
  let tt = text.includes(" - ") ? text.split(" - ")[2] : text.split("-")[2]
  tttt = Number(tttt)
  bb = Number(bb)
  tt = Number(tt)

  // Cek kalau ada yang invalid
  if(tttt == NaN || tttt == undefined || tttt == 0) return m.reply(`Masukan tahun lahir!\n\nContoh:\n${usedPrefix}umur 2000-20-2`)
  if(bb == NaN || bb == undefined || bb == 0) return m.reply(`Masukan bulan lahir!\n\nContoh:\n${usedPrefix}umur 2000-20-2`)
  if(tt == NaN || tt == undefined || tt == 0) return m.reply(`Masukan tanggal lahir!\n\nContoh:\n${usedPrefix}umur 2000-20-2`)
  if(isNaN(tttt)) return m.reply(`Tahun harus angka!\n\nContoh:\n${usedPrefix}umur 2000-20-2`)
  if(isNaN(bb)) return m.reply(`Bulan harus angka!\n\nContoh:\n${usedPrefix}umur 2000-20-2`)
  if(isNaN(tt)) return m.reply(`Tanggal harus angka!\n\nContoh:\n${usedPrefix}umur 2000-20-2`)
  if(tt <= 0 || bb <= 0) return m.reply("Serius??")

  // Main
  let umur = bulan >= bb && tanggal >= tt ? tahun - tttt : bb < bulan ? tahun - tttt : tahun - tttt - 1
  let next = bulan >= bb && tanggal >= tt ? `${tahun + 1}-${bb < 10 ? "0" + bb : bb}-${tt < 10 ? "0" + tt : tt}` : bb < bulan ? `${tahun + 1}-${bb < 10 ? "0" + bb : bb}-${tt < 10 ? "0" + tt : tt}` : `${tahun}-${bb < 10 ? "0" + bb : bb}-${tt < 10 ? "0" + tt : tt}`

  m.reply(`Umur saat ini : ${umur}\nUlang tahun berikutnya : ${next}`)
}

handler.help = ["umur"].map(v => v + " [tahun-bulan-tanggal]")
handler.tags = ["fun"]
handler.command = /^(ultah|(hitung)?umur)/i

module.exports = handler
