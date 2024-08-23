const monkey = document.getElementById('monkey');
let monkeyX = 50;
let monkeySpeed = 5;

function moveMonkey() {
    monkeyX += monkeySpeed;
    if (monkeyX > window.innerWidth) {
        monkeyX = -60; // Voltar para a esquerda após sair da tela
    }
    monkey.style.left = monkeyX + 'px';
}

// Move o macaco a cada 30 milissegundos
setInterval(moveMonkey, 30);

// Adiciona suporte para teclado
document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft') {
        monkeyX -= monkeySpeed;
        if (monkeyX < -60) {
            monkeyX = window.innerWidth;
        }
        monkey.style.left = monkeyX + 'px';
    }
    if (e.code === 'ArrowRight') {
        monkeyX += monkeySpeed;
        if (monkeyX > window.innerWidth) {
            monkeyX = -60;
        }
        monkey.style.left = monkeyX + 'px';
    }
});
