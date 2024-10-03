/*────────────────────────────────────────────────────────────────────────────────────
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
    pattern: "fb",
    desc: "downlode facebook",
    category: "downlode",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("_*please give me a valid url ❗*_")
if (!q.includes('facebook.com')) return reply("_*That's is not facebook url ❕*_")
const response = await fetch(`https://api.prabath-md.tech/api/fdown?url=${q}`)
const data = await response.json()
const fbvid = data.data.sd
reply("_*Downloading your facebook video＿＿📥*_")
reply("_*Uploading your facebook video＿＿📤*_")
await conn.sendMessage(from,{video : {url : fbvid },caption : `┌────────────\n*ᴀᴋ ꜰᴀᴄᴇʙᴏᴏᴋ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ..✅*\n_*Created By Afzaal_Khan..🧑🏻‍💻*_\n└─────────────`, mimetype:"video/mp4"},{quoted:mek})

}catch(e){
    console.log(e)
    reply("_*facebook downloader sever are busy now 🛜*_\n_*please wait few minutes and try again 🔄*_")
}
}
)
