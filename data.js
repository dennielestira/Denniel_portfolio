/* ---------- SHARED SITE DATA ---------- */
/* Used by both index.html and detail.html so project/Figma info stays in one place. */
const skills = [
  {name:"HTML", pct:85},
  {name:"CSS", pct:80},
  {name:"Python", pct:65},
  {name:"JavaScript", pct:60},
  {name:"WordPress", pct:80},
];

const projects = [
  {
    id:"p1",
    title:"DEVELOPMENT OF A WEB-BASED DOCUMENT MANAGEMENT SYSTEM FOR CAVITE STATE UNIVERSITY-BACOOR CITY CAMPUS EXTENSION SERVICES",
    tag:"Django · Python",
    images:[
      "./photos/caps1.png",
      "./photos/caps2.png",
      "./photos/caps3.png",
      "./photos/caps4.png",
    ],
    summary:"A web-based document management system developed for Cavite State University–Bacoor City Campus Extension Services to organize, manage, and efficiently access extension-related documents and records.",

    body:[
    "Developed using Django and Python with features for document uploading, categorization, searching, viewing, and managing digital records.",
    "Implemented user authentication and role-based access to help ensure that documents are securely managed and accessible to authorized users.",
    "Designed the system to improve document organization, reduce manual record-keeping, and provide a more efficient way of managing extension service documents."
    ]
  },

  {
    id:"p2",
    title:"Mini Hotel Booking",
    tag:"Django · Python",
    images:[
      "./photos/pic1.png",
      "./photos/pic.png"
    ],
    summary:"A Django-based mini hotel booking system designed to manage hotels, rooms, and customer bookings through a simple web interface.",

    body:[
    "Developed features for adding and managing hotel information, room details, and booking records.",
    "Implemented a basic booking workflow that allows users to view available hotel rooms and submit booking requests.",
    "Created as a practice project to explore Django CRUD operations, database relationships, templates, and basic booking system functionality."
    ]
  },
];

const figma = [
  {
    id:"f1",
    title:"Citrusé — Orange-Themed Website Design",
    tag:"Figma · UI/UX",
    images:[
      "./photos/fig1.0.png",
      "./photos/fig1.1.png",
      "./photos/fig1.2.png",
      "./photos/fig1.3.png",
      "./photos/fig1.4.png",
    ],
    summary:"A Figma website design for Citrusé, featuring a fresh orange-themed visual style focused on promoting a citrus-inspired fragrance product.",

    body:[
      "Designed a vibrant and modern website concept using orange-inspired colors, imagery, typography, and layouts to create a fresh and energetic brand identity.",
      "Created sections highlighting the product's scent, everyday use, oil-based formula, and target audience while keeping the interface visually engaging and easy to navigate.",
      "Focused on UI design, visual consistency, and presenting product information in a clean and appealing web layout."
    ],

    link:"https://www.figma.com/proto/eEzlR0aN6hsqvlMwa0whYU/Untitled?node-id=7-5&t=VK3kdi4FciCTAeto-1"
  },

  {
    id:"f2",
    title:"CvSU Bacoor Fitness Website",
    tag:"Figma · UI/UX",
    images:[
      "./photos/fig2.0.png",
      "./photos/fig2.1.png",
      "./photos/fig2.2.png",
      "./photos/fig2.3.png",
      "./photos/fig2.4.png",
      "./photos/fig2.5.png",
    ],
    summary:"A Figma website concept for CvSU Bacoor Fitness, designed to promote campus fitness, wellness, and physical activities through a modern and energetic interface.",

    body:[
      "Designed a fitness-focused website with a bold visual style, using strong typography, fitness imagery, and red accent colors to create an energetic and motivating experience.",
      "Created sections for fitness programs, services, information, and calls-to-action such as joining the gym and booking a free trial.",
      "Focused on creating a clear website layout and user-friendly navigation while maintaining a consistent fitness-oriented visual identity."
    ],

    link:"https://www.figma.com/proto/9BTScuwsucfyZx0clIoofP/FINALS---Estira-Quioyo?node-id=3-58&t=DRdGk1n2UGh1kZOG-1"
  },
  {
    id:"f3",
    title:"Yoast SEO Website Project",
    tag:"Figma · Web · SEO",
    images:[
      "./photos/fig3.0.png",
      "./photos/fig3.1.png",
      "./photos/fig3.2.png",
      "./photos/fig3.3.png",
    ],
    summary:"A Figma website project created during my OJT, focused on developing a clean web layout while applying basic SEO and content optimization principles.",

    body:[
      "Designed website layouts and page structures in Figma as part of my OJT experience, focusing on clear content organization and user-friendly presentation.",
      "Applied basic SEO considerations such as content structure, headings, page organization, and readability to support better website optimization.",
      "Gained practical experience in combining UI design with SEO-focused web content and structure."
    ],

    link:"https://www.figma.com/proto/rmBdgmnq6FMO4IPLYetNB2/Denniel-Estira-s-team-library?node-id=3362-562&scaling=scale-down&content-scaling=fixed&t=21KszivBmyGxBb8Z-1"
  },
  {
    id:"f4",
    title:"Document Management System — Wireframe",
    tag:"Figma · UI/UX · Web",
    images:[
      "./photos/fig4.0.png",
      "./photos/fig4.1.png",
      "./photos/fig4.2.png",
      "./photos/fig4.3.png",
      "./photos/fig4.4.png",
      "./photos/fig4.5.png",
    ],
    summary:"A Figma wireframe created for the Web-Based Document Management System developed for Cavite State University–Bacoor City Campus Extension Services.",

    body:[
      "Designed the initial wireframes to plan the system's interface, page structure, and user flow before development.",
      "Created layouts for key system features such as document management, navigation, user access, and information viewing.",
      "Used the wireframes as a visual guide during development to maintain a consistent and user-friendly interface."
    ],

    link:"https://www.figma.com/proto/jAr210T84GMqrjVfZSpFtu/Untitled?node-id=1-2&p=f&t=6a1QQ5QkV9hxHW9Q-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
  }
];