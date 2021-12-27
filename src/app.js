"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var telegraf_1 = require("telegraf");
var google_spreadsheet_1 = require("google-spreadsheet");
require('dotenv').config();
var bot = new telegraf_1.Telegraf(process.env.BOT_TOKEN);
var creds = require('./creds.json');
var doc = new google_spreadsheet_1.GoogleSpreadsheet("1qHg3PQmBv0S1ZBGHiOmFHSUPkpIH0aK9Q4Vjlx0-0qw");
var db = {
    guns: [
        'https://static.ohotniki.ru/upload/ohotniki/475/b0/90/7e/DETAIL_PICTURE_134892_42972336.jpg',
        'https://static.ohotniki.ru/upload/ohotniki/475/ba/dd/99/DETAIL_PICTURE_127110_96383105.jpg',
        'http://www.ebftour.ru/images/import/news/e27438d50ba39a2cd37ff6566e618650.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs5AlP5TiSzI86kBgNwR8peAJCopmHOiBRmQ&usqp=CAU',
        'https://kartalinka.ru/wp-content/uploads/2018/07/PAP_STORYruzhe-ohota-1200x642.jpg'
    ],
    drochka: [
        'это каллории',
        'это сила',
        'дело хорошее',
        'мощная штука',
        'это радость',
        'это то что делает нас лучше'
    ],
    insults: [
        'хуесос',
        'пидор',
        'глиномес',
        'шляпа',
        'гавно'
    ]
};
start();
function getRandomInt(num) {
    return Math.floor(Math.random() * num);
}
function start() {
    return __awaiter(this, void 0, void 0, function () {
        var sheet;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, doc.useServiceAccountAuth(creds)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, doc.loadInfo()];
                case 2:
                    _a.sent();
                    sheet = doc.sheetsByIndex[0];
                    bot.start(function (ctx) { return ctx.reply('welcome'); });
                    bot.on('text', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                        var rows, idName, sendlerName, msg, r, r2, counter, list, answer, regExp;
                        var _a, _b, _c, _d, _e;
                        return __generator(this, function (_f) {
                            switch (_f.label) {
                                case 0: return [4 /*yield*/, sheet.getRows()];
                                case 1:
                                    rows = _f.sent();
                                    console.log(rows[0]);
                                    idName = ctx.message.from.username;
                                    sendlerName = ctx.message.from.first_name;
                                    msg = ctx.message.text;
                                    if (msg === 'двухстволка')
                                        ctx.reply("".concat(db.guns[getRandomInt(db.guns.length)]));
                                    if (msg === 'дрочка')
                                        ctx.reply("".concat(db.drochka[getRandomInt(db.drochka.length)]));
                                    r = /(?<=(^|[^а-я]))((у|[нз]а|(хитро|не)?вз?[ыьъ]|с[ьъ]|(и|ра)[зс]ъ?|(о[тб]|под)[ьъ]?|(.\B)+?[оаеи])?-?([её]б(?!о[рй])|и[пб][ае][тц]).*?|(н[иеа]|([дп]|верт)о|ра[зс]|з?а|с(ме)?|о(т|дно)?|апч)?-?ху([яйиеёю]|ли(?!ган)).*?|(в[зы]|(три|два|четыре)жды|(н|сук)а)?-?бл(я(?!(х|ш[кн]|мб)[ауеыио]).*?|[еэ][дт]ь?)|(ра[сз]|[зн]а|[со]|вы?|п(ере|р[оие]|од)|и[зс]ъ?|[ао]т)?п[иеё]зд.*?|(за)?п[ие]д[аое]?р(ну.*?|[оа]м|(ас)?(и(ли)?[нщктл]ь?)?|(о(ч[еи])?|ас)?к(ой)|юг)[ауеы]?|манд([ауеыи](л(и[сзщ])?[ауеиы])?|ой|[ао]вошь?(е?к[ауе])?|юк(ов|[ауи])?)|муд([яаио].*?|е?н([ьюия]|ей))|мля([тд]ь)?|лять|([нз]а|по)х|м[ао]л[ао]фь([яию]|[еёо]й))(?=($|[^а-я]))/ui.exec(msg);
                                    if (r)
                                        ctx.reply("@".concat(idName, ",\n").concat(sendlerName, ", \u043A\u0430\u0436\u0435\u0442\u0441\u044F \u0432\u044B ").concat(db.insults[getRandomInt(db.insults.length)]));
                                    r2 = /рулетка.*\d+/.exec(msg);
                                    if (r2) {
                                        counter = r2[0].split(' ')[1];
                                        list = [];
                                        while (counter) {
                                            answer = list.push(getRandomInt(100));
                                            counter -= 1;
                                        }
                                        ctx.reply("".concat(list));
                                    }
                                    regExp = /(?<date>\w+)\s+(?<type>\w+)\s+(?<category>\w+)\s+(?<amount>\d+)\s+(?<description>\w+)/
                                        .exec(ctx.message.text);
                                    if (!(regExp == null)) return [3 /*break*/, 2];
                                    ctx.reply("Неправильный текст");
                                    return [3 /*break*/, 4];
                                case 2: return [4 /*yield*/, sheet.addRow({
                                        date: (_a = regExp === null || regExp === void 0 ? void 0 : regExp.groups) === null || _a === void 0 ? void 0 : _a.date,
                                        type: (_b = regExp === null || regExp === void 0 ? void 0 : regExp.groups) === null || _b === void 0 ? void 0 : _b.type,
                                        category: (_c = regExp === null || regExp === void 0 ? void 0 : regExp.groups) === null || _c === void 0 ? void 0 : _c.category,
                                        amount: (_d = regExp === null || regExp === void 0 ? void 0 : regExp.groups) === null || _d === void 0 ? void 0 : _d.amount,
                                        description: (_e = regExp === null || regExp === void 0 ? void 0 : regExp.groups) === null || _e === void 0 ? void 0 : _e.description
                                    })];
                                case 3:
                                    _f.sent();
                                    _f.label = 4;
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); });
                    bot.launch();
                    // Enable graceful stop
                    process.once('SIGINT', function () { return bot.stop('SIGINT'); });
                    process.once('SIGTERM', function () { return bot.stop('SIGTERM'); });
                    return [2 /*return*/];
            }
        });
    });
}
