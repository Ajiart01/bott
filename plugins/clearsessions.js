let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let handler = async (m, { conn, isOwner, command, text }) => {
  if (conn.user.jid != conn.user.jid) return
  m.reply('Executing...')
  let o
  try {
    o = await exec("find sessions ! -name creds.json -maxdepth 1 -type f -delete")
  } catch (e) {
    o = e
  } finally {
    let { stdout, stderr } = o
    if (stdout.trim()) m.reply(stdout)
    if (stderr.trim()) m.reply(stderr)
  }
}
handler.help = ['clearsessions']
handler.tags = ['owner']
handler.command = /^(clearsessions)$/i

module.exports = handler
