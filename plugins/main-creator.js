let handler = async (m, { conn, usedPrefix, isOwner }) => {
    m.react('👤')
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:Musabot;;\nFN:Musabot\nORG:Musabot\nTITLE:\nitem1.TEL;waid=51944026510:51944026510\nitem1.X-ABLabel:Musabot\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:Musabot\nEND:VCARD`
    await conn.sendMessage(m.chat, { contacts: { displayName: 'Musabot⁩', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['staff']
handler.tags = ['main']
handler.command = ['owner', 'dueño', 'creador']

export default handler
