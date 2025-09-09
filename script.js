// JavaScript for mobile text rotation and responsive behavior
document.addEventListener('DOMContentLoaded', function() {
    const artText = document.getElementById('art-text');
    const banner = document.getElementById('banner');
    
    // Function to handle responsive text rotation
    function handleTextRotation() {
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            // Mobile: vertical text with rotation
            artText.style.writingMode = 'vertical-rl';
            artText.style.textOrientation = 'mixed';
            artText.style.transform = 'rotate(180deg)';
        } else {
            // Desktop: horizontal text
            artText.style.writingMode = 'horizontal-tb';
            artText.style.textOrientation = 'initial';
            artText.style.transform = 'rotate(0deg)';
        }
    }
    
    // Function to ensure full viewport coverage
    function ensureFullCoverage() {
        banner.style.width = '100vw';
        banner.style.height = '100vh';
        banner.style.minHeight = '100vh';
    }
    
    // Initial setup
    handleTextRotation();
    ensureFullCoverage();
    
    // Handle window resize
    window.addEventListener('resize', function() {
        handleTextRotation();
        ensureFullCoverage();
    });
    
    // Handle orientation change on mobile
    window.addEventListener('orientationchange', function() {
        setTimeout(function() {
            handleTextRotation();
            ensureFullCoverage();
        }, 100);
    });
});
