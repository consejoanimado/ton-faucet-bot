/*CMD
  command: 👥 Referidos
  need_reply: false
CMD*/

let botName = bot.name

let link = "https://t.me/" + botName + "?start=" + user.telegramid

Bot.sendMessage(
"👥 Tu link:\n\n" + link
)