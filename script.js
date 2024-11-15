document.addEventListener("DOMContentLoaded", function() {
    // Existing code for "Show Details" buttons
    const toggleButtons = document.querySelectorAll(".toggle-button");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            const details = this.nextElementSibling;

            if (details.style.display === "none" || details.style.display === "") {
                details.style.display = "block";
                this.textContent = "Hide Details of Project";
            } else {
                details.style.display = "none";
                this.textContent = "Show Details of Project";
            }
        });
    });

    //form stuff
    const realForm = document.getElementById("contactForm");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    realForm.addEventListener("submit", function(event) {
        let isValid = true;

        
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";

        // Validate form info
        if (name.value.trim() === "") {
            nameError.textContent = "Please enter your name.";
            isValid = false;
        }

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }

        // Validate Message
        if (message.value.trim() === "") {
            messageError.textContent = "Please enter your message.";
            isValid = false;
        }

        // If any field is invalid, prevent form submission
        if (!isValid) {
            event.preventDefault();
        }
    });
});
