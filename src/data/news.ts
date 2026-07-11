export interface NewsArticle {
  id: string;
  cat: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  featured: boolean;
  image?: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "best-secondary-school-2025",
    cat: "Awards",
    title: "Platform Schools Wins Best Secondary School in Nigeria 2025",
    date: "MAY 12, 2026",
    excerpt: "We are thrilled to announce that Platform Schools has been awarded the prestigious title of Best Secondary School in Nigeria for the year 2025 at the Prestige Africa Education Awards.",
    content: `We are thrilled to announce that Platform Schools has been awarded the prestigious title of Best Secondary School in Nigeria for the year 2025 at the Prestige Africa Education Awards.

This marks a significant milestone in our journey of providing world-class education and nurturing the next generation of Nigerian leaders.

The award recognizes our unwavering commitment to academic excellence, state-of-the-art facilities, and the holistic development of our students. We would like to extend our deepest gratitude to our dedicated faculty, hardworking students, and supportive parents who have all contributed to making Platform Schools a beacon of educational excellence in West Africa.`,
    featured: true,
    image: "https://www.platformschools.org/images/women-student-with-women-teacher.jpg",
  },
  {
    id: "maths-olympiad-success",
    cat: "Academic",
    title: "Students Excel in National Mathematics Olympiad",
    date: "APR 28, 2026",
    excerpt: "Our students have once again demonstrated their academic prowess by securing top positions in the recent National Mathematics Olympiad held in Abuja.",
    content: `Our students have once again demonstrated their academic prowess by securing top positions in the recent National Mathematics Olympiad held in Abuja.

They competed against hundreds of the brightest mathematical minds across the country and emerged victorious, showcasing the strength of our STEM programs.`,
    featured: false,
    image: "https://www.platformschools.org/images/student-checking-for-book-to-read-in-the-library.jpg",
  },
  {
    id: "chess-tournament-win",
    cat: "Sports",
    title: "Chess Club Triumphs at Inter-School Tournament",
    date: "APR 15, 2026",
    excerpt: "Platform Schools solidifies its reputation as the premier school for strategic development, bringing home the gold trophy and showcasing our unparalleled chess program.",
    content: `Platform Schools solidifies its reputation as the premier school for strategic development, bringing home the gold trophy and showcasing our unparalleled chess program.

The chess team performed exceptionally well, demonstrating critical thinking, patience, and brilliant tactical maneuvers to outsmart their opponents from various elite schools in Lagos.`,
    featured: false,
    image: "https://www.platformschools.org/images/chess-student.jpg",
  },
  {
    id: "digital-learning-hub",
    cat: "Academic",
    title: "New Digital Learning Hub Launched",
    date: "MAR 30, 2026",
    excerpt: "We are proud to unveil our new state-of-the-art Digital Learning Hub, designed to equip students with 21st-century tech skills.",
    content: `We are proud to unveil our new state-of-the-art Digital Learning Hub, designed to equip students with 21st-century tech skills.

The facility features the latest in educational technology, coding workstations, robotics labs, and interactive displays. This aligns with our mission to prepare our students for the rapidly evolving digital landscape.`,
    featured: false,
    image: "https://www.platformschools.org/images/students-learning-about-cloud-computing.jpg",
  },
  {
    id: "pta-meeting-summary",
    cat: "Community",
    title: "Parents and Teachers Association (PTA) General Meeting",
    date: "MAR 10, 2026",
    excerpt: "A summary of the key decisions and updates from our recent PTA meeting.",
    content: `A summary of the key decisions and updates from our recent PTA meeting.

We discussed the upcoming academic calendar, planned improvements to our transport fleet, and new extracurricular initiatives. Thank you to all parents who attended and contributed to the fruitful discussions.`,
    featured: false,
    image: "https://www.platformschools.org/images/students-eating-lunch-in-canteen.jpg",
  },
  {
    id: "admissions-open-2026",
    cat: "Events",
    title: "Admission for 2026/2027 Session Now Open",
    date: "FEB 15, 2026",
    excerpt: "Applications are now being accepted for the next academic session. Find out more about our entry process and key deadlines.",
    content: `Applications are now being accepted for the next academic session. Find out more about our entry process and key deadlines.

We invite prospective parents to visit us for a guided tour and to learn more about our unique curriculum and facilities. Entrance exams will be scheduled throughout the coming months.`,
    featured: false,
    image: "https://www.platformschools.org/images/student-in-ishefun-campus.jpg",
  },
];
