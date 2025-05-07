// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.documentElement.classList.toggle("dark");
});

// Login Modal Show and Hide
const loginModal = document.getElementById("loginModal");
const closeLoginModal = document.getElementById("closeLoginModal");

closeLoginModal.addEventListener("click", function() {
    loginModal.classList.add("hidden");
});

document.getElementById("loginButton").addEventListener("click", function() {
    loginModal.classList.remove("hidden");
});

// Form Validation & Authentication
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple form validation
    if (!username || !password) {
        alert("Please fill in all fields.");
        return;
    }

    // Implement actual login logic (e.g., check credentials, create session)
    alert("Login successful");
    loginModal.classList.add("hidden");
});

// Cart Functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCart() {
    const cartItemsContainer = document.getElementById("cartItems");
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        const cartItem = document.createElement('div');
        cartItem.classList.add('flex', 'justify-between', 'items-center', 'p-4', 'border', 'border-gray-300', 'rounded-lg');
        cartItem.innerHTML = `
            <span>${item.name} (x${item.quantity})</span>
            <span>$${item.price * item.quantity}</span>
            <button onclick="removeFromCart('${item.id}')" class="text-red-600">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    document.getElementById("cartTotal").textContent = `Total: $${total.toFixed(2)}`;
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

updateCart(); // Initial load of cart
