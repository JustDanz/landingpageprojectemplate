// Initialize AOS Library
AOS.init({
    duration: 1000, // Animation duration
    once: true,     // Animation occurs only once
});

// GSAP Smooth Scroll
gsap.registerPlugin(ScrollToPlugin);

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: link.getAttribute('href'),
                offsetY: 70
            },
            ease: "power3.out"
        });
    });
});

// GSAP Hero Animation
gsap.from(".hero-content h2", { duration: 1, opacity: 0, y: -50 });
gsap.from(".hero-content p", { duration: 1, opacity: 0, y: 50, delay: 0.3 });
gsap.from(".hero-content .btn", { duration: 1, opacity: 0, scale: 0.5, delay: 0.6 });

// Select all cards
const cards = document.querySelectorAll('.card');

// Add mousemove event to each card
cards.forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X position relative to the card
    const y = e.clientY - rect.top; // Mouse Y position relative to the card

    const xPercent = (x / rect.width - 0.5) * 2; // Normalize to [-1, 1]
    const yPercent = (y / rect.height - 0.5) * 2;

    const rotateX = -yPercent * 15; // Adjust the multiplier for effect intensity
    const rotateY = xPercent * 15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  // Reset the transform when the mouse leaves the card
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0)';
  });
});
