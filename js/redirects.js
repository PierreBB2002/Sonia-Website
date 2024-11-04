document.addEventListener("DOMContentLoaded", function () {
    const path = window.location.pathname;
    const possiblePages = ["index", "bio", "books", "awards", "meetingTheReaders"];
    
    possiblePages.forEach(page => {
        if (path === `/${page}`) {
            window.location.replace(`${page}.html`);
        }
    });
});
