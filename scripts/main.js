document.addEventListener("DOMContentLoaded", function() {
    const productGrid = document.getElementById("productGrid");
    const categoryFilter = document.getElementById("categoryFilter");

    fetch('data/products.json')
        .then(response => response.json())
        .then(products => {
            displayProducts(products);

            categoryFilter.addEventListener("change", function() {
                const category = this.value;
                const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
                displayProducts(filteredProducts);
            });
        });

    function displayProducts(products) {
        productGrid.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('bg-white', 'p-4', 'cursor-pointer', 'rounded-lg', 'h-full', 'shadow-lg');
            productCard.innerHTML = `
                <!-- Make image clickable with cursor-pointer -->
                <img src="assets/images/${product.image}" alt="${product.name}" class="w-full cursor-pointer h-96 object-cover rounded-lg mb-4">
                <h3 class="font-semibold text-xl mb-2 cursor-pointer">${product.name}</h3>
                <p class="text-gray-600 mb-2 cursor-pointer">${product.description}</p>
                <p class="font-bold text-lg mb-2 cursor-pointer">${product.price}</p>
                <span class="text-sm text-gray-500 cursor-pointer">${product.category}</span>
            `;
            productGrid.appendChild(productCard);
        });
    }
});
