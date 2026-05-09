/*CMD
  command: 👤 Cuenta
  need_reply: false
CMD*/

let balance = Libs.ResourcesLib.userRes("balance").value().toFixed(6)
let earned = Libs.ResourcesLib.userRes("earned").value().toFixed(6)
let withdrawn = Libs.ResourcesLib.userRes("withdrawn").value().toFixed(6)

Bot.sendMessage(
"💰 Saldo: " + balance + " TON\n\n" +
"📈 Ganado: " + earned + " TON\n" +
"💸 Retirado: " + withdrawn + " TON"
)