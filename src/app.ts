import {Telegraf} from 'telegraf';
const token = '1339515280:AAHFvrYWdm50gvvS5EgnXfyNjlVAt6pghhA'

const bot = new Telegraf(token)
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('pwel na xyi'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
console.log('hello')
