/*CMD
  command: 💸 Retirar
  need_reply: false
CMD*/

let balance = Libs.ResourcesLib.userRes("balance")

if(balance.value() < 0.01){
Bot.sendMessage("❌ Mínimo 0.01 TON")
return
}

Bot.sendMessage("👛 Envía tu wallet TON")
Bot.runCommand("setWallet")