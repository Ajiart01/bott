let handler = async (m, { conn, text }) => {
  let monsters = [
    { "name": "Spider Dragon", "img": "https://telegra.ph/file/cb254df6391057afb1d61.jpg" },
    { "name": "Long Neck Dragon", "img": "https://telegra.ph/file/aeda94211d958f0726020.jpg" },
    { "name": "Green Snake Dragon", "img": "https://telegra.ph/file/8504645f09237ee51aa55.jpg" },
    { "name": "Blue Wolf Dragon", "img": "https://telegra.ph/file/0ad92a47597f21a0182a2.jpg" },
    { "name": "Thorny Tirex Dragon", "img": "https://telegra.ph/file/b172e3031b3fd672673bd.jpg" },
    { "name": "Blue Rhino Dragon", "img": "https://telegra.ph/file/6c78ce26c800699f6888b.jpg" },
    { "name": "Red Rhino Dragon", "img": "https://telegra.ph/file/226e31d67ca326957dcd8.jpg" },
    { "name": "Blue Tirex Dragon", "img": "https://telegra.ph/file/51ca0b2a5b72a7af4e135.jpg" },
    { "name": "The Biggest Dragon", "img": "https://telegra.ph/file/a183b170a6a94d6e76008.jpg" },
    { "name": "Biggest Wing Dragon", "img": "https://telegra.ph/file/cfc96314d366e4aaf35b1.jpg" },
    { "name": "Blue Bat Dragon", "img": "https://telegra.ph/file/5559a40b7abd7ecb6a46e.jpg" },
    { "name": "Big Monster Dragon", "img": "https://telegra.ph/file/fc78472a020c403e95bc0.jpg" },
    { "name": "King Spider Dragon", "img": "https://telegra.ph/file/bc00a563c119cf37beb6a.jpg" },
    { "name": "Blue Ice Dragon", "img": "https://telegra.ph/file/842bb589be0d7288a8e26.jpg" },
    { "name": "Legendary Dragon", "img": "https://telegra.ph/file/54643ffdb12e35e88a6b1.jpg" }
  ]
  let player = db.data.users[m.sender]
  let pengirim = m.sender.split("@")[0]
 let __timers = (new Date - db.data.users[m.sender].lasthunt)
 let _timers = (1200000 - __timers) 
 let timers = clockString(_timers)
  
  let b = await conn.rand(monsters)

  if (new Date - db.data.users[m.sender].lasthunt > 1200000) {
  // if (global.db.data.users[m.sender].health > 99) {
//   if (global.db.data.users[m.sender].sword > 9) {
    let coins = parseInt(Math.floor(Math.random() * 100000))
    let exp = parseInt(Math.floor(Math.random() * 10000))
    let _healing = `${Math.floor(Math.random() * 100)}`.trim()
    let healing = (_healing * 1)
    
    /*let sum = 82 * player.area - 59
   let dmg = (player.sword  * 5 + player.armor * 5 - sum)
    dmg = dmg < 0 ? Math.abs(dmg) : 0*/

    player.health -= healing
    player.lasthunt = new Date * 1 // waktu hunt 2menit

    if (player.health < 0) {
      let msg = `*@${pengirim}* Anda Mati Di Bunuh Oleh ${b.name}`
      if (player.level > 0) {
      if (player.sword > 0) {
        player.level -= 1
        player.sword -= 5
        player.exp -= exp * 1
        msg += `\nLevel Anda Turun 1 Karena Mati Saat Berburu!\nSword Anda Berkurang 5 Karena Mati Saat Berburu!`
      }
      }
      player.health = 100
      m.reply(msg)
      return
    }

    player.money += coins * 1
    player.exp += exp * 1
    db.data.users[m.sender].tiketcoin += 1
    
    let pesan = `Berhasil menemukan *${b.name}*
*@${pengirim}* Kamu sudah membunuhnya
Mendapatkan:
${new Intl.NumberFormat('en-US').format(coins)} Money
${new Intl.NumberFormat('en-US').format(exp)} XP
Berkurang -${healing} Health, Tersisa ${player.health} Health

+1 Tiketcoin`
   // m.reply(pesan)
    conn.sendButton(m.chat, pesan, wm, b.img, [['Heal', '.heal']], m, { asLocation: true, mentions: conn.parseMention(pesan) })
//     } else m.reply(`Minimal sword mu 10 untuk bisa berburu monster`)
//     } else m.reply(`Minimal health mu 100 untuk bisa berburu monster`)
  } else throw `Tunggu *${timers}* Untuk Berburu Lagi`
}

handler.help = ['hunter']
handler.tags = ['game']
handler.command = /^hunter/i
handler.limit = true
handler.group = true
handler.fail = null

module.exports = handler

/*function MeNit(ms) {
  let m = isNaN(ms) ? '02' : Math.floor(ms / 1000) % 60
  return [m].map(v => v.toString().padStart(2, 0)).join(':')
}

function MeNit(ms) {
  let s = isNaN(ms) ? '01' : Math.floor(ms / 1000) % 60
  return [s].map(v => v.toString().padStart(2, 0)).join(':')
}*/

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
