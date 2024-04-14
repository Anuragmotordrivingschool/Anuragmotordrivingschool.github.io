// script.js
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // You can add your own logic here to handle form submission, like sending an email or storing data
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    // Optionally, you can display a confirmation message to the user
    alert("Your message has been sent!");
    document.getElementById("contactForm").reset(); // Reset form fields
});
// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Hide all sections except the home section by default
    var sections = document.querySelectorAll('.page-section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the home section by default
    var homeSection = document.querySelector('#home');
    homeSection.style.display = 'block';

    // Add click event listeners to menu links
    var menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(function(menuLink) {
        menuLink.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = menuLink.getAttribute('href');
            var targetSection = document.querySelector(targetId);

            // Hide all sections
            sections.forEach(function(section) {
                section.style.display = 'none';
            });

            // Show the target section
            targetSection.style.display = 'block';
        });
    });
});
