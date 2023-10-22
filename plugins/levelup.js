let levelling = require('../lib/levelling')

let handler = m => {
  let user = db.data.users[m.sender]
  if (!levelling.canLevelUp(user.level, user.exp, multiplier)) {
    let { min, xp, max } = levelling.xpRange(user.level, multiplier)
    throw `
Level *${user.level} (${user.exp - min}/${xp})*
Kurang *${max - user.exp}* lagi!
`.trim()
  }
  let before = user.level * 1
	while (levelling.canLevelUp(user.level, user.exp, multiplier)) user.level++
	if (before !== user.level) {
            m.reply(`
Selamat, anda telah naik level!
*${before}* -> *${user.level}*
gunakan *.profile* untuk mengecek
	`.trim())
        }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^level(|up)$/i

module.exports = handler
