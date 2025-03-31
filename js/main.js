document.addEventListener('DOMContentLoaded', () => {
    const fingerprintCircle = document.querySelector('.fingerprint-circle');
    let pressTimer;
    let isLoading = false;

    // Handle mouse events (desktop)
    fingerprintCircle.addEventListener('mousedown', startLoading);
    fingerprintCircle.addEventListener('mouseup', stopLoading);
    fingerprintCircle.addEventListener('mouseleave', stopLoading);

    // Handle touch events (mobile)
    fingerprintCircle.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevent default touch behavior
        startLoading();
    });
    fingerprintCircle.addEventListener('touchend', stopLoading);
    fingerprintCircle.addEventListener('touchcancel', stopLoading);

    function startLoading() {
        if (isLoading) return;
        
        isLoading = true;
        fingerprintCircle.classList.add('loading');
        
        // Start the timer
        pressTimer = setTimeout(() => {
            stopLoading();
            // Redirect to slogan page after scan complete
            redirectToSlogan();
        }, 10000);
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
