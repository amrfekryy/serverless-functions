const items = require('../assets/data')

exports.handler = async (event, context, cb) => {
    return {
        statusCode: 200,
        body: JSON.stringify(items),

        headers: {
            // to fix CORS error when trying to access this resource from external clients
            'Access-Control-Allow-Origin': '*'
        }
    }
}

