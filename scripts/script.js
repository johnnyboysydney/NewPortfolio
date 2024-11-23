// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = 70; // Adjust this value according to your navbar height
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // Collapse the navbar after clicking a link
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});

    // Shrinking Navbar on Scroll
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-shrink');
        } else {
            navbar.classList.remove('navbar-shrink');
        }
    });

    // Add Spinner for Lazy-Loaded Images
    document.addEventListener("DOMContentLoaded", function() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            const spinner = document.createElement('div');
            spinner.className = 'loading-spinner';
            img.parentElement.insertBefore(spinner, img);
            img.onload = () => spinner.remove();
        });
    });
    
    document.querySelectorAll('.navbar-collapse .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    });

// Back to Top Button (Updated)
document.addEventListener("DOMContentLoaded", function () {
    const scrollTopButton = document.getElementById("scroll-top-button");

    if (scrollTopButton) {
        scrollTopButton.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopButton.style.display = "block";
        } else {
            scrollTopButton.style.display = "none";
        }
    };
});

// logic to handle onload for your deferred styles
document.addEventListener("DOMContentLoaded", function () {
    const deferredStylesheets = document.querySelectorAll("link[media='print']");
    deferredStylesheets.forEach((link) => {
        link.onload = () => {
            link.media = "all";
        };
    });
});

