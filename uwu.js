/**
 * This source code below is free, please DO NOT sell this in any form!
 * Source code ini gratis, jadi tolong JANGAN jual dalam bentuk apapun!
 *
 * If you copying one of our source code, please give us CREDITS. Because this is one of our hardwork.
 * Apabila kamu menjiplak salah satu source code ini, tolong berikan kami CREDIT. Karena ini adalah salah satu kerja keras kami.
 *
 * If you want to contributing to this source code, pull requests are always open.
 * Apabila kamu ingin berkontribusi ke source code ini, pull request selalu kami buka.
 *
 * Thanks for the contributions.
 * Terima kasih atas kontribusinya.
 */
 
/********** MODULES **********/
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./lib/help')
const { inven } = require('./lib/inven')
const { mancing } = require('./lib/mancing')
const { donasi } = require('./lib/donasi')
const { fetchJson } = require('./lib/fetcher')
const fetch = require('node-fetch');
const { recognize } = require('./lib/ocr')
const { exec } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const brainly = require('brainly-scraper')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./language')
/********** END OF MODULES **********/

/********** UTILS **********/
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN: client\n' 
            + 'ORG: Pengembang BniBot;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=6282331787920:+62 823-3178-7920\n' 
            + 'END:VCARD' 
prefix = '#'
cr = 'BORUTONESIA X BERITANARUBORU'
blocked = []          
limitawal = 1000


/*********** LOAD FILE ***********/
const ikaning = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const ikan76537 = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const virtex = JSON.parse(fs.readFileSync('./lib/virtex.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const as = JSON.parse(fs.readFileSync('./database/bot/as.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const ikan = JSON.parse(fs.readFileSync('./database/user/ikan.json'))
const ikan2 = JSON.parse(fs.readFileSync('./database/user/ikan2.json'))
const ikan3 = JSON.parse(fs.readFileSync('./database/user/ikan3.json'))
const ikan4 = JSON.parse(fs.readFileSync('./database/user/ikan4.json'))
const magic1 = JSON.parse(fs.readFileSync('./database/user/magic.json'))
const setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))
const imagenye = JSON.parse(fs.readFileSync('./strg/image.json'))
/*********** END LOAD ***********/

mess = {
				wait: '[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!',
				begin: '*[INFO] FITUR INI HANYA UNTUK ROLES BEGINNERS*',
				vxg: {
					stick: ' Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ',
					hx: ' [❗] Link yang anda kirim tidak valid!'
				},
				only: {
					hdhd: '[❗] Perintah ini hanya bisa di gunakan dalam group! ❌',
					bd: '[❗] Fitur Dalam Private Harap Menunggu Owner Mempublikasikan! ',
					kdks: '[❗] PERINTAH INI KHUSUS USER *PREMIUM*',
					hxh: '[❗] PERINTAH INI KHUSUS USER *ModBot*',
					benned: 'Anda Ke Band Silahkan Hubungi Owner Agar Membuka Band Anda',
					hxh: '[❗] Lu spe owner? ini fitur khusus owner njierrr ❌',
					gxh: '[❗] Lu spe owner? ini fitur khusus owner njierrr ❌',
					hxh: `──「 DAFTAR 」──\nHalo gan !\nKamu belum Terdaftar didalam database, \n\nCommand : ${prefix}daftar nama|umur\nContoh : ${prefix}daftar ANKER|17\n\n──「 DARK BOT 」──`,
					bdh: '[❗] Perintah ini hanya bisa di gunakan oleh admin group! ❌',
					nogclog: ' [❗] Perintah ini hanya bisa di gunakan ketika Fitur Gclog telah di aktivkan ❌',
				}
			}
        
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const checkVerifUser = (sender) => {
            let status = false
            Object.keys(ikan).forEach((i) => {
                if (ikan[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        /********** FUNCTION IKAN ***************/
        
        const addIkan = (sender) => {
        	const obj = {id: sender, ikan : 0}
            ikan.push(obj)
            fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
        }
        
        const addIkanUser = (sender, amount) => {
            let position = false
            Object.keys(ikan).forEach((i) => {
                if (ikan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ikan[position].ikan += amount
                fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
            }
        }
        
        const checkIkanuser = (sender) => {
        	let position = false
            Object.keys(ikan).forEach((i) => {
                if (ikan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return ikan[position].ikan
            }
        }
        
        
        const confirmIkan = (sender, amount) => {
        	let position = false
            Object.keys(ikan).forEach((i) => {
                if (ikan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ikan[position].ikan -= amount
                fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
            }
        }
        
        /********** FUNCTION ikan2 ***************/
        
        const addikan2 = (sender) => {
        	const obj = {id: sender, ikan2 : 0}
            ikan2.push(obj)
            fs.writeFileSync('./database/user/ikan2.json', JSON.stringify(ikan2))
        }
        
        const addikan2User = (sender, amount) => {
            let position = false
            Object.keys(ikan2).forEach((i) => {
                if (ikan2[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ikan2[position].ikan2 += amount
                fs.writeFileSync('./database/user/ikan2.json', JSON.stringify(ikan2))
            }
        }
        
        const checkikan2user = (sender) => {
        	let position = false
            Object.keys(ikan2).forEach((i) => {
                if (ikan2[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return ikan2[position].ikan2
            }
        }
        
        const confirmikan2 = (sender, amount) => {
        	let position = false
            Object.keys(ikan2).forEach((i) => {
                if (ikan2[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ikan2[position].ikan2 -= amount
                fs.writeFileSync('./database/user/ikan2.json', JSON.stringify(ikan2))
            }
        }
        
        /********** FUNCTION ikan3 ***************/
        
        const addikan3 = (sender) => {
        	const obj = {id: sender, ikan3 : 0}
            ikan3.push(obj)
            fs.writeFileSync('./database/user/ikan3.json', JSON.stringify(ikan3))
        }
        
        const addikan3User = (sender, amount) => {
            let position = false
            Object.keys(ikan3).forEach((i) => {
                if (ikan3[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ikan3[position].ikan3 += amount
                fs.writeFileSync('./database/user/ikan3.json', JSON.stringify(ikan3))
            }
        }
        
        const checkikan3user = (sender) => {
        	let position = false
            Object.keys(ikan3).forEach((i) => {
                if (ikan3[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return ikan3[position].ikan3
            }
        }
        
        const confirmikan3 = (sender, amount) => {
        	let position = false
            Object.keys(ikan3).forEach((i) => {
                if (ikan3[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ikan3[position].ikan3 -= amount
                fs.writeFileSync('./database/user/ikan3.json', JSON.stringify(ikan3))
            }
        }
        
        /********** FUNCTION ikan4 ***************/
        
        const addikan4 = (sender) => {
        	const obj = {id: sender, ikan4 : 0}
            ikan4.push(obj)
            fs.writeFileSync('./database/user/ikan4.json', JSON.stringify(ikan4))
        }
        
        const addikan4User = (sender, amount) => {
            let position = false
            Object.keys(ikan4).forEach((i) => {
                if (ikan4[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ikan4[position].ikan4 += amount
                fs.writeFileSync('./database/user/ikan4.json', JSON.stringify(ikan4))
            }
        }
        
        const checkikan4user = (sender) => {
        	let position = false
            Object.keys(ikan4).forEach((i) => {
                if (ikan4[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return ikan4[position].ikan4
            }
        }
        
        const confirmikan4 = (sender, amount) => {
        	let position = false
            Object.keys(ikan4).forEach((i) => {
                if (ikan4[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ikan4[position].ikan4 -= amount
                fs.writeFileSync('./database/user/ikan4.json', JSON.stringify(ikan4))
            }
        }
        
        /********** FUNCTION ***************/
        
        
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
            const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        
        
  function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/********** END FUNCTION ***************/

const client = new WAConnection()
   client.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('[','white'),color('∆','red'),color(']','white'),color('qr is ready please scan now','white'),color('By','red'),color(':','white'),color('client','yellow'))
})

client.on('credentials-updated', () => {
	const authInfo = client.base64EncodedAuthInfo()
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
client.connect();
client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `[ *SELAMAT DATANG DI ${mdata.subject}* ]  @${num.split('@')[0]}`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `SELAMAT TINGGAL... @${num.split('@')[0]}??* \n_Jasamu akan saya kubur dalam dalam_`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
setTimeout( () => {
console.log(color('[INFO] Load Database Info...','green'))
}, 10000) 
setTimeout( () => {
console.log(color('[INFO] The Server Is Ready..','green'))
}, 15000) 
setTimeout( () => {
console.log(color('[INFO] Welcome Back Owner - Sama..','white'))
}, 20000) 
	client.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const autorespon = mek.message.conversation
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timu = moment(time * 1000).format('DD/MM/YYYY');
            const timi = moment(time * 1000).add(30, 'days').calendar();
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const q = args.join(' ')

			
			const botNumber = client.user.jid
			const ownerNumber = ["6282331787920@s.whatsapp.net", "6281327236061@s.whatsapp.net", "6285695222845@s.whatsapp.net"] 
			const magicNumber = ["6282331787920@s.whatsapp.net", "6281327236061@s.whatsapp.net"] 
			const beginNumber = [] 
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()
            const mesejAnti2 = (args.length > 10000)
            const isRegistered = checkRegisteredUser(sender)
            const isVerify = checkVerifUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? ikaning.includes(groupId) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAntiVirtex = isGroup ? virtex.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isAs = isGroup ? as.includes(from) : false
			const tescuk = ["0@s.whatsapp.net"]
			const isSimi = isGroup ? samih.includes(from) : false
			const teks = mek.message.conversation
			const isOwner = ownerNumber.includes(sender)
			const isMagic = magicNumber.includes(sender) 
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			
			const sendimg = (teks) => {
				client.sendMessage(from, teks, image, {quoted:mek})
			}
			
			const imgcap = (tesk, cap) => {
				client.sendMessage(from, teks, image, {quoted:mek, caption: cap})
			}
			
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
		
		
		
		/// ANT
		
			// ANTI LINK GRUP
                if (mesejAnti.includes("://chat.whatsapp.com/", "https://", "http://")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Atasan grup mah bebas yakan:v')
		        client.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("#izinbos")) return reply("Iya kak jangan spam ya")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Woyy ${sender.split("@")[0]} Grup ini anti link, siap siap kau!`)
		        setTimeout( () => {
			        client.groupRemove(from, [kic]).catch((e)=>{reply(`BOT HARUS JADI ADMIN`)})
		        }, 3000)
		        setTimeout( () => {
			        client.updatePresence(from, Presence.composing)
			        reply("Hedsot :v")
		        }, 2000)
		        setTimeout( () => {
			        client.updatePresence(from, Presence.composing)
			        reply("Bismillah")
		        }, 1000)
		        setTimeout( () => {
			        client.updatePresence(from, Presence.composing)
			        reply("Ready?")
		        }, 0)
	        }              
	
	

 // ANTI VIRTEX GRUP
                if (tas.length > 10000){
		        if (!isGroup) return
		        if (!isAntiVirtex) return 
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply('*[Group Security Notifications]*\n_Virtex Terdeteksi Pengekickan Otoamtis_')
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`BOT HARUS JADI ADMIN`)})
		        
		        setTimeout( () => {
			        reply('*Tindakan Pemulihan Di Aktivkan*')
		        }, 3000)
		setTimeout( () => {
		client.sendMessage(from, '*[MENUTUP GRUP]*', text)
		client.groupSettingChange(from, GroupSettingChange.messageSend, true)
		 }, 5000)
		
		}
		
		// Auto Respon
		
		if (autorespon.includes('Hai')){
			reply(`Hallo Juga, ${pushname}`)
			}
			
			if (autorespon.includes('hai')){
			reply(`Hallo Juga, ${pushname}`)
			}
		
		if (autorespon.includes('Assalamualaikum')){
			reply(`Waalaikumsalam, ${pushname}`)
			}
			
			if (autorespon.includes('assalamualaikum')){
			reply(`Waalaikumsalam, ${pushname}`)
			}
			
			if (autorespon.includes('@Hendrik')){
			reply(`Stop Manggil-Manggil Onwer Gw, Dasar Setan!!`)
			}
		
		if (autorespon.includes('ohayou')){
		let hasil = fs.readFileSync('lib/' + 'ohayou' + '.mp3')
		client.sendMessage(from, hasil, audio, {quoted: mek, ptt:true})
		}
		
		if (autorespon.includes('Ohayou')){
		let hasil = fs.readFileSync('lib/' + 'ohayou' + '.mp3')
		client.sendMessage(from, hasil, audio, {quoted: mek, ptt:true})
		}
		
		if (autorespon.includes('Pagi')){
		let hasil = fs.readFileSync('lib/' + 'ohayou' + '.mp3')
		client.sendMessage(from, hasil, audio, {quoted: mek, ptt:true})
		}
		
		if (autorespon.includes('pagi')){
		let hasil = fs.readFileSync('lib/' + 'ohayou' + '.mp3')
		client.sendMessage(from, hasil, audio, {quoted: mek, ptt:true})
		}
		
		if (autorespon.includes('Siang')){
		let hasil = fs.readFileSync('lib/' + 'siang' + '.mp3')
		client.sendMessage(from, hasil, audio, {quoted: mek, ptt:true})
		}
		
		if (autorespon.includes('siang')){
		let hasil = fs.readFileSync('lib/' + 'siang' + '.mp3')
		client.sendMessage(from, hasil, audio, {quoted: mek, ptt:true})
		}
		
		if (autorespon.includes('Selamat pagi')){
		let hasil = fs.readFileSync('lib/' + 'ohayou' + '.mp3')
		client.sendMessage(from, hasil, audio, {quoted: mek, ptt:true})
		}
		
		if (autorespon.includes('selamat pagi')){
		let hasil = fs.readFileSync('lib/' + 'ohayou' + '.mp3')
		client.sendMessage(from, hasil, audio, {quoted: mek, ptt:true})
		}
		
		if (autorespon.includes('Selamat siang')){
		let hasil = fs.readFileSync('lib/' + 'siang' + '.mp3')
		client.sendMessage(from, hasil, audio, {quoted: mek, ptt:true})
		}
		
		
		        
	
	        //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, text,{ quoted: mek})
                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
     	
	
	//function balance
            if (isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender) 
                const uangsaku = Math.floor(Math.random() * 10) + 5
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
	
	var magica = '*Tidak Aktiv*'
			if (isMagic) {
				magica = '*Aktiv*'
			} 
			
			var apaow = '*False*'
			if (isOwner) {
				apaow = '*True*'
			} 
	
	  colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			switch(command) {
				
				//basicmenu
				case 'help':
				case 'menu':
				uptime = process.uptime()
					await costum(help(pushname, prefix, sender, uptime, apaow, kyun), text, tescuk, cr)
					break
					
				case 'test':
				if (isLimit(sender))
				console.log('Ok Mendengar..')
				reply('apaan')
				await limitAdd(sender)
				console.log('dah di bales')
				break
				
			//fun
			case 'jackpot':
			if (isLimit(sender)) return
console.log('Getting Fruit Data..')
const buah = ['🍊','🍒','🍐','🍇','🍓','🍎'] 
          const satu = buah[Math.floor(Math.random() * (buah.length))]	
          const dua = buah[Math.floor(Math.random() * (buah.length))]	
          const tiga = buah[Math.floor(Math.random() * (buah.length))]	
if (satu === dua && dua === tiga){
	client.sendMessage(from, `* 🎰JACKPOT 🎰*
	

${satu} - ${dua} - ${tiga}  *<=*


*KAMU MENANG LORD ${pushname}🎊🎉*\n*+Coins 5000*`,MessageType.text, { quoted: mek})
addKoinUser(sender, 5000)
	} else {
	client.sendMessage(from, `* 🎰JACKPOT 🎰*
	

${satu} - ${dua} - ${tiga}  *<=*

*KAMU KALAH*`,MessageType.text, { quoted: mek})
	} 
		console.log('Result Berhasil Di Kirim...')
		await limitAdd(sender)
		
break

case 'casino':
			if (isLimit(sender)) return
			
			judi = body.slice(8)
			reply(`Kamu Main Sebanyak ${judi}💰 Semoga Berungung\n*Nanti Kalah Nangis*`)
			const judikali2 = 2
				const totaljudi2 = judikali2 * judi
				if ( checkATMuser(sender) <= judi) return reply(`Uang lu Kurang Nyet`)
				if ( checkATMuser(sender) >= judi ) {
console.log('Getting Casino Data..')
const buah3 = ['1','2','3','4','5','6','7','8','9','0'] 
          const satu = buah3[Math.floor(Math.random() * (buah3.length))]	
          const dua = buah3[Math.floor(Math.random() * (buah3.length))]	
          const tiga = buah3[Math.floor(Math.random() * (buah3.length))]	
          setTimeout( () => {
          client.sendMessage(from, `*[CASINO INFO]*\n\nBot Mendapatkan : ${satu}\n*VS*\nKamu Mendapatkan : ${dua}`,MessageType.text, { quoted:mek})
          }, 5000) // 1000 = 1s,
if (satu <= dua){
	setTimeout( () => {
	client.sendMessage(from, `*[WINNER]* Kamu Kamu Menang, Kamu Mendapatkan Uang 2× Lipat : ${totaljudi2}`,MessageType.text, { quoted: mek})
	}, 6000) // 1000 = 1s,
addKoinUser(sender, totaljudi2)
	} else {
		confirmATM(sender, judi)
		setTimeout( () => {
	client.sendMessage(from, `*[YOU LOSE]* Kamu Kalah Dan Kamu Kehilangan Uang : ${judi}`,MessageType.text, { quoted: mek})
	}, 5000) // 1000 = 1s,
	} 
	}
		console.log('Result Berhasil Di Kirim...')
		await limitAdd(sender)
		
break


            case 'katabijak':
            console.log('Getting Kata Bijak')
                                        
                                        anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/katabijak`, {method: 'get'})
                                        reply(anu.result)
                                        console.log('Result Berhasil Di Kirim...')
                                        break
                                case 'faktaunik':
                                console.log('Getting Fakta Unik...')
                                        try {
                                        anu = await fetchJson(`https://api.i-tech.id/tools/quotes?key=o0eaIa-P7G46c-wL1CWj-eincjQ-vTHddg`, {method: 'get'})
                                        reply(anu.result)
                                        } catch (e) {
						console.log('Error :', e)
						reply('*[ERROR]* Kesalahan Saat Mengambil Data.. Mungkin Kesalahan Di Sebabkan Oleh Server')
					}
                                        console.log('Result Berhasil Di Kirim...')
                                        break
                                        case 'tahta':
                                        if (isLimit(sender)) return
                                        if (args.length < 1) return reply('Teks mana um?')
					reply(mess.wait)
					console.log('Create Harta Tahta')
					try {
                buff = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${args[0]}&apikey=apivinz`)
                } catch (e) {
						console.log('Error :', e)
						reply('*[ERROR]* Kesalahan Saat Mengambil Data')
					}
				client.sendMessage(from, buff, image, {quoted: mek})
				console.log('Harta Tahta Sukses')
				await limitAdd(sender)
				break
				
					     case 'antilink':	
	    if (isLimit(sender)) return
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('EMANG MATI?')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('「SUKSES」MENGAKTIFKAN ANTI LINK DI GROUP INI')
						client.sendMessage(from,`ALLERT!!! Jika bukan admin jangan kirim link grup`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('EMANG AKTIF?')
						antilink.splice(from, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('「SUKSES」MEMATIKAN ANTI LINK DI GROUP INI')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					await limitAdd(sender)
					break					
					
					case 'antivirtex':	
	    if (isLimit(sender)) return
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiVirtex) return reply('EMANG MATI?')
						virtex.push(from)
						fs.writeFileSync('./lib/virtex.json', JSON.stringify(virtex))
						reply('「SUKSES」MENGAKTIFKAN ANTI VIRTEX DI GROUP INI')
						
					} else if (Number(args[0]) === 0) {
						if (!isAntiVirtex) return reply('EMANG AKTIF?')
						virtex.splice(from, 1)
						fs.writeFileSync('./lib/antilink.json', JSON.stringify(virtex))
						reply('「SUKSES」MEMATIKAN ANTI VIRTEX DI GROUP INI')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					await limitAdd(sender)
					break					
					
					//Group
					
					case 'adminlist':
					    if (isLimit(sender)) return
					if (!isGroup) return reply(ind.groupo())
					teks = `*DAFTAR ATASAN GROUP* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					await limitAdd(sender)
					break
					case 'grup':
					case 'group':
					    if (isLimit(sender)) return
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'open') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'close') {
						reply(`*BERHASIL MENUTUP GROUP*`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					await limitAdd(sender)
					break
				case 'add':
				    if (isLimit(sender)) return
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add siapa?')
					if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('*[ERROR]* TARGET MUNGKIN DI PRIVATE:)')
					}
					await limitAdd(sender)
					break
			     	case 'kick':
			    if (isLimit(sender)) return
			        if (!isGroupAdmins) return reply(ind.admin())
					if (!isGroup) return reply(ind.groupo())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Bismillah atas izin admin grup kamu akan saya tendang 🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Bismillah atas izin admin grup kamu akan saya tendang @${mentioned[0].split('@')[0]} 🏃`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					await limitAdd(sender)
					break
                case 'everyone':
                    if (isLimit(sender)) return
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
				await limitAdd(sender)
					break					
    
                 case 'linkgrup':
                     if (isLimit(sender)) return
				    if (!isGroup) return reply(ind.groupo())
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await client.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    client.sendMessage(from, yeh, text, {quoted: mek})
			 await limitAdd(sender)
					break
					
					case 'setname':
                               if (isLimit(sender)) return
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMessage(from, '⟪ SUKSES ⟫ Mengubah Nama Grup', text, {quoted: mek})
                await limitAdd(sender)
					break
                case 'setdesc':
                                    if (isLimit(sender)) return
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, '⟪ SUKSES ⟫ Mengubah Desk Grup', text, {quoted: mek})
                await limitAdd(sender)
					break
           case 'demote':
                               if (isLimit(sender)) return
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮??𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*jabatan kamu di copot*🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Yahh @${mentioned[0].split('@')[0]} Jabatan kamu sebagai leluhur di grup telah di copot🏃`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					await limitAdd(sender)
					break
				case 'promote':
                				    if (isLimit(sender)) return
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 ??𝗮??𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶??𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Yeee🥳 Kamu naik jabatan >_< :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Selamat🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* >_<`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					await limitAdd(sender)
					break
				case 'delete':
					case 'del':
					case 'd':
					    if (isLimit(sender)) return
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					await limitAdd(sender)
					break
					
					case 'seticon': 
					    if (isLimit(sender)) return
                        if (!isGroup) return reply(ind.groupo())
                       if (!isGroupAdmins) return reply(ind.admin())
                        if (!isBotGroupAdmins) return reply(ind.badmin())
                       media = await client.downloadAndSaveMediaMessage(mek)
                         await client.updateProfilePicture (from, media)
                        reply('⟪ SUKSES ⟫ Mengubah Icon Grup')
                        await limitAdd(sender)
                        break
                        case 'bnifact':
                            if (isLimit(sender)) return
        reply("Loading....")
            const diti = fs.readFileSync('./lib/naru.json')
            const ditiJsin = JSON.parse(diti)
            nimek =  ditiJsin[Math.floor(Math.random() * ditiJsin.length)];
					pok = await getBuffer(nimek.image)
					inicap = (nimek.teks)
					client.sendMessage(from, pok, image, { quoted: mek, caption: inicap})
					await limitAdd(sender)
            break
            
            case 'welcome':
                if (isLimit(sender)) return
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Ekhemm >_<')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*FITUR WELCOME SUDAH AKTIF KAK*')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('*「SUKSES」 MENGAKTIFKAN FITUR WELCOME DI GROUP*')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('*「SUKSES」 MEMATIKAN FITUR WELCOME DI GROUP*')
					} else {
						reply(ind.satukos())
					}
					await limitAdd(sender)
					break
					
					case 'nsfw':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1 ) {
						if (isNsfw) return reply('Udah aktif um')
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('Sukses mengaktifkan fitur nsfw di group ini ✔️')
					} else if (Number(args[0]) === 0 ) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('Sukses menonaktifkan fitur nsfw di group ini ✔️')
					} else {
						reply('enable untuk mengaktifkan, disable untuk menonaktifkan')
					}
					break
					
					
					
            case 'stiker': 
				case 'sticker':
				case 'stickergif':
				    if (isLimit(sender)) return
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply('Error')
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								client.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Yah gagal, coba ulangi ^_^`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								client.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
					}
					await limitAdd(sender)
					break
					
					//basicmenu
					
				case 'nd':
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}hartatahta botwea`)
har = body.slice(12)
reply('*Ok Proses*')
buffer = await getBuffer(`https://api.vhtear.com/hartatahta?text=${har}&apikey=RamlanID`)
client.sendMessage(from, buffer, image, {quoted: mek})
break

					case 'darkjokes':
					reply('Udah Diam...')
				break				
				case 'meme':
				    if (isLimit(sender)) return
				reply('Loading..')
				anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`)
				hasilbuf = await getBuffer(anu.result)
				client.sendMessage(from, hasilbuf, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'goldbutton':
				reply('Loading..')
				anu = await fetchJson(`https://api.zeks.xyz/api/gplaybutton?text=${body.slice(11)}&apikey=apivinz`)
				hasilbuf = await axios(anu.result)
				client.sendMessage(from, hasilbuf, image, {quoted: mek})
				break
				case 'silverbutton':
				reply('Loading..')
				anu = await fetchJson(`https://api.zeks.xyz/api/splaybutton?text=${body.slice(11)}&apikey=apivinz`)
				hasilbuf = await getBuffer(anu.result)
				client.sendMessage(from, hasilbuf, image, {quoted: mek})
				break
				case 'matrix':
				reply('Loading..')
				anu = await getBuffer(`https://api.zeks.xyz/api/matrix?apikey=apivinz&text=${body.slice()}`)
				client.sendMessage(from, anu, image, {quoted: mek})
				break
				
				//Downloader Menu
				
				case 'ytmp3':
				    if (isLimit(sender)) return
                   reply('Oke Desu:v')
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Url Tidak Valid')
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/yta2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks14 = `*Title* : ${anu.title} *Ext* : ${anu.ext}\n\n_Mengirim File Memerlukan Waktu ±1 Menit... Telkomsel Lemot Bjir_`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks14})
					bufferyyy = await getBuffer(anu.result)
					client.sendMessage(from, bufferyyy, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					await limitAdd(sender)
					break
					
					case 'hsh':
                   reply('Oke Desu:v')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/ytplay?apikey=1e2c56af327d844572e4a552&query=${body.slice(6)}`, {method: 'get'})
					reply('Mengirim File...')
					bufferyyy = await fetchJson(anu.result.info.audio.link)
					client.sendMessage(from, bufferyyy, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
					
					
					 case 'joox':
					    if (isLimit(sender)) return
                    reply('Oke Desu:v')
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=BotWeA`, {method: 'get'})
               if (data.error) return reply(data.error)
                 infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${data.result.judul}\nAlbum : ${data.result.album}\nDipublikasi : ${data.result.dipublikasi}\n*Filesize* : ${data.filesize}\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM*`
                bufferddd = await getBuffer(data.result.thumb)
                lagu = await getBuffer(data.result.mp3)
                client.sendMessage(from, bufferddd, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
                await limitAdd(sender)
                break
                case 'ytmp4':
                case 'yt':
                    if (isLimit(sender)) return
				reply('Oke Desu:v')
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks13 = `*Title* : ${anu.title}\n\n _Mengirim File Memerlukan Waktu Beberapa Menit... Telkomsel Lemot Bjir_`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks13})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					await limitAdd(sender)
					break
					
					case '1cak':
				    reply('Oke Desu..')
				try {
						anu = await fetchJson(`https://st4rz.herokuapp.com/api/1cak`, {method: 'get'})
						} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					hasil = (anu.data.judul)
						poto = await axios(anu.data.image)
						client.sendMessage(from, poto, image, {quoted: mek, caption: hasil})
					break
					
					case 'quotesnime':
					if (isLimit(sender)) return
					reply('Oke Desu')
				   anu = await fetchJson(`https://mhankbarbar.tech/api/quotesnime/random`)
				   texs = ` *Anime* : ${anu.data.anime} \n*Chara* : ${anu.data.chara} \n*Quotes* : ${anu.data.quote}`
				   await limitAdd(sender)
				   reply(texs)
				break
				
				case 'wait':
				if (isLimit(sender)) return
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply('Oke Desu')
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply(ind.ocron())
					}
					await limitAdd(sender)
					break
					
					case 'bc': 
					    if (isLimit(sender)) return
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*[BROADCAST]* \n\n${body.slice(4)}`})
						}
						reply('Sukses Broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST 」*\n\n${body.slice(4)}`)
						}
						reply('Sukses Broadcast')
					}
					await limitAdd(sender)
					break
				
				case 'tts':
				    if (isLimit(sender)) return
				const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, `Teksnya mana kak | contoh : ${prefix}tts id ah yamate kudasai`, text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('Teks nya terlalu panjang kak')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
					break
					
					case 'toimg':
					    if (isLimit(sender)) return
				if (!isQuotedSticker) return reply('Reply atau Tag sticker yang mau dijadiin gambar kak >_<')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'nih kak [(^.^)]'})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
					
					case 'tolol':
					    if (isLimit(sender)) return
					if (args.length < 1) return reply('Teks mana um?')
                    reply('Oke Desu :v')
                    try {
                    lol = await getBuffer(`https://lolhuman.herokuapp.com/api/toloserti?apikey=1e2c56af327d844572e4a552&name=${args[0]}`)
                         } catch (e) {
						console.log('Error :', e)
						reply('*[ERROR]* Kesalahan Saat Mengambil Data')
					}
					client.sendMessage(from, lol, image, {quoted: mek})
					await limitAdd(sender)
					break
                   
                   case 'nuklir2pdf':
                       if (isLimit(sender)) return
					reply(mess.wait)
					try {
					anu = await fetchJson(`https://api.vhtear.com/nhentaipdfdownload?query=${args[0]}&apikey=c1d162b46e634f389efa1ac715f03d03`)
					} catch (e) {
						console.log('Error :', e)
						reply('*[ERROR]* Kode Tersebut Tidak Dapat Di Download...')
					}
					if (anu.error) return reply(anu.error)
					infopdf = `*[DOUJIN DOWNLOADER]*\n\n*Title* : ${anu.result.title}\n*Secondary Title* : ${anu.result.secondary_title}\n*Code* : ${args[0]}\n\n_NOTE: Jika File Pdf Tidak Bisa Di Buka, Silahkan Buka Lewat File Menager_`
					client.sendMessage(from, infopdf, text, {quoted: mek})
					bufferjj = await getBuffer(anu.result.pdf_file)
					client.sendMessage(from, bufferjj, document, {mimetype: 'Mimetype.pdf', filename: `${anu.result.title}.pdf`, quoted: mek})
					await limitAdd(sender)
					break
					
					case 'fb':
					    if (isLimit(sender)) return
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/fbdl?link=${args[0]}&apikey=c1d162b46e634f389efa1ac715f03d03`)
					bufferjj = await getBuffer(anu.result.VideoUrl)
                    client.sendMessage(from, bufferjj, video, {mimetype: 'video/mp4', filename: 'anjay.mp4', quoted: mek})
                    await limitAdd(sender)
                   break
                   
                   case 'twitter':
                       if (isLimit(sender)) return
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/twitter?link=${args[0]}&apikey=c1d162b46e634f389efa1ac715f03d03`)
					bufferjj = await getBuffer(anu.result.urlVideo)
                    client.sendMessage(from, bufferjj, video, {mimetype: 'video/mp4', filename: 'anjay.mp4', quoted: mek})
                    await limitAdd(sender)
                   break
                   
                   case 'tiktok':
                       if (isLimit(sender)) return
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/tiktokdl?link=${args[0]}&apikey=c1d162b46e634f389efa1ac715f03d03`)
					bufferjj = await getBuffer(anu.result.video)
                    client.sendMessage(from, bufferjj, video, {mimetype: 'video/mp4', filename: 'anjay.mp4', quoted: mek})
                    await limitAdd(sender)
                   break
                   
                   case 'play':
                       if (isLimit(sender)) return
                reply(ind.wait())
                anu = await fetchJson(`https://api.vhtear.com/ytmp3?query=${body.slice(6)}&apikey=c1d162b46e634f389efa1ac715f03d03`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*「❗」Lagu Ditemukan*\n➸ Judul : ${anu.result.title}\n➸ Durasi : ${anu.result.duration}\n➸ Size : ${anu.result.size}\n\n*[WAIT] Proses Dumlu Yakan*`
                buffer = await getBuffer(anu.result.image)
                lagu = await getBuffer(anu.result.mp3)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: mek})
                await limitAdd(sender)
                break			
                
                case 'loli':
                    if (isLimit(sender)) return
					gatauda = body.slice(6)
					reply(ind.wait())
					anu = await fetchJson(`https://api.vhtear.com/randomloli&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
					buffer = await getBuffer(anu.result.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break									
	
					case 'wibu':
					    if (isLimit(sender)) return
						data = await fetchJson(`https://api.vhtear.com/randomwibu&apikey=c1d162b46e634f389efa1ac715f03d03`)
						buffer = await getBuffer(data.result.foto)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '>_<'})
						await limitAdd(sender)
					break
					
					case 'artinama':
					    if (isLimit(sender)) return
					reply('Oke Desu:v')
					nama = body.slice(10)
					anu = await fetchJson(`https://api.vhtear.com/artinama?nama=${nama}&apikey=c1d162b46e634f389efa1ac715f03d03`)
					reply(anu.result.hasil)
					await limitAdd(sender)
					break
					
					case 'artimimpi':
					    if (isLimit(sender)) return
					reply('Oke Desu:v')
					nama = body.slice(10)
					anu = await fetchJson(`https://api.vhtear.com/artimimpi?query=${nama}&apikey=c1d162b46e634f389efa1ac715f03d03`)
					reply(anu.result.hasil)
					await limitAdd(sender)
					break
                   
                   
					
					
                                        
					case 'mancing-indo':
					const koinPerindo = 100
                                        const total = koinPerindo
                                      
                                                confirmATM(sender, total)
                                                reply(`Lokasi : Indonesia\nPajak : Free\nWaktu : 30 Detik\n_Sedang Memancing, Lokasi Ini Membutuhkan Waktu 30 Detik_`)
                                        
                      const ikan = Math.ceil(Math.random() * 25)
                      setTimeout( () => {
                      addIkanUser(sender, ikan)
                      reply(`🎣Selamat ${pushname} Kamu Mendapatkan *${ikan}*🐟 Ikan\n\n *Hasil Telah Masuk Ke Invertory Mu:)*`)
                      }, 30000) // 1000 = 1s,
                      break
                      
                      case 'mancing-vietnam':
					const koinPerViet = 300
                                        const total2 = koinPerViet
                                        if ( checkATMuser(sender) <= total2) return reply(`🏧Maaf Uang Kamu Belum Mencukupi Untuk Memancing Di Spot Ini. Coba Lagi Nanti`)
                                        if ( checkATMuser(sender) >= total2 ) {
                                                confirmATM(sender, total2)
                                                reply(`Lokasi : Vietnam\nPajak : 300\nWaktu : 1 Menit\n_Sedang Memancing, Lokasi Ini Membutuhkan Waktu 1 Menit_`)
                                        }
                      const ikan2 = Math.ceil(Math.random() * 20)
                      setTimeout( () => {
                      addikan2User(sender, ikan2)
                      reply(`🎣Selamat ${pushname} Kamu Mendapatkan *${ikan2}*🐡 Ikan\n\n *Hasil Telah Masuk Ke Invertory Mu:)*`)
                      }, 60000) // 1000 = 1s,
                      break
                      
                      case 'mancing-newzealand':
					const koinPerLand = 600
                                        const total3 = koinPerLand
                                        if ( checkATMuser(sender) <= total3) return reply(`🏧Maaf Uang Kamu Belum Mencukupi Untuk Memancing Di Spot Ini. Coba Lagi Nanti`)
                                        if ( checkATMuser(sender) >= total3 ) {
                                                confirmATM(sender, total3)
                                                reply(`Lokasi : New Zealand\nPajak : 600\nWaktu : 2 Menit\n_Sedang Memancing, Lokasi Ini Membutuhkan Waktu 2 Menit_`)
                                        }
                      const ikan3 = Math.ceil(Math.random() * 15)
                      setTimeout( () => {
                      addikan3User(sender, ikan3)
                      reply(`🎣Selamat ${pushname} Kamu Mendapatkan *${ikan3}*🐬 Ikan\n\n *Hasil Telah Masuk Ke Invertory Mu:)*`)
                      }, 120000) // 1000 = 1s,
                      break
                      
                      case 'mancing-canada':
					const koinPerCana = 1000
                                        const total4 = koinPerCana
                                        if ( checkATMuser(sender) <= total4) return reply(`🏧Maaf Uang Kamu Belum Mencukupi Untuk Memancing Di Spot Ini. Coba Lagi Nanti`)
                                        if ( checkATMuser(sender) >= total4 ) {
                                                confirmATM(sender, total4)
                                                reply(`Lokasi : Canada\nPajak : 1000\nWaktu : 5 Menit\n_Sedang Memancing, Lokasi Ini Membutuhkan Waktu 5 Menit_`)
                                        }
                      const ikan4 = Math.ceil(Math.random() * 10)
                      setTimeout( () => {
                      addikan4User(sender, ikan4)
                      reply(`🎣Selamat ${pushname} Kamu Mendapatkan *${ikan4}*🦈 Ikan\n\n *Hasil Telah Masuk Ke Invertory Mu:)*`)
                      }, 300000) // 1000 = 1s,
                      break
                      
                      case 'verify':
                      if (isVerify) return  reply('Anda Telah Terverifikasi Sebelumnya')
                      addIkan(sender)
                      addikan2(sender)
                      addikan3(sender)
                      addikan4(sender)
                      reply('Selesai Mendaftar Nomer Kedalam Database')
                      break
            
            
            
            case 'inventory':
            const jumlahikan = checkIkanuser(sender)
				const jumlahikan2 = checkikan2user(sender)
				const jumlahikan3 = checkikan3user(sender)
				const jumlahikan4 = checkikan4user(sender)
				let tod2 = fs.readFileSync('lib/' + 'inven' + '.jpg')
				resul = `*「 INVENTORY 」*
➸ Coins : ${checkATMuser(sender)}
──────────────────

*> | ITEM LIST | <*

_❏ Ikan Salmon: ${jumlahikan} 🐟_
_❏ Ikan Buntal:  ${jumlahikan2} 🐡_
_❏ Ikan Hiu: ${jumlahikan3} 🦈_
_❏ Lumba Lumba: ${jumlahikan4} 🐬_

──────────────────

_❏ Jagung : 0 🌽 _
_❏ Apel : 0 🍎_

*>| ITEM / SPELL |<*

Magic Miner : ${magica}
Dinamit Fishing : Tidak Ada
Lucky Box : 0`
			   client.sendMessage(from, tod2, image, {quoted: mek, caption: resul})
				break
            
            case 'sellsalmon':
                                        payout = body.slice(12)
                                        const koinPerSalmon = 150
                                        const total5 = koinPerSalmon * payout
                                        if ( checkIkanuser(sender) <= payout) return reply(`Transaksi Di Batalkan, Salmon Yang Anda Miliki Tidak Cukup`)
                                        if ( checkIkanuser(sender) >= payout ) {
                                                confirmIkan(sender, payout)
                                                addKoinUser(sender, total5)
                                                await reply(`
                                                *「 PENJUALAN BERHASIL 」*

*❏ SN* : ${createSerial(5)}
*❏ Ikan Terjual* : ${payout}
*❏ Jenis* : Salmon
*❏ Hasil Penjualan* : ${total5}

_Pendapatan Telah Berhasil Di Tambahkan Ke Dalam Saldo Mu_`)
                                        }
                                        break
                                        
                                        case 'sellbuntal':
                                        payout2 = body.slice(12)
                                        const koinPerBuntal = 220
                                        const total6 = koinPerBuntal * payout2
                                        if ( checkikan2user(sender) <= payout2) return reply(`Transaksi Di Batalkan, Ikan Buntal Yang Anda Miliki Tidak Cukup`)
                                        if ( checkikan2user(sender) >= payout2 ) {
                                                confirmikan2(sender, payout2)
                                                addKoinUser(sender, total6)
                                                await reply(`
                                                *「 PENJUALAN BERHASIL 」*

*❏ SN* : ${createSerial(5)}
*❏ Ikan Terjual* : ${payout2}
*❏ Jenis* : Buntal
*❏ Hasil Penjualan* : ${total6}

_Pendapatan Telah Berhasil Di Tambahkan Ke Dalam Saldo Mu_`)
                                        }
                                        break
                                        
                                        case 'selllumba':
                                        payout3 = body.slice(11)
                                        const koinPerLumba = 325
                                        const total7 = koinPerLumba * payout3
                                        if ( checkikan3user(sender) <= payout3) return reply(`Transaksi Di Batalkan, Lumba-Lumba Yang Anda Miliki Tidak Cukup`)
                                        if ( checkikan3user(sender) >= payout3 ) {
                                                confirmikan3(sender, payout3)
                                                addKoinUser(sender, total7)
                                                await reply(`
                                                *「 PENJUALAN BERHASIL 」*

*❏ SN* : ${createSerial(5)}
*❏ Ikan Terjual* : ${payout3}
*❏ Jenis* : Lumba Lumba
*❏ Hasil Penjualan* : ${total7}

_Pendapatan Telah Berhasil Di Tambahkan Ke Dalam Saldo Mu_`)
                                        }
                                        break
                                        
                                        case 'sellhiu':
                                        payout4 = body.slice(9)
                                        const koinPerHiu = 460
                                        const total8 = koinPerHiu * payout4
                                        if ( checkikan4user(sender) <= payout4) return reply(`Transaksi Di Batalkan, Hiu Yang Anda Miliki Tidak Cukup`)
                                        if ( checkikan4user(sender) >= payout4 ) {
                                                confirmikan4(sender, payout4)
                                                addKoinUser(sender, total8)
                                                await reply(`
                                                *「 PENJUALAN BERHASIL 」*

*❏ SN* : ${createSerial(5)}
*❏ Ikan Terjual* : ${payout4}
*❏ Jenis* : Hiu
*❏ Hasil Penjualan* : ${total8}

_Pendapatan Telah Berhasil Di Tambahkan Ke Dalam Saldo Mu_`)
                                        }
                                        break
            
            case 'mancing':
            let fishing = fs.readFileSync('lib/' + 'fishing' + '.jpg')
					await client.sendMessage(from, fishing, image, {quoted: mek, caption: mancing(pushname)})
					break
					
					                    case 'resetlimit':
				if (!isOwner) return reply(mess.only.ownerB)
				  var obj = []
				   fs.writeFileSync('./database/user/limit.json', JSON.stringify(obj))
				  await reply('LIMIT BERHASIL DI RESET')
				break
				
				case 'limit':
				   checkLimit(sender)
					break 
                
                case 'buylimit':
				payout10 = body.slice(10)
				if(isNaN(payout10)) return await reply('limit harus berupa angka!!')
				const koinPerlimit = 500
				const total9 = koinPerlimit * payout10
				if ( checkATMuser(sender) <= total9) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total9 ) {
					confirmATM(sender, total9)
					bayarLimit(sender, payout10)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*pengirim* : Admin\n*penerima* : ${pushname}\n*nominal pembelian* : ${payout10} \n*harga limit* : ${koinPerlimit}/limit\n*sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
				} 
				break
                
                case 'topup':
                if (!isOwner) return reply(ind.ownerb()) 
                const wew = 1000000000000
                addKoinUser(sender, wew)
                reply('DONE GIFT COIN 1M')
                break
                
                case 'mining':
                if (isMagic) {
            
                      	const mining2 = Math.ceil(Math.random() * 100000)
                      reply(`*> [ GOLD MINER ] <*
──────────────────

*> | ABILITY INFO | <*

• _Magic Run Aktif_ •
📈 Kecepatan Menambang
📈 Kapasitas Penyimpanan

*> | DETAIL | <*
Waktu : 30 Detik
Kapasitas : Max 15000`)
                      setTimeout( () => {
                      addKoinUser(sender, mining2)
                      reply(`*[MINER]* Selamat ${pushname} Kamu Mendapatkan Coin: *${mining2}*\n\n *Hasil Telah Masuk Ke Saldomu:)*`)
                      }, 2000) // 1000 = 1s,
                      
                      }else{
                      	const mining = Math.ceil(Math.random() * 2000)
                      reply(`*> [ GOLD MINER ] <*
──────────────────

*> | ABILITY INFO | <*
Anda Tidak Memiliki Item  Magic Minner, Kecepatan Dan Kapasitas Menambang Normal.

*> | DETAIL | <*
Waktu : 3 Menit
Kapasitas : Max 3000`)
                      setTimeout( () => {
                      addKoinUser(sender, mining)
                      reply(`*[MINER]* Selamat ${pushname} Kamu Mendapatkan Coin: *${mining}*\n\n *Hasil Telah Masuk Ke Saldomu:)\n*`)
                      }, 180000) // 1000 = 1s,
                      	}
					break
					
					case 'magic':
					reply('ok desu')
				    const total10 = 10000
				if ( checkATMuser(sender) <= total10) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total10 ) {
					confirmATM(sender, total10)
					bayarLimit(sender, 10000)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim* : Admin\n*Penerima* : sender\n*Jenis Item* : Magic Miner\n*Harga item* : 10000\n*sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
					const pnom = {id: sender}
					magic.push(pnom) 
				    fs.writeFileSync('./database/user/magic.json',JSON.stringify(magic))
				} 
				break
				
				case 'fight':
			if (isLimit(sender)) return
			
			judif = body.slice(7)
			const lipat = ['1','2','3','4','5','6']
			reply('Nanti Di Cingcang Nangis')
			const hlipat = [Math.floor(Math.random() * (lipat.length))]	
				const totaljudif = hlipat * judif
				if ( checkATMuser(sender) <= judif) return reply(`Uang lu Kurang Nyet`)
				if ( checkATMuser(sender) >= judif ) {
console.log('Getting Fight Data..')
const buah3 = ['1','2','3','4','5','6','7','8','9','0'] 
          const satu = buah3[Math.floor(Math.random() * (buah3.length))]	
          const dua = buah3[Math.floor(Math.random() * (buah3.length))]	
          const tiga = buah3[Math.floor(Math.random() * (buah3.length))]	
          const lawan = ['Dedy Corbuzier','The Rock','maria ozawa','sugiono','spiderman','venom','dajjal','alien','rizal','kukuh','levi ackerman','mikasa','hinata','naruto'] 
          const hlawan = lawan[Math.floor(Math.random() * (lawan.length))]	
          const dmglu = ['Kamu Menusuk Dada','Menghantam Kepala','Ngejumshot','Memakan','Memperkosa','Menendang Titidnya'] 
          const hdmglu = dmglu[Math.floor(Math.random() * (dmglu.length))]	
          const dmglw = ['Bokong Mu Di Tendang','Titid Mu Di Tendang','Kepala mu Di Jumshot','kamu Di Perkosa','DiMakan','Di cingcang'] 
          const hdmglw = dmglw[Math.floor(Math.random() * (dmglw.length))]	
          setTimeout( () => {
          client.sendMessage(from, `*[FIGHT]*\n\n ${pushname} *VS* ${hlawan}\n\n_Menunggu Hasil..._`,MessageType.text, { quoted:mek})
          }, 2000) // 1000 = 1s,
if (satu == dua){
	setTimeout( () => {
	client.sendMessage(from, `*[WINNER]* Kamu Menang Karna Kamu ${hdmglu} ${hlawan}\n\n_Hasil ${totaljudif} Coin Telah Masuk Ke Inventorymu_`,MessageType.text, { quoted: mek})
	}, 5000) // 1000 = 1s,
addKoinUser(sender, totaljudif)
	} else {
		confirmATM(sender, judif)
		setTimeout( () => {
	client.sendMessage(from, `*[YOU LOSE]* Kamu Kalah Karena ${hdmglw} oleh ${hlawan}\n\n_Dan Kamu Juga Kehilangan Coin Sebanyak : ${judif}_`,MessageType.text, { quoted: mek})
	}, 5000) // 1000 = 1s,
	} 
	}
		console.log('Result Berhasil Di Kirim...')
		await limitAdd(sender)
		
break

case 'bisakah':
				if (args.length < 1) return reply('Pertanyaan Lu Mana')
				if (isLimit(sender)) return 
					bisakah = body.slice(1)
					const bisa =['Tentu Saja Bisa! Kamu Adalah Orang Paling Homky','Gak Bisa Ajg Aowkwowk','Hmm Gua Gak Tau Yaa, tanya ama bapakau','Ulangi Tod Gua Ga Paham']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'kapankah':
			if (args.length < 1) return reply('Pertanyaan Lu Mana')
				if (isLimit(sender)) return 
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					client.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
           case 'apakah':
           if (args.length < 1) return reply('Pertanyaan Lu Mana')
           
           if (isLimit(sender)) return 
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Ulangi bro gak paham']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'rate':
				      if (args.length < 1) return reply('Pertanyaan Lu Mana')
				if (isLimit(sender)) return 
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					client.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
           case 'hobby':
           if (args.length < 1) return reply('Nama Lu Mana')
             if (isLimit(sender)) return 
					hobby = body.slice(1)
					const hob =['Desah Di Game','Ngocokin Doi','Stalking sosmed nya mantan','Kau kan gak punya hobby awokawok','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					client.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break

case 'beritahoax':
                reply(mess.wait)
                if (isLimit(sender)) return 
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
					
					case 'nulis':
				case 'tulis':
				if (isLimit(sender)) return 
				
					if (args.length < 1) return reply('Yang mau di tulis apaan?')
					tulis = body.slice(6)
					reply(mess.wait)
					try {
					res = await getBuffer(`https://api.vhtear.com/write?text=${tulis}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
					} catch (e) {
						console.log('Error :', e)
						reply('*[ERROR]* Kesalahan Saat Mengambil Data')
					}
					client.sendMessage(from, res, image, {quoted: mek, caption: 'Ketahuan guru mampus lu'})
					await limitAdd(sender)
					break
					
					case 'anoboy':
                reply(mess.wait)
                if (isLimit(sender)) return 
                
                anime = body.slice(6)
					client.updatePresence(from, Presence.composing) 
					data5 = await fetchJson(`https://tobz-api.herokuapp.com/api/anoboy?q=${anime}&apikey=BotWeA`, {method: 'get'})
					teks5 = '=================\n'
					for (let i of data5.result) {
						teks5 += `*➸ Date* : ${i.date}\n*➸ Title* : ${i.title}\n*➸ Link* : ${i.link}\n=================\n`
					}
					reply(teks5.trim())
					await limitAdd(sender)
					break
					
					case 'randomshota':
					if (isLimit(sender)) return 
            
                reply(mess.wait)
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomshota?apikey=BotWeA` , {method: 'get'})
                    buf = await getBuffer(anu.result)
                    client.sendMessage(from, buf, image, { quoted: mek, caption: 'ih wibu'})
                    await limitAdd(sender)
                break
                case 'husbu':
                if (isLimit(sender)) return 
              
                reply(mess.wait)
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=BotWeA` , {method: 'get'})
                    buf = await getBuffer(anu.image)
                    ket = `*${anu.name}*`
                    client.sendMessage(from, buf, image, { quoted: mek, caption: `${ket}`})
                    await limitAdd(sender)
                break
                case 'husbu2':
                if (isLimit(sender)) return 
              
                reply(mess.wait)
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu2?apikey=BotWeA` , {method: 'get'})
                    buf = await getBuffer(anu.result)
                    client.sendMessage(from, buf, image, { quoted: mek, caption: 'wibu2'})
                    await limitAdd(sender)
                break
                case 'animehug':
				    try {
					if (isLimit(sender)) return 
					
                reply(mess.wait)
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA`, {method: 'get'})
						bufferrr = await getBuffer(res.result)
						client.sendMessage(from, bufferrr, image, {quoted: mek, caption: 'hug'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					await limitAdd(sender)
					break
					case 'animecry':
				    try {
					if (isLimit(sender)) return 
					
                reply(mess.wait)
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA`, {method: 'get'})
						bufferb = await getBuffer(res.result)
						client.sendMessage(from, bufferb, image, {quoted: mek, caption: 'ezzzz'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					await limitAdd(sender)
					break
					
					case 'waifu':
				if (isLimit(sender)) return 
				reply(mess.wait)
				   anu = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu?apikey=BotWeA`)
				   buf = await getBuffer(anu.image)
				   texs = `*➸ NAMA* : ${anu.name} \n*➸ DESC* : ${anu.desc} \n*➸ SOURCE* : ${anu.source}`
				   client.sendMessage(from, buf, image, { quoted: mek, caption: `${texs}` })
				await limitAdd(sender)
				break
				
				case 'randomneko':
				if (isLimit(sender)) return 
				reply(mess.wait)
				   anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=BotWeA`)
				   buf = await getBuffer(anu.result)
				   client.sendMessage(from, buf, image, { quoted: mek, caption: 'Nih' })
				await limitAdd(sender)
				break
				
				case 'leaderboard':
				case 'lb':
				bo = args[0]
				ikan.sort((a, b) => (a.ikan < b.ikan) ? 1 : -1)
				ikan2.sort((a, b) => (a.ikan2 < b.ikan2) ? 1 : -1)
				ikan3.sort((a, b) => (a.ikan3 < b.ikan3) ? 1 : -1)
				ikan4.sort((a, b) => (a.ikan4 < b.ikan4) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '-----[ *LEADERBOARD SALMON* ]----\n\n'
                let leaderboardbt = '-----[ *LEADERBOARD BUNTAL* ]----\n\n'
                let leaderboardlb = '-----[ *LEADERBOARD LUMBA* ]----\n\n'
                let leaderboardhi = '-----[ *LEADERBOARD HIU* ]----\n\n'
                let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
                let nom = 0
                
                    for (let i = 0; i < 10; i++) {
                        nom++ 
                        leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ *Uang*: _${uang[i].uang}_\n┗⊱ *Limit*: ${limitawal - _limit[i].limit}\n`
                        leaderboardlvl += `*[${nom}]* wa.me/${ikan[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *SALMON*: ${ikan[i].ikan}\n`
                        leaderboardbt += `*[${nom}]* wa.me/${ikan2[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *BUNTAL*: ${ikan2[i].ikan2}\n`
                        leaderboardlb += `*[${nom}]* wa.me/${ikan3[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *LUMBA*: ${ikan3[i].ikan3}\n`
                        leaderboardhi += `*[${nom}]* wa.me/${ikan4[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *HIU*: ${ikan4[i].ikan4}\n`
                    }
                    await reply(leaderboarduang)
                    await reply(leaderboardlvl)
                    await reply(leaderboardbt)
                    await reply(leaderboardlb)
                    await reply(leaderboardhi)
                
				break
				
				case 'hdhdh':
	                  
				if (isLimit(sender)) return 
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '♡───────────♡\n'
					for (let Y of res.data) {
						teks += `\n*「 BRAINLY 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n♡───────────♡\n`
					}
					client.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
					await limitAdd(sender)
					break
					
					case 'giftlimit': 
				if (!isOwner) return reply('Owner only')
				const nomerr = args[0].replace('@','')
                const jmla = args[1]
                if (jmla <= 1) return reply(`minimal gift limit adalah 1`)
                if (isNaN(jmla)) return reply(`limit harus berupa angka`)
                if (!nomerr) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @62895710074883 20`)
                const cysz = nomerr + '@s.whatsapp.net'
                var found = false
                        Object.keys(_limit).forEach((i) => {
                            if(_limit[i].id === cysz){
                                found = i
                            }
                        })
                        if (found !== false) {
                            _limit[found].limit -= jmla
                            const updated = _limit[found]
                            const result = `Gift kuota limit sukses dengan SN: ${createSerial(8)} pada ${moment().format('DD/MM/YY HH:mm:ss')}
*「 GIFT KUOTA LIMIT 」*

• User : @${updated.id.replace('@s.whatsapp.net','')}
• Limit: ${limitawal-updated.limit}`
                            console.log(_limit[found])
                            fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit));
                            reply(result)
                        } else {
                                reply(`Maaf, nomor ${nomerr} tidak terdaftar di database!`)
                        }
                break
                
                case 'nekopoijavlist':
                if (isLimit(sender)) return 
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isGroup) return reply(ind.groupo())
                reply(mess.wait)
                client.updatePresence(from, Presence.composing) 
					data3 = await fetchJson(`https://api.vhtear.com/nekojavlist&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
					teks4 = '=================\n'
					for (let i of data4.result) {
						teks4 += `*Title* : ${i.title}\n*Url* : ${i.url}\n*Seri* : ${i.seri}\n=================\n`
					}
					reply(teks4.trim())
					await limitAdd(sender)
					break
                
         case 'javcosplay':
                if (isLimit(sender)) return 
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isGroup) return reply(ind.groupo())
                reply(mess.wait)
                client.updatePresence(from, Presence.composing) 
					data2 = await fetchJson(`https://api.vhtear.com/nekojavcosplay&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
					teks2 = '=================\n'
					for (let i of data2.result) {
						teks2 += `*Title* : ${i.title}\n*Url* : ${i.url}\n*Detail* : ${i.detail}\n=================\n`
					}
					reply(teks2.trim())
					await limitAdd(sender)
					break
					
					case 'nekopoi3d':
                if (isLimit(sender)) return 
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isGroup) return reply(ind.groupo())
                reply(mess.wait)
                client.updatePresence(from, Presence.composing) 
					data3 = await fetchJson(`https://api.vhtear.com/neko3d&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
					teks3 = '=================\n'
					for (let i of data3.result) {
						teks3 += `*Title* : ${i.title}\n*Url* : ${i.url}\n*Detail* : ${i.description}\n=================\n`
					}
					reply(teks3.trim())
					await limitAdd(sender)
					break
					
					case 'randomhentai':
					if (isLimit(sender)) return 
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isGroup) return reply(ind.groupo())
                reply(mess.wait)
                try {
                res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, {method: 'get'})
						bufferxx = await getBuffer(res.result)
						client.sendMessage(from, bufferxx, image, {quoted: mek, caption: 'hentai teros'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					await limitAdd(sender)
					break
					
					case 'nsfwneko':
					if (isLimit(sender)) return 
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isGroup) return reply(ind.groupo())
                reply(mess.wait)
                try {
                res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=BotWeA`, {method: 'get'})
						bufferxx = await getBuffer(res.result)
						client.sendMessage(from, bufferxx, image, {quoted: mek, caption: 'hentai teros'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					await limitAdd(sender)
					break
					
					case 'nsfwtrap':
					if (isLimit(sender)) return 
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isGroup) return reply(ind.groupo())
                reply(mess.wait)
                try {
                res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=BotWeA`, {method: 'get'})
						bufferxx = await getBuffer(res.result)
						client.sendMessage(from, bufferxx, image, {quoted: mek, caption: 'hentai teros'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					await limitAdd(sender)
					break
					
					case 'blowjobgif':
					if (isLimit(sender)) return 
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isGroup) return reply(ind.groupo())
                reply(mess.wait)
                try {
                res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA`, {method: 'get'})
						bufferxx = await getBuffer(res.result)
						client.sendMessage(from, bufferxx, video, {mimetype: 'video/gif', filename: `njir.gif`, quoted: mek})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					await limitAdd(sender)
					break
					
					case 'huggif':
					if (isLimit(sender)) return 
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isGroup) return reply(ind.groupo())
                reply(mess.wait)
                try {
                res = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA`, {method: 'get'})
						bufferxx = await getBuffer(res.result)
						client.sendMessage(from, bufferxx, video, {mimetype: 'video/gif', filename: `njir.gif`, quoted: mek})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					await limitAdd(sender)
					break
					
					case 'kissgif':
					if (isLimit(sender)) return 
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isGroup) return reply(ind.groupo())
                reply(mess.wait)
                try {
                res = await fetchJson(`https://tobz-api.herokuapp.com/api/gif?apikey=BotWeA`, {method: 'get'})
						bufferxx = await getBuffer(res.result)
						client.sendMessage(from, bufferxx, video, {mimetype: 'video/gif', filename: `njir.gif`, quoted: mek})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					await limitAdd(sender)
					break
					
					case 'crygif':
					if (isLimit(sender)) return 
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isGroup) return reply(ind.groupo())
                reply(mess.wait)
                try {
                res = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA`, {method: 'get'})
						bufferxx = await getBuffer(res.result)
						client.sendMessage(from, bufferxx, video, {mimetype: 'video/gif', filename: `njir.gif`, quoted: mek})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					await limitAdd(sender)
					break
					
                       
                       case 'nsfwnaruto':
                       if (isLimit(sender)) return 
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isGroup) return reply(ind.groupo())
                reply(mess.wait)
                data = await fetchJson(`https://raw.githubusercontent.com/borutonesiaid/boruto/main/boruto%20image`, {method: 'get'})
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*nih*`})
                       break
                       
                       		case 'listonline': 
        		if (!isOwner) return reply(ind.ownerb())
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
			    client.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break 
                       
                case 'chord':
                reply(mess.wait)
                anu = await fetchJson(`https://tobz-api.herokuapp.com/api/chord?q=${body.slice(7)}&apikey=BotWeA`)
                client.sendMessage(from, anu.result, text, {quoted:mek})
                break
                
                case 'lirik':
                reply(mess.wait)
                anu = await fetchJson(`https://api.vhtear.com/liriklagu?query=${body.slice(7)}&apikey=c1d162b46e634f389efa1ac715f03d03`)
                client.sendMessage(from, anu.result.result, text, {quoted:mek})
                break
                
                case 'wiki':
                reply(mess.wait)
                anu = await fetchJson(`https://api.vhtear.com/wikipedia?query=${body.slice(6)}&apikey=c1d162b46e634f389efa1ac715f03d03`)
                client.sendMessage(from, anu.result.Info, text, {quoted:mek})
                break
                
                case 'brainly':
                reply(mess.wait)
                anu = await fetchJson(`https://api.vhtear.com/branly?query=${body.slice(9)}&apikey=c1d162b46e634f389efa1ac715f03d03`)
                client.sendMessage(from, anu.result.data, text, {quoted:mek})
                break
                
                case 'kbbi':
                reply(mess.wait)
                anu = await fetchJson(`https://api.vhtear.com/kbbi?query=${body.slice(6)}&apikey=c1d162b46e634f389efa1ac715f03d03`)
                client.sendMessage(from, anu.result.hasil, text, {quoted:mek})
                break
                
                case 'pantun':
                reply(mess.wait)
                anu = await fetchJson(`https://api.vhtear.com/random_pantun&apikey=c1d162b46e634f389efa1ac715f03d03`)
                client.sendMessage(from, anu.result.pantun, text, {quoted:mek})
                break
                
                case 'kalkulator':
                reply(mess.wait)
                anu = await fetchJson(`https://api.vhtear.com/calculator?value=${body.slice(11)}&apikey=c1d162b46e634f389efa1ac715f03d03`)
                client.sendMessage(from, anu.result.data, text, {quoted:mek})
                break
                
                case 'cersex':
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isGroup) return reply(ind.groupo())
                reply(mess.wait)
                anu = await fetchJson(`https://api.vhtear.com/cerita_sex&apikey=c1d162b46e634f389efa1ac715f03d03`)
                anjay = `*Judul* : ${anu.result.judul}\n${anu.result.cerita}`
                thum = await getBuffer(anu.result.image)
                client.sendMessage(from, thum, image, {quoted: mek, caption: anjay})
                break
                
                case 'heroml':
                reply(mess.wait)
                anu = await fetchJson(`https://api.vhtear.com/herodetail?query=${body.slice(8)}&apikey=c1d162b46e634f389efa1ac715f03d03`)
                anjay = `*Hero* : ${anu.result.title}\n*Quotes* : ${anu.result.quotes}\n*Detail* : ${anu.result.info}`
                thum = await getBuffer(anu.result.pictHero)
                client.sendMessage(from, thum, image, {quoted: mek, caption: anjay})
                break
                
                case 'infomotor':
                reply(mess.wait)
                anu = await fetchJson(`https://api.vhtear.com/infomotor?merk=${body.slice(11)}&apikey=c1d162b46e634f389efa1ac715f03d03`)
                anjay = `*Title* : ${anu.result.title}\n*Harga* : ${anu.result.harga}\n*Spesifikasi* : ${anu.result.spesifikasi}\n*Kekurangan* : ${anu.result.kekurangan}\n*Kelebihan* ; ${anu.result.kelebihan}`
                thum = await getBuffer(anu.result.image)
                client.sendMessage(from, thum, image, {quoted: mek, caption: anjay})
                break
                
                case 'infomobil':
                reply(mess.wait)
                anu = await fetchJson(`https://api.vhtear.com/infomobil?merk=${body.slice(11)}&apikey=c1d162b46e634f389efa1ac715f03d03`)
                anjay = `*Title* : ${anu.result.title}\n*Harga* : ${anu.result.harga}\n*Spesifikasi* : ${anu.result.spesifikasi}\n*Kekurangan* : ${anu.result.kekurangan}\n*Kelebihan* ; ${anu.result.kelebihan}`
                thum = await getBuffer(anu.result.image)
                client.sendMessage(from, thum, image, {quoted: mek, caption: anjay})
                break
                
                case 'resep':
                reply(mess.wait)
                anu = await fetchJson(`https://api.vhtear.com/resepmasakan?query=${body.slice(7)}&apikey=c1d162b46e634f389efa1ac715f03d03`)
                anjay = `*Title* : ${anu.result.title}\n*Bahan* : ${anu.result.bahan}\n*Cara Membuat* : ${anu.result.cara}`
                thum = await getBuffer(anu.result.image)
                client.sendMessage(from, thum, image, {quoted: mek, caption: anjay})
                break
                
                case 'gsmarena':
                reply(mess.wait)
                anu = await fetchJson(`https://api.vhtear.com/gsmarena?query=${body.slice(7)}&apikey=c1d162b46e634f389efa1ac715f03d03`)
                anjay = `*Title* : ${anu.result.title}\n${anu.result.spec}`
                thum = await getBuffer(anu.result.image)
                client.sendMessage(from, thum, image, {quoted: mek, caption: anjay})
                break
                
                case 'cuaca':
                reply(mess.wait)
                anu = await fetchJson(`https://api.vhtear.com/weather?city=${body.slice(7)}&apikey=c1d162b46e634f389efa1ac715f03d03`)
                anjay = `*Lokasi* : ${anu.result.location}\n${anu.result.weather}`
                reply(anjay)
                break
                
                case 'ceritahorror':
                reply(mess.wait)
                anu = await fetchJson(`https://naufalhoster.xyz/tools/story_horror?apikey=rflkvz-dkz73T-ntOri5`)
                anjay = `*Judul* : ${anu.result.title}\n${anu.result.story}`
                reply(anjay)
                break
				
                       case 'image':
                       if (isLimit(sender)) return 
                reply(mess.wait)
                data = await fetchJson(`https://api.vhtear.com/googleimg?query=${body.slice(7)}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
					n = (data.result.result_search)
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*nih*`})
                       break
                       
                       case 'randomwallpaper':
                       if (isLimit(sender)) return 
                reply(mess.wait)
                var items = ["phone wallpaper hd", "phone nature wallpapers hd", "night sky phone wallpaper hd", "forest phone wallpaper hd", "animal phone wallpaper hd", "galaxy phone wallpaper"];
                itemhasil =  items[Math.floor(Math.random() * items.length)];
                data = await fetchJson(`https://api.vhtear.com/googleimg?query=${itemhasil}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
					n = (data.result.result_search)
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*nih*`})
                       break
                       
                       case 'animewallpaper':
                       if (isLimit(sender)) return 
                reply(mess.wait)
                var items = ["Anime Phone Wallpaper", "Hd Anime Wallpaper Phone"];
                itemhasil =  items[Math.floor(Math.random() * items.length)];
                data = await fetchJson(`https://api.vhtear.com/googleimg?query=${itemhasil}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
					n = (data.result.result_search)
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*nih*`})
                       break
                       
                       case 'narutowallpaper':
                       if (isLimit(sender)) return 
                reply(mess.wait)
                var items = ["naruto Phone Wallpaper", "Hd naruto Wallpaper Phone"];
                itemhasil =  items[Math.floor(Math.random() * items.length)];
                data = await fetchJson(`https://api.vhtear.com/googleimg?query=${itemhasil}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
					n = (data.result.result_search)
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*nih*`})
                       break
                       
                       case 'quran':
                       reply(mess.wait)
                       if (args.length < 1) return reply('Masukan Nomer Surah 1-114 Atau Bisa Cek Di Link : https://bit.ly/3kwzahZ')
                       data = await fetchJson(`https://al-quran-8d642.firebaseio.com/surat/${args[0]}.json?print=pretty`)
                       n = JSON.parse(JSON.stringify(data));
					teks5 = '*<(|أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيم|)>*\n=================\n'
					for (let i of n) {
						teks5 += `*➸ Arab* : ${i.ar}\n*➸ Tafsir* : ${i.id}\n*➸ Ayat Ke* : ${i.nomor}\n=================\n`
					}
					reply(teks5.trim())
					break
					
					case 'covid':
					reply(mess.wait)
					data = await fetchJson(`https://api.terhambar.com/negara/Indonesia`)
					hasilcovid = `*Covid-19 RealTime Update Status*\n\n*Negara* : ${data.negara}\n*Total* : ${data.total}\n*Kasus Baru* : ${data.kasus_baru}\n*Meninggal* : ${data.meninggal}\n*Meninggal Baru* : ${data.meninggal_baru}\n*Sembuh* : ${data.sembuh}\n*Penanganan* : ${data.penanganan}\n*Last Update* : ${data.terakhir}\n\n*#JagaJarak*\n*#PakaiMasker*`
					reply(hasilcovid)
					break
					
					case 'getsticker':
				case 'gets':
					namastc = body.slice(12)
					result = fs.readFileSync(`./strg/${namastc}.webp`)
					client.sendMessage(from, result, sticker, {quoted :mek})
					break
				case 'stickerlist':
				case 'liststicker':
				
					teks6 = '*Sticker List :*\n\n'
					for (let awokwkwk of setiker) {
						teks6 += `- ${awokwkwk}\n`
					}
					teks6 += `\n*Total : ${setiker.length}*`
					client.sendMessage(from, teks6.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
				case 'addsticker':
					if (!isQuotedSticker) return reply('Reply stiker nya')
					svst = body.slice(12)
					if (!svst) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./strg/${svst}.webp`, delb)
					fs.writeFileSync(`./strg/stik.json`, JSON.stringify(setiker))
					client.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: mek })
					break
				
				case 'addimage':
					if (!isQuotedImage) return reply('Reply imagenya blokk!')
					svst = body.slice(10)
					if (!svst) return reply('Nama imagenya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./strg/${svst}.jpeg`, delb)
					fs.writeFileSync('./strg/image.json', JSON.stringify(imagenye))
					client.sendMessage(from, `Sukses Menambahkan Gambar Dalam Database Bot\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })
					break
				case 'getimage':
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/${namastc}.jpeg`)
					client.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
					break
				case 'imagelist':
				case 'listimage':
					teks7 = '*List Image :*\n\n'
					for (let awokwkwk of imagenye) {
						teks7 += `- ${awokwkwk}\n`
					}
					teks7 += `\n*Total : ${imagenye.length}*`
					client.sendMessage(from, teks7.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
					
					case 'shalat':
					reply(mess.wait)
					data = await fetchJson(`https://api.xteam.xyz/jadwalsholat?kota=${body.slice(8)}&APIKEY=0a491f68ad85eded`)
				    hasildata = `*Jadwal Sholat Untuk Lokasi ${body.slice(7)}*\n\n*Tanggal* : ${data.Tanggal}\n*Subuh* : ${data.Subuh}\n*Dzuhur* : ${data.Dzuhur}\n*Ashar* ${data.Ashar}\n*Magrib* : ${data.Magrib}\n*Isya* : ${data.Isha}`
				    reply(hasildata)
				break
				
				case 'kpop':
				reply(mess.wait)
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=BotWeA`)
				widih = await getBuffer(data.result)
				sendimg(widih)
				break
				
				
				case 'gempa':
				reply(mess.wait)
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/infogempa?apikey=BotWeA`)
				hasildata2 = `*Kedalaman* : ${data.kedalaman}\n*Koordinat* : ${data.koordinat}\n*Lokasi* : ${data.lokasi}\n*Potensi* : ${data.potensi}\n*Waktu* : ${data.waktu}`
				img = await getBuffer(data.map)
				client.sendMessage(from, img, image, {quoted: mek, caption: hasildata2})
				break
				
				case 'water':
				if (args.length < 1) return reply(ind.wrongf())
					kata = body.slice(7)
					reply(ind.wait())
					gmbr = await getBuffer(`https://api.vhtear.com/water_maker?text=${kata}&apikey=c1d162b46e634f389efa1ac715f03d03`)
					sendimg(gmbr)
					break
					
					case 'fire':
				if (args.length < 1) return reply(ind.wrongf())
					kata = body.slice(6)
					reply(ind.wait())
					gmbr = await getBuffer(`https://api.vhtear.com/fire_maker?text=${kata}&apikey=c1d162b46e634f389efa1ac715f03d03`)
					sendimg(gmbr)
					break
					
					case 'metal':
				if (args.length < 1) return reply(ind.wrongf())
					kata = body.slice(7)
					reply(ind.wait())
					gmbr = await getBuffer(`https://api.vhtear.com/metal_maker?text=${kata}&apikey=c1d162b46e634f389efa1ac715f03d03`)
					sendimg(gmbr)
					break
					
					case 'wetglass':
				if (args.length < 1) return reply(ind.wrongf())
					kata = body.slice(10)
					reply(ind.wait())
					gmbr = await getBuffer(`https://api.vhtear.com/wetglass?text=${kata}&apikey=c1d162b46e634f389efa1ac715f03d03`)
					sendimg(gmbr)
					break
					
					case 'style':
				if (args.length < 1) return reply(ind.wrongf())
					kata = body.slice(7)
					reply(ind.wait())
					gmbr = await getBuffer(`https://api.vhtear.com/stylelogo?text=${kata}&apikey=c1d162b46e634f389efa1ac715f03d03`)
					sendimg(gmbr)
					break
					
					case 'watercolor':
				if (args.length < 1) return reply(ind.wrongf())
					kata = body.slice(12)
					reply(ind.wait())
					gmbr = await getBuffer(`https://api.vhtear.com/watercolor?text=${kata}&apikey=c1d162b46e634f389efa1ac715f03d03`)
					sendimg(gmbr)
					break
				
				case 'bp':
				if (args.length < 1) return reply(ind.wrongf())
					kata = body.slice(3)
					reply(ind.wait())
					gmbr = await getBuffer(`https://api.vhtear.com/blackpinkicon?text=${kata}&apikey=c1d162b46e634f389efa1ac715f03d03`)
					sendimg(gmbr)
					break
					
					case 'thunder':
				if (args.length < 1) return reply(ind.wrongf())
					kata = body.slice(8)
					reply(ind.wait())
					gmbr = await getBuffer(`https://api.vhtear.com/thundertext?text=${kata}&apikey=c1d162b46e634f389efa1ac715f03d03`)
					sendimg(gmbr)
					break
					
					case 'party':
				if (args.length < 1) return reply(ind.wrongf())
					kata = body.slice(7)
					reply(ind.wait())
					gmbr = await getBuffer(`https://api.vhtear.com/partytext?text=${kata}&apikey=c1d162b46e634f389efa1ac715f03d03`)
					sendimg(gmbr)
					break
					
					case 'gplaybutton':
				if (args.length < 1) return reply(ind.wrongf())
					kata = body.slice(13)
					reply(ind.wait())
					gmbr = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${kata}&apikey=apivinz`)
					sendimg(gmbr)
					break
					
					case 'splaybutton':
				if (args.length < 1) return reply(ind.wrongf())
					kata = body.slice(13)
					reply(ind.wait())
					gmbr = await getBuffer(`https://api.zeks.xyz/api/splaybutton?text=${kata}&apikey=apivinz`)
					sendimg(gmbr)
					break
					
					case 'fireworks':
				if (args.length < 1) return reply(ind.wrongf())
					kata = body.slice(11)
					reply(ind.wait())
					gmbr = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${kata}&apikey=apivinz`)
					sendimg(gmbr)
					break
					
					case 'love':
				if (args.length < 1) return reply(ind.wrongf())
					kata = body.slice(6)
					reply(ind.wait())
					gmbr = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${kata}&apikey=c1d162b46e634f389efa1ac715f03d03`)
					sendimg(gmbr)
					break
					
					case 'ballon':
					if (args.length < 1) return reply('Teks nya mana?')
                      var geh = body.slice(11)
                      gl1n = geh.split("|")[0];
                      gl2n = geh.split("|")[1];
                      reply(mess.wait)
                      gmbr = await getBuffer(`https://api.vhtear.com/balloonmaker?text1=${gl1n}&text2=${gl2n}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				     sendimg(gmbr)
				     break
				
				case 'wolf':
					if (args.length < 1) return reply('Teks nya mana?')
                      var geh = body.slice(6)
                      gl3n = geh.split("|")[0];
                      gl4n = geh.split("|")[1];
                      reply(mess.wait)
                      gmbr = await getBuffer(`https://api.vhtear.com/avatarwolf?text1=${gl3n}&text2=${gl4n}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				     sendimg(gmbr)
				     break
				
				case 'bannerff':
					if (args.length < 1) return reply('Teks nya mana?')
                      var geh = body.slice(10)
                      gl5n = geh.split("|")[0];
                      gl6n = geh.split("|")[1];
                      reply(mess.wait)
                      gmbr = await getBuffer(`https://api.vhtear.com/bannerff?title=${gl5n}&text=${gl6n}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				     sendimg(gmbr)
				     break
				
				case 'pornhub':
					if (args.length < 1) return reply('Teks nya mana?')
                      var geh = body.slice(9)
                      gl7n = geh.split("|")[0];
                      gl8n = geh.split("|")[1];
                      reply(mess.wait)
                      gmbr = await getBuffer(`https://api.vhtear.com/pornlogo?text1=${gl7n}&text2=${gl8n}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				     sendimg(gmbr)
				     break
				
				case 'quotemaker':
                if (isLimit(sender)) return 
                var gh = body.slice(12)
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					const pref = `Usage: \n${prefix}quotemaker teks|watermark\n\nEx :\n${prefix}quotemaker ini contoh|bicit`
					if (args.length < 1) return reply(pref)
					reply(ind.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {caption: 'Nih anjim', quoted: mek})
					await limitAdd(sender)
					break
				
				case 'truth':
                if (isLimit(sender)) return 
                const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					await limitAdd(sender)
					break
				case 'dare':
				if (isLimit(sender)) return 
				const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					await limitAdd(sender)
					break				
				case 'textdetect': 
				if (isLimit(sender)) return 
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Kirim Foto Dengan ${prefix}textdetec')
					}
					await limitAdd(sender)
				break
				
				case 'ssweb':
                if (isLimit(sender)) return 
					if (args.length < 1) return reply('Masukan Nama Tempat/kota/daerah')
					teks12 = body.slice(7)
					reply(ind.wait())
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks12}`)
					buff = await getBuffer(anu.gambar)
					client.sendMessage(from, buff, image, {quoted: mek})
					await limitAdd(sender)
					break
				case 'map':
				if (isLimit(sender)) return 
               	 anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
               	 buffer = await getBuffer(anu.gambar)
              	  client.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
				await limitAdd(sender)
				break
				
				case 'igstalk':
                   if (isLimit(sender)) return 
                     hmm = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/igs?u=${body.slice(9)}`)
                     buffer = await getBuffer(hmm.data.profilehd)
                     hasil = `Fullname : ${hmm.data.fullname}\npengikut : ${hmm.data.follower}\nMengikuti : ${hmm.data.following}\nPrivate : ${hmm.data.private}\nVerified : ${hmm.data.verified}\nbio : ${hmm.data.bio}`
                    client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    await limitAdd(sender)
					break 
					
					case 'film':
                reply(mess.wait)
                if (isLimit(sender)) return 
                
                film = body.slice(6)
					client.updatePresence(from, Presence.composing) 
					data15 = await fetchJson(`https://api.vhtear.com/downloadfilm?judul=${film}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
					teks15 = `*➸ Title* : ${data15.result.judul}\n=================\n`
					for (let i of data15.result.data) {
						teks15 += `*➸ Resolusi* : ${i.resolusi}\n*➸ Url* : ${i.urlDownload}\n=================\n`
					}
					reply(teks15.trim())
					await limitAdd(sender)
					break
					
					case 'pinterest':
                    if (isLimit(sender)) return
				reply('Oke Desu:v')
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('pinterest')) return reply(ind.stikga())
					anu = await fetchJson(`https://api.vhtear.com/pinterestdl?link=${args[0]}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					thumb = await getBuffer(anu.result.fileUrl)
					client.sendMessage(from, thumb, documents, {mimetype: 'documents', filename: `${anu.result.title}.${anu.result.type}`, quoted: mek})
					await limitAdd(sender)
					break
					
					case 'starmaker':
                    if (isLimit(sender)) return
				reply('Oke Desu:v')
					if (args.length < 1) return reply('Urlnya mana um?')
					anu = await fetchJson(`https://api.vhtear.com/starmakerdl?link=${args[0]}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks13 = `*Title* : ${anu.result.title}\n\n _Mengirim File Memerlukan Waktu Beberapa Menit... Telkomsel Lemot Bjir_`
					thumb = await getBuffer(anu.result.image)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks13})
					buffer = await getBuffer(anu.result.url)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek})
					await limitAdd(sender)
					break
					
					case 'smule':
				    if (isLimit(sender)) return
                   reply('Oke Desu:v')
					if (args.length < 1) return reply('Urlnya mana um?')
					anu = await fetchJson(`https://api.vhtear.com/getsmule?link=${args[0]}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks14 = `*Title* : ${anu.result.title} *Ext* : ${anu.ext}\n\n_Mengirim File Memerlukan Waktu ±1 Menit... Telkomsel Lemot Bjir_`
					thumb = await getBuffer(anu.result.image)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks14})
					bufferyyy = await getBuffer(anu.result.url)
					client.sendMessage(from, bufferyyy, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
					await limitAdd(sender)
					break
				
				default:
				
				if (body.startsWith(`${prefix}${command}`)) {
                  reply(`Oni-Chan!! *${pushname}*, Baka!!!! Perintah *${prefix}${command}* Tidak Terdaftar Di Dalam *${prefix}menu*!`)
        }
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
						
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
