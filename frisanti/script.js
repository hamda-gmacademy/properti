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
            btn.addEventListener('click', (e) => {
                e.preventDefault();
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

    // 4. TOC Generation for Article Detail
    const articleBody = document.querySelector('.article-body');
    const tocList = document.getElementById('toc-list');
    const tocToggle = document.getElementById('toc-toggle');

    if (articleBody && tocList) {
        // Generate TOC
        const headings = articleBody.querySelectorAll('h2, h3');
        headings.forEach((heading, index) => {
            if (!heading.id) {
                heading.id = `section-${index}`;
            }

            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#${heading.id}`;
            a.textContent = heading.textContent;

            // Indent H3
            if (heading.tagName === 'H3') {
                li.style.marginLeft = '1.5rem';
                a.style.fontSize = '0.95rem';
            }

            a.addEventListener('click', (e) => {
                e.preventDefault();
                document.getElementById(heading.id).scrollIntoView({
                    behavior: 'smooth'
                });
            });

            li.appendChild(a);
            tocList.appendChild(li);
        });

        // Toggle TOC
        if (tocToggle) {
            tocToggle.addEventListener('click', () => {
                tocList.classList.toggle('collapsed');
                const icon = tocToggle.querySelector('.material-symbols-outlined');
                if (icon) {
                    icon.textContent = tocList.classList.contains('collapsed') ? 'expand_more' : 'expand_less';
                }
            });
        }
    }
});
