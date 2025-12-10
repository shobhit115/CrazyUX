// 1. Data Source
const projectsData = [
    {
        title: "Guess Birthday",
        image: "https://goulartnogueira.github.io/BadUI/HighLowBirthday/A_fun_way_to_select_your_birthday_pycos8.gif",
        description: "A chaotic way to pick your birthday.",
        link: "https://goulartnogueira.github.io/BadUI/HighLowBirthday",
        repo: "https://github.com/GoulartNogueira/BadUI"
    },
    {
        title: "Scientific Date Picker",
        image: "https://goulartnogueira.github.io/BadUI/ScientificDatePicker/datePicker.gif",
        description: "A date picker with PhD-level complexity.",
        link: "https://goulartnogueira.github.io/BadUI/ScientificDatePicker/",
        repo: "https://github.com/GoulartNogueira/BadUI"
    },
    {
        title: "Limit Username Size",
        image: "https://goulartnogueira.github.io/BadUI/LimitUsernameSize/limitUsernameSize.gif",
        description: "The strictest username input ever made.",
        link: "https://goulartnogueira.github.io/BadUI/LimitUsernameSize/",
        repo: "https://github.com/GoulartNogueira/BadUI"
    },
    {
        title: "Bad Name Selector",
        image: "https://goulartnogueira.github.io/BadUI/bad-name-selector/bad-name-selector-demonstration.gif",
        description: "A name selector that never cooperates.",
        link: "https://goulartnogueira.github.io/BadUI/bad-name-selector/",
        repo: "https://github.com/GoulartNogueira/BadUI"
    },
    {
        title: "Calendar Hell",
        image: "https://goulartnogueira.github.io/BadUI/calendar-hell/calendar-hell-small.gif",
        description: "A calendar designed to torment you.",
        link: "https://goulartnogueira.github.io/BadUI/calendar-hell/",
        repo: "https://github.com/GoulartNogueira/BadUI"
    },
    {
        title: "Chaos Jump Dino",
        image: "Projects\\dino\\dino.gif",
        description: "The Button: It teleports instantly upon clicking.",
        link: "CrazyUX\\Projects\\dino\\index.html",
        repo: "https://github.com/shobhit115/CrazyUX/tree/main/Projects/dino"
    },
    {
        title: "Birth Selector",
        image: "https://goulartnogueira.github.io/BadUI/Date/Date.gif",
        description: "A birth date tool that refuses to behave.",
        link: "https://goulartnogueira.github.io/BadUI/Date/BadUIDate.html",
        repo: "https://github.com/GoulartNogueira/BadUI"
    },
    {
        title: "Fan Controlled Cursor",
        image: "https://raw.githubusercontent.com/GoulartNogueira/BadUI/master/FanControlledCursor/demo.gif",
        description: "Let your fans move and control your cursor live.",
        link: "https://github.com/themutti/fan-controlled-cursor",
        repo: "https://github.com/GoulartNogueira/BadUI"
    }
];

// --- PAGINATION CONFIGURATION ---
const itemsPerPage = 6;
let currentPage = 1;

// 2. Main Render Function
function displayProjects(page) {
    const gridContainer = document.getElementById('project-grid');
    gridContainer.innerHTML = '';

    // Calculate start and end index for slicing the array
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = projectsData.slice(start, end);

    // Loop through the sliced items
    paginatedItems.forEach(project => {
        const cardHTML = `
            <article class="site-card">
                <div class="card-image">
                    <img src="${project.image}" alt="${project.title} Preview">
                </div>
                <div class="card-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="card-actions">
                        <a href="${project.link}" target="_blank" class="neu-btn small-btn">Visit Site</a>
                        <a href="${project.repo}" target="_blank" class="code-link" title="View Code">
                            <i class="fa-brands fa-github"></i> Code
                        </a>
                    </div>
                </div>
            </article>
        `;
        gridContainer.innerHTML += cardHTML;
    });

    // Update the pagination buttons
    setupPagination();
}

// 3. Setup Pagination Controls
function setupPagination() {
    const paginationContainer = document.getElementById('pagination-controls');
    paginationContainer.innerHTML = '';

    const pageCount = Math.ceil(projectsData.length / itemsPerPage);

    // If only 1 page, don't show controls
    if (pageCount <= 1) return;

    // Previous Button
    const prevBtn = document.createElement('button');
    prevBtn.innerText = 'Prev';
    prevBtn.classList.add('page-btn');
    if (currentPage === 1) prevBtn.disabled = true;
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayProjects(currentPage);
        }
    });
    paginationContainer.appendChild(prevBtn);

    // Page Numbers
    for (let i = 1; i <= pageCount; i++) {
        const btn = document.createElement('button');
        btn.innerText = i;
        btn.classList.add('page-btn');
        if (i === currentPage) btn.classList.add('active');
        
        btn.addEventListener('click', () => {
            currentPage = i;
            displayProjects(currentPage);
        });
        paginationContainer.appendChild(btn);
    }

    // Next Button
    const nextBtn = document.createElement('button');
    nextBtn.innerText = 'Next';
    nextBtn.classList.add('page-btn');
    if (currentPage === pageCount) nextBtn.disabled = true;
    nextBtn.addEventListener('click', () => {
        if (currentPage < pageCount) {
            currentPage++;
            displayProjects(currentPage);
        }
    });
    paginationContainer.appendChild(nextBtn);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayProjects(currentPage);
});


document.addEventListener("DOMContentLoaded", () => {
    
    // 1. THE UPSIDE DOWN EFFECT
    // On load, jump to the bottom of the page
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'instant' 
    });

    // 2. INTERACTIVE REVEAL
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Target both Home Page cards AND Gallery Page cards
    const cards = document.querySelectorAll('.neu-card, .site-card');
    
    // Initial state for animation
    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(50px)"; // Start lower
        // Reset delay if index gets too high to prevent waiting forever on long lists
        let delay = (index % 10) * 0.1; 
        card.style.transition = `all 0.6s ease ${delay}s`; 
        observer.observe(card);
    });

    // 3. NAV HIGHLIGHTING
    // Highlight based on current URL
    const currentPath = window.location.pathname.split("/").pop();
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        const link = item.querySelector('a').getAttribute('href');
        // Simple check to set active state based on file name
        if(link === currentPath || (link === 'index.html' && currentPath === '')) {
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        }
        
        // Click effect
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
