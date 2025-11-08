/**
 * 📝 Purpose: Dynamically insert an SVG representation of the name 
 * and then convert it into a drawable object using the custom library function.
 */
function createNameDrawable() {
    const svgContainer = document.getElementById('nameSvgTarget');

    if (!svgContainer) {
        console.error("SVG target container not found.");
        return;
    }

    // --- 1. Define the SVG content for the name ---
    // This uses standard SVG <text> elements. For more precise/complex 
    // "drawable" results, you might replace this with generated <path> data.
    const nameSvgContent = `
        <text 
            x="50%" 
            y="75%" 
            font-family="Arial, sans-serif" 
            font-size="70" 
            font-weight="bold"
            fill="#007bff" 
            text-anchor="middle">
            Satya Manikumar Chode
        </text>
    `;

    // Insert the name content into the SVG container
    svgContainer.innerHTML = nameSvgContent;

    // --- 2. Call your specific library function ---
    // ASSUMPTION: 'svg' is a global object provided by your library, 
    // and createDrawable accepts the DOM element as the target.

    if (typeof svg !== 'undefined' && svg.createDrawable) {
        // The target for createDrawable is the SVG element itself
        const targetElement = svgContainer; 
        
        try {
            // This is the line you provided:
            const [ drawable ] = svg.createDrawable(targetElement); 
            
            console.log("Successfully created drawable object:", drawable);
            
            // You would now use this 'drawable' object in your specific rendering context.
        
        } catch (e) {
            console.error("Error creating drawable:", e);
        }
    } else {
        console.warn("The 'svg.createDrawable' function is not defined. Please ensure your library is loaded.");
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', createNameDrawable);
