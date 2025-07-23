// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Show loading screen
    showLoadingScreen();
    
    // Initialize all animations and interactions
    setTimeout(() => {
        initFloatingHearts();
        initRandomFlowerEffects();
        initClickableFlowers();
        initMagicalCursor();
        initLoveWords();
        
        // Hide loading screen after initialization
        hideLoadingScreen();
    }, 3000);
});

// Loading Screen Functions
function showLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.style.display = 'flex';
    }
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.style.animation = 'fadeOut 1s ease-out forwards';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            // Show welcome message only once after loading
            showSubtleNotification("🎉 Hoş geldin aşkım! 🎉");
        }, 1000);
    }
}

// Show Section functionality
function showSection(sectionId) {
    // Hide all sections
    const allSections = document.querySelectorAll('.section-content');
    allSections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Show selected section with animation
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
        selectedSection.style.animation = 'none';
        
        // Trigger reflow to restart animation
        selectedSection.offsetHeight;
        selectedSection.style.animation = 'heartReveal 1.2s ease-out';
        
        // Create subtle section notifications
        const notifications = {
            'cake-section': "🎂 Doğum Günü Kutlaması",
            'love-message': "💕 Aşk Mektubun",
            'sweet-words': "🥰 Sana Olan Hislerim",
            'flower-garden': "🌸 Çiçek Bahçesi",
            'interactive-hearts': "💖 Sevgi Kelimelerim",
            'photo-gallery': "📸 Fotoğraf Galerimiz",
            'surprise-section': "🎁 Özel Sürpriz"
        };
        
        if (notifications[sectionId]) {
            setTimeout(() => {
                showSubtleNotification(notifications[sectionId]);
            }, 300);
        }
        
        // Add special effects for each section
        if (sectionId === 'flower-garden') {
            setTimeout(() => {
                createRandomFlowerEffect();
            }, 1000);
        } else if (sectionId === 'sweet-words') {
            setTimeout(() => {
                animateAllCards();
            }, 800);
        } else if (sectionId === 'interactive-hearts') {
            setTimeout(() => {
                animateHeartButtons();
            }, 600);
        } else if (sectionId === 'photo-gallery') {
            setTimeout(() => {
                animatePhotos();
            }, 700);
        }
    }
}

// Animate Card functionality
function animateCard(card) {
    // Create heart explosion around card
    const rect = card.getBoundingClientRect();
    const hearts = ['💕', '💖', '🤍', '🌹', '💗'];
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = 'fixed';
            heart.style.left = (rect.left + rect.width/2 + Math.random() * 100 - 50) + 'px';
            heart.style.top = (rect.top + rect.height/2 + Math.random() * 100 - 50) + 'px';
            heart.style.fontSize = '20px';
            heart.style.zIndex = '1000';
            heart.style.pointerEvents = 'none';
            heart.style.animation = 'heartPulse 1.5s ease-out forwards';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 1500);
        }, i * 100);
    }
    
    // Animate the card
    card.style.transform = 'scale(1.05) rotateY(10deg)';
    card.style.boxShadow = '0 20px 40px rgba(214, 51, 132, 0.4)';
    
    setTimeout(() => {
        card.style.transform = 'scale(1) rotateY(0deg)';
        card.style.boxShadow = '0 8px 25px rgba(214, 51, 132, 0.15)';
    }, 300);
    
    // Show special message
    const cardTitle = card.querySelector('h3').textContent;
    showSubtleNotification(`🥰 ${cardTitle}`);
}

// Blow Candles functionality
function blowCandles() {
    const flames = document.querySelectorAll('.flame');
    const candles = document.querySelectorAll('.candle');
    const cake = document.querySelector('.cake');
    
    // Create wind effect
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const wind = document.createElement('div');
            wind.innerHTML = '💨';
            wind.style.position = 'absolute';
            wind.style.top = (Math.random() * 40 - 20) + 'px';
            wind.style.left = (Math.random() * 100 - 50) + 'px';
            wind.style.fontSize = '1.5rem';
            wind.style.animation = 'windBlow 1.5s ease-out forwards';
            wind.style.zIndex = '200';
            
            cake.appendChild(wind);
            
            setTimeout(() => {
                if (wind.parentNode) {
                    wind.parentNode.removeChild(wind);
                }
            }, 1500);
        }, i * 100);
    }
    
    // Blow out candles one by one
    flames.forEach((flame, index) => {
        setTimeout(() => {
            flame.style.animation = 'flameBlowOut 0.5s ease-out forwards';
            
            // Create smoke effect
            setTimeout(() => {
                const smoke = document.createElement('div');
                smoke.innerHTML = '💨';
                smoke.style.position = 'absolute';
                smoke.style.top = '-15px';
                smoke.style.left = '-2px';
                smoke.style.fontSize = '12px';
                smoke.style.animation = 'smokeRise 2s ease-out forwards';
                smoke.style.zIndex = '150';
                
                candles[index].appendChild(smoke);
                
                setTimeout(() => {
                    if (smoke.parentNode) {
                        smoke.parentNode.removeChild(smoke);
                    }
                }, 2000);
            }, 500);
        }, index * 200);
    });
    
    // Show celebration message
    setTimeout(() => {
        createFloatingMessage("🎉 Yeni Yaşın Kutlu Olsun Busemm 💕 Bütün dileklerin gerçek olsun! 🎂💕 Seni çok seviyorum ömrüm! 🌹", 5000);
        
        // Create celebration confetti
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.innerHTML = ['🎉', '🎊', '🌟', '💖', '🎈'][Math.floor(Math.random() * 5)];
                confetti.style.position = 'fixed';
                confetti.style.top = '10%';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.fontSize = '2rem';
                confetti.style.animation = 'confettiFall 3s ease-out forwards';
                confetti.style.zIndex = '1000';
                
                document.body.appendChild(confetti);
                
                setTimeout(() => {
                    if (confetti.parentNode) {
                        confetti.parentNode.removeChild(confetti);
                    }
                }, 3000);
            }, i * 100);
        }
    }, 1500);
    
    // Relight candles after 5 seconds
    setTimeout(() => {
        flames.forEach(flame => {
            flame.style.animation = 'enhancedFlicker 0.8s ease-in-out infinite alternate';
        });
        showSubtleNotification("🕯️ Mumlar tekrar yandı! Daha nice yaşlara... 💕");
    }, 8000);
}

// Simple Music Control
let isPlaying = false;
let backgroundMusic = null;

// Initialize music when page loads
document.addEventListener('DOMContentLoaded', function() {
    backgroundMusic = document.getElementById('backgroundMusic');
    const playPauseBtn = document.getElementById('playPauseBtn');
    
    if (backgroundMusic) {
        backgroundMusic.volume = 0.6; // Fixed volume
        
        // Music event listeners
        backgroundMusic.addEventListener('play', function() {
            playPauseBtn.classList.add('playing');
            isPlaying = true;
            document.getElementById('playIcon').textContent = '⏸️';
        });
        
        backgroundMusic.addEventListener('pause', function() {
            playPauseBtn.classList.remove('playing');
            isPlaying = false;
            document.getElementById('playIcon').textContent = '🎵';
        });
        
        backgroundMusic.addEventListener('ended', function() {
            // Auto restart when song ends
            backgroundMusic.currentTime = 0;
            backgroundMusic.play();
        });
        
        // Auto-start music when user first clicks anywhere
        document.addEventListener('click', function startMusic() {
            if (backgroundMusic && !isPlaying) {
                backgroundMusic.play().then(() => {
                    // Music started successfully
                }).catch(error => {
                    console.log('Autoplay prevented:', error);
                });
                // Remove this listener after first try
                document.removeEventListener('click', startMusic);
            }
        }, { once: true });
    }
});

function toggleMusic() {
    const playIcon = document.getElementById('playIcon');
    const playPauseBtn = document.getElementById('playPauseBtn');
    
    if (!backgroundMusic) {
        return;
    }
    
    if (isPlaying) {
        backgroundMusic.pause();
        playIcon.textContent = '🎵';
        isPlaying = false;
    } else {
        backgroundMusic.play().then(() => {
            playIcon.textContent = '⏸️';
            isPlaying = true;
        }).catch(error => {
            // Silent fail - no notifications for cleaner experience
            console.log('Müzik çalınamadı:', error);
        });
    }
}

// Water Flower functionality
function waterFlower(flowerPot) {
    const flower = flowerPot.querySelector('.rose, .tulip');
    const pot = flowerPot.querySelector('.pot');
    const originalEmoji = flower.innerHTML;
    
    // Animate pot shake
    pot.style.animation = 'potShake 0.5s ease-in-out';
    
    // Create enhanced water drops
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const drop = document.createElement('div');
            drop.innerHTML = '💧';
            drop.style.position = 'absolute';
            drop.style.top = '-25px';
            drop.style.left = (10 + Math.random() * 20) + 'px';
            drop.style.fontSize = '16px';
            drop.style.animation = 'enhancedWaterDrop 1.2s ease-in forwards';
            drop.style.zIndex = '100';
            
            flowerPot.appendChild(drop);
            
            setTimeout(() => {
                if (drop.parentNode) {
                    drop.parentNode.removeChild(drop);
                }
            }, 1200);
        }, i * 150);
    }
    
    // Create sparkle effects
    setTimeout(() => {
        for (let j = 0; j < 6; j++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.innerHTML = '✨';
                sparkle.style.position = 'absolute';
                sparkle.style.top = (Math.random() * 60 - 20) + 'px';
                sparkle.style.left = (Math.random() * 50 - 10) + 'px';
                sparkle.style.fontSize = '14px';
                sparkle.style.animation = 'flowerSparkle 1s ease-out forwards';
                sparkle.style.zIndex = '100';
                
                flowerPot.appendChild(sparkle);
                
                setTimeout(() => {
                    if (sparkle.parentNode) {
                        sparkle.parentNode.removeChild(sparkle);
                    }
                }, 1000);
            }, j * 100);
        }
    }, 600);
    
    // Animate flower growth with multiple stages
    flower.style.transition = 'all 0.6s ease';
    flower.style.transform = 'scale(1.4) rotate(5deg)';
    flower.style.filter = 'brightness(1.3) saturate(1.2)';
    
    // Change to blooming flower temporarily with glow effect
    setTimeout(() => {
        flower.style.textShadow = '0 0 10px rgba(255, 105, 180, 0.8)';
        if (originalEmoji === '🤍') {
            flower.innerHTML = '🌹';
        } else if (originalEmoji === '🌹') {
            flower.innerHTML = '🌺';
        } else if (originalEmoji === '🌷') {
            flower.innerHTML = '🌸';
        }
    }, 600);
    
    // Reset after animation with gentle transition
    setTimeout(() => {
        flower.style.transition = 'all 1s ease';
        flower.style.transform = 'scale(1)';
        flower.style.filter = 'none';
        flower.style.textShadow = 'none';
        flower.innerHTML = originalEmoji;
    }, 2500);
    
    showSubtleNotification("🌱 Çiçeğin büyüdü ve çiçek açtı!");
}

// Surprise button functionality
function showSurprise() {
    const surpriseMessage = document.getElementById('surprise');
    const surpriseBtn = document.querySelector('.surprise-btn');
    
    if (surpriseMessage.style.display === 'none' || surpriseMessage.style.display === '') {
        surpriseMessage.style.display = 'block';
        surpriseBtn.textContent = '🥰 Teşekkür Ederim Ömrüm! 🥰';
        surpriseBtn.style.background = 'linear-gradient(45deg, #4caf50, #2e7d32)';
        
        // Create confetti effect
        createConfetti();
        
        // Create special floating message
        setTimeout(() => {
            createFloatingMessage("🎊 Mutlu Yıllar Busem! 🎊", 4000);
        }, 500);
        
        // Add celebration sound effect (visual)
        celebrationEffect();
    } else {
        surpriseMessage.style.display = 'none';
        surpriseBtn.textContent = '🎁 Sürprizi Aç Ömrüm! 🎁';
        surpriseBtn.style.background = 'linear-gradient(45deg, #e91e63, #ad1457)';
    }
}

// Create floating confetti effect
function createConfetti() {
    const confettiEmojis = ['🎊', '🎉', '✨', '💖', '🌟', '💕', '🎈', '🎁'];
    const container = document.body;
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.innerHTML = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-50px';
            confetti.style.fontSize = (Math.random() * 20 + 15) + 'px';
            confetti.style.zIndex = '1000';
            confetti.style.pointerEvents = 'none';
            confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear forwards`;
            
            container.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 5000);
        }, i * 50);
    }
}

// Add confetti animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
    
    @keyframes magicalFloat {
        0%, 100% { transform: translateY(0px) scale(1); opacity: 1; }
        50% { transform: translateY(-30px) scale(1.2); opacity: 0.8; }
    }
    
    @keyframes heartPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.3); }
    }
    
    @keyframes enhancedWaterDrop {
        0% { 
            transform: translateY(0px) scale(1);
            opacity: 1;
        }
        50% {
            transform: translateY(30px) scale(1.2);
            opacity: 0.8;
        }
        100% { 
            transform: translateY(70px) scale(0.5);
            opacity: 0;
        }
    }
    
    @keyframes flowerSparkle {
        0% { 
            transform: scale(0.5) rotate(0deg);
            opacity: 0;
        }
        50% {
            transform: scale(1.2) rotate(180deg);
            opacity: 1;
        }
        100% { 
            transform: scale(0.3) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes potShake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-2px); }
        75% { transform: translateX(2px); }
    }
    
    @keyframes loveWordGlow {
        0%, 100% { 
            background: linear-gradient(45deg, #ff6b9d, #e91e63);
            transform: scale(1);
        }
        50% { 
            background: linear-gradient(45deg, #ff9ff3, #f06292);
            transform: scale(1.1);
        }
    }
    
    .magical-cursor {
        position: fixed;
        width: 20px;
        height: 20px;
        pointer-events: none;
        z-index: 9999;
        transition: all 0.1s ease;
    }
    
    .floating-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 255, 255, 0.95);
        padding: 20px 40px;
        border-radius: 50px;
        font-family: 'Dancing Script', cursive;
        font-size: 1.5rem;
        color: #d63384;
        box-shadow: 0 10px 30px rgba(214, 51, 132, 0.3);
        z-index: 10000;
        animation: messageAppear 1s ease-out;
        border: 2px solid rgba(214, 51, 132, 0.2);
    }
    
    @keyframes messageAppear {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
        100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    }
    
    .subtle-notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(255, 255, 255, 0.95);
        color: #d63384;
        padding: 12px 20px;
        border-radius: 25px;
        font-family: 'Poppins', sans-serif;
        font-size: 0.9rem;
        font-weight: 600;
        box-shadow: 0 4px 15px rgba(214, 51, 132, 0.2);
        z-index: 9999;
        animation: notificationSlideIn 0.5s ease-out;
        border: 2px solid rgba(214, 51, 132, 0.1);
        max-width: 250px;
    }
    
    @keyframes notificationSlideIn {
        0% { 
            opacity: 0; 
            transform: translateX(100px);
        }
        100% { 
            opacity: 1; 
            transform: translateX(0);
        }
    }
    
    @keyframes notificationSlideOut {
        0% { 
            opacity: 1; 
            transform: translateX(0);
        }
        100% { 
            opacity: 0; 
            transform: translateX(100px);
        }
    }
    
    @keyframes fadeOut {
        0% { opacity: 1; }
        100% { opacity: 0; }
    }
    
    @keyframes heartSlideIn {
        0% { 
            transform: translate(0, 0) scale(1) rotate(0deg);
            opacity: 1;
        }
        100% { 
            transform: translate(var(--x), var(--y)) scale(0.3) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes starTwinkle {
        0% { 
            transform: translate(0, 0) scale(0.5);
            opacity: 0;
        }
        50% {
            transform: translate(calc(var(--x) * 0.5), calc(var(--y) * 0.5)) scale(1.5);
            opacity: 1;
        }
        100% { 
            transform: translate(var(--x), var(--y)) scale(0.2);
            opacity: 0;
        }
    }
    
    @keyframes flowerFloat {
        0% { 
            transform: translate(0, 0) scale(1) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: translate(calc(var(--x) * 0.7), calc(var(--y) * 0.7)) scale(1.2) rotate(180deg);
            opacity: 0.8;
        }
        100% { 
            transform: translate(var(--x), var(--y)) scale(0.4) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes heartBurst {
        0% { 
            transform: translate(0, 0) scale(0.8);
            opacity: 1;
        }
        30% {
            transform: translate(calc(var(--x) * 0.3), calc(var(--y) * 0.3)) scale(1.3);
            opacity: 1;
        }
        100% { 
            transform: translate(var(--x), var(--y)) scale(0.1);
            opacity: 0;
        }
    }
    
    @keyframes windBlow {
        0% { 
            opacity: 0;
            transform: translateX(-30px) scale(0.5);
        }
        50% {
            opacity: 1;
            transform: translateX(0px) scale(1.2);
        }
        100% { 
            opacity: 0;
            transform: translateX(30px) scale(0.8);
        }
    }
    
    @keyframes flameBlowOut {
        0% { 
            opacity: 1;
            transform: scale(1);
        }
        100% { 
            opacity: 0;
            transform: scale(0.1) translateY(-10px);
        }
    }
    
    @keyframes smokeRise {
        0% { 
            opacity: 0.8;
            transform: translateY(0px) scale(0.5);
        }
        100% { 
            opacity: 0;
            transform: translateY(-30px) scale(1.5);
        }
    }
    
    @keyframes confettiFall {
        0% { 
            opacity: 1;
            transform: translateY(0px) rotate(0deg);
        }
        100% { 
            opacity: 0;
            transform: translateY(100vh) rotate(360deg);
        }
    }
    
    @keyframes photoReveal {
        0% { 
            opacity: 0;
            transform: scale(0.8) rotate(-10deg);
        }
        100% { 
            opacity: 1;
            transform: scale(1) rotate(-2deg);
        }
    }
    
    
    
    @media (max-width: 768px) {
        .floating-message {
            font-size: 1.2rem;
            padding: 15px 30px;
            max-width: 80vw;
            text-align: center;
        }
        
        .subtle-notification {
            top: 10px;
            right: 10px;
            font-size: 0.8rem;
            padding: 8px 15px;
            max-width: 200px;
        }
    }
`;
document.head.appendChild(style);

// Initialize additional floating hearts
function initFloatingHearts() {
    setInterval(() => {
        if (Math.random() > 0.7) { // 30% chance every interval
            createRandomHeart();
        }
    }, 2000);
}

// Create random floating heart
function createRandomHeart() {
    const hearts = ['💖', '💕', '💗', '💝', '❤️', '🧡', '💛', '💚', '💜'];
    const heart = document.createElement('div');
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.bottom = '-50px';
    heart.style.fontSize = (Math.random() * 15 + 20) + 'px';
    heart.style.zIndex = '5';
    heart.style.pointerEvents = 'none';
    heart.style.animation = `floatHearts ${Math.random() * 2 + 4}s ease-in-out forwards`;
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 6000);
}

// Random flower effects
function initRandomFlowerEffects() {
    const flowers = document.querySelectorAll('.flower, .rose, .tulip');
    
    flowers.forEach(flower => {
        flower.addEventListener('mouseenter', () => {
            flower.style.animation = 'heartPulse 0.6s ease-in-out';
            createMiniSparkles(flower);
        });
        
        flower.addEventListener('animationend', () => {
            flower.style.animation = flower.classList.contains('flower') ? 
                'flowerSway 2s ease-in-out infinite' : 
                'bloomAnimation 2s ease-in-out infinite';
        });
    });
}

// Make flowers clickable for special effects
function initClickableFlowers() {
    const allFlowers = document.querySelectorAll('.flower, .rose, .tulip, .bg-flower');
    
    allFlowers.forEach(flower => {
        flower.style.cursor = 'pointer';
        flower.addEventListener('click', (e) => {
            // Prevent event if it's a background flower
            if (flower.classList.contains('bg-flower')) return;
            
            e.stopPropagation();
            createBloomEffect(e.target);
            playFlowerClickEffect(e.pageX, e.pageY);
        });
    });
}

// Create bloom effect on flower click
function createBloomEffect(element) {
    const originalSize = element.style.fontSize || '2rem';
    element.style.transition = 'all 0.3s ease';
    element.style.fontSize = '3rem';
    element.style.filter = 'brightness(1.5)';
    
    setTimeout(() => {
        element.style.fontSize = originalSize;
        element.style.filter = 'none';
    }, 300);
}

// Create mini sparkles around element
function createMiniSparkles(element) {
    const rect = element.getBoundingClientRect();
    const sparkles = ['✨', '⭐', '🌟', '💫'];
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = sparkles[Math.floor(Math.random() * sparkles.length)];
            sparkle.style.position = 'fixed';
            sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
            sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
            sparkle.style.fontSize = '12px';
            sparkle.style.zIndex = '1000';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.animation = 'magicalFloat 1s ease-out forwards';
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 1000);
        }, i * 100);
    }
}

// Magical cursor effect
function initMagicalCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'magical-cursor';
    cursor.innerHTML = '✨';
    document.body.appendChild(cursor);
    
    let mouseX = 0, mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = (mouseX - 10) + 'px';
        cursor.style.top = (mouseY - 10) + 'px';
        
        // Randomly create sparkle trail
        if (Math.random() > 0.9) {
            createSparkleTrail(mouseX, mouseY);
        }
    });
    
    // Hide cursor when not moving
    let cursorTimeout;
    document.addEventListener('mousemove', () => {
        cursor.style.opacity = '1';
        clearTimeout(cursorTimeout);
        cursorTimeout = setTimeout(() => {
            cursor.style.opacity = '0.3';
        }, 1000);
    });
}

// Create sparkle trail
function createSparkleTrail(x, y) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.fontSize = '10px';
    sparkle.style.zIndex = '999';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.animation = 'magicalFloat 0.8s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
        }
    }, 800);
}

// Play flower click effect
function playFlowerClickEffect(x, y) {
    const clickEffects = ['💕', '💖', '🌸', '🌺', '🦋'];
    
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const effect = document.createElement('div');
            effect.innerHTML = clickEffects[Math.floor(Math.random() * clickEffects.length)];
            effect.style.position = 'fixed';
            effect.style.left = (x + Math.random() * 40 - 20) + 'px';
            effect.style.top = (y + Math.random() * 40 - 20) + 'px';
            effect.style.fontSize = '20px';
            effect.style.zIndex = '1000';
            effect.style.pointerEvents = 'none';
            effect.style.animation = 'heartPulse 0.8s ease-out forwards';
            
            document.body.appendChild(effect);
            
            setTimeout(() => {
                if (effect.parentNode) {
                    effect.parentNode.removeChild(effect);
                }
            }, 800);
        }, i * 200);
    }
}

// Create subtle notification (top-right corner)
function showSubtleNotification(text, duration = 2000) {
    const notification = document.createElement('div');
    notification.className = 'subtle-notification';
    notification.innerHTML = text;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'notificationSlideOut 0.5s ease-out forwards';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 500);
        }
    }, duration);
}

// Keep floating message for special occasions only
function createFloatingMessage(text, duration = 4000) {
    // Remove any existing floating message first
    const existingMessage = document.querySelector('.floating-message');
    if (existingMessage) {
        existingMessage.parentNode.removeChild(existingMessage);
    }
    
    const message = document.createElement('div');
    message.className = 'floating-message';
    message.innerHTML = text;
    
    // Add click to close functionality
    message.addEventListener('click', () => {
        if (message.parentNode) {
            message.style.animation = 'messageAppear 0.5s ease-out reverse';
            setTimeout(() => {
                if (message.parentNode) {
                    message.parentNode.removeChild(message);
                }
            }, 500);
        }
    });
    
    // Add close button
    const closeBtn = document.createElement('div');
    closeBtn.innerHTML = '✕';
    closeBtn.style.cssText = `
        position: absolute;
        top: 10px;
        right: 15px;
        cursor: pointer;
        font-size: 1.2rem;
        color: #d63384;
        font-weight: bold;
    `;
    message.appendChild(closeBtn);
    
    document.body.appendChild(message);
    
    // Auto close after duration
    const autoCloseTimer = setTimeout(() => {
        if (message.parentNode) {
            message.style.animation = 'messageAppear 0.5s ease-out reverse';
            setTimeout(() => {
                if (message.parentNode) {
                    message.parentNode.removeChild(message);
                }
            }, 500);
        }
    }, duration);
    
    // Clear auto close if manually closed
    message.addEventListener('click', () => {
        clearTimeout(autoCloseTimer);
    });
}

// Celebration effect
function celebrationEffect() {
    // Change background temporarily
    const body = document.body;
    const originalBackground = body.style.background;
    
    body.style.background = 'linear-gradient(135deg, #ffeef8 0%, #ffe4e6 25%, #ffcccb 50%, #ffc0cb 75%, #ffb6c1 100%)';
    
    // Create rainbow effect on title
    const title = document.querySelector('.title');
    const originalColor = title.style.color;
    
    let colorIndex = 0;
    const rainbowColors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
    
    const colorInterval = setInterval(() => {
        title.style.color = rainbowColors[colorIndex % rainbowColors.length];
        colorIndex++;
    }, 200);
    
    // Reset after celebration
    setTimeout(() => {
        body.style.background = originalBackground;
        title.style.color = originalColor;
        clearInterval(colorInterval);
    }, 3000);
}

// Add some Easter eggs with love words
document.addEventListener('keydown', (e) => {
    // Secret key combinations with love words
    if (e.ctrlKey && e.key === 'l') { // Ctrl + L for "Love"
        e.preventDefault();
        showSubtleNotification("💕 Seni seviyorum ömrüm!");
        createConfetti();
    }
    
    if (e.ctrlKey && e.key === 'b') { // Ctrl + B for "Busem"
        e.preventDefault();
        showSubtleNotification("🌹 Busem, en güzel isim!");
        createRandomFlowerEffect();
    }
    
    if (e.ctrlKey && e.key === 'h') { // Ctrl + H for "Hayatım"
        e.preventDefault();
        showSubtleNotification("💖 Sen benim hayatımsın!");
        celebrationEffect();
    }
    
    if (e.key === 'Enter') {
        // Enter key creates a heart at random position
        createRandomHeart();
        showSubtleNotification("💕 Kalp sürprizi!");
    }
    
    if (e.key === ' ') { // Space bar for surprise
        e.preventDefault();
        showSubtleNotification("✨ Sürpriz efekt!");
        createMiniSparkles(document.body);
    }
});

// Double click anywhere for surprise (keep floating message for special moments)
document.addEventListener('dblclick', (e) => {
    playFlowerClickEffect(e.pageX, e.pageY);
    const surpriseMessages = [
        "🌹 Sen benim her şeyimsin hayatım! 🌹",
        "💕 Ömrüm, seni çok seviyorum! 💕",
        "✨ Güzelim, sen harikasın! ✨",
        "🎂 Doğum günün kutlu olsun busem! 🎂"
    ];
    const randomMessage = surpriseMessages[Math.floor(Math.random() * surpriseMessages.length)];
    createFloatingMessage(randomMessage, 2500);
});

// Long press support for mobile
let longPressTimer;
document.addEventListener('touchstart', (e) => {
    longPressTimer = setTimeout(() => {
        // Long press creates special effect
        const touch = e.touches[0];
        playFlowerClickEffect(touch.pageX, touch.pageY);
        showSubtleNotification("🥰 Uzun dokunma sürprizi!");
        
        // Vibrate if supported
        if (navigator.vibrate) {
            navigator.vibrate(200);
        }
    }, 1000);
});

document.addEventListener('touchend', () => {
    clearTimeout(longPressTimer);
});

document.addEventListener('touchmove', () => {
    clearTimeout(longPressTimer);
});

// Initialize Love Words interactions
function initLoveWords() {
    const loveWords = document.querySelectorAll('.love-word');
    
    loveWords.forEach(word => {
        word.addEventListener('click', () => {
            word.style.animation = 'loveWordGlow 0.8s ease-in-out';
            
            const wordText = word.textContent;
            const messages = {
                'Ömrüm': "💕 Sen benim ömrümün anlamısın! 💕",
                'Busem': "🌹 En güzel isim senin için! 🌹",
                'Güzelim': "✨ Sen gerçekten çok güzelsin! ✨",
                'Hayatım': "💖 Sen benim hayatımın merkezindesin! 💖"
            };
            
            if (messages[wordText]) {
                showSubtleNotification(messages[wordText]);
            }
            
            setTimeout(() => {
                word.style.animation = 'loveWordPulse 2s ease-in-out infinite';
            }, 800);
        });
        
        // Add hover effect for desktop
        word.addEventListener('mouseenter', () => {
            createMiniSparkles(word);
        });
    });
}

// Animate All Cards
function animateAllCards() {
    const cards = document.querySelectorAll('.sweet-card');
    
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = 'cardFloat 1s ease-out';
            createMiniSparkles(card);
        }, index * 300);
    });
}

// Create Random Flower Effect
function createRandomFlowerEffect() {
    const flowerEmojis = ['🌹', '🌷', '🌸', '🌺', '🤍', '💐'];
    
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const flower = document.createElement('div');
            flower.innerHTML = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
            flower.style.position = 'fixed';
            flower.style.left = Math.random() * 100 + 'vw';
            flower.style.top = '-50px';
            flower.style.fontSize = (Math.random() * 15 + 20) + 'px';
            flower.style.zIndex = '500';
            flower.style.pointerEvents = 'none';
            flower.style.animation = `floatHearts ${Math.random() * 2 + 3}s ease-in-out forwards`;
            
            document.body.appendChild(flower);
            
            setTimeout(() => {
                if (flower.parentNode) {
                    flower.parentNode.removeChild(flower);
                }
            }, 5000);
        }, i * 300);
    }
}

// Enhanced Mobile Touch Support
function initMobileTouchSupport() {
    // Add touch feedback for menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('touchstart', () => {
            item.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        item.addEventListener('touchend', () => {
            setTimeout(() => {
                item.style.transform = '';
            }, 200);
        });
    });
    
    // Add touch feedback for cards
    const cards = document.querySelectorAll('.sweet-card');
    cards.forEach(card => {
        card.addEventListener('touchstart', () => {
            card.style.transform = 'scale(1.02)';
        });
        
        card.addEventListener('touchend', () => {
            setTimeout(() => {
                card.style.transform = '';
            }, 300);
        });
    });
    
    // Add haptic feedback simulation
    const interactiveElements = document.querySelectorAll('.menu-item, .sweet-card, .flower-pot, .surprise-btn, .love-word');
    interactiveElements.forEach(element => {
        element.addEventListener('touchstart', () => {
            // Visual feedback for touch
            element.style.filter = 'brightness(1.1)';
            setTimeout(() => {
                element.style.filter = '';
            }, 150);
        });
    });
}

// Auto-show first section on load
function autoShowWelcome() {
    setTimeout(() => {
        showSection('cake-section');
    }, 1000);
}

// Initialize page load animations
window.addEventListener('load', () => {
    // Add gentle page entrance animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Initialize mobile support
    initMobileTouchSupport();
    
    // Welcome message - only on desktop, mobile users get it after loading
    if (window.innerWidth > 768) {
        setTimeout(() => {
            createFloatingMessage("🎉 Hoş geldin aşkım! 🎉", 3000);
        }, 1500);
    }
    
    // Auto show first section
    if (window.innerWidth > 768) {
        autoShowWelcome();
    }
});



// Heart Surprise Functions
function triggerHeartSurprise(heartButton, type) {
    const surpriseTypes = {
        'love': ['💕', 'Seni çok seviyorum ömrüm! Kalbimdeki bu aşk sadece senin için atıyor. Sen benim en büyük aşkımsın ve her gün seni daha çok seviyorum. İyi ki varsın hayatımda güzelim!'],
        'soul': ['💖', 'Sen benim ruh eşimsin Busem! Ruhumun yarısı sende, kalbim tamamen senin. Seninle kendimi tamamlanmış hissediyorum. İyi ki seni bulmuşum hayatım!'],
        'beautiful': ['💗', 'Sen çok güzelsin canım! Dünyanın en güzel insanısın benim için. Hem dışın hem de ruhun o kadar güzel ki... Sen mükemmelsin ömrüm!'],
        'life': ['💝', 'Sen benim hayatımın anlamısın! Sensiz hiçbir şey anlamlı gelmiyor. Sen varsan dünya cennet, sen yoksan hiçbir şey önemli değil. İyi ki varsın!']
    };
    
    const surprise = surpriseTypes[type];
    const emoji = surprise[0];
    const message = surprise[1];
    
    // Animate the heart button
    heartButton.style.animation = 'heartButtonExplode 0.5s ease-out';
    
    // Create explosion effect with different types
    createDifferentExplosion(heartButton, type);
    
    // Show surprise message
    setTimeout(() => {
        createFloatingMessage(`${emoji} ${message}`, 4000);
    }, 300);
    
    // Reset animation
    setTimeout(() => {
        heartButton.style.animation = 'heartButtonFloat 3s ease-in-out infinite';
    }, 500);
}

function createDifferentExplosion(element, type) {
    const rect = element.getBoundingClientRect();
    
    const effectTypes = {
        'love': {
            emojis: ['💕', '❤️', '💖', '💗', '💘'],
            animation: 'heartSlideIn',
            count: 8
        },
        'soul': {
            emojis: ['⭐', '✨', '🌟', '💫', '⭐'],
            animation: 'starTwinkle',
            count: 10
        },
        'beautiful': {
            emojis: ['🌸', '🌺', '🌷', '🌹', '💐'],
            animation: 'flowerFloat',
            count: 6
        },
        'life': {
            emojis: ['💕', '💖', '💗', '💝', '❤️'],
            animation: 'heartBurst',
            count: 12
        }
    };
    
    const effect = effectTypes[type];
    
    for (let i = 0; i < effect.count; i++) {
        setTimeout(() => {
            const explosion = document.createElement('div');
            explosion.innerHTML = effect.emojis[Math.floor(Math.random() * effect.emojis.length)];
            explosion.style.position = 'fixed';
            explosion.style.left = (rect.left + rect.width/2) + 'px';
            explosion.style.top = (rect.top + rect.height/2) + 'px';
            explosion.style.fontSize = '1.5rem';
            explosion.style.zIndex = '1000';
            explosion.style.pointerEvents = 'none';
            
            const angle = (i / effect.count) * 360;
            const distance = 80 + Math.random() * 60;
            const x = Math.cos(angle * Math.PI / 180) * distance;
            const y = Math.sin(angle * Math.PI / 180) * distance;
            
            explosion.style.animation = `${effect.animation} 2s ease-out forwards`;
            explosion.style.setProperty('--x', x + 'px');
            explosion.style.setProperty('--y', y + 'px');
            
            document.body.appendChild(explosion);
            
            setTimeout(() => {
                if (explosion.parentNode) {
                    explosion.parentNode.removeChild(explosion);
                }
            }, 2000);
        }, i * 80);
    }
}

// Photo Functions
function showPhotoDetails(photoFrame) {
    // Just add shimmer effect, no message
    photoFrame.style.filter = 'brightness(1.2) saturate(1.3)';
    setTimeout(() => {
        photoFrame.style.filter = 'none';
    }, 1000);
}

function animatePhotos() {
    const photos = document.querySelectorAll('.photo-frame');
    photos.forEach((photo, index) => {
        setTimeout(() => {
            photo.style.animation = 'photoReveal 1s ease-out';
            createMiniSparkles(photo);
        }, index * 200);
    });
}



// Animation Functions for New Sections
function animateHeartButtons() {
    const hearts = document.querySelectorAll('.heart-button');
    hearts.forEach((heart, index) => {
        setTimeout(() => {
            heart.style.animation = 'heartButtonExplode 0.8s ease-out';
            setTimeout(() => {
                heart.style.animation = 'heartButtonFloat 3s ease-in-out infinite';
            }, 800);
        }, index * 150);
    });
} 