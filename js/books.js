document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const bookInfo = this.closest('.book-info');
        bookInfo.classList.toggle('expanded');
        if (bookInfo.classList.contains('expanded')) {
            this.textContent = "Read Less";
        } else {
            this.textContent = "Read More";
        }
    });
});



