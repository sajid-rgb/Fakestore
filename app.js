let isLoading = true
// main api hit
const hitApi = () => {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            isLoading = false
            showData(data)
        })
}

hitApi()


//api hit by id
const showDetails = (id) => {
    localStorage.setItem('id', id)
    sessionStorage.setItem('id', id)
    const myId = localStorage.getItem('id')
    fetch(`https://fakestoreapi.com/products/${myId}`)
        .then(response => response.json())
        .then(data => showProduct(data))


}

//show individual data 

const showProduct = (product) => {
    if (product) {
        document.getElementById("main").style.display = "none"
        const main = document.createElement('div')
        main.classList.add("col-md-4")
        main.innerHTML = `<div>
    <div class="card ">
    <h6>${product?.title}</h6>
    <div class="d-flex align-items-center justify-content-center">
    <img src='${product?.image}' class="img-fluid image" alt='Nothing Found' />
    </div>
   <div class="d-flex align-items-center justify-content-center">

    
   </div>
    </div>

    </div>
    `
        document.getElementById("container").appendChild(main)
    }

}

//show main data
const showData = (products) => {
    console.log(products, isLoading)
    if (products.length === -1) {
        document.getElementById("loading").innerText = "Loading........"

    } else {
        products.forEach(product => {
            const div = document.createElement('div')
            div.classList.add("col-md-4")
            div.innerHTML = `<div>
            <div class="card ">
            <h6>${product?.title}</h6>
            <div class="d-flex align-items-center justify-content-center">
            <img src='${product.image}' class="img-fluid image" alt='Nothing Found' />
            </div>
           <div class="d-flex align-items-center justify-content-center">
            <button class="btn btn-primary" onclick="showDetails(${product.id})">Show More</button>         
           </div>
            </div>
    
            </div>
            `
            document.getElementById("main").appendChild(div)
        })

    }


}