const linkElements = document.querySelectorAll('.pagination .links b, .pagination .links a');

linkElements.forEach(function(linkElement) {
    
    const number = parseInt(linkElement.textContent.trim());
    
    if (!isNaN(number)) {
        
        const multipliedNumber = number * 2; 
        linkElement.textContent = multipliedNumber;
    }
});