document.addEventListener('DOMContentLoaded', () => {
  const whatsappBtn = document.getElementById('whatsapp-btn');
  const splash = document.getElementById('splash');
  const bubblesContainer = document.getElementById('bubbles');

  // WhatsApp Logic
  whatsappBtn.addEventListener('click', () => {
    const phoneNumber = "5522998471977"; 
    const message = "Oie! Estou confirmando minha presença no aniversário da Lala (e também a minha paz de espírito, rs)! 🎉🍻";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  });

  // Splash Screen Logic
  setTimeout(() => {
    splash.classList.add('hidden');
    // Remove from DOM after transition
    setTimeout(() => splash.remove(), 800);
  }, 2500);

  // Bubble Generator Logic
  function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    // Random size between 5px and 15px
    const size = Math.random() * 10 + 5 + 'px';
    bubble.style.width = size;
    bubble.style.height = size;
    
    // Random horizontal position
    bubble.style.left = Math.random() * 100 + 'vw';
    
    // Random animation duration
    bubble.style.animationDuration = Math.random() * 3 + 4 + 's';
    
    bubblesContainer.appendChild(bubble);
    
    // Remove bubble after animation
    setTimeout(() => bubble.remove(), 7000);
  }

  // Generate bubbles periodically
  setInterval(createBubble, 300);
});
