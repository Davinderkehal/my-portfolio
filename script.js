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

   // Form and validation logic
const realForm = document.getElementById("contactForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");

realForm.addEventListener("submit", function(event) {
    let isValid = true;

    // Clear previous error messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.style.display = "none"; // Hide success message initially

    // Validate Name
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
    } else {
        // Prevent actual form submission for demo purposes
        event.preventDefault();

        // Display the success message if all validations pass
        successMessage.style.display = "block";
        successMessage.textContent = "Message has been successfully submitted!";
        name.value = "";
        email.value = "";
        message.value = "";
    }
});


    const canvas = document.getElementById("particleCanvas");
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions to match display size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Particle settings
    const particles = [];
    const numParticles = 80;

    // Particle constructor function
    function Particle(x, y, radius, dx, dy) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;

        this.draw = function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = "white";
            ctx.fill();
            ctx.closePath();
        };

        this.update = function() {
            // Move particle
            this.x += this.dx;
            this.y += this.dy;

            // Bounce off edges
            if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }
            if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }

            this.draw();
        };
    }

    // Create particles
    function initParticles() {
        for (let i = 0; i < numParticles; i++) {
            const radius = Math.random() * 2 + 1; // Small, subtle particles
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const dx = (Math.random() - 0.5) * 0.5; // Slow horizontal movement
            const dy = (Math.random() - 0.5) * 0.5; // Slow vertical movement
            particles.push(new Particle(x, y, radius, dx, dy));
        }
    }

    // Animate particles
    function animateParticles() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; // Black background with slight transparency for trailing effect
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
        });

        requestAnimationFrame(animateParticles);
    }

    // Initialize and animate particles
    initParticles();
    animateParticles();

    // Resize canvas on window resize
    window.addEventListener("resize", () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        particles.length = 0; // Clear existing particles
        initParticles(); // Reinitialize particles
    });


});
