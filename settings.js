const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'SUPUN-MD=GJcTjChA#s4ljhu_xFRdC7u23bvOsls2LfCjE6SBrv2c_avRtGaQ' : process.env.SESSION_ID,
PREFIX: process.env.PREFIX || '.' ,
PORT: process.env.PORT === undefined ? "8000" : process.env.PORT,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94710695082' : process.env.OWNER_NUMBER,
MODE: process.env.MODE === undefined ?"public" : process.env.MODE,
BUTTON: process.env.BUTTON === undefined ?"true" : process.env.BUTTON,
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ?"true" : process.env.AUTO_READ_STATUS,
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT === undefined ?"true" : process.env.AUTO_STATUS_REACT,
AUTO_VOICE: process.env.AUTO_VOICE === undefined ? "false" : process.env.AUTO_VOICE,
AUTO_REPLY: process.env.AUTO_REPLY === undefined ? "false" : process.env.AUTO_REPLY,
AUTO_STICKER: process.env.AUTO_STICKER === undefined ? "true" : process.env.AUTO_STICKER,
ANTI_BAD: process.env.ANTI_BAD === undefined ? "true" : process.env.ANTI_BAD,
ANTI_LINK: process.env.ANTI_LINK === undefined ? "true" : process.env.ANTI_LINK,
ANTI_CALL: process.env.ANTI_CALL === undefined ? "true" : process.env.ANTI_CALL, 
ANTI_BOT: process.env.ANTI_BOT === undefined ? "true" : process.env.ANTI_BOT,   
ANTI_DELETE: process.env.ANTI_DELETE === undefined ? 'true' : process.env.ANTI_DELETE,
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? 'true' : process.env.DELETEMSGSENDTO,
WELCOME_GOODBYE: process.env.WELCOME_GOODBYE === undefined ? 'true' : process.env.WELCOME_GOODBYE,
ADMIN_EVENT: process.env.ADMIN_EVENT === undefined ? 'false' : process.env.ADMIN_EVENT,
AI_CHAT: process.env.AI_CHAT === undefined ? "false" : process.env.AI_CHAT,
ALLWAYS_OFFLINE: process.env.ALLWAYS_OFFLINE === undefined ? "false" : process.env.ALLWAYS_OFFLINE,
ALLWAYS_ONLINE: process.env.ALLWAYS_ONLINE === undefined ? "true" : process.env.ALLWAYS_ONLINE,
AUTO_READ_CMD: process.env.AUTO_READ_CMD === undefined ? "true" : process.env.AUTO_READ_CMD,
ALWAYS_RECORDING: process.env.ALWAYS_RECORDING === undefined ? "false" : process.env.ALWAYS_RECORDING,
ALWAYS_TYPING: process.env.ALWAYS_TYPING === undefined ? "true" : process.env.ALWAYS_TYPING,
AUTO_BIO: process.env.AUTO_BIO === undefined ? "false" : process.env.AUTO_BIO,
AUTO_REACT: process.env.AUTO_REACT === undefined ? "trye" : process.env.AUTO_REACT,
OWNER_REACT: process.env.OWNER_REACT === undefined ? "true" : process.env.OWNER_REACT,
HEART_REACT: process.env.HEART_REACT === undefined ? "true" : process.env.HEART_REACT,
MAX_SIZE: process.env.MAX_SIZE === undefined ? "500" : process.env.MAX_SIZE,
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY === undefined ? "false" : process.env.AUTO_STATUS_REPLY,
AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG === undefined ? "`𝒀𝒐𝒖𝒓 𝒔𝒕𝒂𝒕𝒖𝒔 𝒔𝒆𝒆𝒏 𝒋𝒖𝒔𝒕 𝒏𝒐𝒘 𝒃𝒚 Anuwh MDᥫ᭡👑`" : process.env.AUTO_STATUS__MSG,
WELCOME_MG: process.env.WELCOME_MG === undefined ? "*Enjoy your stay our bot & follow our rules and regulations! 😊*" : process.env.WELCOME_MG,
LEAVE_MG: process.env.LEAVE_MG === undefined ? "*Hope to see you against. good bye! 🥺*" : process.env.LEAVE_MG,
PROMOTE_MG: process.env.PROMOTE_MG === undefined ? "You have been *promoted* to *admin* 🥳" : process.env.PROMOTE_MG,
DEMOTE_MG: process.env.DEMOTE_MG === undefined ? "You have been *demoted* from *admin* 😬" : process.env.DEMOTE_MG,
AUTO_ADD_Country_Code: process.env.AUTO_ADD_Country_Code === undefined ? "94" : process.env.AUTO_ADD_Country_Code,
AUTO_NEWS_SENDER: process.env.AUTO_NEWS_SENDER === undefined ? "true" : process.env.AUTO_NEWS_SENDER,
AUTO_TIKTOK_SENDER: process.env.AUTO_TIKTOK_SENDER === undefined ? "false" : process.env.AUTO_TIKTOK_SENDER,
AUTO_ANIM_SENDER: process.env.AUTO_ANIM_SENDER === undefined ? "false" : process.env.AUTO_ANIM_SENDER,
FOOTER: process.env.FOOTER === undefined ? "> POWERED BY ANUWH MD BY EOH TM" : process.env.FOOTER,
LANG: process.env.LANG === undefined ? "EN" : process.env.LANG, // SI OR EN
MOVIE_JID: process.env.MOVIE_JID === undefined ? "120363417186678299@newsletter" : process.env.MOVIE_JID,
SEEDR_MAIL: process.env.SEEDR_MAIL === undefined ? "false" : process.env.SEEDR_MAIL,
SEEDR_PASSWORD: process.env.SEEDR_PASSWORD === undefined ? "false" : process.env.SEEDR_PASSWORD,
MAX_SIZE: process.env.MAX_SIZE === undefined ? "500" : process.env.MAX_SIZE,
TIKTOKSE: process.env.TIKTOKSE === undefined ? "sinhala status wadan" : process.env.TIKTOKSE,
NEWS_SEND_JID: process.env.NEWS_SEND_JID === undefined ? "120363417186678299@newsletter" : process.env.NEWS_SEND_JID,
TIKTOK_SEND_JID: process.env.TIKTOK_SEND_JID === undefined ? "120363417186678299@newsletter" : process.env.TIKTOK_SEND_JID,
ANIM_SEND_JID: process.env.ANIM_SEND_JID === undefined ? "120363417186678299@newsletter" : process.env.ANIM_SEND_JID,
BAD_NO_BLOCK: process.env.BAD_NO_BLOCK === undefined ? "false" : process.env.BAD_NO_BLOCK,
AUTO_BLOCK: process.env.AUTO_BLOCK === undefined ? "false" : process.env.AUTO_BLOCK,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgresql://supunmd_hqdv_user:BQqBYTi1XFHbA7k8wtBCiG4NNv8fll6t@dpg-d0qha9buibrs73ejvtjg-a.oregon-postgres.render.com/supunmd_hqdv' : process.env.POSTGRESQL_URL,
OMDB_API_KEY: process.env.OMDB_API_KEY === undefined ? '76cb7f39' : process.env.OMDB_API_KEY,
   };
    
