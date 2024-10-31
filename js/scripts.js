// Function to show book details modal
function showBookDetails(bookId) {
    const modal = document.getElementById('book-details-modal');
    const bookDetails = document.getElementById('book-details');
    
    let bookContent = '';
    
    // Example of different book details based on book ID
    switch(bookId) {
        case 'book1':
            bookContent = '<h2>Thunderbird 1</h2><p>Brief synopsis and book awards here...</p>';
            break;
        case 'book2':
            bookContent = '<h2>Thunderbird 2</h2><p>Brief synopsis and book awards here...</p>';
            break;
        case 'book3':
            bookContent = '<h2>Thunderbird 3</h2><p>Brief synopsis and book awards here...</p>';
            break;
        case 'book4':
            bookContent = '<h2>Wondrous Journeys</h2><p>Brief synopsis and book awards here...</p>';
            break;
        case 'book5':
            bookContent = '<h2>When It Rained Fish</h2><p>Brief synopsis and book awards here...</p>';
            break;
        case 'book6':
            bookContent = '<h2>King of Tales</h2><p>Brief synopsis and book awards here...</p>';
            break;
        default:
            bookContent = '<h2>Unknown Book</h2><p>No details available.</p>';
    }
    
    bookDetails.innerHTML = bookContent;
    modal.style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('book-details-modal');
    modal.style.display = 'none';
}

// Close the modal when clicking outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById('book-details-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
