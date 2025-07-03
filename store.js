// Campus Rwanda - Data Store
// This file contains all university information and their faculties

const universities = [
    {
        id: 1,
        name: "University of Rwanda",
        type: "Public University",
        location: "Kigali",
        established: "2013",
        description: "The University of Rwanda is the largest public university in Rwanda, formed by merging several institutions. It offers a wide range of undergraduate and postgraduate programs across multiple campuses.",
        faculties: [
            "Faculty of Medicine and Health Sciences",
            "Faculty of Engineering",
            "Faculty of Science and Technology",
            "Faculty of Economics and Management",
            "Faculty of Education",
            "Faculty of Law",
            "Faculty of Agriculture and Animal Sciences",
            "Faculty of Architecture and Environmental Design",
            "Faculty of Arts and Social Sciences"
        ],
        website: "https://www.ur.ac.rw",
        contact: {
            phone: "+250 788 300 000",
            email: "info@ur.ac.rw"
        }
    },
    {
        id: 2,
        name: "Kigali Independent University (ULK)",
        type: "Private University",
        location: "Kigali",
        established: "1996",
        description: "ULK is one of the oldest private universities in Rwanda, known for its programs in business, law, and social sciences. It has played a significant role in higher education development in Rwanda.",
        faculties: [
            "Faculty of Law",
            "Faculty of Economics and Management",
            "Faculty of Social Sciences",
            "Faculty of Information Technology",
            "Faculty of Education",
            "Faculty of Applied Sciences"
        ],
        website: "https://www.ulk.ac.rw",
        contact: {
            phone: "+250 788 300 001",
            email: "info@ulk.ac.rw"
        }
    },
    {
        id: 3,
        name: "Rwanda Institute of Higher Education (RIHE)",
        type: "Private University",
        location: "Kigali",
        established: "2003",
        description: "RIHE focuses on providing quality education in business, technology, and development studies. It emphasizes practical skills and entrepreneurship development.",
        faculties: [
            "Faculty of Business Administration",
            "Faculty of Computer Science and IT",
            "Faculty of Development Studies",
            "Faculty of Languages and Literature",
            "Faculty of Education"
        ],
        website: "https://www.rihe.ac.rw",
        contact: {
            phone: "+250 788 300 002",
            email: "info@rihe.ac.rw"
        }
    },
    {
        id: 4,
        name: "Adventist University of Central and East Africa (AUCEA)",
        type: "Private University",
        location: "Kigali",
        established: "1984",
        description: "AUCEA is a faith-based institution offering programs in theology, business, education, and health sciences. It serves students from across East and Central Africa.",
        faculties: [
            "Faculty of Theology",
            "Faculty of Business Administration",
            "Faculty of Education",
            "Faculty of Health Sciences",
            "Faculty of Computing and Information Technology"
        ],
        website: "https://www.aucea.ac.rw",
        contact: {
            phone: "+250 788 300 003",
            email: "info@aucea.ac.rw"
        }
    },
    {
        id: 5,
        name: "Institute of Policy Analysis and Research (IPAR)",
        type: "Research Institute",
        location: "Kigali",
        established: "2007",
        description: "IPAR is a premier research institution focusing on policy analysis, governance, and development studies. It offers postgraduate programs and conducts extensive research.",
        faculties: [
            "School of Governance and Development",
            "School of Public Policy",
            "School of Economics and Finance",
            "School of Social Sciences"
        ],
        website: "https://www.ipar-rwanda.org",
        contact: {
            phone: "+250 788 300 004",
            email: "info@ipar-rwanda.org"
        }
    },
    {
        id: 6,
        name: "Mount Kenya University Rwanda",
        type: "Private University",
        location: "Kigali",
        established: "2009",
        description: "MKU Rwanda is a branch of Mount Kenya University, offering diverse programs in business, IT, education, and health sciences with a focus on practical learning.",
        faculties: [
            "School of Business and Economics",
            "School of Computing and Information Technology",
            "School of Education",
            "School of Health Sciences",
            "School of Law"
        ],
        website: "https://www.mku.ac.rw",
        contact: {
            phone: "+250 788 300 005",
            email: "info@mku.ac.rw"
        }
    }
];

// Additional data structures for future use
const scholarships = [
    {
        id: 1,
        name: "Government of Rwanda Scholarship",
        type: "Government",
        eligibility: "Rwandan citizens with excellent academic performance",
        coverage: "Full tuition, accommodation, and stipend",
        deadline: "June 30th annually",
        fields: ["All fields"]
    },
    {
        id: 2,
        name: "Mastercard Foundation Scholars Program",
        type: "Private Foundation",
        eligibility: "African students with demonstrated financial need",
        coverage: "Full tuition, living expenses, and leadership development",
        deadline: "Various deadlines",
        fields: ["All fields"]
    },
    {
        id: 3,
        name: "World Bank Scholarships",
        type: "International Organization",
        eligibility: "Students from developing countries",
        coverage: "Partial to full funding",
        deadline: "Application windows vary",
        fields: ["Development studies", "Economics", "Public Policy"]
    },
    {
        id: 4,
        name: "African Development Bank Scholarships",
        type: "International Organization",
        eligibility: "African students pursuing development-related studies",
        coverage: "Full funding for master's programs",
        deadline: "Annual application cycle",
        fields: ["Development studies", "Engineering", "Agriculture"]
    }
];

// Program categories for easy filtering
const programCategories = [
    "Business and Economics",
    "Engineering and Technology",
    "Health Sciences",
    "Education",
    "Law",
    "Agriculture",
    "Social Sciences",
    "Arts and Humanities",
    "Computing and IT",
    "Architecture and Design"
];

// Campus facilities common across universities
const commonFacilities = [
    "Library",
    "Computer Labs",
    "Science Laboratories",
    "Sports Facilities",
    "Student Accommodation",
    "Cafeteria",
    "Medical Center",
    "Conference Halls",
    "WiFi Campus",
    "Parking"
];

// Export data for potential use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        universities,
        scholarships,
        programCategories,
        commonFacilities
    };
}