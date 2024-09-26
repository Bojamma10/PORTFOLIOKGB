// JavaScript code for future interactions

// Function to handle button click
function handleButtonClick(event) {
    alert('Button clicked!');
}

// Add event listener to the Resume button
document.addEventListener('DOMContentLoaded', (event) => {
    const resumeButton = document.querySelector('.button');
    if (resumeButton) {
        resumeButton.addEventListener('click', handleButtonClick);
    }
});
