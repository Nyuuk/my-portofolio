// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuBtn.classList.toggle('active');
        
        // Change icon based on state
        const icon = menuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Close mobile menu when clicking on a nav link
const mobileNavLinks = document.querySelectorAll('.nav-links a');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            
            // Reset icon
            const icon = menuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// Animation on scroll for elements
const animateElements = () => {
    const elements = document.querySelectorAll('.skill-card, .experience-card, .project-card');
    
    elements.forEach((element, index) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            // Add staggered delay to skills animation
            if (element.classList.contains('skill-card')) {
                setTimeout(() => {
                    element.classList.add('animated');
                }, 100 * (index % 5)); // Stagger by row with 5 items per conceptual row
            } else {
                element.classList.add('animated');
            }
        }
    });
};

// Add alt text to any future images for accessibility and SEO
const addAltTextToImages = () => {
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach(img => {
        // Get parent element's text content as a fallback
        const parentText = img.parentElement.textContent.trim();
        const altText = parentText ? parentText : 'Adnan Khafabi portfolio image';
        img.setAttribute('alt', altText);
    });
};

// Run on page load
window.addEventListener('load', () => {
    setTimeout(() => {
        animateElements();
        addAltTextToImages();
    }, 100); // Small delay to ensure DOM is fully loaded
});

// Ensure animations run on scroll too
window.addEventListener('scroll', animateElements);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for navbar
                behavior: 'smooth'
            });
            
            // Update URL for better navigation without page reload (for SEO and UX)
            history.pushState(null, null, targetId);
        }
    });
});

// Typing effect for hero section (optional enhancement)
const typingEffect = () => {
    const text = "Cloud Engineering & DevOps Infrastructure";
    const heroSubtitle = document.querySelector('.hero h2');
    
    if (heroSubtitle && heroSubtitle.textContent === text) {
        let i = 0;
        heroSubtitle.textContent = '';
        
        const typing = setInterval(() => {
            if (i < text.length) {
                heroSubtitle.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, 50);
    }
};

// Uncomment to enable typing effect
// window.addEventListener('load', () => {
//     setTimeout(typingEffect, 1500); // Start after initial animations
// });

// Interactive particles background (optional enhancement)
const createParticlesBackground = () => {
    const canvas = document.createElement('canvas');
    canvas.id = 'particles-background';
    document.body.prepend(canvas);

    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.3';

    const ctx = canvas.getContext('2d');
    let particles = [];
    
    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.color = `rgba(143, 122, 255, ${Math.random() * 0.5 + 0.3})`;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width || this.x < 0) {
                this.speedX = -this.speedX;
            }
            
            if (this.y > canvas.height || this.y < 0) {
                this.speedY = -this.speedY;
            }
        }
        
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    const initParticles = () => {
        const numberOfParticles = Math.min(Math.floor(window.innerWidth / 10), 100);
        particles = [];
        
        for (let i = 0; i < numberOfParticles; i++) {
            particles.push(new Particle());
        }
    };
    
    const animateParticles = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw connections between nearby particles
        ctx.strokeStyle = 'rgba(143, 122, 255, 0.1)';
        ctx.lineWidth = 0.5;
        
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        
        // Update and draw particles
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animateParticles);
    };
    
    initParticles();
    animateParticles();
};

// Uncomment to enable particles background
createParticlesBackground();