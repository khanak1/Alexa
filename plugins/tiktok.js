/*
────────────────────────────────────────────────────────────────────────────────────
─██████████████──██████──────────██████████████──████████──████████──██████████████─
─██░░░░░░░░░░██──██░░██──────────██░░░░░░░░░░██──██░░░░██──██░░░░██──██░░░░░░░░░░██─
─██░░██████░░██──██░░██──────────██░░██████████──████░░██──██░░████──██░░██████░░██─
─██░░██──██░░██──██░░██──────────██░░██────────────██░░░░██░░░░██────██░░██──██░░██─
─██░░██████░░██──██░░██──────────██░░██████████────████░░░░░░████────██░░██████░░██─
─██░░░░░░░░░░██──██░░██──────────██░░░░░░░░░░██──────██░░░░░░██──────██░░░░░░░░░░██─
─██░░██████░░██──██░░██──────────██░░██████████────████░░░░░░████────██░░██████░░██─
─██░░██──██░░██──██░░██──────────██░░██────────────██░░░░██░░░░██────██░░██──██░░██─
─██░░██──██░░██──██░░██████████──██░░██████████──████░░██──██░░████──██░░██──██░░██─
─██░░██──██░░██──██░░░░░░░░░░██──██░░░░░░░░░░██──██░░░░██──██░░░░██──██░░██──██░░██─
─██████──██████──██████████████──██████████████──████████──████████──██████──██████─
────────────────────────────────────────────────────────────────────────────────────
*/


const {cmd , commands} = require('../command')

cmd({
    pattern: "tiktok",
    desc: "downlode tiktok",
    category: "downlode",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("_*please give me a valid url ❗*_")
if (!q.includes('tiktok.com')) return reply("_*That's is not facebook url ❕*_")
const response = await fetch(`https://api.prabath-md.tech/api/tiktokdl?url=${q}`)
const data = await response.json()
const tikvid = data.data.no_wm
reply("_*Downloading your tiktok video＿＿📥*_")
reply("_*Uploading your tiktok video＿＿📤*_")
await conn.sendMessage(from,{video : {url : tikvid },caption : `┌────────────\n*ᴀᴋ ꜰᴀᴄᴇʙᴏᴏᴋ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ..✅*\n_*Created by Afzaal_Khan..🧑🏻‍💻*_\n└─────────────`,mimetype:"video/mp4"},{quoted : mek})

}catch(e){
    console.log(e)
    reply(`_*tiktok downloader sever are busy now 🛜*_\n_*please wait few minutes and try again 🔄*_`)
}
}
)
