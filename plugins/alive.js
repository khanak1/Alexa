const config = require('../config')
const {cmd , commands} = require('../command')
const os = require('os')
const {runtime} = require('../lib/functions')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let desc = `
*Hi 🍄* ${pushname}

┌────────────────
│❖ *ᴜᴘᴛɪᴍᴇ :* _${runtime(process.uptime())}_
│❖ *ʀᴀᴍ ᴜꜱᴀɢᴇ :*  _${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB_
│❖ *ʜᴏꜱᴛ ɴᴀᴍᴇ :* _${os.hostname()}_
│❖ *ᴏᴡɴᴇʀ :* _Afzaal_Khan 👑_
└────────────────

*I'm Alive Now 🧸*

┌────────────────
│ _*AK Official FB*_
│ https://m.facebook.com/afzaalkhan.k
└────────────────
┌────────────────
│ _*AK Github*_
│ http://github.com/Afzaal-786 
└────────────────
┌────────────────
│ _*Public Earning Group*_
│ https://chat.whatsapp.com/FCPmEG7I8lkGTHmt8i4EP5
└────────────────

> *Created By Afzaal_Khan 👑*
`
return await conn.sendMessage(from,{image: {url: `https://github.com/khanak1/Alexa/blob/main/20240928_154259.jpg`},caption: desc},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})



