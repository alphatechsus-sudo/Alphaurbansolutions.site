// Navbar scroll effect
const navbar = document.getElementById('navbar');
const stickyCta = document.getElementById('stickyCta');

function updateNavbar() {
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
}

function updateStickyCta() {
    if (stickyCta && window.scrollY > window.innerHeight) {
        stickyCta.classList.add('visible');
    } else if (stickyCta) {
        stickyCta.classList.remove('visible');
    }
}

window.addEventListener('scroll', () => {
    updateNavbar();
    updateStickyCta();
});
updateNavbar();
updateStickyCta();

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Contact form handler
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // In production, you would send this to a server
    console.log('Form submitted:', data);
    
    // Show success message (simple alert for demo)
    alert('Message sent successfully! We will get back to you soon.');
    
    contactForm.reset();
    });
}

// ===== Live Demos =====

// AI Chatbot Demo
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');

const botResponses = {
    hello: "Hello! How can I help you today? We offer Web Development, SEO, Cyber Security, Digital Marketing, AI Chatbot, and CRM solutions.",
    hi: "Hi! Ask me about our services: Web Dev, SEO, Cyber Security, Digital Marketing, AI Chatbot, or CRM.",
    web: "Our Web Development team builds modern, responsive sites with React, Node.js, and latest tech. Want a quote? Contact us!",
    seo: "SEO services include keyword research, on-page optimization, technical SEO, and link building. We've helped clients 3x their organic traffic.",
    security: "Cyber Security: penetration testing, vulnerability audits, and compliance. We protect your digital assets.",
    marketing: "Digital Marketing: social media, PPC, content marketing. One client saw 5x ROI with our campaigns!",
    chatbot: "We build custom AI chatbots for 24/7 support, lead gen, and automation. This demo is a preview!",
    crm: "CRM Solutions: custom development, sales pipelines, lead management. Built for real estate, sales teams & more.",
    mobile: "Mobile App Development: React Native, Flutter, Swift, Kotlin. iOS & Android apps built to scale.",
    uiux: "UI/UX Design: wireframes, prototypes, design systems. User-centered design for intuitive interfaces.",
    default: "Thanks for your interest! We offer Web Dev, Mobile App, UI/UX, SEO, Cyber Security, Digital Marketing, AI Chatbot & CRM. Type any service name to learn more."
};

function addChatMsg(text, isUser) {
    const msg = document.createElement('div');
    msg.className = `chat-msg ${isUser ? 'user' : 'bot'}`;
    msg.textContent = text;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(text) {
    const lower = text.toLowerCase();
    for (const [key, response] of Object.entries(botResponses)) {
        if (key !== 'default' && lower.includes(key)) return response;
    }
    return botResponses.default;
}

function sendChat() {
    const text = chatInput.value.trim();
    if (!text) return;
    addChatMsg(text, true);
    chatInput.value = '';
    setTimeout(() => {
        addChatMsg(getBotResponse(text), false);
    }, 600);
}

if (chatSend && chatInput && chatMessages) {
    chatSend.addEventListener('click', sendChat);
    chatInput.addEventListener('keypress', (e) => e.key === 'Enter' && sendChat());
}

// SEO Checker Demo
const seoUrl = document.getElementById('seoUrl');
const seoCheck = document.getElementById('seoCheck');
const seoResult = document.getElementById('seoResult');

if (seoCheck && seoUrl && seoResult) {
    seoCheck.addEventListener('click', () => {
    const url = seoUrl.value.trim();
    if (!url) {
        seoResult.innerHTML = '<span style="color: var(--text-muted)">Enter a URL to check</span>';
        return;
    }
    seoResult.innerHTML = '<span class="scanning">Analyzing...</span>';
    setTimeout(() => {
        const score = 65 + Math.floor(Math.random() * 30);
        const color = score >= 80 ? '#22c55e' : score >= 60 ? '#eab308' : '#ef4444';
        seoResult.innerHTML = `
            <div class="seo-score" style="color: ${color}">SEO Score: ${score}/100</div>
            <p style="color: var(--text-secondary); margin-bottom: 8px;">Sample findings for <strong>${url}</strong></p>
            <div class="seo-items">
                <span class="seo-item">✓ Meta tags</span>
                <span class="seo-item">✓ Mobile friendly</span>
                <span class="seo-item">${score >= 70 ? '✓' : '○'} Page speed</span>
                <span class="seo-item">${score >= 80 ? '✓' : '○'} Backlinks</span>
            </div>
        `;
    }, 1500);
    });
}

// Lead / CRM Demo
const leadForm = document.getElementById('leadForm');
const leadSuccess = document.getElementById('leadSuccess');

if (leadForm && leadSuccess) {
    leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(leadForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const interest = formData.get('interest');
    leadSuccess.innerHTML = `✓ Lead added to CRM: <strong>${name}</strong> (${email}). Interest: ${interest || 'Not specified'}. We'll follow up soon!`;
    leadSuccess.style.display = 'block';
    leadForm.reset();
    });
}

// Security Scan Demo
const securityScan = document.getElementById('securityScan');
const securityResult = document.getElementById('securityResult');

if (securityScan && securityResult) {
    securityScan.addEventListener('click', () => {
    securityResult.innerHTML = '<span class="scanning">Scanning for vulnerabilities...</span>';
    securityScan.disabled = true;
    setTimeout(() => {
        securityResult.innerHTML = `
            <div class="pass" style="margin-bottom: 12px;">✓ Scan complete — No critical issues found</div>
            <div class="item">SSL/TLS configured</div>
            <div class="item">Headers secure</div>
            <div class="item">No SQL injection risks</div>
            <div class="item">CSRF protection active</div>
            <p style="margin-top: 12px; color: var(--text-muted); font-size: 0.85rem;">Full pentest reports available on request.</p>
        `;
        securityScan.disabled = false;
    }, 2500);
    });
}
