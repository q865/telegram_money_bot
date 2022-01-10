import { Markup, Telegraf } from 'telegraf'
require('dotenv').config();
import admin from './components/admin';
import ruletka from './components/ruletka';
import weather from './components/weather'
import connectGoogleSheet from './components/googleSheet'
const bot = new Telegraf(process.env.BOT_TOKEN!);
start()


async function start() {
   await connectGoogleSheet()
    bot.command('ruletka', async (ctx) => await ruletka(ctx))
    bot.command('weather', async (ctx) => await weather(ctx))
    bot.start((ctx) => ctx.reply('привет!'))
    bot.on('text', async (ctx)=> await admin(ctx))
    bot.launch()

    // Enable graceful stop
    process.once('SIGINT', () => bot.stop('SIGINT'))
    process.once('SIGTERM', () => bot.stop('SIGTERM'))
}

