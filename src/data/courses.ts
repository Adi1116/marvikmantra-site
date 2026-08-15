// Courses. Each object drives both the course card (Home/Courses index) and
// the full detail page at /courses/[slug].
export type Course = {
  slug: string;
  badge: string; // small eyebrow label, e.g. "CLASS 11 JEE PROGRAM"
  name: string; // e.g. "MOMENTUM Course"
  title: string; // full page title, e.g. "MOMENTUM Course For Class 11 JEE Students"
  targetStudents: string;
  focus: string;
  description: string;
  level: number; // progression order: 1 = youngest, 4 = oldest
  cardSummary: string; // short line used on course cards
  duration: string;
  studentCount: string;
  structure: {
    admissionMode: string;
    courseDuration: string;
    subjectsCovered: string;
    classFrequency: string;
    nextProgression: string;
  };
  batches: { phase: string; date: string }[];
  benefits: { title: string; description: string }[];
  examPlan: { name: string; cadence: string; description: string }[];
};

export const courses: Course[] = [
  {
    slug: "manan-manthan-manas",
    badge: "CLASS 6, 7 & 8 PROGRAM",
    name: "MANAN, MANTHAN & MANAS Course",
    title: "MANAN, MANTHAN & MANAS Course For Class 6th, 7th & 8th",
    targetStudents: "Class 6th, 7th & 8th Students",
    focus: "Strong concepts, logical thinking, and early academic discipline aligned with school curriculum.",
    description:
      "This course gives a balanced platform to a student to follow a concept-building approach from an early age so that in higher classes he/she can have a perfect academic command. Specially designed for Class 6, 7 & 8 students to develop strong concepts, logical reasoning, and a problem-solving mindset — laying the groundwork for future success in JEE (Main + Advanced), NEET, and Olympiads.",
    level: 1,
    cardSummary: "For Class 6, 7 & 8 Students",
    duration: "1 Year",
    studentCount: "100+",
    structure: {
      admissionMode: "Direct 1st cum 1st serve basis",
      courseDuration: "Regular Classroom Course (up to Dec 2026 – Syllabus completion)",
      subjectsCovered: "Physics, Chemistry, Biology, Maths, SST and Mental Ability",
      classFrequency: "3 days per week | 3 hours per day | Evening sessions",
      nextProgression: "Dec '26 & Jan '27 – Revision for School Exams / NCERT Syllabus",
    },
    batches: [
      { phase: "Phase – 1", date: "02-April-2026" },
      { phase: "Phase – 2", date: "23-April-2026" },
      { phase: "Phase – 3", date: "21-May-2026" },
    ],
    benefits: [
      { title: "Concept-Building Approach", description: "Strengthens fundamentals in Maths, Science (Physics, Chemistry & Bio) and Reasoning, helping students master concepts step-by-step." },
      { title: "Competency-Based Learning", description: "Focus on developing the ability to apply learnt concepts in real-life and problem-solving situations." },
      { title: "Regular Assessments & Progress Tracking", description: "Tests and performance reviews to ensure consistent improvement." },
      { title: "Strong Foundation for Higher Classes", description: "Ensures smooth transition to advanced concepts of the next class, enabling students to excel in competitive fields." },
      { title: "Complete NCERT Syllabus Coverage", description: "Equal emphasis on school performance and advanced conceptual growth, with step-by-step learning for steady progress." },
      { title: "Personalized Mentoring", description: "Dedicated mentors are assigned to student groups to monitor progress, identify learning gaps, and provide tailored guidance." },
      { title: "Ongoing Support Sessions", description: "Regular doubt-solving, revision, and recovery classes to reinforce learning." },
      { title: "Motivational & Counselling Support", description: "Regular sessions to inspire students and support emotional and psychological well-being." },
      { title: "Periodic Parent-Teacher Meetings (PTMs)", description: "Conducted at regular intervals to review each student's academic progress and behaviour." },
    ],
    examPlan: [
      { name: "Periodic Test", cadence: "Every 3rd week", description: "Conducted for the syllabus taught till date (Objective Pattern)." },
      { name: "Subjective Pattern Test", cadence: "Once in 3 weeks", description: "Practice of CBSE / NCERT test pattern to support school and board studies." },
      { name: "Olympiads (NSEJS, IOQM & NMTC)", cadence: "As per student potential", description: "Additional optional assessments for Olympiad preparation." },
    ],
  },
  {
    slug: "medha-magnum",
    badge: "CLASS 9 & 10 PROGRAM",
    name: "MEDHA & MAGNUM Course",
    title: "MEDHA & MAGNUM Course For Class 9th & 10th",
    targetStudents: "Class 9th & 10th",
    focus: "Strong conceptual clarity, analytical thinking, and disciplined learning aligned with school and board curriculum.",
    description:
      "This course lays a strong academic foundation for students by systematically strengthening conceptual understanding and developing analytical thinking. It enables students to master their current class syllabus while nurturing higher-order problem-solving skills essential for future competitive exams like JEE (Main + Advanced) and NEET, ensuring a smooth transition to advanced learning levels in higher classes.",
    level: 2,
    cardSummary: "For Class 9 & 10 Students",
    duration: "1 Year",
    studentCount: "100+",
    structure: {
      admissionMode: "Direct 1st cum 1st serve basis",
      courseDuration: "Regular Classroom Course (up to Oct 2026 – Syllabus completion)",
      subjectsCovered: "Physics, Chemistry, Biology, Maths, SST and Mental Ability",
      classFrequency: "3/4 days per week | 3 hours per day | Evening sessions",
      nextProgression: "Nov & Dec '26 – Revision for School Exams / NCERT / Board Syllabus",
    },
    batches: [
      { phase: "Phase – 1", date: "02-April-2026" },
      { phase: "Phase – 2", date: "23-April-2026" },
      { phase: "Phase – 3", date: "21-May-2026" },
    ],
    benefits: [
      { title: "Strong Conceptual Foundation", description: "Comprehensive coverage of the current class school syllabus with emphasis on conceptual clarity and logical application." },
      { title: "Competitive Edge", description: "Early exposure to advanced concepts and problem-solving techniques aligned with future goals like JEE (Main + Adv) and NEET." },
      { title: "Balanced Curriculum Integration", description: "Combines school curriculum and higher-level concepts to ensure excellent performance in both board and competitive exams." },
      { title: "Scientific & Mathematical Thinking", description: "Aligned with national and international Olympiads (NSEJS, IOQM & NMTC, NSE) and other prestigious exams." },
      { title: "Complete NCERT / Board Syllabus Coverage", description: "Equal emphasis on school performance and advanced conceptual growth, with step-by-step learning." },
      { title: "Regular Assessments & Progress Tracking", description: "Tests and performance reviews to ensure consistent improvement." },
      { title: "Periodic Parent-Teacher Meetings (PTMs)", description: "Regular reviews of each student's academic progress, learning behaviour, and overall performance." },
      { title: "Personalized Mentoring", description: "Dedicated mentors monitor progress, identify learning gaps, and provide tailored academic guidance." },
      { title: "Ongoing Support Sessions", description: "Regular doubt-solving, revision, and recovery classes." },
      { title: "Motivational & Counselling Support", description: "Regular sessions to inspire students and support emotional well-being." },
      { title: "Competency-Based Learning", description: "Focus on applying learnt concepts to real-life and problem-solving situations." },
    ],
    examPlan: [
      { name: "Periodic Test", cadence: "Every 3rd week", description: "Conducted for the syllabus taught till date (Objective Pattern)." },
      { name: "Subjective Pattern Test", cadence: "Once in 3 weeks", description: "Practice of CBSE / NCERT test pattern to support school and board studies." },
      { name: "BPT (Board Pattern Test)", cadence: "For Board preparation", description: "Board pattern test for Class 10 students." },
      { name: "Olympiads & NSE", cadence: "As per student potential", description: "Additional tests for Olympiad preparation (NSEJS, IOQM & NMTC, NSE)." },
    ],
  },
  {
    slug: "momentum-jee",
    badge: "CLASS 11 JEE PROGRAM",
    name: "MOMENTUM Course",
    title: "MOMENTUM Course For Class 11 JEE Students",
    targetStudents: "Class 11 JEE Aspirants",
    focus: "Strong conceptual foundation, analytical thinking, and long-term JEE preparation aligned with school curriculum.",
    description:
      "This course is designed to systematically cover the Class 11 syllabus in sync with school studies while laying a strong foundation for JEE. The program focuses on developing the required academic depth, analytical skills, and examination temperament essential for success in national-level competitive exams.",
    level: 3,
    cardSummary: "For Class 11 JEE Aspirants",
    duration: "1 Year",
    studentCount: "100+",
    structure: {
      admissionMode: "Through MMSAT",
      courseDuration: "Regular Classroom Course (up to Jan 2027 – Class 11 syllabus completion)",
      subjectsCovered: "Physics, Chemistry, Mathematics",
      classFrequency: "3–4 days per week | 4 hours per day | Evening sessions",
      nextProgression: "Class 12 syllabus starts from Jan 2027",
    },
    batches: [
      { phase: "Phase – 1", date: "19-March-2026" },
      { phase: "Phase – 2 (A)", date: "09-April-2026" },
      { phase: "Phase – 2 (B)", date: "30-April-2026" },
      { phase: "Phase – 3", date: "06-May-2026" },
    ],
    benefits: [
      { title: "NCERT + JEE Integrated Curriculum", description: "Complete Class 11 (NCERT) syllabus aligned with JEE preparation from day one." },
      { title: "Concept-First Learning Approach", description: "Focus on deep understanding and application, not just memorization." },
      { title: "Practice for Speed, Accuracy & Time Management", description: "Structured sessions to improve problem-solving efficiency and manage time effectively in exams." },
      { title: "Smooth Transition from Class 10", description: "Helps students adapt to the increased academic rigor of Class 11." },
      { title: "Tests, Mocks & Performance Tracking", description: "Regular assessments with detailed feedback to build exam readiness and identify improvement areas." },
      { title: "Personalized Mentoring & Doubt Support", description: "Dedicated mentors, small groups, and regular doubt-solving to ensure consistent progress." },
      { title: "Regular Parent-Teacher Meetings (PTMs)", description: "Scheduled updates to keep parents informed about academic progress and improvement areas." },
    ],
    examPlan: [
      { name: "Internal Tests (IT)", cadence: "Every 3rd week", description: "Regular assessments to track progress and identify areas for improvement." },
      { name: "Full Syllabus Test (FST)", cadence: "After course completion", description: "Post-course-completion test on the complete syllabus." },
      { name: "Revision Tests (RT)", cadence: "From October onwards", description: "Includes Class 12 syllabus for advanced preparation and revision." },
    ],
  },
  {
    slug: "momentum-neet",
    badge: "CLASS 11 NEET PROGRAM",
    name: "MOMENTUM Course",
    title: "MOMENTUM Course For Class 11 NEET Students",
    targetStudents: "Class 11 NEET Aspirants",
    focus: "Strong conceptual foundation, analytical thinking, and long-term NEET preparation aligned with school curriculum.",
    description:
      "This course is designed to systematically cover the Class 11 syllabus in sync with school studies while laying a strong foundation for NEET. The program focuses on developing the required academic depth, analytical skills, and examination temperament essential for success in national-level competitive exams.",
    level: 4,
    cardSummary: "For Class 11 NEET Aspirants",
    duration: "1 Year",
    studentCount: "100+",
    structure: {
      admissionMode: "Through MMSAT",
      courseDuration: "Regular Classroom Course (up to Jan 2027 – Class 11 syllabus completion)",
      subjectsCovered: "Physics, Chemistry, Botany & Zoology",
      classFrequency: "3–4 days per week | 4 hours per day | Evening sessions",
      nextProgression: "Class 12 syllabus starts from Jan 2027",
    },
    batches: [
      { phase: "Phase – 1", date: "19-March-2026" },
      { phase: "Phase – 2 (A)", date: "09-April-2026" },
      { phase: "Phase – 2 (B)", date: "30-April-2026" },
      { phase: "Phase – 3", date: "06-May-2026" },
    ],
    benefits: [
      { title: "NCERT-Focused NEET Preparation", description: "Complete Class 11 syllabus with strong alignment to NEET, with special emphasis on NCERT (especially Biology)." },
      { title: "Concept Clarity + Strong Retention", description: "Focus on understanding concepts and retaining key information for accurate recall in exams." },
      { title: "Accuracy & Time Management Training", description: "Practice sessions designed to improve question selection, reduce errors, and manage time effectively." },
      { title: "Smooth Transition from Class 10", description: "Step-by-step approach to help students handle the depth and volume of Class 11 science." },
      { title: "Tests, Mocks & Detailed Analysis", description: "Regular NEET-pattern tests with a clear breakdown of mistakes and improvement areas." },
      { title: "Personalized Mentoring & Doubt Support", description: "Small batches, dedicated mentors, and continuous doubt-solving to ensure consistent progress." },
      { title: "Regular Parent-Teacher Meetings (PTMs)", description: "Structured updates to keep parents informed about performance and development." },
    ],
    examPlan: [
      { name: "Internal Tests (IT)", cadence: "Every 3rd week", description: "Regular assessments to track progress and identify areas for improvement." },
      { name: "Full Syllabus Test (FST)", cadence: "After course completion", description: "Post-course-completion test on the complete syllabus." },
      { name: "Revision Tests (RT)", cadence: "From October onwards", description: "Includes Class 12 syllabus for advanced preparation and revision." },
    ],
  },
];

export function getCourseBySlug(slug: string) {
  return courses.find((c) => c.slug === slug);
}
