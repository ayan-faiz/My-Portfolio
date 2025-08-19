// Matrix Rain Effect
const canvas = document.getElementById('matrix-rain');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
const matrixArray = matrix.split("");

const fontSize = 10;
const columns = canvas.width / fontSize;

const drops = [];
for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(10, 10, 10, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff41';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 35);

// Boot Sequence
const bootSequence = document.querySelector('.boot-sequence');
const bootText = document.querySelector('.boot-text');
const bootMessages = [
    'Initializing system...',
    'Loading security protocols...',
    'Establishing secure connection...',
    'Decrypting portfolio data...',
    'Access granted. Welcome, visitor.'
];

let bootIndex = 0;
function runBootSequence() {
    if (bootIndex < bootMessages.length) {
        bootText.textContent = bootMessages[bootIndex];
        bootIndex++;
        setTimeout(runBootSequence, 600);
    } else {
        setTimeout(() => {
            bootSequence.style.opacity = '0';
            setTimeout(() => {
                bootSequence.style.display = 'none';
            }, 500);
        }, 500);
    }
}

window.addEventListener('load', () => {
    setTimeout(runBootSequence, 100);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 255, 65, 0.5)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 255, 65, 0.3)';
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Skill Progress Animation
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const width = bar.parentElement.parentElement.querySelector('.skill-percent').textContent;
                bar.style.width = width;
            });
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills-grid');
if (skillsSection) {
    skillObserver.observe(skillsSection);
}

// Glitch Effect on Hover
const glitchElements = document.querySelectorAll('.glitch');
glitchElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.animation = 'glitch-anim 0.3s infinite';
    });
    element.addEventListener('mouseleave', () => {
        element.style.animation = 'glitch-anim 2s infinite';
    });
});

// Contact Form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate terminal response
        const terminalBody = contactForm.closest('.terminal-body');
        const response = document.createElement('div');
        response.className = 'terminal-line';
        response.innerHTML = '<span class="prompt">$</span> <span class="command">Message sent successfully! Expect response in 24-48 hours.</span>';
        terminalBody.appendChild(response);
        
        // Reset form
        setTimeout(() => {
            contactForm.reset();
            response.remove();
        }, 3000);
    });
}

// Terminal typing effect for hero
// Terminal typing effect for hero
function typeCommand(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Animate terminal on page load
window.addEventListener('load', () => {
    setTimeout(() => {
        const command = document.querySelector('.command');
        if (command) {
            typeCommand(command, './access_portfolio.sh', 50);
        }
    }, 2000);
});

// Active navigation highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
            link.style.color = 'var(--green-primary)';
            link.style.textShadow = '0 0 10px rgba(0, 255, 65, 0.5)';
        } else {
            link.style.color = '';
            link.style.textShadow = '';
        }
    });
});

// Parallax effect for hex shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hexes = document.querySelectorAll('.hex');
    
    hexes.forEach((hex, index) => {
        const speed = 0.5 + (index * 0.2);
        hex.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Random glitch effect
function randomGlitch() {
    const glitchElements = document.querySelectorAll('.glitch');
    const randomElement = glitchElements[Math.floor(Math.random() * glitchElements.length)];
    
    if (randomElement) {
        randomElement.style.animation = 'none';
        setTimeout(() => {
            randomElement.style.animation = 'glitch-anim 0.2s 3';
        }, 10);
    }
}

// Run random glitch every 5-10 seconds
setInterval(() => {
    if (Math.random() > 0.7) {
        randomGlitch();
    }
}, 5000);

// Terminal cursor blink for all prompts
const prompts = document.querySelectorAll('.prompt');
prompts.forEach(prompt => {
    const cursor = document.createElement('span');
    cursor.className = 'cursor-blink';
    cursor.textContent = '_';
    prompt.parentElement.appendChild(cursor);
});

// Add hover effects to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const header = card.querySelector('.project-header h3');
        if (header) {
            header.style.animation = 'glitch-anim 0.3s 2';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        const header = card.querySelector('.project-header h3');
        if (header) {
            header.style.animation = 'none';
        }
    });
});

// Simulate terminal commands in hero
const terminal = document.querySelector('.terminal-body');
let commandHistory = [];
let historyIndex = -1;

// Add keyboard interaction to terminal
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'l') {
        e.preventDefault();
        // Clear terminal
        const terminalOutput = terminal.querySelector('.terminal-output');
        if (terminalOutput) {
            terminalOutput.style.opacity = '0';
            setTimeout(() => {
                terminalOutput.style.opacity = '1';
            }, 300);
        }
    }
});

// Easter egg - Konami code
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateHackerMode();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateHackerMode() {
    document.body.style.animation = 'glitch-anim 0.3s 5';
    
    // Create matrix rain overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 255, 65, 0.1);
        z-index: 9999;
        pointer-events: none;
    `;
    document.body.appendChild(overlay);
    
    // Show secret message
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--green-primary);
        font-size: 2rem;
        font-family: 'Orbitron', monospace;
        text-align: center;
        z-index: 10000;
        text-shadow: 0 0 20px rgba(0, 255, 65, 0.8);
    `;
    message.innerHTML = 'HACKER MODE ACTIVATED<br><span style="font-size: 1rem;">You found the easter egg!</span>';
    document.body.appendChild(message);
    
    setTimeout(() => {
        overlay.remove();
        message.remove();
        document.body.style.animation = '';
    }, 3000);
}

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Add typing effect to about section
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const jsonContent = entry.target.querySelector('.json-content');
            if (jsonContent && !jsonContent.classList.contains('typed')) {
                jsonContent.classList.add('typed');
                const originalText = jsonContent.textContent;
                jsonContent.textContent = '';
                typeCommand(jsonContent, originalText, 10);
            }
        }
    });
}, observerOptions);

const aboutTerminal = document.querySelector('.about-terminal');
if (aboutTerminal) {
    aboutObserver.observe(aboutTerminal);
}

// Console ASCII art
console.log(`
%c
 █████╗ ██╗   ██╗ █████╗ ███╗   ██╗    ███████╗ █████╗ ██╗███████╗
██╔══██╗╚██╗ ██╔╝██╔══██╗████╗  ██║    ██╔════╝██╔══██╗██║╚══███╔╝
███████║ ╚████╔╝ ███████║██╔██╗ ██║    █████╗  ███████║██║  ███╔╝ 
██╔══██║  ╚██╔╝  ██╔══██║██║╚██╗██║    ██╔══╝  ██╔══██║██║ ███╔╝  
██║  ██║   ██║   ██║  ██║██║ ╚████║    ██║     ██║  ██║██║███████╗
╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝    ╚═╝     ╚═╝  ╚═╝╚═╝╚══════╝

Cyber Security Analyst | Ethical Hacker | Digital Guardian
`, 'color: #00ff41; font-family: monospace;');

console.log('%c[SYSTEM] Portfolio successfully loaded', 'color: #00ff41;');
console.log('%c[SECURITY] All systems operational', 'color: #00d4ff;');
console.log('%c[WARNING] Authorized access only', 'color: #ff0040;');

// Initialize all animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Fade in sections
    const fadeElements = document.querySelectorAll('.section-title, .project-card, .skill-category, .timeline-item');
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(el => fadeObserver.observe(el));
});