// Get references to the HTML elements
const box = document.getElementById('box');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');

// Function to increase the size of the box
function increaseSize() {
    const currentWidth = parseFloat(window.getComputedStyle(box).width);
    const currentHeight = parseFloat(window.getComputedStyle(box).height);
    box.style.width = (currentWidth + 20) + 'px';
    box.style.height = (currentHeight + 20) + 'px';
}

// Function to decrease the size of the box
function decreaseSize() {
    const currentWidth = parseFloat(window.getComputedStyle(box).width);
    const currentHeight = parseFloat(window.getComputedStyle(box).height);
    if (currentWidth > 20 && currentHeight > 20) {
        box.style.width = (currentWidth - 20) + 'px';
        box.style.height = (currentHeight - 20) + 'px';
    }
}

// Event listeners for the buttons
increaseBtn.addEventListener('click', increaseSize);
decreaseBtn.addEventListener('click', decreaseSize);
