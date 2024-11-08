function updateCounts() {
    // Get the cart and wishlist from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    // Get the elements for cart and wishlist counts in the navbar
    const cartCount = document.getElementById('cart-count');
    const wishlistCount = document.getElementById('wishlist-count');

    // Update the cart and wishlist count in the navbar
    if (cartCount) {
        cartCount.textContent = cart.length; // Update cart count
    }

    if (wishlistCount) {
        wishlistCount.textContent = wishlist.length; // Update wishlist count
    }
}

// Call this function when the page loads to initialize the counts
document.addEventListener('DOMContentLoaded', function() {
    updateCounts();
});
