// Select DOM elements
var toggleButton = document.getElementById('toggle-skills');
var skillsList = document.getElementById('skills-list');
var skillsItems = skillsList.querySelectorAll('li');
var initialVisibleSkills = 3;
var isExpanded = false;
// Initialize skills to show only the first 3 items
var initializeSkills = function () {
    skillsItems.forEach(function (item, index) {
        if (index >= initialVisibleSkills) {
            item.classList.add('hidden'); // Hide all items except the first 3
        }
    });
};
// Toggle visibility of skills
var toggleSkills = function () {
    isExpanded = !isExpanded;
    skillsItems.forEach(function (item, index) {
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
