const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, usedPrefix, owner }) => { 
    try { 
        let __timers = (new Date - db.data.users[m.sender].lastadventure)
        let _timers = (3600000 - __timers) 
        let timers = clockString(_timers)
        if (db.data.users[m.sender].health > 79) {
            if (new Date - db.data.users[m.sender].lastadventure > 3600000) {
            let armor = db.data.users[m.sender].armor
            let rubah = db.data.users[m.sender].rubah
            let kuda = db.data.users[m.sender].kuda
            let kucing = db.data.users[m.sender].kucing
            let serigala = db.data.users[m.sender].serigala
            let _health = `${Math.floor(Math.random() * 101)}`.trim()
            let health = (_health * 1)
            let exp = `${Math.floor(Math.random() * 10000)}`.trim() 
            let uang = `${Math.floor(Math.random() * 100000)}`.trim() 
            let _potion = ['1','2','3']
            let potion = _potion[Math.floor(Math.random() * _potion.length)]
            let _sampah = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50']
            let sampah = _sampah[Math.floor(Math.random() * _sampah.length)]
            let _diamond = ['1','2','3','4','5','6','7','8','9','10']
            let diamond = _diamond[Math.floor(Math.random() * _diamond.length)]
            let _common = ['1','2','3']
            let common = _common[Math.floor(Math.random() * _common.length)]
            let _uncommon = ['1','2','1','2']
            let uncommon = _uncommon[Math.floor(Math.random() * _uncommon.length)]
            let _mythic = `${pickRandom(['1','3','1','1','2'])}`
            let mythic = (_mythic * 1)
            let _legendary = `${pickRandom(['1','3','1','1','2'])}`
            let legendary = (_legendary * 1)
            let itemrand = [`*Selamat anda mendapatkan item rare yaitu*\n${mythic} Mythic Crate`,`*Selamat kamu mendapatkan item rare yaitu*\n${legendary} Legendary Crate`]
            let rendem = itemrand[Math.floor(Math.random() * itemrand.length)]
            let a = [ 
  {
     "img": "https://telegra.ph/file/3db18ece1f08a5cf0a086.jpg",
     "tempat": "Beautiful Green Forest Waterfall"
  }, 
  {
     "img": "https://telegra.ph/file/545ab458c7379b2684516.jpg",
     "tempat": "Blue Aurora Forest"
  },
  {
     "img": "https://telegra.ph/file/5d2d177294db36754ae40.jpg",
     "tempat": "Dragon Valley Forest"
  },
  {
     "img": "https://telegra.ph/file/f6b6b772fe6c4c2c3da29.jpg",
     "tempat": "Fairy Secret Forest"
  },
  {
     "img": "https://telegra.ph/file/a51bdd96267412d60b8ec.jpg",
     "tempat": "Light In The Dark Forest"
  },
  {
     "img": "https://telegra.ph/file/40e2c1ccaf1ccf7a89057.jpg",
     "tempat": "Dim Light Forest"
  },
  {
     "img": "https://telegra.ph/file/f07505b35165ce98fb1c0.jpg",
     "tempat": "Fairy House Forest"
  },
  {
     "img": "https://telegra.ph/file/d9f43acd1467ece6a5269.jpg",
     "tempat": "Hallway Bridge Forest"
  },
  {
     "img": "https://telegra.ph/file/048f763ce04c712f3b5f1.jpg",
     "tempat": "Secret Door In The Forest"
  },
  {
     "img": "https://telegra.ph/file/e7ab8b0456b68b25f892a.jpg",
     "tempat": "Blue River Valley"
  },
  {
     "img": "https://telegra.ph/file/1199eee5ffdd0a15f485b.jpg",
     "tempat": "Misty Rooted Valley Forest"
  },
  {
     "img": "https://telegra.ph/file/7996e56dddb1188229029.jpg",
     "tempat": "Rooted Blue Valley"
  },
  {
     "img": "https://telegra.ph/file/aa3eafc03488923882f8a.jpg",
     "tempat": "Colored Valley Bridge"
  },
  {
     "img": "https://telegra.ph/file/962b63c265bf921c6979e.jpg",
     "tempat": "Dangerous Green Valley"
  }
]
            let b = await conn.rand(a)
            let str = `
Nyawa mu berkurang -${health * 1}
Karena Kamu telah berpetualang sampai 
_*${b.tempat}*_

Kamu mendapatkan:
*exp:* ${exp} 
*uang:* ${uang}
*tiketcoin:* 1
*sampah:* ${sampah}${potion == 0 ? '' : '\n*Potion:* ' + potion + ''}${diamond == 0 ? '' : '\n*diamond:* ' + diamond + ''}${common == 0 ? '' : '\n*common crate:* ' + common + ''}${uncommon == 0 ? '' : '\n*uncommon crate:* ' + uncommon + ''}
`.trim()
            
            setTimeout(() => {
                  conn.sendButton(m.chat, str, wm, b.img, [['HEAL', '.heal']], m, { asLocation: true })
                 // conn.sendMessage(m.chat, { text: str }, { quoted: m })
                  }, 0)
            setTimeout(() => {
                   conn.sendHydrated(m.chat, rendem, wm, 'https://telegra.ph/file/f315e84d1b99bc1043444.jpg', null, null, null, null, [[null, null]], m, { asLocation: true })
                  // conn.reply(m.chat, rendem, m)
                  }, 3000)
					
            db.data.users[m.sender].health -= health * 1
            db.data.users[m.sender].exp += exp * 1
            db.data.users[m.sender].tiketcoin += 1
            db.data.users[m.sender].money += uang * 1
            db.data.users[m.sender].potion += potion * 1
            db.data.users[m.sender].diamond += diamond * 1
            db.data.users[m.sender].common += common * 1 
            db.data.users[m.sender].uncommon += uncommon * 1
            db.data.users[m.sender].sampah += sampah * 1
            db.data.users[m.sender].mythic += mythic * 1
            db.data.users[m.sender].legendary += legendary * 1
            db.data.users[m.sender].lastadventure = new Date * 1
            } else conn.reply(m.chat, `Anda sudah berpetualang dan kelelahan, silahkan coba *${timers}* lagi`, m)
        } else conn.reply(m.chat, 'Minimal 80 health untuk bisa berpetualang, beli nyawa dulu dengan ketik *' + usedPrefix + 'shop buy potion <jumlah>*\ndan ketik *' + usedPrefix + 'use potion <jumlah>*', m)
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, 'Error', m)
    }
}

handler.help = ['adventure']
handler.tags = ['rpg']
handler.command = /^(adventure)$/i
handler.limit = true
handler.group = true
handler.fail = null

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
