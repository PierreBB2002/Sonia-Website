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

document.addEventListener("DOMContentLoaded", function () {
    // Select all dropdown button elements
    const dropdownButtons = document.querySelectorAll('.dropdown-btn');

    dropdownButtons.forEach((button) => {
        const dropdownContent = button.nextElementSibling;

        // Toggle the dropdown visibility on button click
        button.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevents the click from closing immediately
            dropdownContent.classList.toggle('show');
        });
    });

    // Close any open dropdown if clicking outside
    document.addEventListener('click', function (event) {
        document.querySelectorAll('.dropdown-content').forEach((content) => {
            if (!content.contains(event.target) && !event.target.classList.contains('dropdown-btn')) {
                content.classList.remove('show');
            }
        });
    });
});




