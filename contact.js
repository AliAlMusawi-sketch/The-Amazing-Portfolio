document.querySelector('form').addEventListener('submit', function(e) {
    // This allows the form to submit to Formspree, then shows an alert
    setTimeout(() => {
        alert("Thank you for your message! I'll get back to you soon.");
    }, 1000);
});