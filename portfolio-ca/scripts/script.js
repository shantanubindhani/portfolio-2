
document.addEventListener("DOMContentLoaded", function() {
    const nav_items = document.querySelectorAll('.nav-item');

    nav_items.forEach(function(nav_item) {
    nav_item.addEventListener('click', function() {
        // Deactivate all boxes
        nav_items.forEach(function(b) {
        b.classList.remove('nav-active');
        b.classList.remove('blur-high');
        });
        // Activate the clicked box
        this.classList.add('nav-active');
        this.classList.add('blur-high');
        console.log("I am in!..");
    });
    });
});