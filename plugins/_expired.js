module.exports = {
    async all(m) {
        if (!m.isGroup) return 
        let chats = db.data.chats[m.chat]
        if (!chats.expired) return !0
        if (+new Date() > chats.expired) {
        	const data = owner.filter(([id, isCreator]) => id && isCreator)
            await m.reply(`Expired group ini sudah habis\nWaktunya *${this.user.name}* untuk keluar dari group ini\n\nByee.. 👋`)
            await this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
            await this.delay(10000) 
            await this.groupLeave(m.chat)
        }
    }
}

