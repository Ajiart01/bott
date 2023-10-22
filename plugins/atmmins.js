const moneymins = 1
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^pull/i, '')
  count = count ? /all/i.test(count) ? Math.floor(db.data.users[m.sender].bank / moneymins) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (db.data.users[m.sender].bank >= moneymins * count) {
    db.data.users[m.sender].bank -= moneymins * count
    db.data.users[m.sender].money += count
    // conn.reply(m.chat, `-${moneymins * count} ATM\n+ ${count} Money`, m)
    conn.sendButton(m.chat, `-${moneymins * count} ATM\n+ ${count} Money`, wm, 'https://telegra.ph/file/543fbc185c123e6f03f09.jpg', [['ATM ALL', '.atmall']], m, { asLocation: true })
  } else conn.reply(m.chat, `ATM kamu tersisah ${count} !!`, m)
}
handler.help = ['pull <jumlah>', 'pullall']
handler.tags = ['rpg']
handler.command = /^pull([0-9]+)|pull|pullall$/i
handler.limit = true
handler.group = true
handler.fail = null

module.exports = handler
