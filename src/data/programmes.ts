import { BookOpen, GraduationCap, Building2, Rocket } from "lucide-react";

export const programmes = [
  {
    id: "a-level-2-years",
    title: "AS & A Levels (2 Years)",
    cat: "A Level",
    icon: BookOpen,
    desc: "The traditional 2-year Cambridge A-Level pathway for students directly progressing from IGCSE, WAEC or NECO.",
    overview: "Our 2-year AS and A Level programme provides a comprehensive deep dive into three or four subjects of your choice. Designed for students who have just completed their secondary education, it offers the time and rigorous academic preparation required to secure admission into the world's most competitive universities.",
    duration: "2 Years",
    requirements: "Minimum of 5 Credits in IGCSE, WAEC, or NECO (including Mathematics and English).",
    curriculum: [
      "First Year: Advanced Subsidiary (AS) Level",
      "Second Year: Advanced (A2) Level",
      "Core focus on 3 to 4 specialized subjects",
      "University preparation & career counseling"
    ]
  },
  {
    id: "a-level-1-year",
    title: "AS & A Levels Accelerated (1 Year)",
    cat: "A Level",
    icon: Rocket,
    desc: "An intensive, fast-tracked 1-year Cambridge A-Level programme for highly motivated students.",
    overview: "The accelerated A Level programme is designed for academically exceptional students who wish to complete their AS and A Level qualifications in a single year. This highly intensive course requires dedication and offers a swift pathway to university.",
    duration: "1 Year",
    requirements: "Exceptional grades in IGCSE, WAEC, or NECO, or previous AS Level experience. Interview required.",
    curriculum: [
      "Combined AS and A2 Level syllabus",
      "Intensive pacing covering 3 specialized subjects",
      "Extended study hours and rigorous assessments",
      "Fast-tracked university application support"
    ]
  },
  {
    id: "foundation",
    title: "University Foundation Programme",
    cat: "Foundation",
    icon: Building2,
    desc: "A bespoke pre-university pathway designed to bridge the gap between secondary education and university degrees.",
    overview: "The University Foundation Programme is a 9-month course tailored to equip students with the academic skills, subject-specific knowledge, and English language proficiency required for successful undergraduate study in the UK, Canada, and beyond.",
    duration: "9 Months",
    requirements: "Minimum of 5 Credits in WAEC, NECO, or IGCSE.",
    curriculum: [
      "Core modules in Academic English and Study Skills",
      "Specialized pathways: Business, Engineering, Science, Humanities",
      "Continuous assessment and coursework",
      "Direct progression agreements with partner universities"
    ]
  },
  {
    id: "direct-entry",
    title: "Direct Entry A Level",
    cat: "A Level",
    icon: GraduationCap,
    desc: "Seamless transition into the second year of A Levels for transferring students.",
    overview: "Designed for students who have successfully completed their AS Levels elsewhere and wish to complete their A2 year at Platform College. Our faculty provides targeted support to ensure a smooth transition and excellent final grades.",
    duration: "1 Year (A2 Level only)",
    requirements: "Satisfactory AS Level results from a recognized Cambridge International Centre.",
    curriculum: [
      "Completion of A2 Level syllabus",
      "Intensive revision of AS Level concepts",
      "UCAS application and personal statement support",
      "Mock examinations and final preparations"
    ]
  }
];

export const categories = ["All", "A Level", "Foundation"];
