import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {
	let url = 'https://telegra.ph/file/f906fc225978ccaa06483.jpg'
	conn.sendButton(m.chat, ' *❲ JADI BOT ❳*\n\n⎇ 14 Hari Rm 13\n⎇ 30 Hari Rm 20\n⎇ 40 Hari 27ᴋ\n⎇ 60 Hari Rm 40\n\n*ᴍɪɴᴀᴛ ᴄʜᴀᴛ ᴏᴡɴᴇʀ*', wm, await(await fetch(url)).buffer(), [['Owner',`/owner`]],m)
}
handler.command = /^(jadibot2)$/i
handler.tags = ['info']
handler.help = ['jadibot2']
handler.premium = false
handler.limit = false

export default handler

// 📮 Made In Xynoz 
// Subscribe YouTube Xynoz!
// Tq To Jangan Di Hpus!!
