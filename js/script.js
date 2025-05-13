// AML Expert System Javascript

document.addEventListener('DOMContentLoaded', function() {
    // Check if AOS is available before using it
    const hasAOS = typeof AOS !== 'undefined';
    
    // Refresh AOS on window resize for better responsiveness
    if (hasAOS) {
        window.addEventListener('resize', function() {
            setTimeout(function() {
                AOS.refresh();
            }, 100);
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
              window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Refresh AOS animations after scrolling if AOS is available
            if (hasAOS) {
                setTimeout(function() {
                    AOS.refresh();
                }, 500);
            }
        });
    });

    // Back to top button functionality
    const createBackToTopButton = () => {
        // Create button element
        const backToTopBtn = document.createElement('button');
        backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTopBtn.className = 'back-to-top';
        document.body.appendChild(backToTopBtn);
        
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        // Scroll to top when button is clicked
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    };
    
    createBackToTopButton();

    // Add current year to copyright statement
    const updateCopyrightYear = () => {
        const copyrightYear = document.querySelector('footer p:first-of-type');
        if (copyrightYear) {
            const currentYear = new Date().getFullYear();
            copyrightYear.innerHTML = copyrightYear.innerHTML.replace(/\d{4}/, currentYear);
        }
    };
    
    updateCopyrightYear();    // Mobile navigation toggle functionality
    const setupMobileNav = () => {
        const nav = document.querySelector('nav');
        const logo = document.querySelector('.logo');
        
        // Create hamburger menu button if it doesn't exist
        if (!document.querySelector('.menu-toggle')) {
            const menuToggle = document.createElement('button');
            menuToggle.className = 'menu-toggle';
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
            
            // Insert after the logo
            nav.insertBefore(menuToggle, logo.nextSibling);
            
            // Toggle the nav-links visibility
            menuToggle.addEventListener('click', () => {
                const navLinks = document.querySelector('.nav-links');
                navLinks.classList.toggle('show');
                
                // Change icon based on state
                if (navLinks.classList.contains('show')) {
                    menuToggle.innerHTML = '<i class="fas fa-times"></i>';
                } else {
                    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
            
            // Close mobile menu when clicking on links
            const navLinkItems = document.querySelectorAll('.nav-links a');
            navLinkItems.forEach(item => {
                item.addEventListener('click', () => {
                    if (window.innerWidth <= 768) {
                        const navLinks = document.querySelector('.nav-links');
                        navLinks.classList.remove('show');
                        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                });
            });
        }
    };
      setupMobileNav();
    
    // Re-setup mobile nav on window resize
    window.addEventListener('resize', () => {
        setupMobileNav();
        updateLogoVisibility();
    });
    
    // Function to ensure correct logo visibility based on screen size
    const updateLogoVisibility = () => {
        const isMobile = window.innerWidth <= 768;
        const logoFull = document.querySelector('.logo-full');
        const logoShort = document.querySelector('.logo-short');
        
        if (logoFull && logoShort) {
            if (isMobile) {
                logoFull.style.display = 'none';
                logoShort.style.display = 'inline-block';
            } else {
                logoFull.style.display = 'inline-block';
                logoShort.style.display = 'none';
            }
        }
    };
    
    // Initial call to ensure proper logo display
    updateLogoVisibility();
    
    // Accessibility enhancement: Add focus states for keyboard navigation
    const enhanceAccessibility = () => {
        const focusableElements = document.querySelectorAll('a, button, input, select, textarea');
        
        focusableElements.forEach(element => {
            element.addEventListener('focus', () => {
                element.classList.add('focused');
            });
            
            element.addEventListener('blur', () => {
                element.classList.remove('focused');
            });
        });
    };
    
    enhanceAccessibility();
    
    // Add "external link" indicator for links that open in new windows
    const markExternalLinks = () => {
        const links = document.querySelectorAll('a[target="_blank"]');
        
        links.forEach(link => {
            if (!link.querySelector('.external-link-icon')) {
                const icon = document.createElement('span');
                icon.className = 'external-link-icon';
                icon.innerHTML = ' <i class="fas fa-external-link-alt" aria-hidden="true"></i>';
                
                // Add screen reader text
                const srText = document.createElement('span');
                srText.className = 'sr-only';
                srText.textContent = '(Opens in a new window)';
                
                link.appendChild(icon);
                link.appendChild(srText);
            }
        });
    };
    
    markExternalLinks();
    
    // Add accordion functionality to the Resources section
    const setupResourceAccordion = () => {
        const resourcesSection = document.getElementById('resources');
        
        if (resourcesSection) {
            const resourceItems = resourcesSection.querySelectorAll('ul li');
            
            resourceItems.forEach((item, index) => {
                // Create a container for each item
                const container = document.createElement('div');
                container.className = 'resource-item';
                
                // Create heading element from list item text
                const heading = document.createElement('h3');
                heading.className = 'resource-heading';
                heading.innerHTML = item.innerHTML + ' <i class="fas fa-chevron-down"></i>';
                
                // Create content container
                const content = document.createElement('div');
                content.className = 'resource-content';
                content.innerHTML = '<p>Click to view more information about this resource.</p>';
                
                // Replace original list item with new structure
                container.appendChild(heading);
                container.appendChild(content);
                item.parentNode.replaceChild(container, item);
                
                // Add click handler
                heading.addEventListener('click', () => {
                    heading.classList.toggle('active');
                    
                    if (heading.classList.contains('active')) {
                        heading.querySelector('i').className = 'fas fa-chevron-up';
                        content.style.maxHeight = content.scrollHeight + 'px';
                    } else {
                        heading.querySelector('i').className = 'fas fa-chevron-down';
                        content.style.maxHeight = '0';
                    }
                });
            });
        }
    };
    
    // Uncomment to enable accordion functionality
    // setupResourceAccordion();
    
    // Add a fallback to disable AOS if it causes errors
    const disableAOSOnError = () => {
        try {
            // Attempt to use AOS
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        } catch (error) {
            console.warn('AOS error detected, disabling animations for better compatibility');
            
            // Remove all data-aos attributes to prevent animation errors
            document.querySelectorAll('[data-aos]').forEach(el => {
                el.removeAttribute('data-aos');
                el.removeAttribute('data-aos-delay');
                el.removeAttribute('data-aos-duration');
                el.removeAttribute('data-aos-easing');
            });
        }
    };
    
    // Call fallback after a delay to ensure DOM is fully loaded
    setTimeout(disableAOSOnError, 1500);    // PDF Carousel functionality
    const setupPDFCarousel = () => {
        const carousel = document.querySelector('.pdf-carousel');
        if (!carousel) return;
        
        const items = carousel.querySelectorAll('.pdf-carousel-item');
        const prevBtn = document.querySelector('.carousel-prev');
        const nextBtn = document.querySelector('.carousel-next');
        const indicators = document.querySelectorAll('.indicator');
        const fileNameDisplay = document.querySelector('.current-file-name');
        
        let currentSlide = 0;
        const totalSlides = items.length;
        
        // Function to update the carousel display
        const updateCarousel = (index) => {
            // Update the items
            items.forEach(item => item.classList.remove('active'));
            items[index].classList.add('active');
            
            // Update indicators
            indicators.forEach(ind => ind.classList.remove('active'));
            indicators[index].classList.add('active');
            
            // Update file name display
            if (fileNameDisplay) {
                const slideTitles = [
                    'Anti-Money Laundering Act Amendment Republic Act No. 9194',
                    'An Act to Further Strengthen the Anti-Money Laundering Act - Republic Act No. 10167',
                    'Revised Implementing Rules and Regulations of Republic Act No. 9160'
                ];
                fileNameDisplay.textContent = slideTitles[index];
            }
            
            // Enable/disable prev/next buttons
            prevBtn.style.opacity = index === 0 ? '0.5' : '1';
            nextBtn.style.opacity = index === totalSlides - 1 ? '0.5' : '1';
        };
        
        // Next button click
        nextBtn.addEventListener('click', () => {
            if (currentSlide < totalSlides - 1) {
                currentSlide++;
                updateCarousel(currentSlide);
            }
        });
        
        // Previous button click
        prevBtn.addEventListener('click', () => {
            if (currentSlide > 0) {
                currentSlide--;
                updateCarousel(currentSlide);
            }
        });
        
        // Indicator clicks
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentSlide = index;
                updateCarousel(currentSlide);
            });
        });
        
        // Initialize carousel state
        updateCarousel(currentSlide);
        
        // Optional: Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                if (currentSlide > 0) {
                    currentSlide--;
                    updateCarousel(currentSlide);
                }
            } else if (e.key === 'ArrowRight') {
                if (currentSlide < totalSlides - 1) {
                    currentSlide++;
                    updateCarousel(currentSlide);
                }
            }
        });
    };
    
    // Mobile PDF list functionality
    const setupMobilePDFList = () => {
        const pdfLinks = document.querySelectorAll('.mobile-pdf-list .pdf-link');
        
        pdfLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // This will open the PDF in a new tab
                // No need to prevent default as we want the normal link behavior
                
                // Optional: Add analytics or logging here
                console.log('Mobile user opened PDF:', this.getAttribute('href'));
            });
        });
    };
    
    // Check if we should show PDF carousel or mobile list
    const updatePDFDisplayMode = () => {
        const isMobile = window.innerWidth <= 768;
        const pdfCarouselContainer = document.querySelector('.pdf-carousel-container');
        const mobilePDFList = document.querySelector('.mobile-pdf-list');
        
        if (pdfCarouselContainer && mobilePDFList) {
            if (isMobile) {
                pdfCarouselContainer.style.display = 'none';
                mobilePDFList.style.display = 'block';
            } else {
                pdfCarouselContainer.style.display = 'block';
                mobilePDFList.style.display = 'none';
            }
        }
    };
    
    // Initial setup
    setupPDFCarousel();
    setupMobilePDFList();
    updatePDFDisplayMode();
    
    // Update on window resize
    window.addEventListener('resize', () => {
        updatePDFDisplayMode();
    });
});