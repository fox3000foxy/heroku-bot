const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'fox3000foxy.aternos.me', // optional
  port: 25565,       // optional
  username: 'Tester', // email and password are required only for
})

bot.on('chat', function (username, message) {
  if (username === bot.username) return
  bot.chat(message)
})
bot.on('login',()=>{
console.log("Started to "+bot.host+":"+bot.port)
})
// Log errors and kick reasons:
bot.on('kicked', (reason, loggedIn) => console.log(reason, loggedIn))
bot.on('error', err => console.log(err))

