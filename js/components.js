// Load HTML components (navbar, footer, etc.)
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        const element = document.getElementById(elementId);
        if (!element) {
            throw new Error(`Element with id "${elementId}" not found`);
        }
        element.innerHTML = html;

        // Re-initialize AOS for the new content if AOS is available
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
        
        // Update the portfolio link after loading navbar
        updatePortfolioLink();
    } catch (error) {
        console.error(`Error loading component ${componentPath} into ${elementId}:`, error);
        // Add a visual indicator for development
        document.getElementById(elementId).innerHTML = `
            <div style="padding: 20px; background: #fff3cd; color: #856404; border: 1px solid #ffeeba; border-radius: 4px;">
                <strong>Error loading component:</strong> ${componentPath}<br>
                <small>${error.message}</small>
            </div>
        `;
    }
}

// Function to update the portfolio link based on URL hash
function updatePortfolioLink() {
    const currentUrl = window.location.href;
    const portfolioLinks = document.querySelectorAll('.logo-container[href=""], .portfolio-nav-link');
    
    if (portfolioLinks.length > 0) {
        // Check for hash in current URL
        let hashValue = '';
        let portfolioUrl = '';
        
        if (currentUrl.includes('#cepeda')) {
            hashValue = 'cepeda';
            portfolioUrl = 'http://localhost:8080';
        } else if (currentUrl.includes('#miranda')) {
            hashValue = 'miranda';
            portfolioUrl = 'https://bpmiranda3099.github.io/';
        } else if (currentUrl.includes('#romero')) {
            hashValue = 'romero';
            portfolioUrl = 'http://localhost:1';
        } else if (currentUrl.includes('#santos')) {
            hashValue = 'santos';
            portfolioUrl = 'http://localhost:2';
        } else if (currentUrl.includes('#tafalla')) {
            hashValue = 'tafalla';
            portfolioUrl = 'http://localhost:3';
        } else {
            // Check if we have a stored hash value from previous page
            const storedHash = localStorage.getItem('portfolioHash');
            
            if (storedHash === 'cepeda') {
                portfolioUrl = 'http://localhost:8080';
                hashValue = 'cepeda';
            } else if (storedHash === 'miranda') {
                portfolioUrl = 'https://bpmiranda3099.github.io/';
                hashValue = 'miranda';
            } else if (storedHash === 'romero') {
                portfolioUrl = 'http://localhost:1';
                hashValue = 'romero';
            } else if (storedHash === 'santos') {
                portfolioUrl = 'http://localhost:2';
                hashValue = 'santos';
            } else if (storedHash === 'tafalla') {
                portfolioUrl = 'http://localhost:3';
                hashValue = 'tafalla';
            } else {
                // Default link when no specific hash is present
                portfolioUrl = '#';
            }
        }
        
        // Update all portfolio links (both in header and mobile nav)
        portfolioLinks.forEach(link => {
            link.href = portfolioUrl;
        });
        
        // Store the hash value for persistence across pages
        if (hashValue) {
            localStorage.setItem('portfolioHash', hashValue);
        }
        
        console.log('Portfolio links updated to:', portfolioUrl, 'Hash:', hashValue);
    }
}

// Listen for hash changes to update the portfolio link
window.addEventListener('hashchange', updatePortfolioLink);

// Update the portfolio link on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check if navbar is already loaded
    if (document.querySelector('.logo-container[href=""]')) {
        updatePortfolioLink();
    }
});

// Check if current page is expert.html
function isExpertPage() {
    return window.location.pathname.includes('expert.html');
}

// Function to load all components
async function loadComponents() {
    // Load the appropriate navbar based on current page
    if (isExpertPage()) {
        await loadExpertNavbar();
    } else {
        await loadComponent('navbar-container', 'components/navbar.html');
    }
    
    await loadComponent('footer-container', 'components/footer.html');
    
    // After all components are loaded, update the portfolio link and setup hash preservation
    updatePortfolioLink();
    updateMobilePortfolioLink();
    preserveHashNavigation();
    
    return true; // Return a value to indicate completion
}

// Function to create custom expert system navbar with info button
async function loadExpertNavbar() {
    const navbarContainer = document.getElementById('navbar-container');
    
    // Create custom navbar with info button
    const customNavbar = `
    <nav data-aos="fade-down" data-aos-duration="800">
      <div class="navbar-flex">
        <div class="logo">
          <a
            href="http://www.amlc.gov.ph/"
            class="logo-container"
            style="text-decoration: none; color: inherit"
          >
            <img
              src="public/assets/icon/favicon.png"
              alt="AML Logo"
              class="nav-icon"
            />
            <span class="logo-left">Republic Act No. 9160</span>          </a>
          <a
            href=""
            class="logo-container"
            style="text-decoration: none; color: inherit"
          >
            <span class="logo-left">Portfolio</span>
          </a>
          <span class="logo-center">ANTI-MONEY LAUNDERING EXPERT SYSTEM</span>
          <span class="logo-short">AMLA EXPERT SYSTEM</span>
        </div>
          <!-- Info button that opens the drawer -->
        <button id="info-button" class="info-button" aria-label="Show information">
          <i class="fas fa-info-circle"></i>
        </button>
        
        <button class="menu-toggle" aria-label="Open navigation">
          <i class="bi bi-list"></i>
        </button>
      </div>
      
      <ul class="nav-links">
        <li><a href="index.html#about">ABOUT</a></li>
        <li><a href="index.html#services">SERVICES</a></li>
        <li><a href="index.html#resources">RESOURCES</a></li>
        <li><a href="index.html#contact">CONTACT</a></li>
        <li><a href="index.html#team">TEAM</a></li>
        <li class="mobile-portfolio-link"><a href="" class="portfolio-nav-link">PORTFOLIO</a></li>
      </ul>
    </nav>

    <!-- Info drawer overlay -->
    <div id="info-drawer-overlay" class="info-drawer-overlay hidden"></div>

    <!-- Info drawer -->
    <div id="info-drawer" class="info-drawer hidden">
      <div class="info-drawer-header">
        <h2>Important Information</h2>
        <button id="close-drawer" class="close-drawer-button">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="info-drawer-content">
        <div class="disclaimer-box" data-aos="fade-left" data-aos-duration="800" data-aos-delay="100">
          <p>
            <strong>Disclaimer:</strong> This tool provides general guidance
            only and is not a substitute for professional legal advice. The
            assessment is based on the information you provide and should not be
            considered as definitive legal determination.
          </p>
        </div>
        
        <div class="disclaimer-box note-box" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
          <p>
            <strong>Note:</strong> The Anti-Money Laundering Act (RA 9160) and
            its amendments apply differently to various entity types. Financial
            institutions face the strictest requirements, while DNFBPs and other
            businesses have varying levels of obligations. Individuals also have
            responsibilities in certain situations.
          </p>
        </div>
      </div>
    </div>    `;
      navbarContainer.innerHTML = customNavbar;
    
    // Update portfolio link for the expert page
    updatePortfolioLink();
    updateMobilePortfolioLink();
    
    // Add event listeners for the drawer functionality
    setupInfoDrawer();
}

// Setup event listeners for info drawer
function setupInfoDrawer() {
    const infoButton = document.getElementById('info-button');
    const infoDrawer = document.getElementById('info-drawer');
    const overlay = document.getElementById('info-drawer-overlay');
    const closeButton = document.getElementById('close-drawer');
    const drawerContent = document.querySelector('.info-drawer-content');
    
    if (infoButton && infoDrawer && overlay && closeButton) {
        infoButton.addEventListener('click', () => {
            infoDrawer.classList.remove('hidden');
            overlay.classList.remove('hidden');
            document.body.classList.add('drawer-open');
            
            // Add AOS animations to drawer content elements with a slight delay
            if (drawerContent) {
                setTimeout(() => {
                    const contentItems = drawerContent.children;
                    Array.from(contentItems).forEach((item, index) => {
                        // Add animation classes and data attributes for smooth entry
                        item.setAttribute('data-aos', 'fade-left');
                        item.setAttribute('data-aos-delay', (index * 100 + 100).toString());
                        item.setAttribute('data-aos-duration', '800');
                        
                        // Initialize AOS for these new elements
                        if (typeof AOS !== 'undefined') {
                            AOS.refresh();
                        }
                    });
                }, 300); // Delay to ensure drawer is visible first
            }
        });
        
        closeButton.addEventListener('click', closeDrawer);
        overlay.addEventListener('click', closeDrawer);
        
        function closeDrawer() {
            // First fade out the content
            if (drawerContent) {
                const contentItems = drawerContent.children;
                Array.from(contentItems).forEach(item => {
                    // Remove AOS attributes to reset for next opening
                    item.removeAttribute('data-aos');
                    item.removeAttribute('data-aos-delay');
                    item.removeAttribute('data-aos-duration');
                });
            }
            
            // Then close the drawer with a slight delay
            setTimeout(() => {
                infoDrawer.classList.add('hidden');
                overlay.classList.add('hidden');
                document.body.classList.remove('drawer-open');
            }, 100);
        }
    }
}

// Function to preserve hash during page navigation
function preserveHashNavigation() {
    // Get all internal navigation links
    const internalLinks = document.querySelectorAll('a[href^="index.html"], a[href^="expert.html"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const storedHash = localStorage.getItem('portfolioHash');
            
            // If we have a stored hash, make sure it's appended to the destination URL
            if (storedHash) {
                const currentHref = this.getAttribute('href');
                
                // Only modify if the link doesn't already have a hash
                if (!currentHref.includes('#')) {
                    this.setAttribute('href', `${currentHref}#${storedHash}`);
                }
            }
        });
    });
    
    // Update the portfolio link in mobile navigation
    updateMobilePortfolioLink();
}

// Function to specifically update mobile portfolio link
function updateMobilePortfolioLink() {
    const portfolioNavLink = document.querySelector('.portfolio-nav-link');
    const storedHash = localStorage.getItem('portfolioHash');
    
    if (portfolioNavLink) {
        let portfolioUrl = '#';
        
        if (storedHash === 'cepeda') {
            portfolioUrl = 'http://localhost:8080';
        } else if (storedHash === 'miranda') {
            portfolioUrl = 'https://bpmiranda3099.github.io/';
        } else if (storedHash === 'romero') {
            portfolioUrl = 'http://localhost:1';
        } else if (storedHash === 'santos') {
            portfolioUrl = 'http://localhost:2';
        } else if (storedHash === 'tafalla') {
            portfolioUrl = 'http://localhost:3';
        }
        
        portfolioNavLink.href = portfolioUrl;
        console.log('Mobile portfolio link updated to:', portfolioUrl);
    }
}

// Initialize the navigation preserving function after components are loaded
document.addEventListener('DOMContentLoaded', function() {
    loadComponents().then(() => {
        preserveHashNavigation();
        updateMobilePortfolioLink();
    });
});
