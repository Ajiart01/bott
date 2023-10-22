let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn, args, usedPrefix, command, text }) => {

let type = (args[0] || '').toLowerCase()
                  switch (type) {
                              case '1':
                                              // let meqeq = m.sender.replace(/@.+/, '')
                                                  let aquaqeq = db.data.users[m.sender].aqua 
                                                  let healthqeq = db.data.users[m.sender].health
                                                  let __waktuqeq = (new Date - db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqeq = (86400000 - __waktuqeq)
                                                  let waktuqeq = clockString(_waktuqeq)
                                                  if (aquaqeq == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqeq == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (db.data.users[m.sender].health > 89) {
                                                  if (db.data.users[m.sender].aqua > 4) {
                                                  
                                                  let _healingqeq = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqeq = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqeq = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqeq = (_healingqeq * 1)
                                                  let expqeq = (_expqeq * 1)
                                                  let moneyqeq = (_moneyqeq * 1)
                                                  
                                                  db.data.users[m.sender].health -= healingqeq
                                                  db.data.users[m.sender].exp += expqeq
                                                  db.data.users[m.sender].money += moneyqeq
                                                  db.data.users[m.sender].tiketcoin += 1
                                                  db.data.users[m.sender].aqua -= 5
                                                  db.data.users[m.sender].kerjasatu += 2
                                                  db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqeq = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqeq} Money\n+${expqeq} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqeq} health\n-5 Aqua\n\nJangan lupa untuk absen besok iya kak :)`.trim()
                                                  conn.reply(m.chat, chatqeq, m)
                                                  
                                                  } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                             } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                        } else m.reply(`Kamu sudah absen kak tunggu ${waktuqeq} untuk bisa absen lagi besok..`)
                             break
                             case '2':
                                              // let meqew = m.sender.replace(/@.+/, '')
                                                  let aquaqew = db.data.users[m.sender].aqua 
                                                  let healthqew = db.data.users[m.sender].health
                                                  let __waktuqew = (new Date - db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqew = (86400000 - __waktuqew)
                                                  let waktuqew = clockString(_waktuqew)
                                                  if (aquaqew == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqew == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (db.data.users[m.sender].health > 89) {
                                                  if (db.data.users[m.sender].aqua > 4) {
                                                  if (db.data.users[m.sender].kerjasatu > 1) {
                                                  
                                                  let _healingqew = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqew = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqew = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqew = (_healingqew * 1)
                                                  let expqew = (_expqew * 1)
                                                  let moneyqew = (_moneyqew * 1)
                                                  
                                                  db.data.users[m.sender].health -= healingqew
                                                  db.data.users[m.sender].exp += expqew
                                                  db.data.users[m.sender].money += moneyqew
                                                  db.data.users[m.sender].tiketcoin += 1
                                                  db.data.users[m.sender].aqua -= 5
                                                  db.data.users[m.sender].kerjasatu -= 2
                                                  db.data.users[m.sender].kerjadua += 2
                                                  db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqew = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqew} Money\n+${expqew} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqew} health\n-5 Aqua\n\nJangan lupa untuk absen besok iya kak :)`.trim()
                                                  conn.reply(m.chat, chatqew, m)
                                                  
                                                  } else m.reply(`Kamu tidak absen hari ke 1 coba absen terlebih dahulu`)
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqew} untuk bisa absen lagi..`)
                            break
                            case '3':
                                              // let meqee = m.sender.replace(/@.+/, '')
                                                  let aquaqee = db.data.users[m.sender].aqua 
                                                  let healthqee = db.data.users[m.sender].health
                                                  let __waktuqee = (new Date - db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqee = (86400000 - __waktuqee)
                                                  let waktuqee = clockString(_waktuqee)
                                                  if (aquaqee == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqee == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (db.data.users[m.sender].health > 89) {
                                                  if (db.data.users[m.sender].aqua > 4) {
                                                  if (db.data.users[m.sender].kerjadua > 1) {
                                                  
                                                  let _healingqee = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqee = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqee = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqee = (_healingqee * 1)
                                                  let expqee = (_expqee * 1)
                                                  let moneyqee = (_moneyqee * 1)
                                                  
                                                  db.data.users[m.sender].health -= healingqee
                                                  db.data.users[m.sender].exp += expqee
                                                  db.data.users[m.sender].money += moneyqee
                                                  db.data.users[m.sender].tiketcoin += 1
                                                  db.data.users[m.sender].aqua -= 5
                                                  db.data.users[m.sender].kerjadua -= 2
                                                  db.data.users[m.sender].kerjatiga += 2
                                                  db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqee = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqee} Money\n+${expqee} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqee} health\n-5 Aqua\n\nJangan lupa untuk absen besok iya kak :)`.trim()
                                                  conn.reply(m.chat, chatqee, m)
                                                  
                                                  } else m.reply(`Kamu tidak absen hari ke 2 coba absen terlebih dahulu`)
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqee} untuk bisa absen lagi..`)
                            break
                            case '4':
                                              // let meqer = m.sender.replace(/@.+/, '')
                                                  let aquaqer = db.data.users[m.sender].aqua 
                                                  let healthqer = db.data.users[m.sender].health
                                                  let __waktuqer = (new Date - db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqer = (86400000 - __waktuqer)
                                                  let waktuqer = clockString(_waktuqer)
                                                  if (aquaqer == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqer == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (db.data.users[m.sender].health > 89) {
                                                  if (db.data.users[m.sender].aqua > 4) {
                                                  if (db.data.users[m.sender].kerjatiga > 1) {
                                                  
                                                  let _healingqer = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqer = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqer = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqer = (_healingqer * 1)
                                                  let expqer = (_expqer * 1)
                                                  let moneyqer = (_moneyqer * 1)
                                                  
                                                  db.data.users[m.sender].health -= healingqer
                                                  db.data.users[m.sender].exp += expqer
                                                  db.data.users[m.sender].money += moneyqer
                                                  db.data.users[m.sender].tiketcoin += 1
                                                  db.data.users[m.sender].aqua -= 5
                                                  db.data.users[m.sender].kerjatiga -= 2
                                                  db.data.users[m.sender].kerjaempat += 2
                                                  db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqer = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqer} Money\n+${expqer} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqer} health\n-5 Aqua\n\nJangan lupa untuk absen besok iya kak :)`.trim()
                                                  conn.reply(m.chat, chatqer, m)
                                                  
                                                  } else m.reply(`Kamu tidak absen hari ke 3 coba absen terlebih dahulu`)
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqer} untuk bisa absen lagi..`)
                            break
                            case '5':
                                              // let meqet = m.sender.replace(/@.+/, '')
                                                  let aquaqet = db.data.users[m.sender].aqua 
                                                  let healthqet = db.data.users[m.sender].health
                                                  let __waktuqet = (new Date - db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqet = (86400000 - __waktuqet)
                                                  let waktuqet = clockString(_waktuqet)
                                                  if (aquaqet == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqet == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (db.data.users[m.sender].health > 89) {
                                                  if (db.data.users[m.sender].aqua > 4) {
                                                  if (db.data.users[m.sender].kerjaempat > 1) {
                                                  
                                                  let _healingqet = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqet = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqet = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqet = (_healingqet * 1)
                                                  let expqet = (_expqet * 1)
                                                  let moneyqet = (_moneyqet * 1)
                                                  
                                                  db.data.users[m.sender].health -= healingqet
                                                  db.data.users[m.sender].exp += expqet
                                                  db.data.users[m.sender].money += moneyqet
                                                  db.data.users[m.sender].tiketcoin += 1
                                                  db.data.users[m.sender].aqua -= 5
                                                  db.data.users[m.sender].kerjaempat -= 2
                                                  db.data.users[m.sender].kerjalima += 2
                                                  db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqet = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqet} Money\n+${expqet} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqet} health\n-5 Aqua\n\nJangan lupa untuk absen besok iya kak :)`.trim()
                                                  conn.reply(m.chat, chatqet, m)
                                                  
                                                  } else m.reply(`Kamu tidak absen hari ke 4 coba absen terlebih dahulu`)
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqet} untuk bisa absen lagi..`)
                            break
                            case '6':
                                              // let meqey = m.sender.replace(/@.+/, '')
                                                  let aquaqey = db.data.users[m.sender].aqua 
                                                  let healthqey = db.data.users[m.sender].health
                                                  let __waktuqey = (new Date - db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqey = (86400000 - __waktuqey)
                                                  let waktuqey = clockString(_waktuqey)
                                                  if (aquaqey == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqey == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (db.data.users[m.sender].health > 89) {
                                                  if (db.data.users[m.sender].aqua > 4) {
                                                  if (db.data.users[m.sender].kerjalima > 1) {
                                                  
                                                  let _healingqey = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqey = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqey = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqey = (_healingqey * 1)
                                                  let expqey = (_expqey * 1)
                                                  let moneyqey = (_moneyqey * 1)
                                                  
                                                  db.data.users[m.sender].health -= healingqey
                                                  db.data.users[m.sender].exp += expqey
                                                  db.data.users[m.sender].money += moneyqey
                                                  db.data.users[m.sender].tiketcoin += 1
                                                  db.data.users[m.sender].aqua -= 5
                                                  db.data.users[m.sender].kerjalima -= 2
                                                  db.data.users[m.sender].kerjaenam += 2
                                                  db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqey = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqey} Money\n+${expqey} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqey} health\n-5 Aqua\n\nJangan lupa untuk absen besok iya kak :)`.trim()
                                                  conn.reply(m.chat, chatqey, m)
                                                  
                                                  } else m.reply(`Kamu tidak absen hari ke 5 coba absen terlebih dahulu`)
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqey} untuk bisa absen lagi..`)
                            break
                            case '7':
                                              // let meqeu = m.sender.replace(/@.+/, '')
                                                  let aquaqeu = db.data.users[m.sender].aqua 
                                                  let healthqeu = db.data.users[m.sender].health
                                                  let __waktuqeu = (new Date - db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqeu = (86400000 - __waktuqeu)
                                                  let waktuqeu = clockString(_waktuqeu)
                                                  if (aquaqeu == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqeu == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (db.data.users[m.sender].health > 89) {
                                                  if (db.data.users[m.sender].aqua > 4) {
                                                  if (db.data.users[m.sender].kerjaenam > 1) {
                                                  
                                                  let _healingqeu = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqeu = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqeu = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqeu = (_healingqeu * 1)
                                                  let expqeu = (_expqeu * 1)
                                                  let moneyqeu = (_moneyqeu * 1)
                                                  
                                                  db.data.users[m.sender].health -= healingqeu
                                                  db.data.users[m.sender].exp += expqeu
                                                  db.data.users[m.sender].money += moneyqeu
                                                  db.data.users[m.sender].tiketcoin += 1
                                                  db.data.users[m.sender].aqua -= 5
                                                  db.data.users[m.sender].kerjaenam -= 2
                                                  db.data.users[m.sender].kerjatujuh += 2
                                                  db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqeu = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqeu} Money\n+${expqeu} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqeu} health\n-5 Aqua\n\nJangan lupa untuk absen besok iya kak :)`.trim()
                                                  conn.reply(m.chat, chatqeu, m)
                                                  
                                                  } else m.reply(`Kamu tidak absen hari ke 6 coba absen terlebih dahulu`)
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqeu} untuk bisa absen lagi..`)
                            break
                            case '8':
                                              // let meqei = m.sender.replace(/@.+/, '')
                                                  let aquaqei = db.data.users[m.sender].aqua 
                                                  let healthqei = db.data.users[m.sender].health
                                                  let __waktuqei = (new Date - db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqei = (86400000 - __waktuqei)
                                                  let waktuqei = clockString(_waktuqei)
                                                  if (aquaqei == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqei == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (db.data.users[m.sender].health > 89) {
                                                  if (db.data.users[m.sender].aqua > 4) {
                                                  if (db.data.users[m.sender].kerjatujuh > 1) {
                                                  
                                                  let _healingqei = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqei = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqei = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqei = (_healingqei * 1)
                                                  let expqei = (_expqei * 1)
                                                  let moneyqei = (_moneyqei * 1)
                                                  
                                                  db.data.users[m.sender].health -= healingqei
                                                  db.data.users[m.sender].exp += expqei
                                                  db.data.users[m.sender].money += moneyqei
                                                  db.data.users[m.sender].tiketcoin += 1
                                                  db.data.users[m.sender].aqua -= 5
                                                  db.data.users[m.sender].kerjatujuh -= 2
                                                  db.data.users[m.sender].kerjadelapan += 2
                                                  db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqei = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqei} Money\n+${expqei} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqei} health\n-5 Aqua\n\nJangan lupa untuk absen besok iya kak :)`.trim()
                                                  conn.reply(m.chat, chatqei, m)
                                                  
                                                  } else m.reply(`Kamu tidak absen hari ke 7 coba absen terlebih dahulu`)
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqei} untuk bisa absen lagi..`)
                            break
                            case '9':
                                              // let meqeo = m.sender.replace(/@.+/, '')
                                                  let aquaqeo = db.data.users[m.sender].aqua 
                                                  let healthqeo = db.data.users[m.sender].health
                                                  let __waktuqeo = (new Date - db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqeo = (86400000 - __waktuqeo)
                                                  let waktuqeo = clockString(_waktuqeo)
                                                  if (aquaqeo == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqeo == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (db.data.users[m.sender].health > 89) {
                                                  if (db.data.users[m.sender].aqua > 4) {
                                                  if (db.data.users[m.sender].kerjadelapan > 1) {
                                                  
                                                  let _healingqeo = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqeo = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqeo = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqeo = (_healingqeo * 1)
                                                  let expqeo = (_expqeo * 1)
                                                  let moneyqeo = (_moneyqeo * 1)
                                                  
                                                  db.data.users[m.sender].health -= healingqeo
                                                  db.data.users[m.sender].exp += expqeo
                                                  db.data.users[m.sender].money += moneyqeo
                                                  db.data.users[m.sender].tiketcoin += 1
                                                  db.data.users[m.sender].aqua -= 5
                                                  db.data.users[m.sender].kerjadelapan -= 2
                                                  db.data.users[m.sender].kerjasembilan += 2
                                                  db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqeo = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqeo} Money\n+${expqeo} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqeo} health\n-5 Aqua\n\nJangan lupa untuk absen besok iya kak :)`.trim()
                                                  conn.reply(m.chat, chatqeo, m)
                                                  
                                                  } else m.reply(`Kamu tidak absen hari ke 8 coba absen terlebih dahulu`)
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqeo} untuk bisa absen lagi..`)
                            break
                            case '10':
                                              // let meqep = m.sender.replace(/@.+/, '')
                                                  let aquaqep = db.data.users[m.sender].aqua 
                                                  let healthqep = db.data.users[m.sender].health
                                                  let __waktuqep = (new Date - db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqep = (86400000 - __waktuqep)
                                                  let waktuqep = clockString(_waktuqep)
                                                  if (aquaqep == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqep == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (db.data.users[m.sender].health > 89) {
                                                  if (db.data.users[m.sender].aqua > 4) {
                                                  if (db.data.users[m.sender].kerjasembilan > 1) {
                                                  
                                                  let _healingqep = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqep = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqep = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqep = (_healingqep * 1)
                                                  let expqep = (_expqep * 1)
                                                  let moneyqep = (_moneyqep * 1)
                                                  
                                                  db.data.users[m.sender].health -= healingqep
                                                  db.data.users[m.sender].exp += expqep
                                                  db.data.users[m.sender].money += moneyqep
                                                  db.data.users[m.sender].tiketcoin += 1
                                                  db.data.users[m.sender].aqua -= 5
                                                  db.data.users[m.sender].kerjasembilan -= 2
                                                  db.data.users[m.sender].kerjasepuluh += 2
                                                  db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqep = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqep} Money\n+${expqep} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqep} health\n-5 Aqua\n\nJangan lupa untuk absen besok iya kak :)`.trim()
                                                  conn.reply(m.chat, chatqep, m)
                                                  
                                                  } else m.reply(`Kamu tidak absen hari ke 9 coba absen terlebih dahulu`)
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqep} untuk bisa absen lagi..`)
                            break
                            case '11':
                                              // let meqea = m.sender.replace(/@.+/, '')
                                                  let aquaqea = db.data.users[m.sender].aqua 
                                                  let healthqea = db.data.users[m.sender].health
                                                  let __waktuqea = (new Date - db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqea = (86400000 - __waktuqea)
                                                  let waktuqea = clockString(_waktuqea)
                                                  if (aquaqea == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqea == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (db.data.users[m.sender].health > 89) {
                                                  if (db.data.users[m.sender].aqua > 4) {
                                                  if (db.data.users[m.sender].kerjasepuluh > 1) {
                                                  
                                                  let _healingqea = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqea = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqea = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqea = (_healingqea * 1)
                                                  let expqea = (_expqea * 1)
                                                  let moneyqea = (_moneyqea * 1)
                                                  
                                                  db.data.users[m.sender].health -= healingqea
                                                  db.data.users[m.sender].exp += expqea
                                                  db.data.users[m.sender].money += moneyqea
                                                  db.data.users[m.sender].tiketcoin += 1
                                                  db.data.users[m.sender].aqua -= 5
                                                  db.data.users[m.sender].kerjasepuluh -= 2
                                                  db.data.users[m.sender].kerjasebelas += 2
                                                  db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqea = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqea} Money\n+${expqea} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqea} health\n-5 Aqua\n\nJangan lupa untuk absen besok iya kak :)`.trim()
                                                  conn.reply(m.chat, chatqea, m)
                                                  
                                                  } else m.reply(`Kamu tidak absen hari ke 10 coba absen terlebih dahulu`)
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqea} untuk bisa absen lagi..`)
                            break
                            case '12':
                                              // let meqes = m.sender.replace(/@.+/, '')
                                                  let aquaqes = db.data.users[m.sender].aqua 
                                                  let healthqes = db.data.users[m.sender].health
                                                  let __waktuqes = (new Date - db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqes = (86400000 - __waktuqes)
                                                  let waktuqes = clockString(_waktuqes)
                                                  if (aquaqes == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqes == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (db.data.users[m.sender].health > 89) {
                                                  if (db.data.users[m.sender].aqua > 4) {
                                                  if (db.data.users[m.sender].kerjasebelas > 1) {
                                                  
                                                  let _healingqes = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqes = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqes = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqes = (_healingqes * 1)
                                                  let expqes = (_expqes * 1)
                                                  let moneyqes = (_moneyqes * 1)
                                                  
                                                  db.data.users[m.sender].health -= healingqes
                                                  db.data.users[m.sender].exp += expqes
                                                  db.data.users[m.sender].money += moneyqes
                                                  db.data.users[m.sender].tiketcoin += 1
                                                  db.data.users[m.sender].aqua -= 5
                                                  db.data.users[m.sender].kerjasebelas -= 2
                                                  db.data.users[m.sender].kerjaduabelas += 2
                                                  db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqes = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqes} Money\n+${expqes} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqes} health\n-5 Aqua\n\nJangan lupa untuk absen besok iya kak :)`.trim()
                                                  conn.reply(m.chat, chatqes, m)
                                                  
                                                  } else m.reply(`Kamu tidak absen hari ke 11 coba absen terlebih dahulu`)
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqes} untuk bisa absen lagi..`)
                            break
                            case '13':
                                              // let meqed = m.sender.replace(/@.+/, '')
                                                  let aquaqed = db.data.users[m.sender].aqua 
                                                  let healthqed = db.data.users[m.sender].health
                                                  let __waktuqed = (new Date - db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqed = (86400000 - __waktuqed)
                                                  let waktuqed = clockString(_waktuqed)
                                                  if (aquaqed == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqed == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (db.data.users[m.sender].health > 89) {
                                                  if (db.data.users[m.sender].aqua > 4) {
                                                  if (db.data.users[m.sender].kerjaduabelas > 1) {
                                                  
                                                  let _healingqed = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqed = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqed = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqed = (_healingqed * 1)
                                                  let expqed = (_expqed * 1)
                                                  let moneyqed = (_moneyqed * 1)
                                                  
                                                  db.data.users[m.sender].health -= healingqed
                                                  db.data.users[m.sender].exp += expqed
                                                  db.data.users[m.sender].money += moneyqed
                                                  db.data.users[m.sender].tiketcoin += 1
                                                  db.data.users[m.sender].aqua -= 5
                                                  db.data.users[m.sender].kerjaduabelas -= 2
                                                  db.data.users[m.sender].kerjatigabelas += 2
                                                  db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqed = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqed} Money\n+${expqed} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqed} health\n-5 Aqua\n\nJangan lupa untuk absen besok iya kak :)`.trim()
                                                  conn.reply(m.chat, chatqed, m)
                                                  
                                                  } else m.reply(`Kamu tidak absen hari ke 12 coba absen terlebih dahulu`)
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqed} untuk bisa absen lagi..`)
                            break
                            case '14':
                                              // let meqef = m.sender.replace(/@.+/, '')
                                                  let aquaqef = db.data.users[m.sender].aqua 
                                                  let healthqef = db.data.users[m.sender].health
                                                  let __waktuqef = (new Date - db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqef = (86400000 - __waktuqef)
                                                  let waktuqef = clockString(_waktuqef)
                                                  if (aquaqef == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqef == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (db.data.users[m.sender].health > 89) {
                                                  if (db.data.users[m.sender].aqua > 4) {
                                                  if (db.data.users[m.sender].kerjatigabelas > 1) {
                                                  
                                                  let _healingqef = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqef = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqef = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqef = (_healingqef * 1)
                                                  let expqef = (_expqef * 1)
                                                  let moneyqef = (_moneyqef * 1)
                                                  
                                                  db.data.users[m.sender].health -= healingqef
                                                  db.data.users[m.sender].exp += expqef
                                                  db.data.users[m.sender].money += moneyqef
                                                  db.data.users[m.sender].tiketcoin += 1
                                                  db.data.users[m.sender].aqua -= 5
                                                  db.data.users[m.sender].kerjatigabelas -= 2
                                                  db.data.users[m.sender].kerjaempatbelas += 2
                                                  db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqef = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqef} Money\n+${expqef} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqef} health\n-5 Aqua\n\nJangan lupa untuk absen besok iya kak :)`.trim()
                                                  conn.reply(m.chat, chatqef, m)
                                                  
                                                  } else m.reply(`Kamu tidak absen hari ke 13 coba absen terlebih dahulu`)
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqef} untuk bisa absen lagi..`)
                            break
                            case '15':
                                              // let meqeg = m.sender.replace(/@.+/, '')
                                                  let aquaqeg = db.data.users[m.sender].aqua 
                                                  let healthqeg = db.data.users[m.sender].health
                                                  let __waktuqeg = (new Date - db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqeg = (86400000 - __waktuqeg)
                                                  let waktuqeg = clockString(_waktuqeg)
                                                  if (aquaqeg == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqeg == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (db.data.users[m.sender].health > 89) {
                                                  if (db.data.users[m.sender].aqua > 4) {
                                                  if (db.data.users[m.sender].kerjaempatbelas > 1) {
                                                  
                                                  let _healingqeg = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqeg = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqeg = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqeg = (_healingqeg * 1)
                                                  let expqeg = (_expqeg * 1)
                                                  let moneyqeg = (_moneyqeg * 1)
                                                  
                                                  db.data.users[m.sender].health -= healingqeg
                                                  db.data.users[m.sender].exp += expqeg
                                                  db.data.users[m.sender].money += moneyqeg
                                                  db.data.users[m.sender].tiketcoin += 1
                                                  db.data.users[m.sender].aqua -= 5
                                                  db.data.users[m.sender].kerjaempatbelas -= 2
                                                  db.data.users[m.sender].kerjalimabelas += 2
                                                  db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqeg = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqeg} Money\n+${expqeg} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqeg} health\n-5 Aqua\n\nJangan lupa untuk absen besok iya kak :)`.trim()
                                                  conn.reply(m.chat, chatqeg, m)
                                                  
                                                  } else m.reply(`Kamu tidak absen hari ke 14 coba absen terlebih dahulu`)
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqeg} untuk bisa absen lagi..`)
                            break
                            case '16':
                                              // let meqeh = m.sender.replace(/@.+/, '')
                                                  let aquaqeh = db.data.users[m.sender].aqua 
                                                  let healthqeh = db.data.users[m.sender].health
                                                  let __waktuqeh = (new Date - db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqeh = (86400000 - __waktuqeh)
                                                  let waktuqeh = clockString(_waktuqeh)
                                                  if (aquaqeh == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqeh == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (db.data.users[m.sender].health > 89) {
                                                  if (db.data.users[m.sender].aqua > 4) {
                                                  if (db.data.users[m.sender].kerjalimabelas > 1) {
                                                  
                                                  let _healingqeh = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqeh = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqeh = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqeh = (_healingqeh * 1)
                                                  let expqeh = (_expqeh * 1)
                                                  let moneyqeh = (_moneyqeh * 1)
                                                  
                                                  db.data.users[m.sender].health -= healingqeh
                                                  db.data.users[m.sender].exp += expqeh
                                                  db.data.users[m.sender].money += moneyqeh
                                                  db.data.users[m.sender].tiketcoin += 1
                                                  db.data.users[m.sender].aqua -= 5
                                                  db.data.users[m.sender].kerjalimabelas -= 2
                                                  db.data.users[m.sender].kerjaenambelas += 2
                                                  db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqeh = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqeh} Money\n+${expqeh} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqeh} health\n-5 Aqua\n\nJangan lupa untuk absen besok iya kak :)`.trim()
                                                  conn.reply(m.chat, chatqeh, m)
                                                  
                                                  } else m.reply(`Kamu tidak absen hari ke 15 coba absen terlebih dahulu`)
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqeh} untuk bisa absen lagi..`)
                            break
                            case '17':
                                              // let meqej = m.sender.replace(/@.+/, '')
                                                  let aquaqej = db.data.users[m.sender].aqua 
                                                  let healthqej = db.data.users[m.sender].health
                                                  let __waktuqej = (new Date - db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqej = (86400000 - __waktuqej)
                                                  let waktuqej = clockString(_waktuqej)
                                                  if (aquaqej == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqej == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (db.data.users[m.sender].health > 89) {
                                                  if (db.data.users[m.sender].aqua > 4) {
                                                  if (db.data.users[m.sender].kerjaenambelas > 1) {
                                                  
                                                  let _healingqej = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqej = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqej = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqej = (_healingqej * 1)
                                                  let expqej = (_expqej * 1)
                                                  let moneyqej = (_moneyqej * 1)
                                                  
                                                  db.data.users[m.sender].health -= healingqej
                                                  db.data.users[m.sender].exp += expqej
                                                  db.data.users[m.sender].money += moneyqej
                                                  db.data.users[m.sender].tiketcoin += 1
                                                  db.data.users[m.sender].aqua -= 5
                                                  db.data.users[m.sender].kerjaenambelas -= 2
                                                  db.data.users[m.sender].kerjatujuhbelas += 2
                                                  db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqej = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqej} Money\n+${expqej} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqej} health\n-5 Aqua\n\nJangan lupa untuk absen besok iya kak :)`.trim()
                                                  conn.reply(m.chat, chatqej, m)
                                                  
                                                  } else m.reply(`Kamu tidak absen hari ke 16 coba absen terlebih dahulu`)
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqej} untuk bisa absen lagi..`)
                            break
                            case '18':
                                              // let meqek = m.sender.replace(/@.+/, '')
                                                  let aquaqek = db.data.users[m.sender].aqua 
                                                  let healthqek = db.data.users[m.sender].health
                                                  let __waktuqek = (new Date - db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqek = (86400000 - __waktuqek)
                                                  let waktuqek = clockString(_waktuqek)
                                                  if (aquaqek == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqek == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (db.data.users[m.sender].health > 89) {
                                                  if (db.data.users[m.sender].aqua > 4) {
                                                  if (db.data.users[m.sender].kerjatujuhbelas > 1) {
                                                  
                                                  let _healingqek = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqek = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqek = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqek = (_healingqek * 1)
                                                  let expqek = (_expqek * 1)
                                                  let moneyqek = (_moneyqek * 1)
                                                  
                                                  db.data.users[m.sender].health -= healingqek
                                                  db.data.users[m.sender].exp += expqek
                                                  db.data.users[m.sender].money += moneyqek
                                                  db.data.users[m.sender].tiketcoin += 1
                                                  db.data.users[m.sender].aqua -= 5
                                                  db.data.users[m.sender].kerjatujuhbelas -= 2
                                                  db.data.users[m.sender].kerjadelapanbelas += 2
                                                  db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqek = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqek} Money\n+${expqek} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqek} health\n-5 Aqua\n\nJangan lupa untuk absen besok iya kak :)`.trim()
                                                  conn.reply(m.chat, chatqek, m)
                                                  
                                                  } else m.reply(`Kamu tidak absen hari ke 17 coba absen terlebih dahulu`)
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqek} untuk bisa absen lagi..`)
                            break
                            case '19':
                                              // let meqel = m.sender.replace(/@.+/, '')
                                                  let aquaqel = db.data.users[m.sender].aqua 
                                                  let healthqel = db.data.users[m.sender].health
                                                  let __waktuqel = (new Date - db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqel = (86400000 - __waktuqel)
                                                  let waktuqel = clockString(_waktuqel)
                                                  if (aquaqel == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqel == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (db.data.users[m.sender].health > 89) {
                                                  if (db.data.users[m.sender].aqua > 4) {
                                                  if (db.data.users[m.sender].kerjadelapanbelas > 1) {
                                                  
                                                  let _healingqel = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqel = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqel = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqel = (_healingqel * 1)
                                                  let expqel = (_expqel * 1)
                                                  let moneyqel = (_moneyqel * 1)
                                                  
                                                  db.data.users[m.sender].health -= healingqel
                                                  db.data.users[m.sender].exp += expqel
                                                  db.data.users[m.sender].money += moneyqel
                                                  db.data.users[m.sender].tiketcoin += 1
                                                  db.data.users[m.sender].aqua -= 5
                                                  db.data.users[m.sender].kerjadelapanbelas -= 2
                                                  db.data.users[m.sender].kerjasembilanbelas += 2
                                                  db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqel = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqel} Money\n+${expqel} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqel} health\n-5 Aqua\n\nJangan lupa untuk absen besok iya kak :)`.trim()
                                                  conn.reply(m.chat, chatqel, m)
                                                  
                                                  } else m.reply(`Kamu tidak absen hari ke 18 coba absen terlebih dahulu`)
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqel} untuk bisa absen lagi..`)
                            break
                            case '20':
                                              // let meqefh = m.sender.replace(/@.+/, '')
                                                  let aquaqefh = db.data.users[m.sender].aqua 
                                                  let healthqefh = db.data.users[m.sender].health
                                                  let __waktuqefh = (new Date - db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqefh = (86400000 - __waktuqefh)
                                                  let waktuqefh = clockString(_waktuqefh)
                                                  if (aquaqefh == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqefh == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (db.data.users[m.sender].health > 89) {
                                                  if (db.data.users[m.sender].aqua > 4) {
                                                  if (db.data.users[m.sender].kerjasembilanbelas > 1) {
                                                  
                                                  let _healingqefh = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqefh = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqefh = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqefh = (_healingqefh * 1)
                                                  let expqefh = (_expqefh * 1)
                                                  let moneyqefh = (_moneyqefh * 1)
                                                  
                                                  db.data.users[m.sender].health -= healingqefh
                                                  db.data.users[m.sender].exp += expqefh
                                                  db.data.users[m.sender].money += moneyqefh
                                                  db.data.users[m.sender].tiketcoin += 1
                                                  db.data.users[m.sender].aqua -= 5
                                                  db.data.users[m.sender].kerjasembilanbelas -= 2
                                                  db.data.users[m.sender].kerjaduapuluh += 2
                                                  db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqefh = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqefh} Money\n+${expqefh} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqefh} health\n-5 Aqua\n\nJangan lupa untuk absen besok iya kak :)`.trim()
                                                  conn.reply(m.chat, chatqefh, m)
                                                  
                                                  } else m.reply(`Kamu tidak absen hari ke 19 coba absen terlebih dahulu`)
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqefh} untuk bisa absen lagi..`)
                            break
                            case '21':
                                              // let meqez = m.sender.replace(/@.+/, '')
                                                  let aquaqez = db.data.users[m.sender].aqua 
                                                  let healthqez = db.data.users[m.sender].health
                                                  let __waktuqez = (new Date - db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqez = (86400000 - __waktuqez)
                                                  let waktuqez = clockString(_waktuqez)
                                                  if (aquaqez == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqez == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (db.data.users[m.sender].health > 89) {
                                                  if (db.data.users[m.sender].aqua > 4) {
                                                  if (db.data.users[m.sender].kerjaduapuluh > 1) {
                                                  
                                                  let _healingqez = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqez = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqez = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqez = (_healingqez * 1)
                                                  let expqez = (_expqez * 1)
                                                  let moneyqez = (_moneyqez * 1)
                                                  
                                                  db.data.users[m.sender].health -= healingqez
                                                  db.data.users[m.sender].exp += expqez
                                                  db.data.users[m.sender].money += moneyqez
                                                  db.data.users[m.sender].tiketcoin += 1
                                                  db.data.users[m.sender].aqua -= 5
                                                  db.data.users[m.sender].kerjaduapuluh -= 2
                                                  db.data.users[m.sender].kerjaduasatu += 2
                                                  db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqez = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqez} Money\n+${expqez} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqez} health\n-5 Aqua\n\nJangan lupa untuk absen besok iya kak :)`.trim()
                                                  conn.reply(m.chat, chatqez, m)
                                                  
                                                  } else m.reply(`Kamu tidak absen hari ke 20 coba absen terlebih dahulu`)
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqez} untuk bisa absen lagi..`)
                            break
                            case '22':
                                              // let meqex = m.sender.replace(/@.+/, '')
                                                  let aquaqex = db.data.users[m.sender].aqua 
                                                  let healthqex = db.data.users[m.sender].health
                                                  let __waktuqex = (new Date - db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqex = (86400000 - __waktuqex)
                                                  let waktuqex = clockString(_waktuqex)
                                                  if (aquaqex == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqex == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (db.data.users[m.sender].health > 89) {
                                                  if (db.data.users[m.sender].aqua > 4) {
                                                  if (db.data.users[m.sender].kerjaduasatu > 1) {
                                                  
                                                  let _healingqex = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqex = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqex = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqex = (_healingqex * 1)
                                                  let expqex = (_expqex * 1)
                                                  let moneyqex = (_moneyqex * 1)
                                                  
                                                  db.data.users[m.sender].health -= healingqex
                                                  db.data.users[m.sender].exp += expqex
                                                  db.data.users[m.sender].money += moneyqex
                                                  db.data.users[m.sender].tiketcoin += 1
                                                  db.data.users[m.sender].aqua -= 5
                                                  db.data.users[m.sender].kerjaduasatu -= 2
                                                  db.data.users[m.sender].kerjaduadua += 2
                                                  db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqex = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqex} Money\n+${expqex} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqex} health\n-5 Aqua\n\nJangan lupa untuk absen besok iya kak :)`.trim()
                                                  conn.reply(m.chat, chatqex, m)
                                                  
                                                  } else m.reply(`Kamu tidak absen hari ke 21 coba absen terlebih dahulu`)
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqex} untuk bisa absen lagi..`)
                            break
                            case '23':
                                              // let meqec = m.sender.replace(/@.+/, '')
                                                  let aquaqec = db.data.users[m.sender].aqua 
                                                  let healthqec = db.data.users[m.sender].health
                                                  let __waktuqec = (new Date - db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqec = (86400000 - __waktuqec)
                                                  let waktuqec = clockString(_waktuqec)
                                                  if (aquaqec == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqec == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (db.data.users[m.sender].health > 89) {
                                                  if (db.data.users[m.sender].aqua > 4) {
                                                  if (db.data.users[m.sender].kerjaduadua > 1) {
                                                  
                                                  let _healingqec = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqec = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqec = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqec = (_healingqec * 1)
                                                  let expqec = (_expqec * 1)
                                                  let moneyqec = (_moneyqec * 1)
                                                  
                                                  db.data.users[m.sender].health -= healingqec
                                                  db.data.users[m.sender].exp += expqec
                                                  db.data.users[m.sender].money += moneyqec
                                                  db.data.users[m.sender].tiketcoin += 1
                                                  db.data.users[m.sender].aqua -= 5
                                                  db.data.users[m.sender].kerjaduadua -= 2
                                                  db.data.users[m.sender].kerjaduatiga += 2
                                                  db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqec = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqec} Money\n+${expqec} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqec} health\n-5 Aqua\n\nJangan lupa untuk absen besok iya kak :)`.trim()
                                                  conn.reply(m.chat, chatqec, m)
                                                  
                                                  } else m.reply(`Kamu tidak absen hari ke 22 coba absen terlebih dahulu`)
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqec} untuk bisa absen lagi..`)
                            break
                            case '24':
                                              // let meqev = m.sender.replace(/@.+/, '')
                                                  let aquaqev = db.data.users[m.sender].aqua 
                                                  let healthqev = db.data.users[m.sender].health
                                                  let __waktuqev = (new Date - db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqev = (86400000 - __waktuqev)
                                                  let waktuqev = clockString(_waktuqev)
                                                  if (aquaqev == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqev == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (db.data.users[m.sender].health > 89) {
                                                  if (db.data.users[m.sender].aqua > 4) {
                                                  if (db.data.users[m.sender].kerjaduatiga > 1) {
                                                  
                                                  let _healingqev = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqev = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqev = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqev = (_healingqev * 1)
                                                  let expqev = (_expqev * 1)
                                                  let moneyqev = (_moneyqev * 1)
                                                  
                                                  db.data.users[m.sender].health -= healingqev
                                                  db.data.users[m.sender].exp += expqev
                                                  db.data.users[m.sender].money += moneyqev
                                                  db.data.users[m.sender].tiketcoin += 1
                                                  db.data.users[m.sender].aqua -= 5
                                                  db.data.users[m.sender].kerjaduatiga -= 2
                                                  db.data.users[m.sender].kerjaduaempat += 2
                                                  db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqev = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqev} Money\n+${expqev} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqev} health\n-5 Aqua\n\nJangan lupa untuk absen besok iya kak :)`.trim()
                                                  conn.reply(m.chat, chatqev, m)
                                                  
                                                  } else m.reply(`Kamu tidak absen hari ke 23 coba absen terlebih dahulu`)
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqev} untuk bisa absen lagi..`)
                            break
                            case '25':
                                              // let meqeb = m.sender.replace(/@.+/, '')
                                                  let aquaqeb = db.data.users[m.sender].aqua 
                                                  let healthqeb = db.data.users[m.sender].health
                                                  let __waktuqeb = (new Date - db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqeb = (86400000 - __waktuqeb)
                                                  let waktuqeb = clockString(_waktuqeb)
                                                  if (aquaqeb == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqeb == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (db.data.users[m.sender].health > 89) {
                                                  if (db.data.users[m.sender].aqua > 4) {
                                                  if (db.data.users[m.sender].kerjaduaempat > 1) {
                                                  
                                                  let _healingqeb = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqeb = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqeb = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqeb = (_healingqeb * 1)
                                                  let expqeb = (_expqeb * 1)
                                                  let moneyqeb = (_moneyqeb * 1)
                                                  
                                                  db.data.users[m.sender].health -= healingqeb
                                                  db.data.users[m.sender].exp += expqeb
                                                  db.data.users[m.sender].money += moneyqeb
                                                  db.data.users[m.sender].tiketcoin += 1
                                                  db.data.users[m.sender].aqua -= 5
                                                  db.data.users[m.sender].kerjaduaempat -= 2
                                                  db.data.users[m.sender].kerjadualima+= 2
                                                  db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqeb = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqeb} Money\n+${expqeb} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqeb} health\n-5 Aqua\n\nJangan lupa untuk absen besok iya kak :)`.trim()
                                                  conn.reply(m.chat, chatqeb, m)
                                                  
                                                  } else m.reply(`Kamu tidak absen hari ke 24 coba absen terlebih dahulu`)
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqeb} untuk bisa absen lagi..`)
                            break
                            case '26':
                                              // let meqen = m.sender.replace(/@.+/, '')
                                                  let aquaqen = db.data.users[m.sender].aqua 
                                                  let healthqen = db.data.users[m.sender].health
                                                  let __waktuqen = (new Date - db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqen = (86400000 - __waktuqen)
                                                  let waktuqen = clockString(_waktuqen)
                                                  if (aquaqen == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqen == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (db.data.users[m.sender].health > 89) {
                                                  if (db.data.users[m.sender].aqua > 4) {
                                                  if (db.data.users[m.sender].kerjadualima > 1) {
                                                  
                                                  let _healingqen = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqen = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqen = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqen = (_healingqen * 1)
                                                  let expqen = (_expqen * 1)
                                                  let moneyqen = (_moneyqen * 1)
                                                  
                                                  db.data.users[m.sender].health -= healingqen
                                                  db.data.users[m.sender].exp += expqen
                                                  db.data.users[m.sender].money += moneyqen
                                                  db.data.users[m.sender].tiketcoin += 1
                                                  db.data.users[m.sender].aqua -= 5
                                                  db.data.users[m.sender].kerjadualima -= 2
                                                  db.data.users[m.sender].kerjaduaenam += 2
                                                  db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqen = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqen} Money\n+${expqen} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqen} health\n-5 Aqua\n\nJangan lupa untuk absen besok iya kak :)`.trim()
                                                  conn.reply(m.chat, chatqen, m)
                                                  
                                                  } else m.reply(`Kamu tidak absen hari ke 25 coba absen terlebih dahulu`)
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqen} untuk bisa absen lagi..`)
                            break
                            case '27':
                                              // let meqem = m.sender.replace(/@.+/, '')
                                                  let aquaqem = db.data.users[m.sender].aqua 
                                                  let healthqem = db.data.users[m.sender].health
                                                  let __waktuqem = (new Date - db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqem = (86400000 - __waktuqem)
                                                  let waktuqem = clockString(_waktuqem)
                                                  if (aquaqem == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqem == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (db.data.users[m.sender].health > 89) {
                                                  if (db.data.users[m.sender].aqua > 4) {
                                                  if (db.data.users[m.sender].kerjaduaenam > 1) {
                                                  
                                                  let _healingqem = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqem = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqem = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqem = (_healingqem * 1)
                                                  let expqem = (_expqem * 1)
                                                  let moneyqem = (_moneyqem * 1)
                                                  
                                                  db.data.users[m.sender].health -= healingqem
                                                  db.data.users[m.sender].exp += expqem
                                                  db.data.users[m.sender].money += moneyqem
                                                  db.data.users[m.sender].tiketcoin += 1
                                                  db.data.users[m.sender].aqua -= 5
                                                  db.data.users[m.sender].kerjaduaenam -= 2
                                                  db.data.users[m.sender].kerjaduatujuh += 2
                                                  db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqem = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqem} Money\n+${expqem} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqem} health\n-5 Aqua\n\nJangan lupa untuk absen besok iya kak :)`.trim()
                                                  conn.reply(m.chat, chatqem, m)
                                                  
                                                  } else m.reply(`Kamu tidak absen hari ke 26 coba absen terlebih dahulu`)
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqem} untuk bisa absen lagi..`)
                            break
                            case '28':
                                              // let meqse = m.sender.replace(/@.+/, '')
                                                  let aquaqse = db.data.users[m.sender].aqua 
                                                  let healthqse = db.data.users[m.sender].health
                                                  let __waktuqse = (new Date - db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqse = (86400000 - __waktuqse)
                                                  let waktuqse = clockString(_waktuqse)
                                                  if (aquaqse == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqse == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (db.data.users[m.sender].health > 89) {
                                                  if (db.data.users[m.sender].aqua > 4) {
                                                  if (db.data.users[m.sender].kerjaduatujuh > 1) {
                                                  
                                                  let _healingqse = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqse = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqse = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqse = (_healingqse * 1)
                                                  let expqse = (_expqse * 1)
                                                  let moneyqse = (_moneyqse * 1)
                                                  
                                                  db.data.users[m.sender].health -= healingqse
                                                  db.data.users[m.sender].exp += expqse
                                                  db.data.users[m.sender].money += moneyqse
                                                  db.data.users[m.sender].tiketcoin += 1
                                                  db.data.users[m.sender].aqua -= 5
                                                  db.data.users[m.sender].kerjaduatujuh -= 2
                                                  db.data.users[m.sender].kerjaduadelapan += 2
                                                  db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqse = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqse} Money\n+${expqse} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqse} health\n-5 Aqua\n\nJangan lupa untuk absen besok iya kak :)`.trim()
                                                  conn.reply(m.chat, chatqse, m)
                                                  
                                                  } else m.reply(`Kamu tidak absen hari ke 27 coba absen terlebih dahulu`)
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqse} untuk bisa absen lagi..`)
                            break
                            case '29':
                                              // let meqsu = m.sender.replace(/@.+/, '')
                                                  let aquaqsu = db.data.users[m.sender].aqua 
                                                  let healthqsu = db.data.users[m.sender].health
                                                  let __waktuqsu = (new Date - db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqsu = (86400000 - __waktuqsu)
                                                  let waktuqsu = clockString(_waktuqsu)
                                                  if (aquaqsu == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqsu == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (db.data.users[m.sender].health > 89) {
                                                  if (db.data.users[m.sender].aqua > 4) {
                                                  if (db.data.users[m.sender].kerjaduadelapan > 1) {
                                                  
                                                  let _healingqsu = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqsu = `${Math.floor(Math.random() * 1000)}`.trim()
                                                  let _moneyqsu = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  
                                                  let healingqsu = (_healingqsu * 1)
                                                  let expqsu = (_expqsu * 1)
                                                  let moneyqsu = (_moneyqsu * 1)
                                                  
                                                  db.data.users[m.sender].health -= healingqsu
                                                  db.data.users[m.sender].exp += expqsu
                                                  db.data.users[m.sender].money += moneyqsu
                                                  db.data.users[m.sender].tiketcoin += 1
                                                  db.data.users[m.sender].aqua -= 5
                                                  db.data.users[m.sender].kerjaduadelapan -= 2
                                                  db.data.users[m.sender].kerjaduasembilan += 2
                                                  db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqsu = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqsu} Money\n+${expqsu} Exp\n+1 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqsu} health\n-5 Aqua\n\nJangan lupa untuk absen besok iya kak :)`.trim()
                                                  conn.reply(m.chat, chatqsu, m)
                                                  
                                                  } else m.reply(`Kamu tidak absen hari ke 28 coba absen terlebih dahulu`)
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqsu} untuk bisa absen lagi..`)
                            break
                            case '30':
                                              // let meqso = m.sender.replace(/@.+/, '')
                                                  let aquaqso = db.data.users[m.sender].aqua 
                                                  let healthqso = db.data.users[m.sender].health
                                                  let __waktuqso = (new Date - db.data.users[m.sender].lastpekerjaan)
                                                  let _waktuqso = (86400000 - __waktuqso)
                                                  let waktuqso = clockString(_waktuqso)
                                                  if (aquaqso == 0) return m.reply('*Kamu belum memiliki aqua*')
                                                  if (healthqso == 0) return m.reply('*Kamu belum memiliki health*')
                                                  if (new Date - db.data.users[m.sender].lastpekerjaan > 86400000) {
                                                  if (db.data.users[m.sender].health > 89) {
                                                  if (db.data.users[m.sender].aqua > 4) {
                                                  if (db.data.users[m.sender].kerjaduasembilan > 1) {
                                                  
                                                  let _healingqso = `${Math.floor(Math.random() * 101)}`.trim()
                                                  let _expqso = `${Math.floor(Math.random() * 10000)}`.trim()
                                                  let _moneyqso = `${Math.floor(Math.random() * 1000000)}`.trim()
                                                  
                                                  let healingqso = (_healingqso * 1)
                                                  let expqso = (_expqso * 1)
                                                  let moneyqso = (_moneyqso * 1)
                                                  
                                                  db.data.users[m.sender].health -= healingqso
                                                  db.data.users[m.sender].exp += expqso
                                                  db.data.users[m.sender].money += moneyqso
                                                  db.data.users[m.sender].cupon += 2
                                                  db.data.users[m.sender].tiketcoin += 5
                                                  db.data.users[m.sender].aqua -= 5
                                                  db.data.users[m.sender].kerjaduasembilan -= 2
                                                  db.data.users[m.sender].lastpekerjaan = new Date * 1
                                                  
                                                  let chatqso = `Selamat kamu sudah bekerja keras dan mendapatkan:\n+${moneyqso} Money\n+${expqso} Exp\n+2 Cupon\n+5 Tiketcoin\n\nhealth dan aqua mu berkurang\n-${healingqso} health\n-5 Aqua\n\nJangan lupa untuk absen besok iya kak :)`.trim()
                                                  conn.reply(m.chat, chatqso, m)
                                                  
                                                  } else m.reply(`Kamu tidak absen hari ke 29 coba absen terlebih dahulu`)
                                             } else m.reply(`Aqua tidak cukup, minimal aqua 5 untuk bisa bekerja`)
                                        } else m.reply(`Health tidak cukup, minimal health 90 untuk bisa bekerja`)
                                   } else m.reply(`Kamu sudah absen kak tunggu ${waktuqso} untuk bisa absen lagi..`)
                            break
                  default:
                         return conn.reply(m.chat, `${usedPrefix + command} [1/30]\nContoh penggunaan: *${usedPrefix + command} 1*`, m)
                    }
}

handler.help = ['bekerja [1-30]']
handler.tags = ['rpg']
handler.command = /^(bekerja)$/i
handler.limit = true
handler.group = true

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
