require('dotenv').config()
const Airtable = require('airtable-node');


const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
	.base('appJwVoVK7dysydWM')
	.table('products')

exports.handler = async (event, context, cb) => {
	// console.log(event);
	const { id } = event.queryStringParameters
	if (id) {
		try {
			const product = await airtable.retrieve(id)
			if (product.error) {
				return {
					statusCode: 404,
					body: `No product with id: ${id}`,
				}
			}		
			return {
				statusCode: 200,
				body: JSON.stringify(product, null, 2),
			}
		} catch (error) {
			return {
				statusCode: 500,
				body: 'Internal Server Error',
			}
		}
	}
    try {
        const { records } = await airtable.list()
        const products = records.map(product => {
            const {id, fields: {name, image: [{url}], price}} = product
            // console.log(product)
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
