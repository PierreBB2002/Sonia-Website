document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const bookInfo = this.closest('.book-info');
        bookInfo.classList.toggle('expanded');
        if (bookInfo.classList.contains('expanded')) {
            this.textContent = "Read Less";
        } else {
            this.textContent = "Read More";
        }
    });
});

function showModal(title, description) {
    const modal = document.getElementById('modal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalDescription = modal.querySelector('.modal-description');

    // Set modal content
    modalTitle.textContent = title;
    modalDescription.textContent = description;

    // Display the modal
    modal.style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Event listener to close modal when clicking outside content
window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
});



