let handler = async (m, {
    conn,
    text,
    usedPrefix,
    participants
}) => {
    if (!text && !m.quoted) throw `*❏ KICK NUMBER*\n\n• \`\`\`\Tag user:\`\`\`\ *${usedPrefix}kick @Tag*\n• \`\`\`\Reply user:\`\`\`\ *${usedPrefix}kick (REPLY)*\n• \`\`\`\Type Number:\`\`\`\ *${usedPrefix}kick 6289654360447*`

    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
conn.sendMessage(m.chat, {text: `Akang gendang mari kita tendang @${users.split("@")[0]}`, mentions: [users]}, {quoted: m})
    await conn.groupParticipantsUpdate(m.chat, [users], 'remove').catch(console.log)
    await conn.sendMessage(m.chat, {text: `Berhasil mengeluararkan @${users.split("@")[0]} dari grub ini.`, mentions: [users]}, {quoted: m})
}
handler.help = ['kick'].map(v => v + ' @user')
handler.tags = ['group']

handler.command = /^(kick|remove)$/i

handler.admin = true
handler.group = true
handler.botAdmin = true


module.exports = handler
