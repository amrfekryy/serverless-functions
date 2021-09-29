const result = document.querySelector('.result')

const fetchProduct = async () => {
    try {
        const queryString = window.location.search // ?id=...
        // const {
        //     data: {fields: {name, image: [{url}], description, price}}
        // } = await axios.get(`/api/3-product${queryString}`)
        const {
            data: {fields: {name, image: [{url}], description, price}}
        } = await axios.get(`/api/3-z-complete${queryString}`)
        const product = `
            <h1 class="title">Single Product</h1>
            <article class="product">
            <img class="product-img"
            src=${url}
            alt=${name}
            />
            <div class="product-info">
                <h5 class="title">${name}</h5>
                <h5 class="price">${price}</h5>
                <p class="desc">${description}</p>
            </div>
            </article>
        `
        result.innerHTML = product
    } catch (error) {
        console.log(error.response.data);
        result.innerHTML = `<h2>${error.response.data}</h2>`
    }
}

fetchProduct()