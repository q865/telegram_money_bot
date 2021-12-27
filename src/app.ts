
import { Markup, Telegraf } from 'telegraf'
import { GoogleSpreadsheet } from 'google-spreadsheet';
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN!);
const doc = new GoogleSpreadsheet("1qHg3PQmBv0S1ZBGHiOmFHSUPkpIH0aK9Q4Vjlx0-0qw")

const db = {
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

}
start()
function getRandomInt(num:any) {
  return Math.floor(Math.random() * num);
}

async function start() {
    // await doc.useServiceAccountAuth({
        // client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
        // private_key: process.env.GOOGLE_PRIVATE_KEY!
    // });
    
    // await doc.loadInfo()
    // const sheet = doc.sheetsByIndex[0]

    bot.start((ctx) => ctx.reply('welcome'))
    
    bot.on('text', async (ctx) => {
    const idName:any = ctx.message.from.username
     const sendlerName:string = ctx.message.from.first_name
    const msg = ctx.message.text
       if(msg === 'двухстволка') ctx.replyWithPhoto(`${db.guns[getRandomInt(db.guns.length)]}`)
       if (msg === 'дрочка') ctx.replyWithHTML(`<b>${db.drochka[getRandomInt(db.drochka.length)]}</b>`)
       const r = /(?<=(^|[^а-я]))((у|[нз]а|(хитро|не)?вз?[ыьъ]|с[ьъ]|(и|ра)[зс]ъ?|(о[тб]|под)[ьъ]?|(.\B)+?[оаеи])?-?([её]б(?!о[рй])|и[пб][ае][тц]).*?|(н[иеа]|([дп]|верт)о|ра[зс]|з?а|с(ме)?|о(т|дно)?|апч)?-?ху([яйиеёю]|ли(?!ган)).*?|(в[зы]|(три|два|четыре)жды|(н|сук)а)?-?бл(я(?!(х|ш[кн]|мб)[ауеыио]).*?|[еэ][дт]ь?)|(ра[сз]|[зн]а|[со]|вы?|п(ере|р[оие]|од)|и[зс]ъ?|[ао]т)?п[иеё]зд.*?|(за)?п[ие]д[аое]?р(ну.*?|[оа]м|(ас)?(и(ли)?[нщктл]ь?)?|(о(ч[еи])?|ас)?к(ой)|юг)[ауеы]?|манд([ауеыи](л(и[сзщ])?[ауеиы])?|ой|[ао]вошь?(е?к[ауе])?|юк(ов|[ауи])?)|муд([яаио].*?|е?н([ьюия]|ей))|мля([тд]ь)?|лять|([нз]а|по)х|м[ао]л[ао]фь([яию]|[еёо]й))(?=($|[^а-я]))/ui.exec(msg)
       if (r) ctx.reply(`@${idName},\n${sendlerName}, кажется вы ${db.insults[getRandomInt(db.insults.length)]}`)
       const r2 = /рулетка.*\d+/.exec(msg)
       if (r2) {
        let counter:any = r2[0].split(' ')[1]
        const list = [] ;
        while(counter){
            const answer = list.push(getRandomInt(100))
            counter -= 1 
        }
            ctx.reply(`${list}`)
       }

        // const regExp = /(?<date>\w+)\s+(?<type>\w+)\s+(?<category>\w+)\s+(?<amount>\d+)\s+(?<description>\w+)/
        // .exec(ctx.message.text)

        // if (regExp == null) ctx.reply("Неправильный текст")
        // else
        //     await sheet.addRow({
        //         date: regExp?.groups?.date!,
        //         type: regExp?.groups?.type!,
        //         category: regExp?.groups?.category!,
        //         amount: regExp?.groups?.amount!,
        //         description: regExp?.groups?.description!
        //     })
    })

    bot.launch()

    // Enable graceful stop
    process.once('SIGINT', () => bot.stop('SIGINT'))
    process.once('SIGTERM', () => bot.stop('SIGTERM'))
}