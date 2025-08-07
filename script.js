// 24 Gold Coins Data
const coinsData = [
    { name: "Roman Aureus", description: "Ancient Roman gold coin from 1st century AD" },
    { name: "Byzantine Solidus", description: "Byzantine Empire gold coin, 6th century" },
    { name: "Islamic Dinar", description: "Abbasid Caliphate gold dinar, 8th century" },
    { name: "Venetian Ducat", description: "Medieval Venetian trade coin, 13th century" },
    { name: "Florentine Florin", description: "Florence republic gold coin, 14th century" },
    { name: "Spanish Escudo", description: "Spanish colonial gold coin, 16th century" },
    { name: "French Louis d'Or", description: "Royal French gold coin, 17th century" },
    { name: "British Guinea", description: "English gold coin, 18th century" },
    { name: "American Eagle", description: "US gold coin, 19th century" },
    { name: "Russian Chervonets", description: "Imperial Russian gold coin, 18th century" },
    { name: "Dutch Ducat", description: "Netherlands trade gold coin, 17th century" },
    { name: "Portuguese Cruzado", description: "Portuguese exploration era coin, 16th century" },
    { name: "Austrian Thaler", description: "Habsburg monarchy gold coin, 18th century" },
    { name: "Prussian Friedrich", description: "Prussian kingdom gold coin, 19th century" },
    { name: "Ottoman Sultani", description: "Ottoman Empire gold coin, 16th century" },
    { name: "Mughal Mohur", description: "Mughal Empire gold coin, 17th century" },
    { name: "Chinese Tael", description: "Imperial Chinese gold ingot, 18th century" },
    { name: "Japanese Koban", description: "Edo period gold coin, 17th century" },
    { name: "Swedish Carolin", description: "Swedish Empire gold coin, 18th century" },
    { name: "Polish Ducat", description: "Polish-Lithuanian Commonwealth coin, 17th century" },
    { name: "Hungarian Forint", description: "Kingdom of Hungary gold coin, 16th century" },
    { name: "Swiss Vreneli", description: "Swiss Confederation gold coin, 19th century" },
    { name: "Canadian Maple", description: "Canadian gold bullion coin, modern era" },
    { name: "South African Krugerrand", description: "South African gold coin, 20th century" }
];

// DOM Elements
const coinsGrid = document.getElementById('coinsGrid');
const ctaButton = document.querySelector('.cta-button');
const contactForm = document.querySelector('.contact-form');

// Generate coin cards
function generateCoins() {
    coinsGrid.innerHTML = '';
    coinsData.forEach((coin, index) => {
        const coinCard = document.createElement('div');
        coinCard.className = 'coin-card';
        coinCard.innerHTML = `
            <div class="coin-number">${index + 1}</div>
            <div class="coin-name">${coin.name}</div>
            <div class="coin-description">${coin.description}</div>
        `;
        
        // Add click animation
        coinCard.addEventListener('click', () => {
            coinCard.style.transform = 'scale(0.95)';
            setTimeout(() => {
                coinCard.style.transform = 'translateY(-5px)';
            }, 150);
        });
        
        coinsGrid.appendChild(coinCard);
    });
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// CTA Button functionality
function setupCTAButton() {
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            const coinsSection = document.getElementById('coins');
            coinsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
}

// Contact form handling
function setupContactForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Simulate form submission
            const submitButton = contactForm.querySelector('button');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
}

// Scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Coin card hover effects
function setupCoinHoverEffects() {
    const coinCards = document.querySelectorAll('.coin-card');
    coinCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Add golden glow effect
            card.style.boxShadow = '0 8px 25px rgba(212, 175, 55, 0.4)';
            card.style.borderColor = '#d4af37';
        });
        
        card.addEventListener('mouseleave', () => {
            // Remove golden glow effect
            card.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            card.style.borderColor = 'transparent';
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    generateCoins();
    setupSmoothScrolling();
    setupCTAButton();
    setupContactForm();
    setupScrollAnimations();
    
    // Setup coin hover effects after coins are generated
    setTimeout(() => {
        setupCoinHoverEffects();
    }, 100);
});

// Add some interactive features
document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
    } else {
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

// Add loading animation
window.addEventListener('load', () => {
    const hero = document.querySelector('.hero');
    hero.style.opacity = '1';
    hero.style.transform = 'translateY(0)';
});
