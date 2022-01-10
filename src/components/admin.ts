import { getRandomInt } from './utils'
import db from '../db'
import googleSheet from './googleSheet'

export default async (ctx:any) => {
     const date = new Date()
    const idName:any = ctx.message.from.username
     const sendlerName:string = ctx.message.from.first_name
    const msg = ctx.message.text
       if(msg === 'двухстволка') ctx.replyWithPhoto(`${db.guns[getRandomInt(db.guns.length)]}`)
       if (msg === 'дрочка') ctx.replyWithHTML(`<b>${db.drochka[getRandomInt(db.drochka.length)]}</b>`)
       if (db.regExp.insultsRegExp.exec(msg)) {
            ctx.reply(`@${idName},\n${sendlerName}, кажется вы ${db.insults[getRandomInt(db.insults.length)]}`)
       }    
       //test
      await googleSheet(date,sendlerName,idName,msg) 
}