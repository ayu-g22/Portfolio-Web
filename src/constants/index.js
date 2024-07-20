import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `I am a motivated and detail-oriented 4th-year BE CSE student at Chandigarh University with in-depth knowledge of full stack web development and AI. Seeking a Full Stack Developer position to leverage my skills in both front-end and back-end development to contribute to innovative projects and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I am up for new tasks and challenges in upcoming years to start my journey in software development. .`;

export const EXPERIENCES = [
  {
    year: "June 2023-July 2023",
    role: "AI Intern",
    company: "Intel Coorporation",
    description: `During my internship, I gained hands-on experience in AI and ML. We researched innovative solutions, focusing on segmenting RBCs using computer vision to detect diseases early. This project honed my skills in AIML and showcased the potential of technology in healthcare diagnostics..`,
    technologies: ["Python","TensorFlow","Keras","OpenCV","Scikit-learn"],
  },
  {
    year: "Mar 2023 - Apr 2023",
    role: "ML Intern",
    company: "Suvidha Foundation",
    description: `The developed abstractive text summarization system successfully generated concise and coherent summaries from lengthy input text.`,
    technologies: ["Python",,"Natural Language Toolkit (NLTK)","spaCy","TensorFlow"],
  },
];

export const PROJECTS = [
  {
    title: "WhisperYourSecrets",
    image: project1,
    description:
      "\"Whisper Your Secrets\" is a web application I created for people dealing with mental health disorders, allowing them to share secrets anonymously. I used React for the frontend and Node.js for the backend, with MongoDB for data storage. The app features user authentication for secure and private secret submissions and an intuitive interface for seamless interaction. My focus was on privacy and enhancing the user experience.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "ManageYourself",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "JavaScript", "NodeJS"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
];

export const CONTACT = {
  address: "Avas Vikas, D.M Road Bulandshahr",
  phoneNo: "+91 766-884-3739",
  email: "ayushagupta225@gmail.com",
};