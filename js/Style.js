document.addEventListener('DOMContentLoaded', () => {
    const hexagonContainer = document.querySelector('.hexagon-container');
    const numHexagons = 10; // Number of hexagons

    for (let i = 0; i < numHexagons; i++) {
        const hexagon = document.createElement('div');
        hexagon.classList.add('hexagon');

        // Randomize position within the viewport
        const randomTop = Math.random() * 100 + '%'; // Randomize top position
        const randomLeft = Math.random() * 100 + '%'; // Randomize left position
        const randomDelay = Math.random() * 5; // Randomize animation delay

        hexagon.style.top = randomTop;
        hexagon.style.left = randomLeft;
        hexagon.style.animationDelay = `${randomDelay}s`; // Delay to stagger animation

        hexagonContainer.appendChild(hexagon);
    }
});



