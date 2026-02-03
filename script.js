// ========================================
// MOBILE MENU TOGGLE
// ========================================

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
}

// ========================================
// SMOOTH SCROLL
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ========================================
// FAQ ACCORDION
// ========================================

const accordionBtns = document.querySelectorAll('.accordion-btn');

accordionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        const isActive = btn.classList.contains('active');
        
        // Fecha todos os outros
        accordionBtns.forEach(otherBtn => {
            otherBtn.classList.remove('active');
            otherBtn.nextElementSibling.classList.remove('active');
        });
        
        // Toggle o atual
        if (!isActive) {
            btn.classList.add('active');
            content.classList.add('active');
        }
    });
});

// ========================================
// GSAP ANIMATIONS
// ========================================

// Registra os plugins do GSAP
gsap.registerPlugin(ScrollTrigger);


ScrollSmoother.create({
	smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
});

// Hero Animation
gsap.from('.hero-title', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.hero-subtitle', {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 0.2,
    ease: 'power3.out'
});

gsap.from('.hero-description', {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 0.4,
    ease: 'power3.out'
});

gsap.from('.hero-cta', {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 0.6,
    ease: 'power3.out'
});

gsap.from('.hero-card', {
    duration: 1,
    x: 50,
    opacity: 0,
    delay: 0.8,
    ease: 'power3.out'
});

// Animate sections on scroll
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    gsap.from(section.querySelectorAll('.section-title, .section-subtitle'), {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });
});

// Animate cards on scroll
const cards = document.querySelectorAll('.service-card, .benefit-card, .testimonial-card');
cards.forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.6,
        y: 50,
        opacity: 0,
        delay: index * 0.1,
        ease: 'power3.out'
    });
});

// Animate FAQ items
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.6,
        x: -30,
        opacity: 0,
        delay: index * 0.1,
        ease: 'power3.out'
    });
});

// Parallax effect for blobs
gsap.to('.blob-1', {
    scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
    },
    y: 300,
    ease: 'none'
});

gsap.to('.blob-2', {
    scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
    },
    y: -200,
    ease: 'none'
});

gsap.to('.blob-3', {
    scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
    },
    y: 150,
    x: -100,
    ease: 'none'
});

// ========================================
// LOADING ANIMATION
// ========================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    
    gsap.to('body', {
        duration: 0.5,
        opacity: 1,
        ease: 'power2.out'
    });
});

gsap.from("footer",{
    y: "-30%",
    immediateRender: false,
    scrollTrigger: {
        trigger: "footer",
        scrub: true,
        invalidateOnRefresh: true,
        end: "100% 100%"
    }
})
console.log('Site Azenha Consultoria - BPO Financeiro carregado com sucesso! 🚀');