import { GoogleSpreadsheet } from 'google-spreadsheet';
require('dotenv').config()


const doc = new GoogleSpreadsheet('1qHg3PQmBv0S1ZBGHiOmFHSUPkpIH0aK9Q4Vjlx0-0qw')
export default async (date?:any,name?:any,nickname?:any,coments?:any) => {
    await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
        private_key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
    }) 
    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[0]
    await sheet.setHeaderRow(['date','name','nickname','coments'])
    await sheet.addRow({date,name,nickname,coments })
    console.log(sheet.headerValues)
    const rows = await sheet.getRows()
}




