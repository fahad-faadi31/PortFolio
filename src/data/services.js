import { FiGlobe, FiCpu, FiFilter, FiGrid, FiTerminal, FiBarChart2 } from "react-icons/fi";

export const services = [
  {
    icon: FiGlobe,
    title: "AI Web Applications",
    description:
      "End-to-end web apps that put machine learning models behind a real interface — from FastAPI backend to a working product users can interact with.",
    tags: ["Python", "FastAPI", "React"],
  },
  {
    icon: FiCpu,
    title: "Machine Learning Solutions",
    description:
      "Building and training models for classification and prediction problems, using Scikit-learn and proper evaluation to make sure results are trustworthy.",
    tags: ["Scikit-learn", "Model Training"],
  },
  {
    icon: FiFilter,
    title: "Data Cleaning & Preprocessing",
    description:
      "Turning messy, inconsistent raw data into clean, structured datasets ready for analysis or modeling — handling missing values, duplicates, and formatting issues.",
    tags: ["Pandas", "NumPy"],
  },
  {
    icon: FiGrid,
    title: "Excel & CSV Automation",
    description:
      "Automating repetitive spreadsheet and CSV workflows — merging files, generating reports, and transforming data without the manual, error-prone busywork.",
    tags: ["Excel", "CSV", "Python"],
  },
  {
    icon: FiTerminal,
    title: "Python Automation & REST APIs",
    description:
      "Writing Python scripts to automate everyday tasks, and building clean, documented REST APIs with FastAPI so other apps and services can plug in easily.",
    tags: ["Python", "FastAPI"],
  },
  {
    icon: FiBarChart2,
    title: "Data Analytics",
    description:
      "Digging into datasets to find patterns and answer real questions — summarizing findings clearly so they're actually useful for decisions, not just charts.",
    tags: ["Pandas", "Analytics"],
  },
];
