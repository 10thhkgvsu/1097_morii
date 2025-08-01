
const disc = document.getElementById('dvd-disc');
let isShattered = false;

disc.addEventListener('click', function () {
    if (!isShattered) {
        shatterDisc();
        isShattered = true;
    } else {
        resetDisc();
        isShattered = false;
    }
});

function shatterDisc() {
    const pieces = [];
    const numPieces = 12;

    // Create pieces
    for (let i = 0; i < numPieces; i++) {
        const piece = document.createElement('div');
        piece.className = 'disc-piece';
        piece.style.background = getRandomGradient();
        document.querySelector('.disc-container').appendChild(piece);
        pieces.push(piece);
    }

    // Hide original disc
    disc.style.opacity = '0';

    // Animate pieces
    pieces.forEach((piece, index) => {
        const angle = (index / numPieces) * 2 * Math.PI;
        const distance = 200 + Math.random() * 100;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        const rotation = Math.random() * 720 - 360;

        setTimeout(() => {
            piece.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
            piece.style.opacity = '0';
        }, 50);
    });

    // Clean up pieces after animation
    setTimeout(() => {
        pieces.forEach(piece => piece.remove());
    }, 2000);
}

function resetDisc() {
    disc.style.opacity = '1';
    disc.style.transform = 'scale(1)';
}

function getRandomGradient() {
    const colors = [
        'conic-gradient(from 0deg, #ff00ff, #8000ff, #0080ff, #00ffff)',
        'conic-gradient(from 45deg, #8000ff, #0080ff, #00ffff, #ff00ff)',
        'conic-gradient(from 90deg, #0080ff, #00ffff, #ff00ff, #8000ff)',
        'conic-gradient(from 135deg, #00ffff, #ff00ff, #8000ff, #0080ff)',
        'linear-gradient(45deg, #ff00ff, #8000ff)',
        'linear-gradient(135deg, #0080ff, #00ffff)',
        'radial-gradient(circle, #8000ff, #ff00ff)',
        'radial-gradient(circle, #00ffff, #0080ff)'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}