fetch('https://dummyjson.com/products')
.then(response => response.json()) 
.then(data => {
    const products = data.products; 
    const productGrid = document.getElementById("productGrid");

    
    productGrid.innerHTML = "";

    
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>Price: Rs ${product.price}</p>
            <p>${product.description.substring(0, 50)}...</p>
            <button>Add to card</button>
        `;
        productGrid.appendChild(productCard);
        console.log(product.description)
    });
})
.catch(error => {
    console.log("Error fetching products:", error);
    document.getElementById("productGrid").innerHTML = "<p class = 'fail'>Failed to load products.</p>";
});
