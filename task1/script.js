document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Simple validation
    if (name === "" || email === "" || message === "") {
        document.getElementById('responseMessage').textContent = "Please fill in all fields.";
        document.getElementById('responseMessage').style.color = 'red';
    } else {
        document.getElementById('responseMessage').textContent = "Thank you for your message, " + name + "!";
        document.getElementById('responseMessage').style.color = 'green';

        // Reset the form after submission
        document.getElementById('contactForm').reset();
    }
});
