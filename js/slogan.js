document.addEventListener('DOMContentLoaded', () => {
    // Get the first div in body
    const firstDiv = document.body.querySelector('div');
    
    // Add fade out animation
    if (firstDiv) {
        firstDiv.style.opacity = '1';
        firstDiv.style.transition = 'opacity 1s ease';
        
        setTimeout(() => {
            firstDiv.style.opacity = '0';
            
            // Remove div after fade out
            setTimeout(() => {
                firstDiv.remove();
            }, 1000);
        }, 3000); // Wait 3 seconds before starting fade out
    }
}); 