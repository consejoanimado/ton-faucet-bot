/*CMD
  command: setWallet
  need_reply: true
CMD*/

User.setProperty("wallet", message, "string")

Bot.sendMessage("💰 Envía cantidad")
Bot.runCommand("processWithdraw")