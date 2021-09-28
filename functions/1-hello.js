// access on: domain/.netlify/functions/1-hello

exports.handler = async (
        event, // request data 
        context, // like user data
        cb // cb(err, data) that can be used instead of the 'async' to return a promise
    ) => {

    return {
        statusCode: 200,
        body: 'Hello World!' // always a string
    }
    // minimal return must have statusCode and string body
}

