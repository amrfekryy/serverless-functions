require('dotenv').config()
const Airtable = require('airtable-node');


const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('appJwVoVK7dysydWM')
  .table('products')
 
exports.handler = async (event, context, cb) => {
    try {
        const { records } = await airtable.list()
        const products = records.map(record => {
            const {id, fields: {name, image: [{url}], price}} = record
            // console.log(record)
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

