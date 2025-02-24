
// script.js

// Hàm để xử lý sự kiện khi nhấn nút "ADD TO CART"
function addToCart(productName, productPrice) {
    alert(`${productName} has been added to your cart for $${productPrice}.`);
}

// Lấy tất cả các nút "ADD TO CART"
const addToCartButtons = document.querySelectorAll('button');

// Thêm sự kiện click cho từng nút "ADD TO CART"
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productCard = button.parentElement;
        const productName = productCard.querySelector('h2').innerText;
        const productPrice = productCard.querySelector('p').innerText.replace('$', '');
        addToCart(productName, productPrice);
    });
});

// Hàm để xử lý sự kiện tìm kiếm
function searchProducts() {
    const searchTerm = document.getElementById('search-input').value;
    alert(`Searching for: ${searchTerm}`);
}

// Lấy nút tìm kiếm và thêm sự kiện click
const searchButton = document.getElementById('search-button');
if (searchButton) {
    searchButton.addEventListener('click', searchProducts);
}

// Hàm để xử lý sự kiện giỏ hàng
function viewCart() {
    alert('Viewing cart...');
}

// Lấy nút giỏ hàng và thêm sự kiện click
const cartButton = document.getElementById('cart-button');
if (cartButton) {
    cartButton.addEventListener('click', viewCart);
}