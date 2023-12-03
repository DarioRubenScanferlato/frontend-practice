// Get the image element
const imgElement = document.getElementById('dynamicImg');
const emailForm = document.querySelector('.emailform');
const successMessage = document.querySelector('.successmessage');
const subscribeBtn = document.getElementById('subscribeBtn');
const confirmationMessage = document.getElementById('confirmationMessage');
const emailInput = document.getElementById('email');
const inputContainer = document.querySelector('.inputcontainer');

// Function to change the image source based on device width
function changeImageBasedOnWidth() {
  if (window.matchMedia('(max-width: 766px)').matches) {
    imgElement.src = 'assets/images/illustration-sign-up-mobile.svg'; // Set mobile image path
    imgElement.style.width = '100%';
    } else {
    imgElement.src = 'assets/images/illustration-sign-up-desktop.svg'; // Set desktop image path
    imgElement.style.width = 'auto';
}
}

function isValidEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

// Function to toggle visibility of elements
function toggleVisibility() {
  
  const userEmail = emailInput.value.trim(); // Get the trimmed value entered in the email input field

  if (isValidEmail(userEmail)) {
    // If the email is valid, display success message
    console.log(`Valid email: ${userEmail}`);
    emailForm.style.display = 'none';
    successMessage.style.display = 'flex';
    confirmationMessage.innerHTML = `A confirmation email has been sent to <strong>${userEmail}</strong>. Please open it and click the button inside to confirm your subscription.`;
    inputContainer.classList.remove('error'); // Remove error class if previously added
  } else {
    // If the email is invalid, display warning
    console.log(`Invalid email: ${userEmail}`);
    inputContainer.classList.add('error');
  }

}

function goBack() {
    emailForm.style.display = 'flex';
    successMessage.style.display = 'none';
    emailInput.value = ''; // Clear the email input field when going back
    inputContainer.classList.remove('error'); // Remove any error classes
}

// Add a click event listener to the Subscribe button
subscribeBtn.addEventListener('click', toggleVisibility);

const dismissBtn = document.getElementById('dismissBtn');
dismissBtn.addEventListener('click', goBack);

// Call the function initially and listen for window resize events
changeImageBasedOnWidth();
window.addEventListener('resize', changeImageBasedOnWidth);