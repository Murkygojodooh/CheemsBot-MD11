//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='{"noiseKey":{"private":{"type":"Buffer","data":"eFsQfBOVrP8mdgiqKLNeJwW/rnB1VFGHeG7Y7SX2Qm8="},"public":{"type":"Buffer","data":"NznYFqepaLoNc2gmghaBdFfdHOHjqsPZyKGfw0sCmWo="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"uBGCLfv7NHD70xZm69cn3oSzGitdKpz9YJWQ7r2LN0I="},"public":{"type":"Buffer","data":"ZlnV9wG8nob2OUFYBOJIKdlIp0bTgz/ukf7T2jbMvQc="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"4FPyJ81NQe24cKT5ImvRc04mgbjj+FPfjrDGVsxMokA="},"public":{"type":"Buffer","data":"s3dXCgLodJZIfPNH60c8MYV4GkI74xPrR8woy3MMtww="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"SHNPwKyZ4w452/orCseqLe+lkdmlciO8l7sjeatJDFI="},"public":{"type":"Buffer","data":"QiPTV0Hso/Wo55gfjgZakaj0fT+xLcP2VqnUfNOtbg4="}},"signature":{"type":"Buffer","data":"FWSYmE8iiBnNHKnvgB5Pvky5Gryv2qO7QfpVt6C/o4j96Pjx76IiQDojaNRbBOR6OouklGWhuiZyJnG6LX7Cjw=="},"keyId":1},"registrationId":120,"advSecretKey":"/cGd+UhaWMLvI5dyTKT3HiRZA3K5p15jf6Utmzmezu8=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"79N-3Bu1Rg2wSObn36ESHA","phoneId":"835fa617-ee36-4f0b-904d-8372877fb74c","identityId":{"type":"Buffer","data":"9CSVLmY1Ui05U/JjvUFgIeAXLuw="},"registered":true,"backupToken":{"type":"Buffer","data":"a7ijf93Eyq22msbYZEPmFQqP0R4="},"registration":{},"pairingCode":"J4B8VT7V","me":{"id":"237698793862:5@s.whatsapp.net","name":"𝓜𝓻. 𝓜𝓓𝓖","lid":"153189034790991:5@lid"},"account":{"details":"CLLN57wHEKbb5rIGGAEgACgA","accountSignatureKey":"1KXe6FmbzUlGqTz613i1w3yfxnP48FQNX1O+PyDpWgA=","accountSignature":"X8bXhidxHgMgSMZ3Pd0KwMO+MD9eHtckHXwjev91v0N+/V+/nH711uM766bQuXRJIOglmyofJbWUtcz1Vjp+Cg==","deviceSignature":"INmlP/in7CebVWdvgPrmcYfdonJrdjvrWdFCJb87g+sLWEXR7Yx1GLhiGz9gQ/VwIvRyHfD2E/MVb4KmNROTiw=="},"signalIdentities":[{"identifier":{"name":"237698793862:5@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BdSl3uhZm81JRqk8+td4tcN8n8Zz+PBUDV9Tvj8g6VoA"}}],"platform":"smba","lastAccountSyncTimestamp":1717153193}'

//owmner v card
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: DGXeon" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = 'Cheems Bot MD V12' //ur bot name
global.ownernumber = '+237698793862' //ur owner number
global.ownername = '꧁༒𝑴𝒖𝒓𝒌𝒚 𝒅𝒆𝒔𝒌ꪶ࿋྄ིᤢꫂ𝑮𝒐𝒋𝒐⁖℘༒' //ur owner name
global.websitex = "https://youtu.be/mu5m6aB6P5k"
global.wagc = "https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20"
global.themeemoji = '🪀'
global.wm = "Xeon Bot Inc."
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD11' //script link
global.packname = "꧁༒𝑴𝒖𝒓𝒌𝒚 𝒅𝒆𝒔𝒌ꪶ࿋྄ིᤢꫂ𝑮𝒐𝒋𝒐⁖℘༒"author
global.author = "🦄드림 가이 Xeon\n\n+916909137213"
global.creator = "+237698793862@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["+237673141436"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
