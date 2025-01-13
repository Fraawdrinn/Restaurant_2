function createIntersectionObserver(classesToAdd, threshold = 0.2) {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (Array.isArray(classesToAdd)) {
                    entry.target.classList.add(...classesToAdd);
                } else {
                    entry.target.classList.add(classesToAdd);
                }
                console.log("Adding classes to " + entry.target.tagName);
            } else {
                if (Array.isArray(classesToAdd)) {
                    entry.target.classList.remove(...classesToAdd);
                } else {
                    entry.target.classList.remove(classesToAdd);
                }
                console.log("Removing classes from " + entry.target.tagName);
            }
        });
    }, {
        threshold: threshold
    });

    return observer;
};

const showObserver = createIntersectionObserver('show');
const to_animate = document.querySelectorAll(".to-animate");

document.addEventListener("DOMContentLoaded", function () {
    to_animate.forEach(element => {
        showObserver.observe(element);
    });

    
    // Handle scroll indicator visibility
    const scrollIndicator = document.getElementById('scroll-indicator');
    window.addEventListener('scroll', function () {
        scrollIndicator.style.display = window.scrollY > 100 ? 'none' : 'block';
    });
});
