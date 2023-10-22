const moneyplus = 1
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^atm/i, '')
  count = count ? /all/i.test(count) ? Math.floor(db.data.users[m.sender].money / moneyplus) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (db.data.users[m.sender].money >= moneyplus * count) {
    db.data.users[m.sender].money -= moneyplus * count
    db.data.users[m.sender].bank += count
    // conn.reply(m.chat, `-${moneyplus * count} Money\n+ ${count} ATM`, m)
    conn.sendButton(m.chat, `-${moneyplus * count} Money\n+ ${count} ATM`, wm, 'https://telegra.ph/file/0501af49ef4b85fc58f2f.jpg', [['PULL ALL', '.pullall']], m, { asLocation: true })
  } else conn.reply(m.chat, `Money tidak mencukupi untuk menabung ${count} ATM`, m)
}
handler.help = ['atm <jumlah>', 'atmall']
handler.tags = ['rpg']
handler.command = /^atm([0-9]+)|atm|atmall$/i
handler.limit = true
handler.group = true
handler.fail = null

module.exports = handler
