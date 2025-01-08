function createIntersectionObserver(classesToAdd, threshold = 0.2) {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (Array.isArray(classesToAdd)) {
                    entry.target.classList.add(...classesToAdd);
                } else {
                    entry.target.classList.add(classesToAdd);
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: threshold
    });

    return observer;
};

// Apply to elements
// document.querySelectorAll('.to-animate').forEach(el => showObserver.observe(el));
// document.querySelectorAll('.multi-effect').forEach(el => multiClassObserver.observe(el));
// document.querySelectorAll('.custom-threshold').forEach(el => customThresholdObserver.observe(el));

const showObserver = createIntersectionObserver('show');
const navObserver = createIntersectionObserver('nav-to-animate')

document.addEventListener("DOMContentLoaded", function () {
    // Create an IntersectionObserver to detect when the elements are in view
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Stop observing the element after it becomes visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2  // Trigger when at least 20% of the element is visible in the viewport
    });

    // Select all elements with the 'to-animate' class
    const to_animate = document.querySelectorAll(".to-animate");
    const nav_animate = document.querySelectorAll("nav")

    // Observe each element
    to_animate.forEach(element => {
        showObserver.observe(element)
    });

    nav_animate.forEach(element => [
        observer.observe(element)
    ]);

    // Handle scroll indicator visibility
    const scrollIndicator = document.getElementById('scroll-indicator');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            scrollIndicator.style.display = 'none';
        } else {
            scrollIndicator.style.display = 'block';
        }
    });
});
