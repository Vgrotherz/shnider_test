const toggleButton = document.getElementById('toggle-button');
const contentText = document.getElementById('content-text');
const originalText = contentText.innerHTML.split("<span")[0];
const maxLength = 284;
let isTextTrimmed = true;

function updateTextVisibility() {
    if (isTextTrimmed) {
        if (originalText.length > maxLength) {
            contentText.innerHTML = `${originalText.substring(0, maxLength)}...<span id="toggle-button" class="products-count-text_button">раскрыть</span>`;
        } else {
            contentText.innerHTML = `${originalText}<span id="toggle-button" class="products-count-text_button">скрыть</span>`;
        }
        document.getElementById('toggle-button').addEventListener('click', toggleText); 
    } else {
        contentText.innerHTML = originalText + '<span id="toggle-button" class="products-count-text_button">скрыть</span>';
        document.getElementById('toggle-button').addEventListener('click', toggleText); 
    }
}

function toggleText() {
    isTextTrimmed = !isTextTrimmed;
    updateTextVisibility();
}

toggleButton.addEventListener('click', toggleText);

updateTextVisibility(); 