// Pitch Deck Data
const pitchDecks = {
    "amigo-lease": {
        name: "Amigo Lease",
        color: "#6C63FF",
        slides: [
            { type: "title", headline: "Amigo Lease", tagline: "Verified Roommate Finder", image: "assets/mobile.png" },
            { type: "split", headline: "The Problem", content: "Finding trustworthy roommates is a gamble. Scams, ghosting, and bad matches waste time and money.", image: "assets/dashboard.png" },
            { type: "split", headline: "The Solution", content: "Verified profiles, background checks, and smart lease matching. Find your perfect roommate, fast.", image: "assets/mobile.png" },
            { type: "metrics", headline: "Impact", metrics: [{ value: "10k+", label: "Users" }, { value: "98%", label: "Verified Profile Rate" }] },
            { type: "cta", headline: "Ready to Find Your Match?", link: "https://amigolease.com", linkText: "Visit Amigo Lease" }
        ]
    },
    "gatepass": {
        name: "GatePass",
        color: "#FF6B6B",
        slides: [
            { type: "title", headline: "GatePass", tagline: "The Video-Powered Event Marketplace", image: "assets/mobile.png" },
            { type: "split", headline: "The Problem", content: "Event discovery is static and boring. Flyers and descriptions don't capture the vibe.", image: "assets/dashboard.png" },
            { type: "split", headline: "The Solution", content: "Immersive video previews for every event. See it before you go. Feel the energy.", image: "assets/mobile.png" },
            { type: "metrics", headline: "Traction", metrics: [{ value: "500+", label: "Events Hosted" }, { value: "50k", label: "Monthly Views" }] },
            { type: "cta", headline: "Discover Events Differently", link: "https://gatepass.so", linkText: "Explore GatePass" }
        ]
    },
    "happeningnow": {
        name: "HappeningNow",
        color: "#4ECDC4",
        slides: [
            { type: "title", headline: "HappeningNow", tagline: "Real-Time Event Board", image: "assets/dashboard.png" },
            { type: "split", headline: "The Problem", content: "You're missing live events happening right now. Social media is noise, not signal.", image: "assets/mobile.png" },
            { type: "split", headline: "The Solution", content: "A live 'departure board' for events. See what's happening now, near you, in real-time.", image: "assets/dashboard.png" },
            { type: "cta", headline: "Never Miss a Moment", link: "https://happeningnow.online/", linkText: "Check HappeningNow" }
        ]
    },
    "itinero": {
        name: "Itinero",
        color: "#FFE66D",
        slides: [
            { type: "title", headline: "Itinero", tagline: "AI Travel Planner for Africa", image: "assets/mobile.png" },
            { type: "split", headline: "The Problem", content: "Planning African travel is fragmented. Guides are outdated, and logistics are complex.", image: "assets/dashboard.png" },
            { type: "split", headline: "The Solution", content: "AI-powered itineraries tailored for Africa. Local insights, smart routing, seamless booking.", image: "assets/mobile.png" },
            { type: "cta", headline: "Plan Your African Adventure", link: "https://tryitinero.com", linkText: "Try Itinero" }
        ]
    },
    "motor-ambos": {
        name: "Motor Ambos",
        color: "#95E1D3",
        slides: [
            { type: "title", headline: "Motor Ambos", tagline: "Car Owners ↔ Mechanics", image: "assets/dashboard.png" },
            { type: "split", headline: "The Problem", content: "Finding a trusted mechanic is stressful. Overcharging and poor service are common.", image: "assets/mobile.png" },
            { type: "split", headline: "The Solution", content: "A direct platform connecting car owners with vetted, reviewed mechanics. Transparent pricing.", image: "assets/dashboard.png" },
            { type: "cta", headline: "Find Your Mechanic", link: "https://motorambos.com", linkText: "Visit Motor Ambos" }
        ]
    },
    "rentbase": {
        name: "RentBase",
        color: "#A8E6CF",
        slides: [
            { type: "title", headline: "RentBase", tagline: "The Carfax for Rentals", image: "assets/mobile.png" },
            { type: "split", headline: "The Problem", content: "Rental fraud is rampant in Africa. Fake agents, forged agreements, lost deposits.", image: "assets/dashboard.png" },
            { type: "split", headline: "The Solution", content: "Verified agents, authenticated agreements, and transparent rental history. Trust, restored.", image: "assets/mobile.png" },
            { type: "metrics", headline: "Trust", metrics: [{ value: "$2M+", label: "Assets Verified" }, { value: "0", label: "Fraud Incidents" }] },
            { type: "cta", headline: "Rent with Confidence", link: "https://rentbase.app/", linkText: "Explore RentBase" }
        ]
    },
    "stage-bloom": {
        name: "Stage & Bloom",
        color: "#DDA0DD",
        slides: [
            { type: "title", headline: "Stage & Bloom", tagline: "Vendor Discovery for Events", image: "assets/dashboard.png" },
            { type: "split", headline: "The Problem", content: "Finding event vendors is chaotic. Endless calls, inconsistent quality, wasted time.", image: "assets/mobile.png" },
            { type: "split", headline: "The Solution", content: "A curated marketplace for event vendors. Photographers, caterers, DJs—all vetted, all in one place.", image: "assets/dashboard.png" },
            { type: "cta", headline: "Plan Your Perfect Event", link: "https://stageandbloom.co", linkText: "Browse Stage & Bloom" }
        ]
    },
    "knitted": {
        name: "Knitted",
        color: "#F0E68C",
        slides: [
            { type: "title", headline: "Knitted", tagline: "Business OS for Tailors", image: "assets/dashboard.png" },
            { type: "split", headline: "The Problem", content: "Tailors lose track of orders and measurements. Paper notes get lost, customers get frustrated.", image: "assets/mobile.png" },
            { type: "split", headline: "The Solution", content: "A digital workspace for tailors. Record measurements, manage orders, delight customers.", image: "assets/dashboard.png" },
            { type: "metrics", headline: "Efficiency", metrics: [{ value: "30%", label: "More Orders" }, { value: "100%", label: "Digital Workflow" }] },
            { type: "cta", headline: "Upgrade Your Tailoring Business", link: "https://getknitted.app", linkText: "Get Knitted" }
        ]
    }
};

// DOM Elements
let modal, modalContent, slideContainer, prevBtn, nextBtn, closeBtn, slideIndicators;
let currentProduct = null;
let currentSlide = 0;
let touchStartX = 0;
let touchEndX = 0;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createModal();
    attachCardListeners();
});

function createModal() {
    modal = document.createElement('div');
    modal.id = 'pitch-modal';
    modal.className = 'pitch-modal';
    modal.innerHTML = `
        <div class="pitch-modal-content">
            <button class="pitch-close" aria-label="Close">&times;</button>
            <div class="pitch-slides"></div>
            <div class="pitch-nav-wrapper">
                <button class="pitch-nav-btn pitch-prev" aria-label="Previous">←</button>
                <div class="pitch-indicators"></div>
                <button class="pitch-nav-btn pitch-next" aria-label="Next">→</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    modalContent = modal.querySelector('.pitch-modal-content');
    slideContainer = modal.querySelector('.pitch-slides');
    prevBtn = modal.querySelector('.pitch-prev');
    nextBtn = modal.querySelector('.pitch-next');
    closeBtn = modal.querySelector('.pitch-close');
    slideIndicators = modal.querySelector('.pitch-indicators');

    // Event Listeners
    closeBtn.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', () => navigateSlide(-1));
    nextBtn.addEventListener('click', () => navigateSlide(1));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Swipe & Keyboard
    modal.addEventListener('touchstart', (e) => touchStartX = e.changedTouches[0].screenX, { passive: true });
    modal.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    document.addEventListener('keydown', handleKeydown);
}

function attachCardListeners() {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
            if (e.target.closest('.project-btn')) return;
            const productId = card.dataset.product;
            if (productId && pitchDecks[productId]) {
                openModal(productId);
            }
        });
    });
}

function openModal(productId) {
    currentProduct = pitchDecks[productId];
    currentSlide = 0;

    // Set dynamic background accent color
    modal.style.setProperty('--modal-accent', currentProduct.color);

    renderSlides();
    updateSlide();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => {
        currentProduct = null;
        currentSlide = 0;
        slideContainer.innerHTML = ''; // Clean up
    }, 400); // Wait for transition
}

function renderSlides() {
    slideContainer.innerHTML = '';
    slideIndicators.innerHTML = '';

    currentProduct.slides.forEach((slide, index) => {
        const slideEl = document.createElement('div');
        slideEl.className = `pitch-slide pitch-slide-${slide.type}`;
        slideEl.style.setProperty('--accent-color', currentProduct.color);

        let contentHTML = '';

        if (slide.type === 'title') {
            contentHTML = `
                <div class="slide-content">
                    <span class="slide-tagline">${slide.tagline}</span>
                    <h2 class="slide-headline">${slide.headline}</h2>
                    ${slide.image ? `<img src="${slide.image}" class="slide-visual" style="max-height: 400px; margin-top: 30px;" alt="${slide.headline}">` : ''}
                </div>
            `;
        } else if (slide.type === 'split') {
            slideEl.classList.add('pitch-slide-split');
            contentHTML = `
                <div class="slide-half">
                    <h2 class="slide-headline">${slide.headline}</h2>
                    <p class="slide-text">${slide.content}</p>
                </div>
                <div class="slide-half">
                    <img src="${slide.image}" class="slide-visual" alt="${slide.headline}">
                </div>
            `;
        } else if (slide.type === 'metrics') {
            contentHTML = `
                <div class="slide-content">
                    <h2 class="slide-headline">${slide.headline}</h2>
                    <div class="metrics-grid">
                        ${slide.metrics.map(m => `
                            <div class="metric-item">
                                <span class="metric-value" style="color: ${currentProduct.color}">${m.value}</span>
                                <span class="metric-label">${m.label}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        } else if (slide.type === 'cta') {
            contentHTML = `
                <div class="slide-content">
                    <h2 class="slide-headline">${slide.headline}</h2>
                    <a href="${slide.link}" target="_blank" rel="noopener noreferrer" class="slide-cta-btn">
                        ${slide.linkText} →
                    </a>
                </div>
            `;
        }

        slideEl.innerHTML = contentHTML;
        slideContainer.appendChild(slideEl);

        // Indicator
        const dot = document.createElement('button');
        dot.className = 'pitch-indicator';
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        dot.addEventListener('click', () => goToSlide(index));
        slideIndicators.appendChild(dot);
    });
}

function updateSlide() {
    const slides = slideContainer.querySelectorAll('.pitch-slide');
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });

    const dots = slideIndicators.querySelectorAll('.pitch-indicator');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });

    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === currentProduct.slides.length - 1;
}

function navigateSlide(direction) {
    const newSlide = currentSlide + direction;
    if (newSlide >= 0 && newSlide < currentProduct.slides.length) {
        currentSlide = newSlide;
        updateSlide();
    }
}

function goToSlide(index) {
    currentSlide = index;
    updateSlide();
}

function handleSwipe() {
    const threshold = 50;
    if (touchEndX < touchStartX - threshold) navigateSlide(1); // Swipe Left -> Next
    if (touchEndX > touchStartX + threshold) navigateSlide(-1); // Swipe Right -> Prev
}

function handleKeydown(e) {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') navigateSlide(-1);
    if (e.key === 'ArrowRight') navigateSlide(1);
}
