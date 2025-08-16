document.addEventListener('DOMContentLoaded', () => {

    // Get the button that opens the mobile menu
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    
    // Get the mobile menu itself
    const mobileMenu = document.getElementById('mobile-menu');

    // Check if both elements exist to prevent errors
    if (mobileMenuButton && mobileMenu) {
        // Add a click event listener to the button
        mobileMenuButton.addEventListener('click', () => {
            // Toggle the 'hidden' class on the menu to show or hide it
            mobileMenu.classList.toggle('hidden');
        });
    }

});
