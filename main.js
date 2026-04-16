document.addEventListener('DOMContentLoaded', () => {
  const whatsappBtn = document.getElementById('whatsapp-btn');
  
  whatsappBtn.addEventListener('click', () => {
    // ATENÇÃO: Substitua o número abaixo pelo número real do WhatsApp (apenas números, com código do país e DDD)
    // Exemplo: 5511999999999 (55 = Brasil, 11 = DDD, 999999999 = Número)
    const phoneNumber = "5599999999999"; 
    
    // Mensagem pré-pronta
    const message = "Oie! Estou confirmando minha presença no aniversário da Lala (e também a minha paz de espírito, rs)! 🎉🍻";
    
    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Cria o link do WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Abre em uma nova aba
    window.open(whatsappUrl, '_blank');
  });
});
