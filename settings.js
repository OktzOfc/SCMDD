const chalk = require("chalk")
const fs = require("fs")

//aumto presence update
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.autoblockmorroco = true //auto block 212 (true to on, false to off)
global.autokickmorroco = true //auto kick 212 (true to on, false to off) 
global.antispam = false//auto kick spammer (true to on, false to off)


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['6289528681577'] //ur owner number
global.ownernomer = "6289528681577" //ur owner number2
global.ownername = "OktzOffc" //ur owner name
global.ytname = "z" //ur yt chanel name
global.socialm = "GitHub: FeryGanz" //ur github or insta name
global.location = "Jonggat, Lombok, Indonesia" //ur location

//Server crete panel egg biasa
global.domain = 'https://oktzoffc.pannelvvip.my.id' // Isi Domain Lu jangan kasih tanda / di akhir link
global.apikey = 'ptla_Rix0DGZ0SWWUroZMuEtvcMY6r0ED6KBqeA5Icg8gfIr' // Isi Apikey Plta Lu
global.capikey = 'ptla_Rix0DGZ0SWWUroZMuEtvcMY6r0ED6KBqeA5Icg8gfIr' // Isi Apikey Pltc Lu
//===========================//
//Server create panel egg pm2
global.apikey2 = '-' // Isi Apikey Plta Lu
global.capikey2 = '-' // Isi Apikey Pltc Lu
global.domain2 = '-' // Isi Domain Lu
global.docker2 = "ghcr.io/cekilpedia/vip:sanzubycekil" //jangan di ubah

global.eggsnya2 = '15' // id eggs yang dipakai
global.location2 = '1' // id location
//===========================//
global.domainotp = "https://claudeotp.com/api"
global.apikeyotp = "a395f97fe99f4fad0e790d10af518b9a"
global.eggsnya = '15' // id eggs yang dipakai
global.location3 = '1' // id location
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.tekspushkonv3 = ""
global.tekspushkonv4 = ""
//===========================//

global.rpg = {
    emoticon(string) {
        string = string.toLowerCase()
        let emot = {
            level: '📊',
            limit: '🎫',
            health: '❤️',
            exp: '✨',
            atm: '💳',
            money: '💰',
            bank: '🏦',
            potion: '🥤',
            diamond: '💎',
            common: '📦',
            uncommon: '🛍️',
            mythic: '🎁',
            legendary: '🗃️',
            superior: '💼',
            pet: '🔖',
            trash: '🗑',
            armor: '🥼',
            sword: '⚔️',
            pickaxe: '⛏️',
            fishingrod: '🎣',
            wood: '🪵',
            rock: '🪨',
            string: '🕸️',
            horse: '🐴',
            cat: '🐱',
            dog: '🐶',
            fox: '🦊',
            robo: '🤖',
            petfood: '🍖',
            iron: '⛓️',
            gold: '🪙',
            emerald: '❇️',
            upgrader: '🧰',
            bibitanggur: '🌱',
            bibitjeruk: '🌿',
            bibitapel: '☘️',
            bibitmangga: '🍀',
            bibitpisang: '🌴',
            anggur: '🍇',
            jeruk: '🍊',
            apel: '🍎',
            mangga: '🥭',
            pisang: '🍌',
            botol: '🍾',
            kardus: '📦',
            kaleng: '🏮',
            plastik: '📜',
            gelas: '🧋',
            chip: '♋',
            umpan: '🪱',
            skata: '🧩'
        }
        let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
        if (!results.length) return ''
        else return emot[results[0][0]]
    }
}

//new
global.botname = "OktzOffc⚡"
global.ownernumber = '6289528681577'
global.ownername = 'OktzOffc'
global.ownerNumber = ["6289528681577@s.whatsapp.net"]
global.ownerweb = ""
global.websitex = ""
global.wagc = "https://chat.whatsapp.com/IWTKk9Ik260659z7p0J9D3"
global.themeemoji = '🪀'
global.wm = "Ferz Bot Inc."
global.botscript = 'Buy Ngab 5k Aja Murah🗿' //script link
global.packname = "Sticker By OktzBotz"
global.author = "| OktzBotz |\n\n"
global.creator = "6289528681577@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.hituet = 0

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
wait: "*_Sabar Ngab_*",
   success: "Sukses Ngab`",
   on: "Lagi Aktif Ngab", 
   off: "Lagi Off Ngab",
   query: {
       text: "Oy Ngab Teks Nya Mana?",
       link: "Oy Ngab Link Nya Mana?",
   },
   error: {
       fitur: "Oy Ngab Fitur Ini Eror",
   },
   only: {
       group: "Oy Ngab Fitur Ini Bisa Digunakan Di group",
       private: "Oy Ngab Fitur Ini Bisa Digunakan Di Privat Chat",
       owner: "Oy Ngab Fitur Ini Khusus Owner",
       admin: "Oy Ngab Fitur Ini Khusus Admin Group",
       badmin: "Oy Ngab Gw Bukan Admin Group",
       premium: "Oy Ngab Lu Belum Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner",
   }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
