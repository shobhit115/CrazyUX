document.addEventListener("DOMContentLoaded", () => {
    
    // 1. THE UPSIDE DOWN EFFECT
    // On load, jump to the bottom of the page
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'instant' 
    });

    // 2. INTERACTIVE REVEAL
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Target both Home Page cards AND Gallery Page cards
    const cards = document.querySelectorAll('.neu-card, .site-card');
    
    // Initial state for animation
    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(50px)"; // Start lower
        // Reset delay if index gets too high to prevent waiting forever on long lists
        let delay = (index % 10) * 0.1; 
        card.style.transition = `all 0.6s ease ${delay}s`; 
        observer.observe(card);
    });

    // 3. NAV HIGHLIGHTING
    // Highlight based on current URL
    const currentPath = window.location.pathname.split("/").pop();
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        const link = item.querySelector('a').getAttribute('href');
        // Simple check to set active state based on file name
        if(link === currentPath || (link === 'index.html' && currentPath === '')) {
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        }
        
        // Click effect
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});