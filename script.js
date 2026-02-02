// ========================================
// GSAP INITIALIZATION
// ========================================

gsap.registerPlugin(ScrollTrigger);

// ========================================
// MOBILE MENU
// ========================================

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
    
    // Animate menu items
    if (!mobileMenu.classList.contains('hidden')) {
        gsap.from('.mobile-menu-link', {
            opacity: 0,
            y: -20,
            duration: 0.3,
            stagger: 0.1,
            ease: 'power2.out'
        });
    }
}

mobileMenuBtn.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking on a link
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: target,
                        offsetY: 100
                    },
                    ease: 'power2.inOut'
                });
            }
        }
    });
});

// ========================================
// NAVBAR ANIMATION ON SCROLL
// ========================================

let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        // Scrolling down
        gsap.to(navbar, {
            y: -100,
            duration: 0.3,
            ease: 'power2.out'
        });
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        // Scrolling up
        gsap.to(navbar, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// ========================================
// HERO SECTION ANIMATIONS
// ========================================

const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

heroTimeline
    .from('.hero-title', {
        opacity: 0,
        y: 50,
        duration: 1
    })
    .from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 0.8
    }, '-=0.5')
    .from('.hero-description', {
        opacity: 0,
        y: 30,
        duration: 0.8
    }, '-=0.5')
    .from('.hero-cta', {
        opacity: 0,
        y: 20,
        duration: 0.6
    }, '-=0.4')
    .from('.hero-card', {
        opacity: 0,
        x: 100,
        duration: 1
    }, '-=1')
    .from('.feature-card', {
        opacity: 0,
        x: 50,
        duration: 0.5,
        stagger: 0.2
    }, '-=0.5');

// ========================================
// BACKGROUND BLOBS ANIMATION
// ========================================

gsap.to('.blob-1', {
    x: 30,
    y: -50,
    scale: 1.1,
    duration: 7,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
});

gsap.to('.blob-2', {
    x: -20,
    y: 20,
    scale: 0.9,
    duration: 7,
    delay: 2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
});

gsap.to('.blob-3', {
    x: 40,
    y: -30,
    scale: 1.05,
    duration: 7,
    delay: 4,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
});

// ========================================
// SCROLL TRIGGER ANIMATIONS
// ========================================

// Section Titles
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });
});

// Description Section
gsap.from('.description-section .gradient-border', {
    scrollTrigger: {
        trigger: '.description-section',
        start: 'top 70%',
        end: 'top 40%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('.quote-block', {
    scrollTrigger: {
        trigger: '.quote-block',
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    x: -50,
    duration: 1,
    ease: 'power3.out'
});

// Services Grid
gsap.from('.service-card', {
    scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 70%',
        end: 'top 40%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
});

// Benefits Grid
gsap.from('.benefit-card', {
    scrollTrigger: {
        trigger: '.benefits-grid',
        start: 'top 70%',
        end: 'top 40%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    scale: 0.8,
    duration: 0.6,
    stagger: 0.1,
    ease: 'back.out(1.7)'
});

// Testimonials Grid
gsap.from('.testimonial-card', {
    scrollTrigger: {
        trigger: '.testimonials-grid',
        start: 'top 70%',
        end: 'top 40%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
});

// FAQ Items
gsap.from('.faq-item', {
    scrollTrigger: {
        trigger: '.faq-container',
        start: 'top 70%',
        end: 'top 40%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    x: -50,
    duration: 0.6,
    stagger: 0.15,
    ease: 'power3.out'
});

// Contact Form
gsap.from('.contact-form', {
    scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 70%',
        end: 'top 40%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
});

// ========================================
// ACCORDION FUNCTIONALITY
// ========================================

const accordionBtns = document.querySelectorAll('.accordion-btn');

accordionBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const icon = this.querySelector('.accordion-icon');
        const isActive = content.classList.contains('active');
        
        // Close all accordions
        document.querySelectorAll('.accordion-content').forEach(item => {
            item.classList.remove('active');
            gsap.to(item, {
                maxHeight: 0,
                duration: 0.3,
                ease: 'power2.inOut'
            });
        });
        
        // Reset all icons
        document.querySelectorAll('.accordion-icon').forEach(i => {
            gsap.to(i, {
                rotation: 0,
                duration: 0.3,
                ease: 'power2.inOut'
            });
        });
        
        // Open clicked accordion if it wasn't active
        if (!isActive) {
            content.classList.add('active');
            
            // Animate icon
            gsap.to(icon, {
                rotation: 180,
                duration: 0.3,
                ease: 'power2.inOut'
            });
            
            // Animate content
            gsap.to(content, {
                maxHeight: content.scrollHeight + 50,
                duration: 0.3,
                ease: 'power2.inOut'
            });
        }
    });
});

// ========================================
// CTA BUTTONS HOVER ANIMATION
// ========================================

const ctaButtons = document.querySelectorAll('.cta-button, button[type="submit"], a[class*="bg-gradient"]');

ctaButtons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        gsap.to(this, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    btn.addEventListener('mouseleave', function() {
        gsap.to(this, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// ========================================
// SOCIAL LINKS ANIMATION
// ========================================

const socialLinks = document.querySelectorAll('.social-link');

socialLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        gsap.to(this, {
            scale: 1.2,
            rotation: 5,
            duration: 0.3,
            ease: 'back.out(1.7)'
        });
    });
    
    link.addEventListener('mouseleave', function() {
        gsap.to(this, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// ========================================
// PARALLAX EFFECT ON SCROLL
// ========================================

gsap.utils.toArray('.service-card, .benefit-card').forEach(card => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        },
        y: -30,
        ease: 'none'
    });
});

// ========================================
// WHATSAPP BUTTON ANIMATION
// ========================================

const whatsappBtn = document.querySelector('.whatsapp-float');

if (whatsappBtn) {
    // Initial animation
    gsap.from(whatsappBtn, {
        scale: 0,
        rotation: 360,
        duration: 0.6,
        delay: 1,
        ease: 'back.out(1.7)'
    });
    
    // Hover animation
    whatsappBtn.addEventListener('mouseenter', function() {
        gsap.to(this, {
            scale: 1.15,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    whatsappBtn.addEventListener('mouseleave', function() {
        gsap.to(this, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
}

// ========================================
// LOGO ANIMATION
// ========================================

const logo = document.querySelector('.logo-hover');

if (logo) {
    gsap.from(logo, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power3.out'
    });
}

// ========================================
// NAV LINKS STAGGER ANIMATION
// ========================================

gsap.from('.nav-link', {
    opacity: 0,
    y: -20,
    duration: 0.6,
    stagger: 0.1,
    delay: 0.5,
    ease: 'power3.out'
});

// ========================================
// INTERSECTION OBSERVER FOR COUNTERS
// ========================================

const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const animateCounter = (element, target) => {
    const counter = { value: 0 };
    const targetValue = parseFloat(target);
    
    gsap.to(counter, {
        value: targetValue,
        duration: 2,
        ease: 'power2.out',
        onUpdate: function() {
            if (target.includes('.')) {
                element.textContent = counter.value.toFixed(1);
            } else {
                element.textContent = Math.floor(counter.value);
            }
        }
    });
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statValue = entry.target.querySelector('.text-3xl, .text-4xl');
            if (statValue && !statValue.dataset.animated) {
                const targetText = statValue.textContent;
                statValue.dataset.animated = 'true';
                animateCounter(statValue, targetText);
            }
        }
    });
}, observerOptions);

// Observe stats if they exist
document.querySelectorAll('.grid.grid-cols-2.md\\:grid-cols-4 > div').forEach(stat => {
    statsObserver.observe(stat);
});

// ========================================
// GRADIENT BORDER ANIMATION
// ========================================

gsap.utils.toArray('.gradient-border').forEach(element => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse'
        }
    });
    
    tl.from(element, {
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: 'power3.out'
    });
});

// ========================================
// MOUSE MOVE PARALLAX EFFECT
// ========================================

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) - 0.5;
    mouseY = (e.clientY / window.innerHeight) - 0.5;
});

gsap.ticker.add(() => {
    gsap.to('.blob-1', {
        x: mouseX * 50,
        y: mouseY * 50,
        duration: 2,
        ease: 'power2.out'
    });
    
    gsap.to('.blob-2', {
        x: mouseX * -30,
        y: mouseY * -30,
        duration: 2.5,
        ease: 'power2.out'
    });
    
    gsap.to('.blob-3', {
        x: mouseX * 40,
        y: mouseY * 40,
        duration: 2.2,
        ease: 'power2.out'
    });
});

// ========================================
// FORM VALIDATION & ANIMATION
// ========================================

const contactForm = document.querySelector('form');

if (contactForm) {
    const inputs = contactForm.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            gsap.to(this, {
                scale: 1.02,
                borderColor: '#D4AF37',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        input.addEventListener('blur', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        
        // Animate button
        gsap.to(submitBtn, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            onComplete: () => {
                // Here you would normally send the form data
                alert('Formulário enviado com sucesso! Entraremos em contato em breve.');
                contactForm.reset();
            }
        });
    });
}

// ========================================
// LOADING ANIMATION
// ========================================

window.addEventListener('load', () => {
    gsap.to('body', {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
    });
});

// Set initial opacity
gsap.set('body', { opacity: 0 });

// ========================================
// REVEAL ANIMATION ON SCROLL
// ========================================

const revealElements = gsap.utils.toArray('.card-hover, .testimonial-card, .service-card');

revealElements.forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'top 60%',
            toggleActions: 'play none none reverse',
            onEnter: () => {
                element.classList.add('revealed');
            }
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
    });
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

