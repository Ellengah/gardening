// Handle the "Learn More" button click
document.getElementById("learnMoreBtn").addEventListener("click", function() {
    window.location.href = "#about";
});

// Handle adding products to cart (for demonstration purposes)
const cartButtons = document.querySelectorAll(".add-to-cart");

cartButtons.forEach(button => {
    button.addEventListener("click", function() {
        alert("Product added to cart!");
    });
});

// Handle contact form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message sent! We'll get back to you soon.");
});
