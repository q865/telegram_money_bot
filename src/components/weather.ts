import  axios  from 'axios'
require('dotenv').config()
    const url = 'https://api.weather.yandex.ru/v2/forecast?'

    export default async (ctx:any) => {
      const response = await axios(url,{
      headers: {
            'X-Yandex-API-Key':`${process.env.YANDEX_WEATHER_KEY!}`
          }
        })
       if( response.status == 200 ) {
         const { fact } = response.data
         const { icon, temp, feels_like, condition} = fact
        //  const iconUrl = `https://yastatic.net/weather/i/icons/funky/dark/${icon}.svg.`
        //  ctx.replyWithPhoto(`${iconUrl}`)
         ctx.reply(`сейчас на улице: ${temp}\nощущается как: ${feels_like} `)
       }
        if (response.status !== 200) {
          console.log('gracia my litle friend')
        }
    }