import ForestPredictionIllustration from "../components/shared/illustrations/ForestPredictionIllustration";
import RestaurantSystemIllustration from "../components/shared/illustrations/RestaurantSystemIllustration";
import HousePriceIllustration from "../components/shared/illustrations/HousePriceIllustration";
import SpamDetectionIllustration from "../components/shared/illustrations/SpamDetectionIllustration";

// demo: null means the project has no live demo, so the button is hidden.
export const projects = [
  {
    title: "Forest Cover Type Prediction",
    description:
      "A machine learning classification project that predicts forest cover type from cartographic data, complete with a GUI so predictions can be made without touching code.",
    illustration: ForestPredictionIllustration,
    tags: ["Machine Learning", "Scikit-learn", "GUI"],
    github: "https://github.com/fahad-faadi31/Forest-Cover-Type-Dataset-ML-",
    demo: null,
  },
  {
    title: "House Price Prediction",
    description:
      "A regression model that predicts house prices from property features, covering the full pipeline from data preprocessing to model evaluation.",
    illustration: HousePriceIllustration,
    tags: ["Machine Learning", "Scikit-learn", "Regression"],
    github: "https://github.com/fahad-faadi31/House-price-prediction-",
    demo: null,
  },
  {
    title: "SMS Spam Detection",
    description:
      "A text classification model that flags spam messages using CountVectorizer for feature extraction, paired with a trained classifier for accurate detection.",
    illustration: SpamDetectionIllustration,
    tags: ["Machine Learning", "NLP", "CountVectorizer"],
    github: "https://github.com/fahad-faadi31/Spam-Detection-with-CountVectorizer",
    demo: null,
  },
  {
    title: "Steakway Restaurant Management System",
    description:
      "A restaurant management system with a C# frontend, handling orders, billing, and table management through a structured, user-friendly interface.",
    illustration: RestaurantSystemIllustration,
    tags: ["C#"],
    github: "https://github.com/fahad-faadi31/Steakway-Restaurant-Management-System-using-c-",
    demo: null,
  },
];
