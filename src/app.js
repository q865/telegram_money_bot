"use strict";
exports.__esModule = true;
var telegraf_1 = require("telegraf");
var google_spreadsheet_1 = require("google-spreadsheet");
var tgToken = '1339515280:AAHFvrYWdm50gvvS5EgnXfyNjlVAt6pghhA';
var doc = new google_spreadsheet_1.GoogleSpreadsheet("1qHg3PQmBv0S1ZBGHiOmFHSUPkpIH0aK9Q4Vjlx0-0qw");
var bot = new telegraf_1.Telegraf(tgToken);
bot.start(function (ctx) { return ctx.reply('Welcome'); });
bot.help(function (ctx) { return ctx.reply('Send me a sticker'); });
bot.on('sticker', function (ctx) { return ctx.reply('👍'); });
bot.hears('hi', function (ctx) { return ctx.reply('pwel na xyi'); });
bot.launch();
// Enable graceful stop
process.once('SIGINT', function () { return bot.stop('SIGINT'); });
process.once('SIGTERM', function () { return bot.stop('SIGTERM'); });
