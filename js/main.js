document.addEventListener('DOMContentLoaded', () => {
    const fingerprintCircle = document.querySelector('.fingerprint-circle');
    let pressTimer;
    let isLoading = false;

    // Handle click events (desktop)
    fingerprintCircle.addEventListener('click', startLoading);

    // Handle touch events (mobile)
    fingerprintCircle.addEventListener('touchend', (e) => {
        e.preventDefault(); // Prevent default touch behavior
        startLoading();
    });

    function startLoading() {
        if (isLoading) return;
        
        isLoading = true;
        fingerprintCircle.classList.add('loading');
        
        
        // Start the timer
        pressTimer = setTimeout(() => {
            stopLoading();
            redirectToSlogan();
        }, 120000);
    }

    function stopLoading() {
        if (!isLoading) return;
        
        isLoading = false;
        fingerprintCircle.classList.remove('loading');
        clearTimeout(pressTimer);
    }

    function redirectToSlogan() {
        // Add fade out effect before redirect
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            window.location.href = 'slogan.html';
        }, 500);
    }
});
