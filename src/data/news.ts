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
    id: "alevel-excellence-2026",
    cat: "Results",
    title: "Platform College A-Level Students Achieve Outstanding Cambridge Results",
    date: "JAN 15, 2026",
    excerpt: "Platform College A-Level students have once again delivered exceptional Cambridge examination results, with over 85% of entries achieving A*-B grades across all subjects.",
    content: `We are delighted to announce that Platform College A-Level students have once again delivered exceptional Cambridge International Examination results, reinforcing our position as one of Lagos's premier sixth-form colleges.

Over 85% of all subject entries achieved A*-B grades, with a significant number of students securing straight A* and A grades in their chosen subjects. These outstanding results are a testament to the dedication of our Cambridge-certified faculty and the hard work of our students.

Our A-Level programme, offering both the traditional 2-year pathway and the accelerated 1-year option, continues to produce scholars who are well-prepared for admission into the world's most competitive universities.

"We are incredibly proud of our students," said the Director of Platform College. "These results demonstrate that with the right environment, expert teaching, and unwavering commitment, Nigerian students can compete with the best in the world. Our Cambridge A-Level programme is designed to unlock that potential."`,
    featured: true,
  },
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
  {
    id: "cambridge-accreditation",
    cat: "Academics",
    title: "Platform College Maintains Cambridge International Centre Accreditation",
    date: "JAN 28, 2026",
    excerpt: "We are proud to continue as a fully accredited Cambridge International Centre, meeting the highest standards of A-Level education delivery.",
    content: `Platform College is proud to maintain its status as a fully accredited Cambridge International Centre, a distinction that reflects our unwavering commitment to delivering the highest standard of Cambridge A-Level education.

Our accreditation ensures that our students receive internationally recognized qualifications that are accepted by universities around the world. As a Cambridge International Centre, we adhere to rigorous standards in teaching, assessment, and student support.

Our faculty includes Cambridge-certified examiners and subject specialists who bring deep expertise to the classroom. This expertise translates into exceptional student outcomes and a learning environment that challenges and inspires.

"We are committed to maintaining the gold standard in A-Level education," said our Academic Director. "Our Cambridge accreditation is not just a badge — it is a promise to our students and their families that we will deliver an education that opens doors to the world's best universities."`,
    featured: false,
  },
  {
    id: "direct-entry-success",
    cat: "Results",
    title: "Direct Entry A-Level Students Gain 200 Level Admission",
    date: "APR 05, 2026",
    excerpt: "Our Direct Entry A-Level students have successfully secured 200 Level admissions into Nigerian universities, bypassing JAMB and saving a full academic year.",
    content: `We are delighted to report that our Direct Entry A-Level students have successfully secured 200 Level admissions into leading Nigerian universities, demonstrating the power of the A-Level pathway for students seeking accelerated progress in their tertiary education.

Through our Direct Entry programme, students complete their A2 Level qualifications and gain direct admission into 200 Level at universities including the University of Lagos, University of Ibadan, Covenant University, and Babcock University.

This pathway allows students to bypass the JAMB UTME process and save a full academic year, while still receiving a world-class Cambridge education that is recognized globally.

"Our Direct Entry programme is one of the most efficient pathways to university education in Nigeria," noted a Platform College adviser. "Students complete their A-Levels in 12-24 months and enter university at 200 Level, fully prepared for the rigours of undergraduate study."`,
    featured: false,
  },
  {
    id: "summer-camp-2026",
    cat: "Events",
    title: "Platform College UK Summer Camp Now Open for Registration",
    date: "JUN 01, 2026",
    excerpt: "Our annual UK Summer Camp is now open for registration, offering A-Level students an immersive academic and cultural experience in the United Kingdom.",
    content: `Platform College is excited to announce that registration for our annual UK Summer Camp is now open. This immersive programme offers A-Level students a unique opportunity to experience academic and cultural life in the United Kingdom.

The camp includes visits to leading UK universities including Cambridge and Oxford, academic workshops led by UK-based educators, and cultural excursions that broaden students' horizons and deepen their understanding of British academic culture.

"This is a transformative experience for our students," explained the programme coordinator. "They get to see firsthand what their future could look like at a top UK university, and they return to Lagos with renewed focus and ambition for their A-Level studies."

Spaces are limited. Interested families are encouraged to register early to secure a place.`,
    featured: false,
  },
];
