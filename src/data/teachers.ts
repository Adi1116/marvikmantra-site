// Faculty. Edit or add entries here to update the Teachers page.
export type Teacher = {
  name: string;
  experience: string;
  qualification: string;
  subject: string;
  philosophy: string;
  previousAssociations: string;
  achievements: string[];
};

export const teachers: Teacher[] = [
  {
    name: "Sanjay Singh Chouhan",
    experience: "21 Years",
    qualification: "B.Tech graduate from MNIT Jaipur",
    subject: "JEE Mathematics",
    philosophy:
      "My teaching approach emphasizes building a strong conceptual foundation through active engagement with mathematical problems and exploring their practical applications.",
    previousAssociations: "Mantra, Career Point, MERITTO, Extramarks, Physics Wallah",
    achievements: ["AIR-72 in JEE-Main 2025", "AIR-52 in NFSU 2025", "5000+ students guided"],
  },
  {
    name: "Shreenath Gupta",
    experience: "22 Years",
    qualification: "B.Tech graduate from Rajasthan University",
    subject: "Physics (JEE & NEET)",
    philosophy:
      "My teaching approach emphasizes building a strong conceptual foundation through active engagement with Physics problems and exploring their practical applications.",
    previousAssociations: "Allen, Aakash institute, Career Point",
    achievements: ["AIR-72 in JEE-Main 2025", "AIR-52 in NFSU 2025", "5000+ students guided"],
  },
  {
    name: "Kaushal Kishore Sharma",
    experience: "21 Years",
    qualification: "M.Sc. Post graduate from University of Rajasthan, Jaipur",
    subject: "NEET Zoology",
    philosophy:
      "My teaching approach emphasizes building a strong conceptual foundation through active engagement with NCERT line to line explanation, problem solving and exploring practical applications.",
    previousAssociations: "Allen Career Institute (P) Ltd, Kota and Jaipur, Aakash Educational Services Ltd., Alwar, Extramarks, Unacademy",
    achievements: ["AIR-37, 122, & 171 in NEET", "10000+ students guided"],
  },
  {
    name: "Mr. Nitin Lathi",
    experience: "15+ Years",
    qualification: "B.Tech – Rajasthan Technical University (RTU), Kota",
    subject: "HOD – Chemistry",
    philosophy:
      "Known for concept-based and result-oriented teaching methodology, where complex topics are explained in a simple and logical manner, focusing on strong fundamentals and exam-oriented preparation.",
    previousAssociations: "Allen Career Kota and Bangalore, Poornima Group of Colleges Jaipur, Poornima University",
    achievements: ["AIR-72 in JEE-Main 2025", "AIR-52 in NFSU 2025", "1000+ students guided"],
  },
  {
    name: "Terrance Singh",
    experience: "29 Years",
    qualification: "Bachelor of Arts (English, Economics & Political Science), National Post Graduate College, Lucknow",
    subject: "English – Grammar, Literature & Spoken English",
    philosophy:
      "Worked with many institutes across cities like Lucknow, Gurgaon and Jaipur. Presently teaching at a reputed CBSE school in Jaipur since 2015.",
    previousAssociations: "Extramarks, Plus Point Education, High Marks Education, Allen, Ingress, St Mary's Convent School, Pinnacle Spoken English Institute",
    achievements: ["CBSE School Faculty", "Exam-focused preparation", "Multi-city experience"],
  },
  {
    name: "Aashish Gupta",
    experience: "6 Years",
    qualification: "Graduate from Rajasthan Technical University (RTU)",
    subject: "Mathematics",
    philosophy:
      "Teaching methodology emphasizes strong conceptual clarity, logical reasoning, and effective problem-solving techniques, adapting lessons to each student's learning style.",
    previousAssociations: "Eduhub, Greadup, Focus Edumatic, Allen, Ingress",
    achievements: ["Scored 96 & 97 in Class 10 Boards", "US curriculum experience", "500+ students guided"],
  },
  {
    name: "Tabeer Fatima",
    experience: "6 Years",
    qualification: "B.Tech graduate from Rajasthan Technical University (RTU) and LLB graduate from MDSU",
    subject: "Physics & Science",
    philosophy:
      "Teaching methodology emphasizes strong conceptual clarity, practical understanding of scientific principles, and exam-focused preparation.",
    previousAssociations: "Delhi Public School, Allen, Ingress Education",
    achievements: ["97% & 98% in Class 10 Boards", "500+ students guided"],
  },
  {
    name: "Anil Sharma",
    experience: "17 Years",
    qualification: "Postgraduate in Political Science from the University of Rajasthan",
    subject: "Social Science",
    philosophy:
      "Teaching methodology focuses on an interactive classroom approach, with individual attention and one-on-one guidance to ensure conceptual clarity.",
    previousAssociations: "Sizas Day Boarding School, Alpha Beta School, St. Joseph Convent School, St. Mary's Convent School, Plus Point Education, Ingress",
    achievements: ["Board Evaluator – Classes X & XII", "Interactive classroom approach"],
  },
  {
    name: "Dr. Piyush Kaushik",
    experience: "35+ Years",
    qualification: "MSc, MPhil, PhD, MA (Education), Ayurvedacharya, PG Diploma in Genetic Engineering & Biotechnology, Diploma in Food & Nutrition",
    subject: "Biology / Botany",
    philosophy:
      "Senior Biology faculty with more than 35 years of teaching experience, including 14 years in Kota, known for deep conceptual teaching and an exam-oriented approach.",
    previousAssociations: "Sri Chaitanya, Narayana, Resonance, Allen, Aakash, Career Point, Daswani Classes, Extramarks, Unacademy",
    achievements: ["Author of Biology & Botany books", "CSIR Fellow", "Fellow – International Health Care Society"],
  },
];
