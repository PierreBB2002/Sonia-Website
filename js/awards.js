const tapeContainer = document.querySelector('.tape-container');
const tape = document.querySelector('.tape');
let tapeWidth = tape.scrollWidth; // Total width of one tape

function duplicateTape() {
    // Duplicate the tape to create a seamless effect
    const clone = tape.cloneNode(true);
    tapeContainer.appendChild(clone);
}

function updateTapeWidth() {
    tapeWidth = tape.scrollWidth; // Recalculate the width on resize
    tapeContainer.style.width = `${tapeWidth * 2}px`; // Set container width to hold both tapes
}

function startInfiniteScroll() {
    // Start centered before beginning the animation
    tapeContainer.style.transform = `translateX(0)`; // Start centered

    let start = performance.now();
    
    function scrollFrame(now) {
        const elapsed = now - start;
        const progress = (elapsed / 10) % tapeWidth; // Scroll smoothly within bounds
        
        // Start scrolling once the images are loaded and centered
        tapeContainer.style.transform = `translateX(-${progress}px)`;

        requestAnimationFrame(scrollFrame); // Keep the animation running
    }

    setTimeout(() => {
        requestAnimationFrame(scrollFrame); // Start the animation after a slight delay
    }, 100); // Adjust the delay (100ms) if needed
}

window.addEventListener('resize', updateTapeWidth); // Handle resize events
duplicateTape(); // Duplicate tape to create a continuous loop
updateTapeWidth(); // Initial width setup
startInfiniteScroll(); // Start the scrolling animation
