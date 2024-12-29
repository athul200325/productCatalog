<?php include('components/header.php'); ?>

<div class="container mx-auto p-6">
    <h2 class="text-2xl font-bold mb-4">Our Products</h2>

    <div class="mb-6">
        <label for="categoryFilter" class="text-lg">Filter by Category:</label>
        <select id="categoryFilter" class="p-2 border rounded mt-2">
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
        </select>
    </div>

    <div id="productGrid" class="grid grid-cols-1 sm:grid-cols-2 h-[200px] lg:grid-cols-3 gap-6">
    </div>
</div>


<script src="scripts/main.js"></script>  

<?php include('components/footer.php'); ?>

