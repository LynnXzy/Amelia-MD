let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
✦ @${nomorown.split`@`[0]} ✦
------- ${nameown} -------

📮 *Note:*
• 𝑶𝒘𝒏𝒆𝒓 𝑻𝒊𝒅𝒂𝒌 𝑴𝒆𝒏𝒆𝒓𝒊𝒎𝒂 𝑺𝒂𝒗𝒆 𝑲𝒐𝒏𝒕𝒂𝒌
• 𝑶𝒘𝒏𝒆𝒓 𝑩𝒆𝒓𝒉𝒂𝒌 𝑴𝒆𝒎𝑩𝒍𝒐𝒌𝒊𝒓 𝑻𝒂𝒏𝒑𝒂 𝑨𝒍𝒂𝒔𝒂𝒏
• 𝑩𝒆𝒓𝒃𝒊𝒄𝒂𝒓𝒂 𝑳𝒂𝒉 𝒀𝒂𝒏𝒈 𝑺𝒐𝒑𝒂𝒏 & 𝑻𝒊𝒅𝒂𝒌 𝑺𝒑𝒂𝒎
• 𝑶𝒘𝒏𝒆𝒓 𝑨𝒌𝒂𝒏 𝑴𝒆𝒎𝒃𝒂𝒍𝒂𝒔 𝑩𝒆𝒓𝒌𝒆𝒏𝒂𝒂𝒏 𝑩𝒐𝒕
• 𝑵𝒐 𝑻𝒆𝒍𝒑`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}
${htjava} *💌 Nama* : Lynn-Md🐸
${htjava} *✉️ Nama RL* : HAMBA ALLAH
${htjava} *♂️ Gender* : ?
${htjava} *🕋 Agama* : Islam
${htjava} *⏰ Tanggal lahir* : 05 April 2007
${htjava} *🎨 Umur* : 15
${htjava} *🧮 Kelas* : 9 Smp?
${htjava} *🧩 Hobby* : Recode Sc
${htjava} *💬 Sifat* : Malaz,Anime,Turu,Futsal
${htjava} *🗺️ Tinggal* : Malay, Sarawak, Kuching
${htjava} *❤️ Pacar* : Hahh!!? Pacar? Apa itu Pacar?

${htjava} *📷 ɪɴsᴛᴀɢʀᴀᴍ* : ${sig}
${htjava} *🐈 ɢɪᴛʜᴜʙ:* ${sgh}
•·––––––––––––––––––––––––––·•
`
  let teks = 'Pilih dibawah kak ! o(〃＾▽＾〃)o'
const sections = [
   {
	title: `${htjava} OWNER –––––––––·•`,
	rows: [
	{title: "📱 • Nomor Owner", rowId: ".owner nomor"},
	{title: "📱 • Pengembang", rowId: ".own"},
	{title: "📱 • Creator", rowId: ".creator"},
	{title: "🎨 • Biodata", rowId: ".owner bio"},
	{title: "🌎 • Script", rowId: ".sc"},
	]
    },{
	title: `${htjava} SUPPORT ME –––––––·•`,
	rows: [
	    {title: "💹 • Donasi", rowId: ".donasi"},
	{title: "🔖 • Sewa", rowId: ".sewa"},
	{title: "🌟 • Buy Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *OWNER* ${htka}`,
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)

          conn.sendButton(m.chat, teksbio, wm, ppown, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner','creator']
handler.tags = ['main', 'info']
handler.command = /^(owner)/i

export default handler
