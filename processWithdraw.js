/*CMD
  command: processWithdraw
  need_reply: true
CMD*/

let amount = parseFloat(message)

if(isNaN(amount)){
Bot.sendMessage("❌ Inválido")
return
}

let balance = Libs.ResourcesLib.userRes("balance")

if(balance.value() < amount){
Bot.sendMessage("❌ Saldo insuficiente")
return
}

balance.remove(amount)

let withdrawn = Libs.ResourcesLib.userRes("withdrawn")
withdrawn.add(amount)

Bot.sendMessage("✅ Retiro solicitado")