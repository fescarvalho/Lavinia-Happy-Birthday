document.addEventListener('DOMContentLoaded', () => {
  const whatsappBtn = document.getElementById('whatsapp-btn');
  const splash = document.getElementById('splash');
  const particlesContainer = document.getElementById('particles');
  const mainCard = document.getElementById('main-card');

  // 1. WhatsApp Logic
  whatsappBtn.addEventListener('click', () => {
    const phoneNumber = "5522998471977";
    const message = "Oie! Estou confirmando minha presença no aniversário da Lalá!!! 🎉🍻";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  });

  // 2. GSAP Animations Timeline
  const tl = gsap.timeline({ paused: true });

  tl.to('.glass-card', { 
    opacity: 1, 
    duration: 1.2, 
    ease: "power2.out" 
  })
  .to('.main-anim', {
    y: 0,
    opacity: 1,
    stagger: 0.1,
    duration: 0.8,
    ease: "back.out(1.2)"
  }, "-=0.6")
  .from('.lala', {
    scale: 0,
    rotation: -20,
    duration: 1,
    ease: "elastic.out(1, 0.5)"
  }, "-=1")
  .from('.vinte', {
    scale: 1.5,
    opacity: 0,
    duration: 1.2,
    ease: "expo.out"
  }, "-=0.8");

  // 3. Splash Screen & Trigger Animations
  setTimeout(() => {
    if (splash) {
      splash.classList.add('hidden');
      setTimeout(() => {
        splash.remove();
        tl.play(); // Start GSAP timeline after splash is gone
      }, 1000);
    }
  }, 2500);

  // 4. Interactive Tilt Effect (Desktop)
  if (window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth) - 0.5;
      const yPos = (clientY / innerHeight) - 0.5;

      gsap.to(mainCard, {
        rotationY: xPos * 15,
        rotationX: -yPos * 15,
        ease: "power2.out",
        duration: 0.6
      });
    });
  }

  // 5. Celebration Particles Logic
  function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Choose between gold and white/silver
    const isGold = Math.random() > 0.3;
    particle.style.background = isGold ? '#FFD600' : '#FFFFFF';
    
    const size = Math.random() * 8 + 4 + 'px';
    particle.style.width = size;
    particle.style.height = size;
    
    const startX = Math.random() * 100 + 'vw';
    particle.style.left = startX;
    particle.style.top = '-10px';
    
    particlesContainer.appendChild(particle);
    
    // Animate falling and drifting
    gsap.to(particle, {
      y: window.innerHeight + 20,
      x: `+=${Math.random() * 100 - 50}`,
      rotation: Math.random() * 360,
      duration: Math.random() * 3 + 3,
      ease: "none",
      onComplete: () => particle.remove()
    });
  }

  // Generate particles periodically
  setInterval(() => {
    if (!document.hidden) createParticle();
  }, 200);
});
