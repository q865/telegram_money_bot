
import { Markup, Telegraf } from 'telegraf'
require('dotenv').config();
import admin from './components/admin';
import ruletka from './components/rulet'
const bot = new Telegraf(process.env.BOT_TOKEN!);
start()

async function start() {
    bot.command('ruletka', async (ctx) => await ruletka(ctx))
    bot.start((ctx) => ctx.reply('добро пожаловать'))
    bot.on('text', async (ctx)=> await admin(ctx))
    bot.launch()

    // Enable graceful stop
    process.once('SIGINT', () => bot.stop('SIGINT'))
    process.once('SIGTERM', () => bot.stop('SIGTERM'))
}

