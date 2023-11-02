// script.js
const products = document.querySelectorAll('.product');
const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');
const checkoutButton = document.getElementById('checkout');
const searchInput = document.getElementById('search');

let cart = [];

products.forEach(product => {
    const addToCartButton = product.querySelector('.add-to-cart');
    addToCartButton.addEventListener('click', () => {
        const productName = product.querySelector('h2').textContent;
        const productPrice = parseFloat(product.querySelector('p').textContent.replace('Giá: $', ''));
        cart.push({ name: productName, price: productPrice });
        updateCart();
    });
});

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    totalPrice.textContent = total.toFixed(2);
}

checkoutButton.addEventListener('click', () => {
    alert('Xin cám ơn bạn đã thanh toán! Tổng số tiền là: $' + parseFloat(totalPrice.textContent).toFixed(2));
    cart = [];
    updateCart();
});

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    products.forEach(product => {
        const productName = product.querySelector('h2').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});
