function openForm(event) {
    event.preventDefault();
    console.log(event)
    const chiName = event.target.chineseName.value;
    const engName = event.target.englishName.value;
    const nikName = event.target.nickName.value;
    const unit = event.target.unit.value;
    const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSdiIoVgW-B7moZRar6OuTSlbafFumpql6J4ravu9sNIjy8MUg/viewform?usp=pp_url&entry.1054860012=${encodeURIComponent(chiName)}&entry.999030798=${encodeURIComponent(engName)}&entry.1099405596=${encodeURIComponent(nikName)}&entry.1365299596=${encodeURIComponent(unit)}`;

    window.open(formUrl, "_blank");
}



function addScrollClickListeners() {
    // Sticky Banner Scroll Logic
    let lastScrollTop = 0;
    let scrollThreshold = 100; // Show banner after scrolling 100px
    const stickyBanner = document.getElementById('stickyBanner');
    window.addEventListener('scroll', function () {

        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        // Check if we've scrolled past the threshold
        if (scrollTop > scrollThreshold) {
            // Check scroll direction
            if (scrollTop < lastScrollTop) {
                // Scrolling up - show banner
                stickyBanner.classList.add('visible');
            } else {
                // Scrolling down - hide banner
                stickyBanner.classList.remove('visible');
            }
        } else {
            // Near top of page - hide banner
            stickyBanner.classList.remove('visible');
        }

        lastScrollTop = scrollTop;
    });

    // Hide banner when clicking on it (optional)
    stickyBanner.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Scroll Animation Function
function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Countdown calculation
function updateCountdown() {
    const eventDate = new Date('2025-08-09'); // August 9th, 2025
    const currentDate = new Date();
    const timeDifference = eventDate - currentDate;
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    
    const countdownElement = document.getElementById('countdown-text');
    if (countdownElement) {
        if (daysLeft > 0) {
            countdownElement.textContent = `${daysLeft} days left`;
        } else if (daysLeft === 0) {
            countdownElement.textContent = 'Today is the day!';
        } else {
            countdownElement.textContent = 'Event has passed';
        }
    }
}


// Update countdown on page load
document.addEventListener('DOMContentLoaded', () => {
    addScrollClickListeners();
    initScrollAnimations();
});