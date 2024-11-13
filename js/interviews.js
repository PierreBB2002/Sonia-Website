document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in, .interviews-hero h1, .section-header, .interview-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    elements.forEach(element => observer.observe(element));
});
