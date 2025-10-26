document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('timelineToggle');
    const toggleText = toggleBtn.querySelector('.toggle-text');
    const toggleIcon = toggleBtn.querySelector('i');
    
    let isHidden = false;
    
    toggleBtn.addEventListener('click', function() {
        if (!isHidden) {
            toggleText.textContent = 'Show Timeline';
            toggleIcon.className = 'fas fa-eye';
            isHidden = true;
        } else {
            toggleText.textContent = 'Hide Timeline';
            toggleIcon.className = 'fas fa-eye-slash';
            isHidden = false;
        }
    });
});