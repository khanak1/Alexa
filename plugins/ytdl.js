// Alexa Whatsapp Bot....Created By Sadeesha
// Don't Edit This Fill

const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

//______________________________________SONG-DOWNLODER_______________________________

cmd({
    pattern: "song",
    desc: "downlode songs",
    category: "downlode",
    react: "🎵",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please give me a YT url or Title*")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
*──────────────────*
_*🎧 ＳＯＮＧ ＤＯＷＮＬＯＤＥＲ 🎧*_
*──────────────────*

┌────────────────
│✑ *Title:* _${data.title}_
│
│✑ *Time:* _${data.timestamp}_
│
│✑ *Ago:* _${data.ago}_
│
│✑ *Views:* _${data.views}_
└────────────────

*┌────────────────*
_📤ᴜᴘʟᴏᴅɪɴɢ ʏᴏᴜʀ ᴀᴜᴅɪᴏ ꜰɪʟʟ📤_
*└────────────────*

> *Created by Afzaal_Khan.👑*
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//________________________________Downlode-Audio_______________________________________

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//________________________________Send-Audio_____________________________________________

await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})

}catch(e){
    console.log(e)
    reply(`${e}`)
}
}
)

//_________________________________VIDEO-DOWNLODER_____________________________________

cmd({
    pattern: "video",
    desc: "downlode videos",
    category: "downlode",
    react: "🎬",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please give me a YT url or Title*")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
*──────────────────*
_*🎬 VIDEO ＤＯＷＮＬＯＤＥＲ 🎬*_
*──────────────────*

┌────────────────
│✑ *Title:* _${data.title}_
│
│✑ *Time:* _${data.timestamp}_
│
│✑ *Ago:* _${data.ago}_
│
│✑ *Views:* _${data.views}_
└────────────────

*┌────────────────*
_📤ᴜᴘʟᴏᴅɪɴɢ ʏᴏᴜʀ Video ꜰɪʟʟ📤_
*└────────────────*

> *Created by Afzaal_Khan.👑*
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//________________________________Downlode-Video_______________________________________

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//________________________________Send-Video_____________________________________________

await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4",caption:"*Created by Afzaal_Khan.👑*"},{quoted:mek})


}catch(e){
    console.log(e)
    reply(`${e}`)
}
}
)
