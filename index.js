
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
};

// Function to create a heart element
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Randomize the animation delay and position
    const randomDelay = Math.random() * 1 + 's'; // Delay between 0 and 5 seconds
    const randomLeft = (25 + Math.random() * 50) + 'vw'; // Random position across the viewport width
    const rotation45 = Math.random() > 0.5 ? 45 : -45;
    const rotation = (Math.random() * 90) - rotation45;

    heart.style.transform = `rotate(${rotation}deg)`;
    heart.style.left = randomLeft;
    heart.style.animationDelay = randomDelay;

    return heart;
}

// Generate multiple hearts and add them to the container
const heartContainer = document.querySelector('.heart-container');
for (let i = 0; i < 6; i++) { // Adjust the number of hearts here
    const heart = createHeart();
    heartContainer.appendChild(heart);
}

// Optional: Regenerate hearts after animation ends
document.querySelectorAll('.heart').forEach(heart => {
    heart.addEventListener('animationiteration', () => {
        heart.style.left = (25 + Math.random() * 50) + 'vw';
    });
});