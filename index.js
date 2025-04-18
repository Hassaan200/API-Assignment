fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {
        const products = data.products; 
        const productGrid = document.getElementById("productGrid");
        const searchInput = document.getElementById("searchInput");
        productGrid.innerHTML = "";

        // Function to display products
        function displayProducts(productsToDisplay) {
            productGrid.innerHTML = "";
            productsToDisplay.forEach(product => {
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
            });
        }

        // show product into browser 
        displayProducts(products);

        // Real-time search happen
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
                const filteredProducts = products.filter(product => 
                    
                      product.title.toLowerCase().includes(searchTerm) || 
                        product.description.toLowerCase().includes(searchTerm)
                    
                
                
                )
                
            displayProducts(filteredProducts);
        });

    })

.catch(error => {
    console.log("Error fetching products:", error);
    document.getElementById("productGrid").innerHTML = "<p class = 'fail'>Failed to load products.</p>";
});
