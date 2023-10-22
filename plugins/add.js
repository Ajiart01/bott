/*let handler = async (m, { conn, text, participants }) => {
    let _participants = participants.map(user => user.id)
    let users = (await Promise.all(
        text.split(',')
            .map(v => v.replace(/[^0-9]/g, ''))
            .filter(v => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net'))
            .map(async v => [
                v,
                await conn.onWhatsApp(v + '@s.whatsapp.net')
            ])
    )).filter(v => v[1][0]?.exists).map(v => v[0] + '@c.us')
    const response = await conn.groupParticipantsUpdate(m.chat, users, 'add')
    m.reply(`Succes add person`, null, { mentions: response })
}
handler.help = ['add 628xx']
handler.tags = ['group']
handler.command = /^(add)$/i

handler.admin = true
handler.group = true
handler.botAdmin = true

module.exports = handler
*/



const {
	getBinaryNodeChild,
	getBinaryNodeChildren
} = require('@adiwajshing/baileys')

const fetch = require('node-fetch')

const { wm } = require('../config');
let util = require('util');

let handler = async (m, { conn, text, participants, usedPrefix, command, isAdmin, isOwner }) => {
	if (!(isAdmin || isOwner)) {
		global.dfail('admin', m, conn)
		throw false
	}
const thumbnail = `https://telegra.ph/file/c5f673fc0c8507fd42291.jpg`
    let wes = {
    "key": {
         "remoteJid": "status@broadcast",
 "participant": "0@s.whatsapp.net",
         "fromMe": false,
         "id": ""
     },
    "message": {
    thumbnail: await (await fetch(thumbnail)).buffer(),
         "conversation": "Follow IG @zinyut_"
     }
}
    let AdReply = {
externalAdReply: {
title: 'RaisaBot',
body: 'Play Music 🎵',
mediaType: 1,
thumbnail: await (await fetch(thumbnail)).buffer(),
thumbnailUrl: thumbnail,
renderLargerThumbnail: true, 
sourceUrl: 'https://chat.whatsapp.com/JBxHEnj0nPcAxymIgE0046',
mediaUrl: thumbnail,
}
}
let p = `Maaf kak ${conn.getName(m.sender)} Fitur ini tidak dapat digunakan karena dapat menyebabkan nomor wahtsapp bot diblokir oleh pihak WhatsApp.`
 conn.reply(m.chat, p, wes, { contextInfo: AdReply })
	/*if (!text && m.quoted) text = m.quoted.sender.split('@')[0]
	else if (!text) throw `_Masukan nomor!_\nContoh:\n\n${usedPrefix + command} ${global.owner[0]}`

    let _participants = participants.map(user => user.id)
    let users = (await Promise.all(
        text.split(',')
            .map(v => v.replace(/[^0-9]/g, ''))
            .filter(v => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net'))
            .map(async v => [
                v,
                await conn.onWhatsApp(v + '@s.whatsapp.net')
            ])
    )).filter(v => v[1][0]?.exists).map(v => v[0] + '@c.us')
    if (!users[0]) throw 'Nomor tidak tersedia di WhatsApp!';
    m.reply('_Sedang di proses..._')
	await conn.delay(1500)
    const response = await conn.query({
        tag: 'iq',
        attrs: {
            type: 'set',
            xmlns: 'w:g2',
            to: m.chat,
        },
        content: users.map(jid => ({
            tag: 'add',
            attrs: {},
            content: [{ tag: 'participant', attrs: { jid } }]
        }))
    })
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null)
    const jpegThumbnail = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
    const add = await getBinaryNodeChild(response, 'add')
    const participant = await getBinaryNodeChildren(response, 'add')
    let anu = participant[0].content.filter(v => v)
    if (anu[0].attrs.error == 408) conn.sendButton(m.chat, `Tidak dapat menambahkan @${anu[0].attrs.jid.split('@')[0]}!\nKabarnya si @${anu[0].attrs.jid.split('@')[0]} baru keluar dari grup ini`, wm, 'https://telegra.ph/file/d5996f3ec87fabe48fdcb.jpg', [['Link', '.link']], m, { asLocation: true, mentions: conn.parseMention(`Tidak dapat menambahkan @${anu[0].attrs.jid.split('@')[0]}!\nKabarnya si @${anu[0].attrs.jid.split('@')[0]} baru keluar dari grup ini`) }) // conn.sendButton(m.chat, `Tidak dapat menambahkan @${anu[0].attrs.jid.split('@')[0]}!\nKabarnya si @${anu[0].attrs.jid.split('@')[0]} baru keluar dari grup ini :'v`, wm, 'link', usedPrefix + `link`, m)
    for (const user of participant[0].content.filter(item => item.attrs.error == 403)) {
    	const jid = user.attrs.jid
    	const content = await getBinaryNodeChild(user, 'add_request')
    	const invite_code = content.attrs.code
    	const invite_code_exp = content.attrs.expiration
    	const txt = `Mengundang @${jid.split('@')[0]} menggunakan invite...`
    	
    	conn.sendButton(m.chat, txt, wm, 'https://telegra.ph/file/d5996f3ec87fabe48fdcb.jpg', [['Menu', '.menu']], m, { asLocation: true, mentions: conn.parseMention(txt) }) // conn.sendButton(m.chat, txt, wm, 'menu', '.m', m)
    	await conn.sendGroupV4Invite(m.chat, jid, invite_code, invite_code_exp, await conn.getName(m.chat), 'Undangan untuk bergabung ke grup WhatsApp saya', jpegThumbnail)
    }	
    if (!anu[0].attrs.error) m.reply('Berhasil menambahkan @' + anu[0].attrs.jid.split('@')[0] + ' \n'.trim())*/
}
handler.help = ['add'].map(v => v + ' @user')
handler.tags = ['group']
handler.command = /^(add)$/i

handler.admin = true
handler.group = true
handler.limit = 5
handler.botAdmin = true
handler.fail = null
module.exports = handler
