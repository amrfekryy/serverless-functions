const result = document.querySelector('.result')

const fetchData = async () => {
    try {
        // const {data} = await axios.get('/.netlify/functions/1-hello')
        const {data} = await axios.get('/api/1-hello') // redirects is set in netlify.toml
        result.textContent = data
        console.log(data);
    } catch (error) { // error status code will be catched here
        console.log(error.response.data);
    }
}

fetchData()