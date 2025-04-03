document.addEventListener('DOMContentLoaded', () => {
    const fingerprintCircle = document.querySelector('.fingerprint-circle');
    let pressTimer;
    let progressInterval;
    let isLoading = false;

    // Handle click events (desktop)
    fingerprintCircle.addEventListener('click', () => {
        if (!isLoading) {
            startLoading();
        }
    });

    // Handle touch events (mobile)
    fingerprintCircle.addEventListener('touchend', (e) => {
        e.preventDefault();
        if (!isLoading) {
            startLoading();
        }
    });

    function startLoading() {
        isLoading = true;
        fingerprintCircle.classList.add('loading');
        
        // Add zoom effect
        const icon = document.querySelector('.fingerprint-icon');
        icon.classList.add('clicked');
        icon.addEventListener('animationend', () => {
            icon.classList.remove('clicked');
        }, { once: true });
        
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
        clearInterval(progressInterval);
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
