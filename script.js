document.addEventListener("DOMContentLoaded", function() {
    // Select all "Show Details" buttons with the class "toggle-button"
    const toggleButtons = document.querySelectorAll(".toggle-button");

    // Add click event listeners to each button
    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Select the associated project details
            const details = this.nextElementSibling;
            
            // Toggle visibility of the details section
            if (details.style.display === "none" || details.style.display === "") {
                details.style.display = "block";
                this.textContent = "Hide Details of Project"; 
            } else {
                details.style.display = "none";
                this.textContent = "Show Details of Project"; 
            }
        });
    });
});
