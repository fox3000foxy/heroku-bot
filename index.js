const mineflayer = require('mineflayer')
const http = require('http')

const bot = mineflayer.createBot({
  host: 'fox3000foxy.aternos.me', // optional
  port: 25565,       // optional
  username: 'IRC', // email and password are required only for
})

http.createServer((request,response)=>{
    response.writeHead(200, {"Content-Type":"text/plain"})
    response.end("Started")
}).listen(process.env.PORT)
// Log errors and kick reasons:
bot.on('kicked', (reason, loggedIn) => console.log(reason, loggedIn))
bot.on('error', err => console.log(err))

