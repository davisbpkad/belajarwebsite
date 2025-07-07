document.addEventListener("DOMContentLoaded", function() {
    // State
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let editingId = null;

    // DOM Elements
    const stockInput = document.querySelector('#productStock');
    const previewStock = document.querySelector('#previewProductStock');
    const nameInput = document.querySelector('#productName');
    const priceInput = document.querySelector('#productPrice');
    const statusInput = document.querySelector('#productStatus');
    const previewName = document.querySelector('#previewProductName');
    const previewPrice = document.querySelector('#previewProductPrice');
    const previewStatus = document.querySelector('#previewProductStatus');
    const form = document.querySelector('#productForm');
    const formTitle = document.querySelector('#formTitle');
    const list = document.querySelector('#productList');
    const loadingIndicator = document.querySelector('#loadingIndicator');
    const cancelBtn = document.querySelector('#cancelBtn');

    // Helper Functions
    const rupiah = n => new Intl.NumberFormat('id-ID', { 
        style: 'currency', 
        currency: 'IDR', 
        minimumFractionDigits: 0 
    }).format(n);
    
    const genId = () => Date.now() + Math.random();

    // Fetch data from JSONPlaceholder API
    async function fetchApiData() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching API data:', error);
            throw error;
        }
    }

    // Update Preview
    function updatePreview() {
        previewName.textContent = nameInput.value || "Product Name";
        previewPrice.textContent = priceInput.value ? rupiah(priceInput.value) : "Rp 0";
        const status = statusInput.value || "Status";
        previewStatus.textContent = status;
        previewStatus.className = `badge ${
            status === 'In Stock' ? 'bg-success' :
            status === 'Out of Stock' ? 'bg-danger' : 'bg-secondary'
        }`;
        if (previewStock) {
            previewStock.textContent = `Stock: ${stockInput.value || "0"}`;
        }
    }

    // Event Listeners for Real-time Preview
    nameInput.addEventListener('input', updatePreview);
    priceInput.addEventListener('input', updatePreview);
    statusInput.addEventListener('change', updatePreview);
    if (stockInput) stockInput.addEventListener('input', updatePreview);

    // Save Product
    function saveProduct(product) {
        if (editingId) {
            const idx = products.findIndex(p => p.id === editingId);
            if (idx !== -1) products[idx] = { ...product, id: editingId };
        } else {
            product.id = genId();
            products.push(product);
        }
        localStorage.setItem('products', JSON.stringify(products));
    }

    // Show/hide loading indicator
    function showLoading(show) {
        if (loadingIndicator) {
            if (show) {
                loadingIndicator.classList.remove('d-none');
                list.classList.add('d-none');
            } else {
                loadingIndicator.classList.add('d-none');
                list.classList.remove('d-none');
            }
        }
    }

    // Display Products
    function showProducts(arr = products) {
        if (!arr.length) {
            list.innerHTML = `<div class="text-center text-muted"><i class="fas fa-box-open fa-3x mb-3"></i><p>No products found. Add your first product!</p></div>`;
            return;
        }
        list.innerHTML = arr.map(p => `
            <div class="card mb-3" data-product-id="${p.id}">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-md-1">
                            <img src="https://via.placeholder.com/60" class="img-thumbnail" style="width:60px;height:60px;object-fit:cover;">
                        </div>
                        <div class="col-md-7">
                            <h6 class="card-title mb-1">${p.name}</h6>
                            <p class="text-primary mb-1">${rupiah(p.price)}</p>
                            <span class="badge ${p.status === 'In Stock' ? 'bg-success' : 'bg-danger'}">${p.status}</span>
                            <div class="mt-1">
                                <small class="text-muted">Stock: <span class="fw-bold">${p.stock ?? 0}</span></small>
                            </div>
                            ${p.apiData ? `
                                <div class="mt-2 p-2 bg-light rounded">
                                    <small class="text-muted"><i class="fas fa-info-circle"></i> Additional Info from API:</small>
                                    <div class="small mt-1">
                                        <strong>Title:</strong> ${p.apiData.title.length > 60 ? p.apiData.title.substring(0, 60) + '...' : p.apiData.title}
                                    </div>
                                    <div class="small">
                                        <strong>Description:</strong> ${p.apiData.body.length > 100 ? p.apiData.body.substring(0, 100) + '...' : p.apiData.body}
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                        <div class="col-md-4 text-end">
                            <button class="btn btn-outline-primary btn-sm me-2" onclick="editProduct(${p.id})"><i class="fas fa-edit"></i> Edit</button>
                            <button class="btn btn-outline-danger btn-sm" onclick="deleteProduct(${p.id})"><i class="fas fa-trash"></i> Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Edit Product
    window.editProduct = id => {
        const p = products.find(x => x.id === id);
        if (p) {
            editingId = id;
            nameInput.value = p.name;
            priceInput.value = p.price;
            statusInput.value = p.status;
            stockInput.value = p.stock ?? 0;
            formTitle.textContent = 'Edit Product';
            updatePreview();
            window.scrollTo(0, 0);
        }
    };

    // Delete Product
    window.deleteProduct = id => {
        if (confirm('Are you sure you want to delete this product?')) {
            products = products.filter(p => p.id !== id);
            localStorage.setItem('products', JSON.stringify(products));
            showProducts();
        }
    };

    // Reset Form
    function resetForm() {
        form.reset();
        editingId = null;
        formTitle.textContent = 'Add New Product';
        updatePreview();
        if (stockInput) stockInput.value = '';
    }

    // Form Submission
    form.addEventListener('submit', async e => {
        e.preventDefault();
        const product = {
            name: nameInput.value.trim(),
            price: parseInt(priceInput.value),
            status: statusInput.value,
            stock: parseInt(stockInput.value) || 0
        };
        
        if (product.name && product.price && product.status) {
            try {
                // Show loading state
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saving...';
                submitBtn.disabled = true;
                
                // If adding new product (not editing), fetch API data
                if (!editingId) {
                    try {
                        showLoading(true);
                        const apiData = await fetchApiData();
                        // Get random post from API data
                        const randomPost = apiData[Math.floor(Math.random() * apiData.length)];
                        product.apiData = randomPost;
                        
                        showLoading(false);
                        
                        // Show success message with API info
                        setTimeout(() => {
                            alert(`Product added successfully!\n\nAdditional Info from API:\nTitle: ${randomPost.title}\nDescription: ${randomPost.body.substring(0, 100)}...`);
                        }, 500);
                    } catch (apiError) {
                        console.error('API Error:', apiError);
                        showLoading(false);
                        alert('Product added successfully, but failed to fetch additional information from API.');
                    }
                } else {
                    alert('Product updated successfully!');
                }
                
                saveProduct(product);
                resetForm();
                showProducts();
                
                // Reset button state
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
            } catch (error) {
                console.error('Error saving product:', error);
                showLoading(false);
                alert('An error occurred while saving the product. Please try again.');
                
                // Reset button state
                const submitBtn = form.querySelector('button[type="submit"]');
                submitBtn.innerHTML = '<i class="fas fa-save"></i> Save Product';
                submitBtn.disabled = false;
            }
        } else {
            alert('Please fill in all required fields.');
        }
    });

    // Cancel Button
    cancelBtn.addEventListener('click', resetForm);

    // Initialize
    showProducts();
    updatePreview();
});
