// Intersection Observer for fade-in animations - one by one
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};

let visibleCount = 0;
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, visibleCount * 200); // 200ms delay between each card
            visibleCount++;
        }
    });
}, observerOptions);

// Observe all project cards, activity cards, and primary school section
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    const activityCards = document.querySelectorAll('.activity-card');
    const primarySchool = document.querySelector('.primary-school');
    
    projectCards.forEach(card => observer.observe(card));
    activityCards.forEach(card => observer.observe(card));
    if (primarySchool) observer.observe(primarySchool);
});