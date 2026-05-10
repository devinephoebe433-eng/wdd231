// Course Data
const courses = [
    { code: "WDD 130", name: "Web Fundamentals", credits: 2, completed: true, category: "WDD" },
    { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 2, completed: true, category: "WDD" },
    { code: "WDD 231", name: "Web Frontend Development I", credits: 2, completed: false, category: "WDD" },
    { code: "CSE 110", name: "Programming Building Blocks", credits: 2, completed: true, category: "CSE" },
    { code: "CSE 111", name: "Programming with Functions", credits: 2, completed: true, category: "CSE" },
    { code: "CSE 210", name: "Programming with Classes", credits: 2, completed: false, category: "CSE" }
];

// DOM Elements
const coursesTableBody = document.getElementById('courses-table-body');
const totalCreditsSpan = document.getElementById('total-credits');
const filterButtons = document.querySelectorAll('.filter-btn');

// Current filter
let currentFilter = 'all';

// Display courses in table
function displayCourses() {
    let filteredCourses = courses;

    if (currentFilter !== 'all') {
        filteredCourses = courses.filter(course => course.category === currentFilter);
    }

    // Clear table
    coursesTableBody.innerHTML = '';

    // Add each course as a table row
    filteredCourses.forEach(course => {
        const row = document.createElement('tr');
        if (course.completed) {
            row.classList.add('completed');
        }

        row.innerHTML = `
            <td class="course-code">${course.code}${course.completed ? '<span class="course-status"> ✓</span>' : ''}</td>
            <td>${course.credits}</td>
        `;

        coursesTableBody.appendChild(row);
    });

    // Calculate total credits
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsSpan.innerHTML = `The total credits for course listed above is ${totalCredits}`;
}

// Setup filter buttons
function setupFilterButtons() {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.getAttribute('data-filter');
            displayCourses();
        });
    });
}

// Initialize
function init() {
    displayCourses();
    setupFilterButtons();
}

init();