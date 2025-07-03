// Campus Rwanda - Main JavaScript File

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// FAQ Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
                answer.classList.remove('active');
            } else {
                item.classList.add('active');
                answer.classList.add('active');
            }
        });
    });
});

// Populate Universities from Store
function populateUniversities() {
    const universitiesGrid = document.getElementById('universities-grid');
    
    if (universitiesGrid && typeof universities !== 'undefined') {
        universitiesGrid.innerHTML = '';
        
        universities.forEach(university => {
            const universityCard = document.createElement('div');
            universityCard.className = 'university-card';
            
            const facultiesList = university.faculties.map(faculty => 
                `<li><i class="fas fa-check"></i>${faculty}</li>`
            ).join('');
            
            universityCard.innerHTML = `
                <div class="university-card-header">
                    <h3>${university.name}</h3>
                    <p>${university.type}</p>
                </div>
                <div class="university-card-body">
                    <p><strong>Location:</strong> ${university.location}</p>
                    <p><strong>Established:</strong> ${university.established}</p>
                    <p class="university-description">${university.description}</p>
                    <div class="university-faculties">
                        <h4>Faculties:</h4>
                        <ul class="faculties-list">
                            ${facultiesList}
                        </ul>
                    </div>
                </div>
            `;
            
            universitiesGrid.appendChild(universityCard);
        });
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    populateUniversities();
    
    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
        } else {
            header.style.backgroundColor = '#2c3e50';
        }
    });
    
    // Add fade-in animation for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections for animation
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Contact form validation (if needed in future)
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Utility function to format numbers
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Search functionality for universities (can be enhanced later)
function searchUniversities(query) {
    if (typeof universities === 'undefined') return [];
    
    return universities.filter(university => 
        university.name.toLowerCase().includes(query.toLowerCase()) ||
        university.location.toLowerCase().includes(query.toLowerCase()) ||
        university.faculties.some(faculty => 
            faculty.toLowerCase().includes(query.toLowerCase())
        )
    );
}
