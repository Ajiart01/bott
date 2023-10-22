let fs = require("fs"),
    handler = async (a, {
        conn: e,
        args: r,
        isBotAdmin: l,
        isAdmin: h,
        isOwner: i,
        text: t
    }) => {
        if (a.isGroup) {
            if (!l) throw dfail("botAdmin", a, e), !1;
            if (!h && !i) throw dfail("admin", a, e), !1
        }
        l = `masukkan angka mewakili jumlah hari.
list yang tersedia : 0, 1, 7, 90`;
        if (!t) return e.reply(a.chat, l, a);
        try {
            "7" == r[0] && await e.groupToggleEphemeral(a.chat, 604800), "1" == r[0] && await e.groupToggleEphemeral(a.chat, 86400), "90" == r[0] && await e.groupToggleEphemeral(a.chat, 7776e3), "0" == r[0] && await e.groupToggleEphemeral(a.chat, 0), "off" == r[0] && await e.groupToggleEphemeral(a.chat, 0)
        } catch {
            throw l
        }
    };
handler.help = ["ephe <0> <1> <7> <90>"]
handler.tags = ["tools"]
handler.command = /^(ephe(meral)?)$/i
handler.group = !0

module.exports = handler; 
