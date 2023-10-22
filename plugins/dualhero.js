let handler = async (m, { conn, usedPrefix, participants }) => {
conn.hero = global.db.data.users[m.sender]
  conn.duelhero = conn.duelhero ? conn.duelhero : {}
  const delay = time => new Promise(res=>setTimeout(res,time));

  if (typeof conn.duelhero[m.sender] != "undefined" && conn.duelhero[m.sender] == true) return m.reply(`*Tidak bisa melakukan pertarungan lagi karena hero anda sedang bertarung bro.*`)

  let users = participants.map(u => u.id)
  var lawan
	lawan = users[Math.floor(users.length * Math.random())]
  while (typeof db.data.users[lawan] == "undefined" || lawan == m.sender){
    lawan = users[Math.floor(users.length * Math.random())]
  }

  let lamaPertarungan = getRandom(5,15)

 // m.reply(`*Hero Kamu* (Level Hero ${db.data.users[m.sender].hero}) menantang *Hero ${conn.getName(lawan)}* (Level Hero ${db.data.users[lawan].hero}) dan sedang dalam pertarungan sengit.\n\nTunggu ${lamaPertarungan} menit lagi dan lihat siapa yg menang.`)
  conn.sendButton(m.chat, `*Hero Kamu* (Level Hero ${db.data.users[m.sender].hero})\n*VS*\n*Hero ${conn.getName(lawan)}* (Level Hero ${db.data.users[lawan].hero})\nKalian sedang dalam pertarungan sengit.\n\nTunggu ${lamaPertarungan} menit lagi dan lihat siapa yg menang.`, wm, 'https://telegra.ph/file/de5c373453912d4995e5b.jpg', [['Donasi', '.donasi']], m, { asLocation: true })

  conn.duelhero[m.sender] = true

  await delay(1000 * 60 * lamaPertarungan)

  let alasanKalah = ['Noob','Cupu','Kurang hebat','Ampas kalahan','Gembel kalahan']
  let alasanMenang = ['Hebat','Pro','Master Game','Legenda game','Sangat Pro','Rajin Nge-push']

  let kesempatan = []
  for (i=0;i<db.data.users[m.sender].hero;i++) kesempatan.push(m.sender)
  for (i=0;i<db.data.users[lawan].hero;i++) kesempatan.push(lawan)

  let pointPemain = 0
  let pointLawan = 0
  for (i=0;i<10;i++){
    unggul = getRandom(0,kesempatan.length-1)
    if (kesempatan[unggul] == m.sender) pointPemain += 1
    else pointLawan += 1
  }

  if (pointPemain > pointLawan){
    let hadiah = (pointPemain - pointLawan) * 10000
    db.data.users[m.sender].money += hadiah
    db.data.users[m.sender].tiketcoin += 1
    m.reply(`*Hero ${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *Hero ${conn.getName(lawan)}*\n\n*Hero Kamu* (Level Hero ${db.data.users[m.sender].hero}) MENANG melawan *Hero ${conn.getName(lawan)}* (Level Hero ${db.data.users[lawan].hero}) karena kamu ${alasanMenang[getRandom(0,alasanMenang.length-1)]}\n\nHadiah Rp. ${hadiah.toLocaleString()}\n+1 Tiketcoin`)
  }else if (pointPemain < pointLawan){
    let denda = (pointLawan - pointPemain) * 100000
    db.data.users[m.sender].money -= denda
    db.data.users[m.sender].tiketcoin += 1
    m.reply(`*Hero ${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *Hero ${conn.getName(lawan)}*\n\n*Hero Kamu* (Level Hero ${db.data.users[m.sender].hero}) KALAH melawan *Hero ${conn.getName(lawan)}* (Level Hero ${db.data.users[lawan].hero}) karena kamu ${alasanKalah[getRandom(0,alasanKalah.length-1)]}\n\nUang kamu berkurang Rp. ${denda.toLocaleString()}\n+1 Tiketcoin`)
  }else {
    m.reply(`*Hero ${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *Hero ${conn.getName(lawan)}*\n\nHasil imbang kak, ga dapet apa apa 😂`)
  }

  delete conn.duelhero[m.sender]
}
handler.help = ['duelhero']
handler.tags = ['game']
handler.command = /^(duelhero)$/i
handler.limit = true
handler.group = true

module.exports = handler

function getRandom(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)) + min
}
