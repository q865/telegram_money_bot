var Telegraf = require('telegraf').Telegraf;
var token = '1339515280:AAHFvrYWdm50gvvS5EgnXfyNjlVAt6pghhA';
var bot = new Telegraf(token);
bot.start(function (ctx) { return ctx.reply('Welcome'); });
bot.help(function (ctx) { return ctx.reply('Send me a sticker'); });
bot.on('sticker', function (ctx) { return ctx.reply('👍'); });
bot.hears('hi', function (ctx) { return ctx.reply('Hey there'); });
bot.launch();
var mass = ['весело', 'воробей', 'вороно'];
console.log(mass.sort());
// Enable graceful stop
process.once('SIGINT', function () { return bot.stop('SIGINT'); });
process.once('SIGTERM', function () { return bot.stop('SIGTERM'); });
console.log('hello');
