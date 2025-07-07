//menampilkan fetch data dari API dengan bootsrap, 
// dengan category, description, id, image, price, rating, title, tombol buy
//         // Render ulang untuk update tampilan
        // fetch('https://fakestoreapi.com/products')
        //     .then(response => response.json())
        //     .then(json => {
        //         const productDiv = document.getElementById('products');
        //         //productDiv.textContent = JSON.stringify(json, null, 2);
        //         console.log('Fetched data:', json);
        //         // Optionally, you can render the products in a more user-friendly way
        //         json.forEach(product => {
        //             productDiv.innerHTML += `
        //                 <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        //                     <div class="card h-100">
        //                         <img src="${product.image}" class="card-img-top mx-auto d-block" alt="${product.title}" style="width: 80px; height: 80px; object-fit: contain; margin-top: 16px;">
        //                         <div class="card-body d-flex flex-column">
        //                             <h5 class="card-title" style="font-size: 1rem;">${product.title}</h5>
        //                             <p class="card-text" style="font-size: 0.9rem; flex-grow: 1;">${product.description}</p>
        //                             <p class="card-text mb-1"><small class="text-muted">Price: $${product.price}</small></p>
        //                             <p class="card-text mb-2"><small class="text-muted">Rating: ${product.rating.rate} (${product.rating.count} reviews)</small></p>
        //                             <button class="btn btn-primary mt-auto">Buy Now</button>
        //                         </div>
        //                     </div>
        //                 </div>
        //             `;
        //         });

        //     })
        //     .catch(error => console.error('Error fetching data:', error));


        // membuat function untuk fetch data dari API dengan await dan async           
        async function fetchProducts() {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const products = await response.json();
                const productDiv = document.getElementById('products');
                products.forEach(product => {
                    productDiv.innerHTML += `
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                            <div class="card h-100">
                                <img src="${product.image}" class="card-img-top mx-auto d-block" alt="${product.title}" style="width: 80px; height: 80px; object-fit: contain; margin-top: 16px;">
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title" style="font-size: 1rem;">${product.title}</h5>
                                    <p class="card-text" style="font-size: 0.9rem; flex-grow: 1;">${product.description}</p>
                                    <p class="card-text mb-1"><small class="text-muted">Price: $${product.price}</small></p>
                                    <p class="card-text mb-2"><small class="text-muted">Rating: ${product.rating.rate} (${product.rating.count} reviews)</small></p>
                                    <button class="btn btn-primary mt-auto">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }
            catch(error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchProducts();