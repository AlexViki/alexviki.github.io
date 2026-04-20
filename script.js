// Easing function for smooth deceleration (easeOutExpo)
const easeOutExpo = (t) => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

const initCounter = (id, target) => {
    const element = document.getElementById(id);
    const duration = 3000; // 4 seconds (як ви вказали)
    let startTimestamp = null;

    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;

        const progress = Math.min(timestamp - startTimestamp, duration);
        const progressRatio = progress / duration;

        // Apply easing function
        const easedProgress = easeOutExpo(progressRatio);

        // Calculate and set current value
        const currentValue = Math.floor(easedProgress * target);
        element.textContent = currentValue;

        if (progress < duration) {
            window.requestAnimationFrame(step);
        } else {
            // Guarantee it ends exactly on the target value
            element.textContent = target;
        }
    };

    // Best practice: start animation only when visually in the viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                window.requestAnimationFrame(step);
                observer.disconnect(); // Animate only once
            }
        });
    }, { threshold: 0.1 });

    observer.observe(element);
};

// Initialize counters when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initCounter('count-it', 15);
    initCounter('count-devops', 5);
});
