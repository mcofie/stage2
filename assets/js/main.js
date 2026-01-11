// Pitch Deck Data
const pitchDecks = {
    "amigo-lease": {
        name: "Amigo Lease",
        color: "#6C63FF",
        slides: [
            { type: "title", headline: "Amigo Lease", tagline: "Verified Roommate Finder" },
            { type: "split", headline: "The Problem", content: "Finding trustworthy roommates is a gamble. Scams, ghosting, and bad matches waste time and money." },
            { type: "split", headline: "The Solution", content: "Verified profiles, background checks, and smart lease matching. Find your perfect roommate, fast." },
            { type: "market", market: "$500M", marketLabel: "Rental Market", country: "Ghana", countryLabel: "Launch Market", flags: "🇬🇭" },
            { type: "metrics", headline: "Impact", metrics: [{ value: "10k+", label: "Users" }, { value: "98%", label: "Verified Profile Rate" }] },
            { type: "cta", headline: "Ready to Find Your Match?", link: "https://amigolease.com", linkText: "Visit Amigo Lease" }
        ]
    },
    "gatepass": {
        name: "GatePass",
        color: "#FF6B6B",
        slides: [
            { type: "title", headline: "GatePass", tagline: "The Video-Powered Event Marketplace" },
            { type: "split", headline: "The Problem", content: "Event discovery is static and boring. Flyers and descriptions don't capture the vibe." },
            { type: "split", headline: "The Solution", content: "Immersive video previews for every event. See it before you go. Feel the energy." },
            { type: "market", market: "$2B", marketLabel: "Event Industry", country: "West Africa", countryLabel: "Primary Region", flags: "🇬🇭 🇳🇬" },
            { type: "metrics", headline: "Traction", metrics: [{ value: "500+", label: "Events Hosted" }, { value: "50k", label: "Monthly Views" }] },
            { type: "cta", headline: "Discover Events Differently", link: "https://gatepass.so", linkText: "Explore GatePass" }
        ]
    },
    "happeningnow": {
        name: "HappeningNow",
        color: "#4ECDC4",
        slides: [
            { type: "title", headline: "HappeningNow", tagline: "Real-Time Event Board" },
            { type: "split", headline: "The Problem", content: "You're missing live events happening right now. Social media is noise, not signal." },
            { type: "split", headline: "The Solution", content: "A live 'departure board' for events. See what's happening now, near you, in real-time." },
            { type: "market", market: "Global", marketLabel: "Urban Centers", country: "Worldwide", countryLabel: "Availability", flags: "🌍" },
            { type: "cta", headline: "Never Miss a Moment", link: "https://happeningnow.online/", linkText: "Check HappeningNow" }
        ]
    },
    "itinero": {
        name: "Itinero",
        color: "#FFE66D",
        slides: [
            { type: "title", headline: "Itinero", tagline: "AI Travel Planner for Africa" },
            { type: "split", headline: "The Problem", content: "Planning African travel is fragmented. Guides are outdated, and logistics are complex." },
            { type: "split", headline: "The Solution", content: "AI-powered itineraries tailored for Africa. Local insights, smart routing, seamless booking." },
            { type: "market", market: "$5B", marketLabel: "Tourism Tech", country: "Pan-African", countryLabel: "Focus Area", flags: "🇬🇭 🇰🇪 🇿🇦" },
            { type: "cta", headline: "Plan Your African Adventure", link: "https://tryitinero.com", linkText: "Try Itinero" }
        ]
    },
    "motor-ambos": {
        name: "Motor Ambos",
        color: "#95E1D3",
        slides: [
            { type: "title", headline: "Motor Ambos", tagline: "Car Owners ↔ Mechanics" },
            { type: "split", headline: "The Problem", content: "Finding a trusted mechanic is stressful. Overcharging and poor service are common." },
            { type: "split", headline: "The Solution", content: "A direct platform connecting car owners with vetted, reviewed mechanics. Transparent pricing." },
            { type: "market", market: "$300M", marketLabel: "Auto Services", country: "Ghana", countryLabel: "Operating In", flags: "🇬🇭" },
            { type: "cta", headline: "Find Your Mechanic", link: "https://motorambos.com", linkText: "Visit Motor Ambos" }
        ]
    },
    "rentbase": {
        name: "RentBase",
        color: "#A8E6CF",
        slides: [
            { type: "title", headline: "RentBase", tagline: "The Carfax for Rentals" },
            { type: "split", headline: "The Problem", content: "Rental fraud is rampant in Africa. Fake agents, forged agreements, lost deposits." },
            { type: "split", headline: "The Solution", content: "Verified agents, authenticated agreements, and transparent rental history. Trust, restored." },
            { type: "market", market: "$10B", marketLabel: "Real Estate", country: "Nigeria & Ghana", countryLabel: "Key Markets", flags: "🇳🇬 🇬🇭" },
            { type: "metrics", headline: "Trust", metrics: [{ value: "$2M+", label: "Assets Verified" }, { value: "0", label: "Fraud Incidents" }] },
            { type: "cta", headline: "Rent with Confidence", link: "https://rentbase.app/", linkText: "Explore RentBase" }
        ]
    },
    "stage-bloom": {
        name: "Stage & Bloom",
        color: "#DDA0DD",
        slides: [
            { type: "title", headline: "Stage & Bloom", tagline: "Vendor Discovery for Events" },
            { type: "split", headline: "The Problem", content: "Finding event vendors is chaotic. Endless calls, inconsistent quality, wasted time." },
            { type: "split", headline: "The Solution", content: "A curated marketplace for event vendors. Photographers, caterers, DJs—all vetted, all in one place." },
            { type: "market", market: "$1B", marketLabel: "Wedding/Events", country: "Ghana", countryLabel: "Initial Market", flags: "🇬🇭" },
            { type: "cta", headline: "Plan Your Perfect Event", link: "https://stageandbloom.co", linkText: "Browse Stage & Bloom" }
        ]
    },
    "lazypick": {
        name: "LazyPick",
        color: "#FFD93D",
        slides: [
            { type: "title", headline: "LazyPick", tagline: "End Decision Paralysis" },
            { type: "split", headline: "The Problem", content: "We waste hours scrolling Netflix/UberEats. 'What do you want?' is the most annoying question." },
            { type: "split", headline: "The Solution", content: "Tinder for Movies & Food. Swipe on options. When you match with friends, it's a go." },
            { type: "market", market: "Global", marketLabel: "Streaming Habits", country: "Worldwide", countryLabel: "Reach", flags: "🌎" },
            { type: "metrics", headline: "Engagement", metrics: [{ value: "15s", label: "Avg Decision Time" }, { value: "100%", label: "Argument Free" }] },
            { type: "cta", headline: "Stop Scrolling, Start Living", link: "https://lazypick.app", linkText: "Get LazyPick" }
        ]
    },
    "knitted": {
        name: "Knitted",
        color: "#F0E68C",
        slides: [
            { type: "title", headline: "Knitted", tagline: "Business OS for Tailors" },
            { type: "split", headline: "The Problem", content: "Tailors lose track of orders and measurements. Paper notes get lost, customers get frustrated." },
            { type: "split", headline: "The Solution", content: "A digital workspace for tailors. Record measurements, manage orders, delight customers." },
            { type: "market", market: "$4B", marketLabel: "Fashion Tech", country: "West Africa", countryLabel: "Target Region", flags: "🇬🇭 🇳🇬" },
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
// Magnetic Buttons Logic
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn, .project-btn, .pitch-nav-btn, .pitch-close, .pitch-mute, .slide-cta-btn');

    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Magnetic pull strength
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });
}

// Call this on load and after modal render
document.addEventListener('DOMContentLoaded', () => {
    createModal();
    attachCardListeners();
    initMagneticButtons();
});

// Update renderSlides to re-attach magnetic listeners to new elements
const originalRenderSlides = renderSlides;
renderSlides = function () {
    originalRenderSlides();
    // Re-init for new slide buttons
    setTimeout(initMagneticButtons, 100);
};

// ... existing code ...

function createModal() {
    modal = document.createElement('div');
    modal.id = 'pitch-modal';
    modal.className = 'pitch-modal';
    modal.innerHTML = `
        <div class="pitch-modal-content">
            <button class="pitch-close" aria-label="Close">&times;</button>
            <button class="pitch-mute" aria-label="Toggle Sound">🔊</button>
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
    const muteBtn = modal.querySelector('.pitch-mute');

    // Event Listeners
    closeBtn.addEventListener('click', closeModal);
    muteBtn.addEventListener('click', () => {
        SoundFX.toggleMute();
        updateMuteIcon();
    });
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
                    <h2 class="slide-headline slide-headline-large">${slide.headline}</h2>
                </div>
            `;
        } else if (slide.type === 'split') {
            // Converted to text-only centered layout
            contentHTML = `
                <div class="slide-content slide-content-focused">
                    <h2 class="slide-headline">${slide.headline}</h2>
                    <p class="slide-text slide-text-large">${slide.content}</p>
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
        } else if (slide.type === 'market') {
            contentHTML = `
                <div class="slide-content">
                    <h2 class="slide-headline">Market & Reach</h2>
                    <div class="metrics-grid">
                        <div class="metric-item">
                            <span class="metric-value" style="color: ${currentProduct.color}">${slide.market}</span>
                            <span class="metric-label">${slide.marketLabel}</span>
                        </div>
                        <div class="metric-item">
                            ${slide.flags ? `<span class="metric-flag">${slide.flags}</span>` : ''}
                            <span class="metric-value" style="color: ${currentProduct.color}">${slide.country}</span>
                            <span class="metric-label">${slide.countryLabel}</span>
                        </div>
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

/* ===================== */
/* Audio Engine (Web Audio API & HTML5 Audio) */
/* ===================== */
const SoundFX = {
    ctx: null,
    enabled: true,
    bgAudio: null,
    isMuted: false,
    playlist: [
        'assets/audio/lofi-1.mp3',
        'assets/audio/lofi-2.mp3'
    ],

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }

        if (!this.bgAudio) {
            this.bgAudio = new Audio();
            this.bgAudio.loop = true;
            this.bgAudio.volume = 0; // Start silent
        }
    },

    playOscillator(freq, type, duration, startTime = 0, volume = 0.1) {
        if (!this.ctx || !this.enabled || this.isMuted) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + startTime);

        gain.gain.setValueAtTime(0, this.ctx.currentTime + startTime);
        gain.gain.linearRampToValueAtTime(volume, this.ctx.currentTime + startTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + startTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + startTime);
        osc.stop(this.ctx.currentTime + startTime + duration);
    },

    // A futuristic, airy "swish" for slide transitions
    playSlideChange() {
        this.init();
        if (this.isMuted) return;
        // Layer 1: High sine blip
        this.playOscillator(800, 'sine', 0.15, 0, 0.05);
        // Layer 2: Filter sweep
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(150, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(600, this.ctx.currentTime + 0.2);

        gain.gain.setValueAtTime(0.02, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.2);
    },

    playModalOpen() {
        this.init();
        this.fadeInMusic();
        if (this.isMuted) return;

        const now = this.ctx ? this.ctx.currentTime : 0;
        this.playOscillator(261.63, 'sine', 0.6, 0.0); // C4
        this.playOscillator(329.63, 'sine', 0.6, 0.05); // E4
        this.playOscillator(392.00, 'sine', 0.6, 0.1); // G4
        this.playOscillator(493.88, 'sine', 1.0, 0.15, 0.05); // B4
    },

    playModalClose() {
        this.init();
        this.fadeOutMusic();
        if (this.isMuted) return;

        this.playOscillator(400, 'sine', 0.2, 0);
        this.playOscillator(200, 'sine', 0.3, 0.1);
    },

    fadeInMusic() {
        if (!this.bgAudio || this.isMuted) return;

        // Pick a random track
        const randomTrack = this.playlist[Math.floor(Math.random() * this.playlist.length)];
        this.bgAudio.src = randomTrack;

        this.bgAudio.currentTime = 0;
        this.bgAudio.play().catch(e => console.log("Audio play failed:", e));

        // Simple fade in
        let vol = 0;
        this.bgAudio.volume = vol;
        const fade = setInterval(() => {
            if (vol < 0.3) { // Max volume 0.3
                vol += 0.02;
                this.bgAudio.volume = Math.min(vol, 0.3);
            } else {
                clearInterval(fade);
            }
        }, 100);
    },

    fadeOutMusic() {
        if (!this.bgAudio) return;
        let vol = this.bgAudio.volume;
        const fade = setInterval(() => {
            if (vol > 0.01) {
                vol -= 0.02;
                this.bgAudio.volume = Math.max(vol, 0);
            } else {
                clearInterval(fade);
                this.bgAudio.pause();
                this.bgAudio.currentTime = 0;
            }
        }, 100);
    },

    toggleMute() {
        this.isMuted = !this.isMuted;
        if (this.isMuted) {
            if (this.bgAudio) this.bgAudio.pause();
        } else {
            if (this.bgAudio && modal.classList.contains('active')) {
                this.bgAudio.play();
                this.bgAudio.volume = 0.3;
            }
        }
        return this.isMuted;
    }
};

// Hook into existing functions
const originalOpenModal = openModal;
openModal = function (productId) {
    SoundFX.init();
    SoundFX.playModalOpen();
    originalOpenModal(productId);
    updateMuteIcon();
};

const originalCloseModal = closeModal;
closeModal = function () {
    SoundFX.playModalClose();
    originalCloseModal();
};

const originalNavigateSlide = navigateSlide;
navigateSlide = function (direction) {
    const newSlide = currentSlide + direction;
    if (newSlide >= 0 && newSlide < currentProduct.slides.length) {
        SoundFX.playSlideChange();
    }
    originalNavigateSlide(direction);
};

const originalGoToSlide = goToSlide;
goToSlide = function (index) {
    if (index !== currentSlide) {
        SoundFX.playSlideChange();
    }
    originalGoToSlide(index);
};

// UI Helpers for Audio
function updateMuteIcon() {
    const muteBtn = document.querySelector('.pitch-mute');
    if (muteBtn) {
        muteBtn.textContent = SoundFX.isMuted ? '🔇' : '🔊';
        muteBtn.style.opacity = SoundFX.isMuted ? '0.5' : '1';
    }
}
