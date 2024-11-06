// Função para alternar a visibilidade do pergaminho
function togglePergaminho() {
    const pergaminho = document.getElementById('pergaminho');
    const pergaminhoFechado = document.querySelector('.pergaminho-fechado');
    
    if (pergaminho.style.display === 'none') {
        pergaminho.style.display = 'block';
        pergaminhoFechado.style.display = 'none'; // Esconde o pergaminho fechado
    } else {
        pergaminho.style.display = 'none';
        pergaminhoFechado.style.display = 'block'; // Mostra o pergaminho fechado
    }
}

// Evento de clique no amuleto
document.getElementById('amulet').addEventListener('click', function() {
    const pergaminho = document.getElementById('pergaminho');
    const pergaminhoFechado = document.querySelector('.pergaminho-fechado');
    
    pergaminho.style.display = 'block';
    pergaminhoFechado.style.display = 'none'; // Esconde o pergaminho fechado
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