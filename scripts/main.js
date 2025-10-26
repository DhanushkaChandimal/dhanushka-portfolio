document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('timelineToggle');
    const timelineContainer = document.getElementById('timelineContainer');
    const toggleText = toggleBtn.querySelector('.toggle-text');
    const toggleIcon = toggleBtn.querySelector('i');
    
    let isHidden = false;
    
    toggleBtn.addEventListener('click', function() {
        if (!isHidden) {
            // Hide timeline
            timelineContainer.classList.add('hidden');
            toggleText.textContent = 'Show Timeline';
            toggleIcon.className = 'fas fa-eye';
            isHidden = true;

            // Smooth scroll to contacts section after hiding
            setTimeout(() => {
                const contactssSection = document.getElementById('contact');
                if (contactssSection) {
                    contactssSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        } else {
            // Show timeline
            timelineContainer.classList.remove('hidden');
            toggleText.textContent = 'Hide Timeline';
            toggleIcon.className = 'fas fa-eye-slash';
            isHidden = false;
        }
    });
});