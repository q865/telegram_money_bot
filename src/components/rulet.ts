import { getRandomInt } from "./utils";

export default async function (ctx:any) {
    ctx.reply('сколько у тебя фишек?')
    const response = async () => await ctx.message.text
    ctx.reply(`${response}`)
}

