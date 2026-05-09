/*CMD
  command: 🎁 Bono Diario
  need_reply: false
CMD*/

let last = User.getProperty("lastBonus")
let now = new Date().getTime()

if(last && now - last < 21600000){
Bot.sendMessage("⏳ Espera 6 horas")
return
}

let bonus = (Math.random() * (0.0015 - 0.001) + 0.001).toFixed(6)
bonus = parseFloat(bonus)

let balance = Libs.ResourcesLib.userRes("balance")
let earned = Libs.ResourcesLib.userRes("earned")

balance.add(bonus)
earned.add(bonus)

User.setProperty("lastBonus", now, "integer")

Bot.sendMessage("🎉 Recibiste " + bonus + " TON")