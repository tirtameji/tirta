let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • axis [083803671955]
│ • gopay [083130880271]
│ • Dana [083130880271]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6283803671965
╰────

Ini *#caranya untuk Donasi*
*Cara Donasi*:
1.) Beli ke pulsa/ konter terdekat semisal Indomaret
2.) Bilang ke konter terdekat..
"Beli pulsa axis"
3.)Dan terus masukkan nomor kami 083803671955
4.) Jika sudah kirim bukti ke sini.. Terimakasih
*Kalau tidak juga gak papa*👍🏻
*semoga rezeki mu tambah lancar ya
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
