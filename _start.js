/*CMD
  command: /start
  help: start command
  need_reply: false
CMD*/

let ref = params

if(!User.getProperty("registered")){

User.setProperty("registered", true, "boolean")
User.setProperty("balance", 0, "float")
User.setProperty("withdrawn", 0, "float")
User.setProperty("earned", 0, "float")
User.setProperty("refBonus", 0, "float")

if(ref && ref != user.telegramid){

let refUser = Bot.getProperty("user_" + ref)

if(refUser){

let lvl1 = Libs.ResourcesLib.anotherUserRes("balance", refUser)
lvl1.add(0.001)

let earned1 = Libs.ResourcesLib.anotherUserRes("earned", refUser)
earned1.add(0.001)

Bot.sendMessageToChatWithId(
refUser.telegramid,
"➕ Nuevo referido nivel 1\n💰 +0.001 TON"
)

User.setProperty("referrer", ref, "string")
}
}

Bot.setProperty("user_" + user.telegramid, user, "json")
}

Bot.runCommand("menu")