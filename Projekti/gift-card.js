// Function to register the user and store their data in local storage
function registerUser (firstName, lastName, email, loyaltyCardNumber) {
    const newUser  = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        loyaltyCardNumber: loyaltyCardNumber,
        discountEligible: true,
        purchases: 0 // Initialize purchase count
    };

    localStorage.setItem('user', JSON.stringify(newUser ));
    Swal.fire("Regjistrimi u krye me sukses!");
}

// Function to handle order placement
function placeOrder(orderEmail, orderPhone, transportMethod) {
    const existingUser  = JSON.parse(localStorage.getItem('user'));
    
    if (existingUser  && existingUser .email === orderEmail) {
        // User is registered
        if (existingUser .purchases < 2) {
            // Apply discount
            const discount = 0.20; // 20% discount
            let totalPrice = calculateTotalPrice(transportMethod);
            const discountedPrice = totalPrice * (1 - discount);
            existingUser .purchases += 1; // Increment purchase count
            localStorage.setItem('user', JSON.stringify(existingUser )); // Update user data in local storage
            Swal.fire({
                title: "Porosia u krye me sukses!",
                text: `Email: ${orderEmail}\nTelefon: ${orderPhone}\nMetoda e Transportit: ${transportMethod}\nÇmimi Total me Zbritje: €${discountedPrice.toFixed(2)}`,
                icon: "success"
            });
        } else {
            // No discount for users with more than 2 purchases
            let totalPrice = calculateTotalPrice(transportMethod);
            Swal.fire({
                title: "Porosia u krye me sukses!",
                text: `Email: ${orderEmail}\nTelefon: ${orderPhone}\nMetoda e Transportit: ${transportMethod}\nÇmimi Total: €${totalPrice.toFixed(2)}`,
                icon: "success"
            });
        }
    } else {
        // User is not registered, proceed with normal pricing
        let totalPrice = calculateTotalPrice(transportMethod);
        Swal.fire({
            title: "Porosia u krye me sukses!",
            text: `Email: ${orderEmail}\nTelefon: ${orderPhone}\nMetoda e Transportit: ${transportMethod}\nÇmimi Total: €${totalPrice.toFixed(2)}`,
            icon: "success"
        });
    }
}

// Function to calculate total price based on transport method
function calculateTotalPrice(transportMethod) {
    let totalPrice = 0; // Assume items are calculated and stored elsewhere
    if (transportMethod === 'standard') {
        totalPrice += 5.00; // Add standard transport cost
    } else if (transportMethod === 'express') {
        totalPrice += 15.00; // Add express transport cost
    }
    return totalPrice; // Return the total price
}
document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const orderEmail = document.getElementById('order-email').value.trim();
    const orderPhone = document.getElementById('order-phone').value.trim();
    const transportMethod = document.getElementById('transport').value;

    // Place the order
    placeOrder(orderEmail, orderPhone, transportMethod);
});