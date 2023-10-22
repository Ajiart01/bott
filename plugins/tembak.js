let handler = async (m, { conn, text, usedPrefix }) => {
  if (isNaN(text)) {
    let nama = conn.getName(m.sender)
    var number = text.split`@`[1];
  } else if (!isNaN(text)) {
    var number = text;
  }

  const format = (num) => {
    const n = String(num),
      p = n.indexOf(".");
    return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, (m, i) =>
      p < 0 || i < p ? `${m},` : m
    );
  };

  if (!text && !m.quoted)
    return conn.reply(m.chat, `${nama} mau nembak siapa? tag orangnya donh`, m);
  // let exists = await conn.isOnWhatsApp(number)
  // if (exists) return conn.reply(m.chat, `*Nomor target tidak terdaftar di WhatsApp*`, m)
  if (isNaN(number)) return conn.reply(m.chat, `Nomor tidak valid!`, m);
  if (number.length > 15) return conn.reply(m.chat, `Format tidak valid!`, m);
  try {
    if (text) {
      var user = number + "@s.whatsapp.net";
    } else if (m.quoted.sender) {
      var user = m.quoted.sender;
    } else if (m.mentionedJid) {
      var user = number + "@s.whatsapp.net";
    }
  } catch (e) {
  } finally {
    let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {};
    let participants = m.isGroup ? groupMetadata.participants : [];
    let users = m.isGroup ? participants.find((u) => u.jid == user) : {};
    if (!user)
      return conn.reply(
        m.chat,
        `Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini`,
        m
      );
    if (user === m.sender)
      return conn.reply(m.chat, `Tidak bisa berpacaran dengan diri sendiri`, m);
    //if (user === conn.user.jid)
    //return conn.reply(m.chat, `Tidak bisa berpacaran dengan bot`, m);

    if (typeof global.db.data.users[user] == "undefined")
      return m.reply("Tidak terdaftar di database");

    if (
      global.db.data.users[m.sender].pasangan != "" &&
      global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan ==
        m.sender &&
      global.db.data.users[m.sender].pasangan != user
    ) {
      var denda = Math.ceil((global.db.data.users[m.sender].exp / 1000) * 20);
      global.db.data.users[m.sender].exp -= denda;
      conn.reply(
        m.chat,
        `Kamu sudah berpacaran dengan @${
          global.db.data.users[m.sender].pasangan.split("@")[0]
        }\n\nSilahkan putus dulu ${usedPrefix}putus @${
          global.db.data.users[m.sender].pasangan.split("@")[0]
        } untuk menembak @${
          user.split("@")[0]
        }\n\nsetia dong!\ndenda : ${format(denda)} (20%)`,
        m,
        {
          contextInfo: {
            mentionedJid: [user, global.db.data.users[m.sender].pasangan],
          },
        }
      );
    } else if (global.db.data.users[user].pasangan != "") {
      var pacar = global.db.data.users[user].pasangan;
      if (global.db.data.users[pacar].pasangan == user) {
        var denda = Math.ceil((global.db.data.users[m.sender].exp / 1000) * 20);
        global.db.data.users[m.sender].exp -= denda;
        if (
          m.sender == pacar &&
          global.db.data.users[m.sender].pasangan == user
        )
          return conn.reply(
            m.chat,
            `Kamu sudah berpacaran dengan @${
              beb.split("@")[0]
            }\n\nsetia dong!\ndenda : ${format(denda)} (20%)`,
            m,
            {
              contextInfo: {
                mentionedJid: [beb],
              },
            }
          );
        conn.reply(
          m.chat,
          `Tau sopan santun dikit tod!\n@${
            user.split("@")[0]
          } sudah berpacaran dengan @${
            pacar.split("@")[0]
          }\n\nSilahkan cari pasangan lain aja!\ndenda : ${format(
            denda
          )} (10%)*`,
          m,
          {
            contextInfo: {
              mentionedJid: [user, pacar],
            },
          }
        );
      } else {
        const pler = m.sender
        global.db.data.users[m.sender].pasangan = user;
        conn.reply(
          m.chat,
          `Kamu baru saja mengajak @${
            user.split("@")[0]
          } berpacaran\n\nSilahkan menunggu jawabannya saja ya!\n@${
            user.split("@")[0]
          } silahkan Ketik ${usedPrefix}terima @${pler.split("@")[0]} atau ${usedPrefix}tolak @${pler.split("@")[0]}`,
          m,
          {
            contextInfo: {
              mentionedJid: [user, pler],
            },
          }
        );
      }
    } else if (global.db.data.users[user].pasangan == m.sender) {
      global.db.data.users[m.sender].pasangan = user;
      conn.reply(
        m.chat,
        `Selamat anda resmi berpacaran dengan @${
          user.split("@")[0]
        }\n\nSemoga langgeng dan bahagia selalu sampai melahirkan bayi halal. :D`,
        m,
        {
          contextInfo: {
            mentionedJid: [user],
          },
        }
      );
    } else {
      const pler2 = m.sender

      global.db.data.users[m.sender].pasangan = user;
      conn.reply(
        m.chat,
        `Kamu baru saja mengajak @${
          user.split("@")[0]
        } berpacaran\n\nSilahkan menunggu jawabannya saja ya!\n@${
          user.split("@")[0]
        } Silahkan Ketik ${usedPrefix}terima @${pler2.split("@")[0]} atau ${usedPrefix}tolak @${pler2.split("@")[0]}\n\nUntuk memberi jawaban.`,
        m,
        {
          contextInfo: {
            mentionedJid: [user, pler2],
          },
        }
      );
    }
  }
};
handler.help = ["tembak"].map((v) => v + " *@tag*");
handler.tags = ["jadian"];
handler.command = /^(tembak)$/i;
handler.group = true;
handler.limit = true;
handler.fail = null;
module.exports = handler;