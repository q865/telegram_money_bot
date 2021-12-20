
import { Telegraf } from 'telegraf'
import { GoogleSpreadsheet } from 'google-spreadsheet';
const tgToken = '1339515280:AAHFvrYWdm50gvvS5EgnXfyNjlVAt6pghhA';

const doc = new GoogleSpreadsheet("1qHg3PQmBv0S1ZBGHiOmFHSUPkpIH0aK9Q4Vjlx0-0qw")


const bot = new Telegraf(tgToken);
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('pwel na xyi'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
