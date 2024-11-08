// Select DOM elements
var toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
var skillsList = document.getElementById('skills-list') as HTMLUListElement;
var skillsItems = skillsList.querySelectorAll('li');

var initialVisibleSkills = 3;
var isExpanded = false;

// Initialize skills to show only the first 3 items
const initializeSkills = (): void => {
  skillsItems.forEach((item, index) => {
    if (index >= initialVisibleSkills) {
      item.classList.add('hidden'); // Hide all items except the first 3
    }
  });
};

// Toggle visibility of skills
const toggleSkills = (): void => {
  isExpanded = !isExpanded;
  skillsItems.forEach((item, index) => {
    if (index >= initialVisibleSkills) {
      item.classList.toggle('hidden', !isExpanded);
    }
  });
  toggleButton.textContent = isExpanded ? 'See Less' : 'See More';
};

// Event listener for button click
toggleButton.addEventListener('click', toggleSkills);

// Initialize skills list on page load
initializeSkills();
