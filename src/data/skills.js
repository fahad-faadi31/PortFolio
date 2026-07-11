import {
  SiPython,
  SiJavascript,
  SiCplusplus,
  SiSharp,
  SiHtml5,
  SiCss,
  SiReact,
  SiTailwindcss,
  SiFastapi,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiPytorch,
  SiMysql,
  SiGit,
  SiGithub,
  SiVercel,
  SiVsco,
} from "react-icons/si";
import { FiDatabase, FiSmartphone } from "react-icons/fi";

export const skillCategories = [
  "All",
  "Languages",
  "Frontend",
  "Backend",
  "Machine Learning",
  "Databases",
  "Tools",
];

export const skills = [
  // Programming Languages
  { name: "Python", icon: SiPython, category: "Languages" },
  { name: "JavaScript", icon: SiJavascript, category: "Languages" },
  { name: "C++", icon: SiCplusplus, category: "Languages" },
  { name: "C#", icon: SiSharp, category: "Languages" },
  { name: "SQL", icon: FiDatabase, category: "Languages" },
  { name: "HTML", icon: SiHtml5, category: "Languages" },
  { name: "CSS", icon: SiCss, category: "Languages" },

  // Frontend
  { name: "React", icon: SiReact, category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend" },
  { name: "Responsive Design", icon: FiSmartphone, category: "Frontend" },

  // Backend
  { name: "FastAPI", icon: SiFastapi, category: "Backend" },

  // Machine Learning
  { name: "Scikit-learn", icon: SiScikitlearn, category: "Machine Learning" },
  { name: "Pandas", icon: SiPandas, category: "Machine Learning" },
  { name: "NumPy", icon: SiNumpy, category: "Machine Learning" },
  {
    name: "TensorFlow",
    icon: SiTensorflow,
    category: "Machine Learning",
    learning: true,
  },
  {
    name: "PyTorch",
    icon: SiPytorch,
    category: "Machine Learning",
    learning: true,
  },

  // Databases
  { name: "SQL Server", icon: FiDatabase, category: "Databases" },
  { name: "MySQL", icon: SiMysql, category: "Databases" },

  // Tools
  { name: "Git", icon: SiGit, category: "Tools" },
  { name: "GitHub", icon: SiGithub, category: "Tools" },
  { name: "VS Code", icon: SiVsco, category: "Tools" },
  { name: "Vercel", icon: SiVercel, category: "Tools" },
];
