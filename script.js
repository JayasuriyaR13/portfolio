document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Simple form validation
    if (name && email && message) {
      document.getElementById("formFeedback").innerText = "Thank you for your message!";
      document.getElementById("contactForm").reset();
    } else {
      document.getElementById("formFeedback").innerText = "Please fill out all fields.";
    }
  });
  function toggleText() {
    var moreText = document.getElementById("moreText");
    var btnText = document.getElementById("readMoreBtn");
  
    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      btnText.innerHTML = "Read Less";
    } else {
      moreText.style.display = "none";
      btnText.innerHTML = "Read More";
    }
  }


// Get all skill items and the display container
const skillItems = document.querySelectorAll('.skill-item');
const skillsDisplay = document.querySelector('.skills-display');

// Add event listener for skill selection
skillItems.forEach((item) => {
  item.addEventListener('click', () => {
    // Toggle selection
    item.classList.toggle('selected');

    // Update the skills display
    updateSkillsDisplay();
  });
});

// Function to update displayed skills
function updateSkillsDisplay() {
  // Clear the current display
  skillsDisplay.innerHTML = '';

  // Add selected skills to the display
  skillItems.forEach((item) => {
    if (item.classList.contains('selected')) {
      const skillIcon = item.querySelector('img').cloneNode(true);
      skillsDisplay.appendChild(skillIcon);
    }
  });
}
    

// Get all soft skill items and the display container
const softSkillItems = document.querySelectorAll('.soft-skills-section .skill-item');
const softSkillsDisplay = document.querySelector('.soft-skills-section .skills-display');

// Add event listener for skill selection
softSkillItems.forEach((item) => {
  item.addEventListener('click', () => {
    // Toggle selection
    item.classList.toggle('selected');

    // Update the soft skills display
    updateSoftSkillsDisplay();
  });
});

// Function to update displayed soft skills
function updateSoftSkillsDisplay() {
  // Clear the current display
  softSkillsDisplay.innerHTML = '';

  // Add selected soft skills to the display
  softSkillItems.forEach((item) => {
    if (item.classList.contains('selected')) {
      const skillDisplay = document.createElement('div');
      skillDisplay.classList.add('display-item');
      skillDisplay.textContent = item.dataset.skill;
      softSkillsDisplay.appendChild(skillDisplay);
    }
  });
}
function toggleContent(id) {
  const content = document.getElementById(`more-content-${id}`);
  const button = content.nextElementSibling;

  if (content.style.display === "block") {
    content.style.display = "none";
    button.textContent = "Read More";
  } else {
    content.style.display = "block";
    button.textContent = "Read Less";
  }
}

  const jobTitles = [
    "Hello! I am a Python Developer",
    "Hello! I am a Full Stack Web Developer",
    "Hello! I am a Web Developer"
  ];
  
  let index = 0;

  function changeText() {
    const animatedText = document.getElementById("animatedText");
    animatedText.textContent = jobTitles[index];
    index = (index + 1) % jobTitles.length; // Loop through job titles
  }

  // Change text every 30 seconds
  setInterval(changeText, 10000);
  changeText(); // Initialize immediately

