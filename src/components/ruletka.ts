import { getRandomInt } from "./utils"

export default async (ctx:any)=>{
        let counter:number  = await Number(ctx.message.text.replace('/ruletka',''))
        if (!counter) ctx.reply('Некоректные входные данные попробуте вести в форомате /ruletka 21')
        if(counter){
            ctx.reply('Данные приняты!')
            let list:string = ''
            while(counter){
                const randomNumber = String(getRandomInt(100))
                if (list.includes(randomNumber) || randomNumber === '0') continue
                counter -= 1;
                list += ' ' + randomNumber
            }
            ctx.reply(list)
        } 
    }