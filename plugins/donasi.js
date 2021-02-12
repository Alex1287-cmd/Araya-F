let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Smartfren [+628881393308]
│ • Telkomsel [-]
│ • Gopay [-]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/+628881393308
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
