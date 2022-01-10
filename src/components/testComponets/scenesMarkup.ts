// // import { Markup, Telegraf, Composer, Scenes } from 'telegraf'
// // const bot = new Telegraf(process.env.BOT_TOKEN!);

// const menuScene = new Scenes.WizardScene('sceneWizard')

// export default () => {
//  bot.command('/opros', async (ctx)=> {
//         ctx.reply('смешно тебе?', Markup.inlineKeyboard([
//             Markup.button.callback('да','answer1Yes'),
//             Markup.button.callback('нет, но хочу им стать', 'answer1No')
//         ]))
//     })
//     bot.action('answer1Yes', async (ctx) => {
//         await ctx.answerCbQuery() // убрать часы
//         await ctx.reply('посмейся...')
//     })
//     bot.action('answer1No', async (ctx)=> {
//         await ctx.reply('чётко')
//     })   
 //    bot.launch()
// }