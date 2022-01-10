const translate = require('google-translate-api')

 
export default ()=> {
    translate('меня зовут сергей', {to: 'en'}).then((res:any) => {
    console.log(res.text);
    //=> I speak English
    console.log(res.from.language.iso);
    //=> nl
}).catch((err:any) => {
    console.error(err);
});
}

