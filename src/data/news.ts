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
    id: "university-placements-2026",
    cat: "Admissions",
    title: "Platform College Graduates Secure Offers at Top Global Universities",
    date: "MAR 20, 2026",
    excerpt: "Our A-Level graduates have received offers from prestigious universities including the University of Cambridge, Imperial College London, LSE, and the University of Toronto.",
    content: `We are thrilled to announce that Platform College A-Level graduates have secured offers from some of the world's most prestigious universities for the 2026/2027 academic year.

Our alumni have received offers from institutions including the University of Cambridge, Imperial College London, the London School of Economics and Political Science (LSE), University College London (UCL), the University of Toronto, and McGill University, among others.

In addition to international placements, our Direct Entry A-Level programme has successfully placed students into 200 Level admissions at top Nigerian universities including the University of Lagos, University of Ibadan, and Covenant University, allowing them to bypass JAMB and save a full academic year.

"Our university counselling programme begins on day one," explained our Head of Admissions. "We work closely with each student to identify their strengths, prepare compelling personal statements, and navigate the UCAS and Common App processes with confidence."`,
    featured: false,
  },
  {
    id: "admissions-open-2026-2027",
    cat: "Admissions",
    title: "Admissions Open for 2026/2027 A-Level Academic Year",
    date: "JUL 15, 2026",
    excerpt: "Applications are now being accepted for the 2026/2027 academic year. Limited places available for Cambridge AS & A Level, A' Level Direct Entry, and University Foundation programmes.",
    content: `Platform College is pleased to announce that admissions are now open for the 2026/2027 academic year. We are accepting applications for our Cambridge AS & A Level programmes, including the traditional 2-year pathway, the accelerated 1-year option, and our Direct Entry A-Level programme.

Prospective students and their families are invited to visit our campus for a guided tour and to learn more about our unique approach to A-Level education. Entrance assessments are being scheduled throughout the coming months.

Our admissions process is straightforward: submit an application, complete an entrance assessment in English and Mathematics, attend an interview with the Head of College, and receive your offer within five working days.

"We are looking for motivated students who are ready to challenge themselves academically," said the Head of College. "If you have the ambition to study at the world's best universities, Platform College will give you the foundation to succeed."`,
    featured: true,
  },
];
