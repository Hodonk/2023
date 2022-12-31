let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = ``.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Script Privat By FuadZy', 'status@broadcast')
}
handler.command = /^(vair)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler