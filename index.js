const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'localhost', // optional
  port: 25565,       // optional
  username: 'email@example.com', // email and password are required only for
  password: '12345678',          // online-mode=true servers
  version: false,                 // false corresponds to auto version detection (that's the default), put for example "1.8.8" if you need a specific version
  auth: 'mojang'      // optional; by default uses mojang, if using a microsoft account, set to 'microsoft'
})

bot.on('chat', function (username, message) {
  if (username === bot.username) return
  bot.chat(message)
})

// Log errors and kick reasons:
bot.on('kicked', (reason, loggedIn) => console.log(reason, loggedIn))
bot.on('error', err => console.log(err))

