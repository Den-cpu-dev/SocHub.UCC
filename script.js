// Course Data with complete descriptions, career paths, and resources
const courseData = {
    "SOC 101": {
        name: "Introduction to Sociology I",
        description: "Introduction to the discipline of Sociology; society, culture, and foundational sociological perspectives. Covers origins and development of sociology, founding fathers and key social problems.",
        credits: "3",
        lecturer: "TBA"
    },
    "SOC 201": {
        name: "Foundation and Issues in Sociology",
        description: "This course introduces students to the founding fathers of Sociology and their intellectual works and their impact on society. It covers Sociology, society, culture, origin and development of Sociology.",
        credits: "3",
        lecturer: "TBA"
    },
    "SOC 204": {
        name: "Social Structure of Ghana",
        description: "Study of social structures specific to Ghana (listed on site).",
        credits: "3",
        lecturer: "TBA"
    },
    "SOC 211": {
        name: "Social Statistics",
        description: "The course equips students with requisite analytical skills to make social meanings out of statistical data.",
        credits: "3",
        lecturer: "TBA"
    },
    "SOC 214": {
        name: "Social Psychology",
        description: "This course explains the concepts and nature of social psychology and how they apply to social psychological issues.",
        credits: "3",
        lecturer: "TBA"
    },
    "SOC 301": {
        name: "Sociological Theory I",
        description: "This course equips students with the understanding of sociological theories and their application.",
        credits: "3",
        lecturer: "TBA"
    },
    "SOC 311": {
        name: "Social Research Methods",
        description: "Course on social research methods and techniques.",
        credits: "3",
        lecturer: "TBA"
    },
    "ANT 101": {
        name: "Introduction to Anthropology",
        description: "Foundational survey of anthropology's four fields, culture concept, and comparative approaches to human societies.",
        credits: "3",
        lecturer: "TBA"
    },
    "ANT 102": {
        name: "Human Origins and Diversity",
        description: "Overview of human evolution, biological variation, and cultural diversity from prehistory to the present.",
        credits: "3",
        lecturer: "TBA"
    },
    "ANT 201": {
        name: "Archaeology of Complex Societies",
        description: "Examines archaeological evidence for the rise of complex societies, states, and civilizations across regions.",
        credits: "3",
        lecturer: "TBA"
    },
    "ANT 301": {
        name: "Contemporary Theories in Anthropology",
        description: "Covers late 20th and 21st century anthropological theories, including practice theory and interpretivism.",
        credits: "3",
        lecturer: "TBA"
    },
    "ANT 401": {
        name: "Introduction to Gender Theories",
        description: "Advanced survey of gender theories and their application to anthropological research and analysis.",
        credits: "3",
        lecturer: "TBA"
    },
    "ANT 405": {
        name: "Witchcraft, Magic and Religion",
        description: "Explores belief systems, ritual practices, and cosmologies, with emphasis on power and social control.",
        credits: "3",
        lecturer: "TBA"
    }
};

const careerData = {
    "SOC 101": {
        analysis: "Foundational course building core sociological literacy.",
        careers: "Social researcher, policy analyst, NGO programme officer",
        links: [
            { text: "UNDP", url: "https://www.undp.org" }
        ]
    }
};

const facultyData = {
    "Prof. Georgina Yaa Oduro": {
        title: "Associate Professor",
        position: "Head of Department",
        email: "gyoduro@ucc.edu.gh",
        bio: "Prof. Georgina Yaa Oduro is an Associate Professor and the current Head of the Department.",
        specializations: ["Adolescence and the Youth", "Gender and the Blue Economy"],
        interests: ["Gender Issues", "Race and Ethnicity"]
    },
    "Dr. Razak Jaha Imoro": {
        title: "Senior Lecturer",
        position: "Senior Lecturer",
        email: "razak.imoro@ucc.edu.gh",
        bio: "Dr. Razak Jaha Imoro is a Senior Lecturer specializing in conflict management and development studies.",
        specializations: ["Conflict and Conflict Resolution", "Development Studies"],
        interests: ["Conflict Management", "Development"]
    }
};

// Modal functionality
function createModalCloser(modal, closeBtn) {
    if (!modal) return;

    function closeModal() {
        modal.style.display = "none";
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    }

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.style.display === "block") {
            closeModal();
        }
    });
}

// Initialize modals
const modal = document.getElementById("courseModal");
const closeBtn = modal ? modal.querySelector(".close") : null;
createModalCloser(modal, closeBtn);

// Course click handler
document.querySelectorAll(".course-list li").forEach((courseItem) => {
    courseItem.setAttribute("tabindex", "0");
    courseItem.setAttribute("role", "button");

    courseItem.addEventListener("click", function () {
        const codeSpan = this.querySelector(".course-code");
        const courseCode = codeSpan ? codeSpan.textContent.trim() : null;

        if (courseCode && courseData[courseCode]) {
            const course = courseData[courseCode];
            document.getElementById("modalCourseCode").textContent = courseCode;
            document.getElementById("modalCourseName").textContent = course.name;
            document.getElementById("modalDescription").textContent = course.description;
            document.getElementById("modalCredits").textContent = course.credits + " hours";
            document.getElementById("modalLecturer").textContent = course.lecturer;

            if (modal) {
                modal.style.display = "block";
                if (closeBtn) closeBtn.focus();
            }
        }
    });

    courseItem.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            this.click();
        }
    });
});

// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-menu a").forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Contact form handling
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const submitBtn = this.querySelector(".submit-btn");
        submitBtn.textContent = "✓ Message Sent!";
        this.reset();
        setTimeout(() => {
            submitBtn.textContent = "Send Message";
        }, 3000);
    });
}

// Dark mode toggle
const themeToggle = document.querySelector(".theme-toggle");
const html = document.documentElement;

if (themeToggle) {
    const currentTheme = localStorage.getItem("theme") || "light";
    if (currentTheme === "dark") {
        html.classList.add("dark-mode");
    }

    themeToggle.addEventListener("click", () => {
        html.classList.toggle("dark-mode");
        const theme = html.classList.contains("dark-mode") ? "dark" : "light";
        localStorage.setItem("theme", theme);
    });
}