// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buy-now');

    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            alert(`Product ${productId} added to cart!`);
        });
    });
});
