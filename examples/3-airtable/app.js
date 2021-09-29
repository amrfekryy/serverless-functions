const result = document.querySelector('.result')

const fetchData = async () => {
    try {
        // const {data} = await axios.get('/api/3-airtable')
        const {data} = await axios.get('/api/3-z-complete')
        const products = data.map(product => {
            console.log(product);
            const {id, name, url, price} = product
            return `<a class="product" href="product.html?id=${id}">
                <img src=${url} alt=${name}/>
                <div class="info">
                <h5>${name}</h5>
                <h5 class="price">${price}</h5>
                </div>
          </a>`
        }).join('')
        result.innerHTML = products
    } catch (error) {
        console.log(error.response.data);
        result.innerHTML = 'There was an error!'
    }
}

fetchData()