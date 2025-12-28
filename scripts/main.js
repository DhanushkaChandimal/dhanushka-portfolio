document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('timelineToggle');
    const timelineContainer = document.getElementById('timelineContainer');
    const toggleText = toggleBtn.querySelector('.toggle-text');
    const toggleIcon = toggleBtn.querySelector('i');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    let isHidden = false;

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    toggleBtn.addEventListener('click', function() {
        if (!isHidden) {
            // Hide timeline
            timelineContainer.classList.add('hidden');
            toggleText.textContent = 'Show Timeline';
            toggleIcon.className = 'fas fa-eye';
            isHidden = true;

            // Smooth scroll to projects section after hiding
            setTimeout(() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
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