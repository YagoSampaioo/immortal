function togglePergaminho() {
    const pergaminho = document.getElementById('pergaminho');
    const pergaminhoFechado = document.querySelector('.pergaminho-fechado');
    const loading = document.getElementById('loading');
    
    if (pergaminho.style.display === 'none') {
        loading.style.display = 'block';
        setTimeout(() => {
            pergaminho.style.display = 'block';
            pergaminhoFechado.style.display = 'none';
            loading.style.display = 'none';
        }, 1000); // Simula um carregamento de 1 segundo
    } else {
        pergaminho.style.display = 'none';
        pergaminhoFechado.style.display = 'block';
    }
}

// Evento de clique no amuleto
document.getElementById('amulet').addEventListener('click', function() {
    const pergaminho = document.getElementById('pergaminho');
    const pergaminhoFechado = document.querySelector('.pergaminho-fechado');
    const loading = document.getElementById('loading');
    
    loading.style.display = 'block';
    setTimeout(() => {
        pergaminho.style.display = 'block';
        pergaminhoFechado.style.display = 'none';
        loading.style.display = 'none';
    }, 1000); // Simula um carregamento de 1 segundo
});

// Eventos de hover no amuleto
document.getElementById('amulet').addEventListener('mouseover', function() {
    this.style.filter = 'brightness(1.5)';
    this.style.transform = 'translate(-50%, -50%) scale(1.1)';
});

document.getElementById('amulet').addEventListener('mouseout', function() {
    this.style.filter = 'brightness(1)';
    this.style.transform = 'translate(-50%, -50%) scale(1)';
});

// Fechar pergaminho ao clicar fora
document.addEventListener('click', function(event) {
    const pergaminho = document.getElementById('pergaminho');
    const pergaminhoFechado = document.querySelector('.pergaminho-fechado');
    const amulet = document.getElementById('amulet');
    
    if (!pergaminho.contains(event.target) && 
        event.target !== pergaminhoFechado && 
        event.target !== amulet) {
        pergaminho.style.display = 'none';
        pergaminhoFechado.style.display = 'block'; // Mostra o pergaminho fechado novamente
    }
});

document.addEventListener('click', function() {
  document.getElementById('backgroundMusic').play();
}, { once: true });