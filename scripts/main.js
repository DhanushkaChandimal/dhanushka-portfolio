document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('timelineToggle');
    const timelineContainer = document.getElementById('timelineContainer');
    const toggleText = toggleBtn.querySelector('.toggle-text');
    const toggleIcon = toggleBtn.querySelector('i');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const form = document.querySelector('.form');

    let isHidden = false;

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when nav link is clicked
    navMenu.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
    
    // Timeline Toggle Functionality
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

    // Form submission with FormSubmit
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitButton = this.querySelector('.form-button');
            const originalText = submitButton.textContent;
            
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            
            const formData = new FormData(this);
            
            formData.append('_captcha', 'false');
            formData.append('_subject', 'New message from Personal Website');
            
            try {
                const response = await fetch('https://formsubmit.co/dhanushkamcr@gmail.com', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    alert('✅ Thank you for your message! I will get back to you soon.');
                    this.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                alert('❌ Oops! Something went wrong. Please try again or email me directly at dhanushkamcr@gmail.com');
                console.error('Form submission error:', error);
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = originalText;
            }
        });
    }

    // Back to Top Button
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
        });
    });
});