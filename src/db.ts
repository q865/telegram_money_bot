const db = {
    guns: [
    'https://static.ohotniki.ru/upload/ohotniki/475/b0/90/7e/DETAIL_PICTURE_134892_42972336.jpg',
    'https://static.ohotniki.ru/upload/ohotniki/475/ba/dd/99/DETAIL_PICTURE_127110_96383105.jpg',
    'http://www.ebftour.ru/images/import/news/e27438d50ba39a2cd37ff6566e618650.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs5AlP5TiSzI86kBgNwR8peAJCopmHOiBRmQ&usqp=CAU',
    'https://kartalinka.ru/wp-content/uploads/2018/07/PAP_STORYruzhe-ohota-1200x642.jpg'

    ],
    drochka :[
        'это каллории',
        'это сила',
        'дело хорошее',
        'мощная штука',
        'это радость',
        'это то что делает нас лучше'] 
    ,
    insults: [
        'хуесос',
        'пидор',
        'глиномес',
        'шляпа',
        'гавно'
    ],
    regExp: {
       insultsRegExp: /(?<=(^|[^а-я]))((у|[нз]а|(хитро|не)?вз?[ыьъ]|с[ьъ]|(и|ра)[зс]ъ?|(о[тб]|под)[ьъ]?|(.\B)+?[оаеи])?-?([её]б(?!о[рй])|и[пб][ае][тц]).*?|(н[иеа]|([дп]|верт)о|ра[зс]|з?а|с(ме)?|о(т|дно)?|апч)?-?ху([яйиеёю]|ли(?!ган)).*?|(в[зы]|(три|два|четыре)жды|(н|сук)а)?-?бл(я(?!(х|ш[кн]|мб)[ауеыио]).*?|[еэ][дт]ь?)|(ра[сз]|[зн]а|[со]|вы?|п(ере|р[оие]|од)|и[зс]ъ?|[ао]т)?п[иеё]зд.*?|(за)?п[ие]д[аое]?р(ну.*?|[оа]м|(ас)?(и(ли)?[нщктл]ь?)?|(о(ч[еи])?|ас)?к(ой)|юг)[ауеы]?|манд([ауеыи](л(и[сзщ])?[ауеиы])?|ой|[ао]вошь?(е?к[ауе])?|юк(ов|[ауи])?)|муд([яаио].*?|е?н([ьюия]|ей))|мля([тд]ь)?|лять|([нз]а|по)х|м[ао]л[ао]фь([яию]|[еёо]й))(?=($|[^а-я]))/ui,
       moneyCalcRegExp: /(?<date>\w+)\s+(?<type>\w+)\s+(?<category>\w+)\s+(?<amount>\d+)\s+(?<description>\w+)/
    }

}
export default db 