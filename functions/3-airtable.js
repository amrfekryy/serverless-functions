const Airtable = require('airtable-node');


const baseId = 'appJwVoVK7dysydWM'
const apiKey = 'keyxgS0vgWGmKPXNj'
 
const airtable = new Airtable({ apiKey })
  .base(baseId)
  .table('products')
 

// airtable.list({
//   filterByFormula: `NOT({Feature} = '')`, // optional
//   maxRecords: 200, // optional
//   pageSize: 100, // optional 
//   sort: [{ field: 'name', direction: 'asc' }], // optional
//   view: 'Airtable View', // optional
//   cellFormat: 'json', // optional
//   timeZone, // optional
//   userLocale // optional
// },
// offset //optional
// ).then(resp => {
//   console.log(resp)
// })

exports.handler = async (event, context, cb) => {
    try {
        const { records } = await airtable.list()
        const products = records.map(record => {
            const {id, fields: {name, image: [{url}], price}} = record
            console.log(record)
            return {id, name, url, price}
        })
        return {
            statusCode: 200,
            body: JSON.stringify(products),
            headers: { 'Access-Control-Allow-Origin': '*' }
        }    
    } catch (error) {
        return {
            statusCode: 500,
            body: 'Enternal Server Error',
            headers: { 'Access-Control-Allow-Origin': '*' }
        }        
    }    
}

