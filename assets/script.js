document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript loaded");

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const pageId = e.target.dataset.page;
        
            navigateToPage(pageId);
            // Update URL without reload
            history.pushState({page: pageId}, '', `#${pageId}`);
        });
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', (e) => {
        if (e.state && e.state.page) {
           
            navigateToPage(e.state.page);
        }
    });

    // Handle direct access with hash
    const hash = window.location.hash.slice(1);
    if (hash) {
        
        navigateToPage(hash);
    }
});

function navigateToPage(pageId) {
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        
        page.classList.remove('active');
    });
    
    // Show selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
       
        selectedPage.classList.add('active');
    } else {
        console.error(`Page not found: ${pageId}`);
    }
}