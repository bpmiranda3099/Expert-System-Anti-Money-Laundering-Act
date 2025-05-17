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

// Function to load all components
async function loadComponents() {
    await loadComponent('navbar-container', '../components/navbar.html');
    await loadComponent('footer-container', '../components/footer.html');
}
