document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');

            // Icon Toggle
            const icon = menuToggle.querySelector('.material-symbols-outlined');
            if (icon) {
                if (navMenu.classList.contains('active')) {
                    icon.textContent = 'close';
                } else {
                    icon.textContent = 'menu';
                }
            }
        });
    }

    // 2. Scroll to Top Button
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn) {
        // Initial check
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        }

        // Scroll event
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        scrollTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 3. Property Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const propertyCards = document.querySelectorAll('.property-card');

    if (filterBtns.length > 0 && propertyCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update Active State
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                propertyCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');

                    if (filterValue === 'all' || filterValue === cardCategory) {
                        card.classList.remove('filter-hidden');
                        // Add fade-in animation or logic here if desired
                    } else {
                        card.classList.add('filter-hidden');
                    }
                });
            });
        });
    }
});
