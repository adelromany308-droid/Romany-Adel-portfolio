export const portfolioData = {
  profile: {
    name: "Romany Adel",
    role: "AI & Full-Stack Developer",
    location: "Minya, Egypt",
    status: "Open to opportunities",
    headline: "I build useful products with AI and full-stack web technology.",
    intro: "Artificial Intelligence student working across machine learning, NLP, data engineering, React interfaces, and Node.js backends.",
    email: "adelromany308@gmail.com",
    linkedin: "https://linkedin.com/in/romany-adel-31a9b6341",
    github: "https://github.com/adelromany308-droid"
  },
  skills: [
    {
      name: "React & Backend",
      description: "Interfaces, APIs, data, and real-time updates.",
      tools: ["React", "Vite", "Node.js", "Express", "MongoDB", "REST APIs", "Socket.IO", "JWT"]
    },
    {
      name: "AI & Machine Learning",
      description: "From preparing data to comparing and evaluating models.",
      tools: ["Python", "Scikit-learn", "TensorFlow", "Keras", "Feature Engineering", "SMOTE"]
    },
    {
      name: "NLP & Generative AI",
      description: "Tools for working with text and retrieving useful context.",
      tools: ["NLP", "OCR", "RAG", "Embeddings", "FAISS", "LLM Applications"]
    },
    {
      name: "Data Engineering",
      description: "Reliable data preparation and pipeline foundations.",
      tools: ["SQL", "PostgreSQL", "MySQL", "Data Cleaning", "Data Validation", "Pipelines"]
    }
  ],
  projects: [
    {
      number: "01",
      name: "UniQueue",
      category: "React & Backend",
      subtitle: "Smart university queue management",
      description: "A full-stack university queue application with student, staff, and admin dashboards. The React client connects to an Express API backed by MongoDB, with JWT authentication and live queue updates through Socket.IO.",
      stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Socket.IO"],
      href: "https://github.com/adelromany308-droid/uniqueue-system",
      featured: true
    },
    {
      number: "02",
      name: "MediSimplify",
      category: "AI & NLP",
      subtitle: "Medical document simplification",
      description: "An AI application concept for making complex medical documents easier to understand with OCR, NLP, retrieval-augmented generation, and FAISS vector search.",
      stack: ["NLP", "OCR", "RAG", "FAISS", "Fine-Tuning"],
      href: "",
      featured: true
    },
    {
      number: "03",
      name: "Cardiovascular Disease Prediction",
      category: "Machine Learning",
      subtitle: "Machine learning and data analysis",
      description: "A machine-learning project focused on cardiovascular disease prediction, including data preprocessing, feature engineering, class balancing with SMOTE, and model evaluation.",
      stack: ["Python", "Scikit-learn", "Keras", "SMOTE"],
      href: "https://github.com/adelromany308-droid/nti-machine-learning-project",
      featured: true
    },
    {
      number: "04",
      name: "AnomX",
      category: "Data Engineering",
      subtitle: "Predictive maintenance data pipeline",
      description: "A pipeline concept that processes industrial sensor data, detects anomalies, and surfaces potential maintenance insights.",
      stack: ["Python", "Data Pipelines", "Anomaly Detection"],
      href: "https://github.com/omarnagy122/Anomx",
      featured: false
    }
  ],
  experience: [
    {
      date: "2024 — Present",
      title: "AI Data Contributor",
      organization: "Outlier",
      detail: "Reviewing and evaluating AI model outputs, with a focus on data accuracy, consistency, and quality."
    },
    {
      date: "2025",
      title: "Data Engineering Track",
      organization: "DEPI — Digital Egypt Pioneers Initiative",
      detail: "Training in Python, SQL, data engineering fundamentals, relational databases, and data processing."
    },
    {
      date: "2025",
      title: "Machine Learning Training",
      organization: "NTI — ITIDA",
      detail: "Training in preprocessing, feature engineering, supervised learning, and model evaluation."
    },
    {
      date: "Training",
      title: "Natural Language Processing",
      organization: "NTI",
      detail: "Practical training focused on NLP and text-based AI applications."
    }
  ],
  education: [
    {
      title: "BSc, Artificial Intelligence",
      organization: "Minia National University — Faculty of Computers & Artificial Intelligence",
      date: "2023 — 2028"
    },
    {
      title: "Data Engineering Track",
      organization: "DEPI — Digital Egypt Pioneers Initiative",
      date: "Training"
    },
    {
      title: "Machine Learning Training — 120 hours",
      organization: "NTI — ITIDA",
      date: "Score: 98%"
    },
    {
      title: "Python-Based Backend Development",
      organization: "Information Technology Institute (ITI)",
      date: "Score: 99%"
    }
  ]
};
