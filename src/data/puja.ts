import { Puja, PujaStep } from "./types";

export const pujaCategories = [
  "All Sevas",
  "Upcoming",
  "Weekly",
  "Wealth",
  "Health",
  "Protection",
  "Family",
];

// Common FAQs (har puja par same) - zaroorat ho to puja ke andar override karo
const commonFaqs = [
  {
    question: "Do I need to be present during the puja?",
    answer:
      "No. The pandits perform the puja at the temple in your name and gotra. You receive the video once it is complete.",
  },
  {
    question: "When will I receive the puja video?",
    answer:
      "The video is shared within 2 to 3 days after the puja is completed, on the phone number you provide.",
  },
  {
    question: "What if I do not know my gotra?",
    answer:
      "You can enter 'Kashyap'. By tradition it is used when the gotra is not known.",
  },
];

export const pujas: Puja[] = [
  {
    id: "1",
    slug: "mahalakshmi-wealth-puja",
    category: "WEALTH & PROSPERITY",
    title: "Mahalakshmi Wealth Puja",
    venue: "[Temple name], [City]",
    date: "[Puja date, tithi]",
    price: 1100,
    type: "Wealth",
    image: "/pujas/mahalaxmi.jpg",
    description: "A puja to Maa Lakshmi for wealth and prosperity.",
    benefits: [
      "Growth in income and savings",
      "Peace and abundance at home",
      "Removal of financial obstacles",
    ],
    gradient: "from-[#45204f] to-[#d94132]",
    deity: "Maa Mahalakshmi",
    duration: "About 90 minutes",
    about:
      "Mahalakshmi Puja is dedicated to Maa Lakshmi, the goddess of wealth, fortune and prosperity. The pandits take the sankalp in your name and gotra, then perform abhishek, archana and aarti with Vedic mantras.",
    significance:
      "Maa Lakshmi is believed to bless homes that are clean, devoted and generous. This puja is traditionally performed for financial stability, a new business, or at the start of a new financial year.",
    includes: [
      "Sankalp in your name and gotra",
      "Abhishek and archana with Vedic mantras",
      "Complete puja video",
      "Prasad details after completion",
    ],
    packages: [
      { name: "Individual", price: 1100, description: "Puja in one person's name" },
      { name: "Family", price: 2100, description: "Puja in the names of up to 5 family members" },
    ],
    faqs: commonFaqs,
  },
  {
    id: "2",
    slug: "saraswati-vidya-puja",
    category: "KNOWLEDGE & SPEECH",
    title: "Saraswati Vidya Puja",
    venue: "[Temple name], [City]",
    date: "[Puja date, tithi]",
    price: 751,
    type: "Weekly",
    image: "/pujas/saraswati.jpg",
    description: "A puja to Maa Saraswati for learning, focus and speech.",
    benefits: [
      "Better focus and memory",
      "Success in studies and exams",
      "Clarity in speech and creativity",
    ],
    gradient: "from-[#462b40] to-[#ffb21a]",
    deity: "Maa Saraswati",
    duration: "About 60 minutes",
    about:
      "Saraswati Vidya Puja invokes Maa Saraswati, the goddess of knowledge, music and speech. It is especially popular among students, teachers and artists.",
    significance:
      "Devotees perform this puja before exams, before starting a new course, or on Basant Panchami to seek wisdom and a clear mind.",
    includes: [
      "Sankalp in your name and gotra",
      "Saraswati vandana and mantra jaap",
      "Complete puja video",
      "Prasad details after completion",
    ],
    packages: [
      { name: "Student", price: 751, description: "Puja in the student's name" },
      { name: "Family", price: 1500, description: "Puja in the names of up to 5 family members" },
    ],
    faqs: commonFaqs,
  },
  {
    id: "3",
    slug: "hanuman-shani-shanti-puja",
    category: "PROTECTION & PEACE",
    title: "Hanuman Shani Shanti Puja",
    venue: "[Temple name], [City]",
    date: "[Puja date, tithi]",
    price: 1001,
    type: "Protection",
    image: "/pujas/hanuman.jpg",
    description: "A puja to Hanuman ji for protection and relief from Shani dosha.",
    benefits: [
      "Relief from Shani dosha effects",
      "Protection from fear and negativity",
      "Strength and confidence",
    ],
    gradient: "from-[#c83c2c] to-[#30183f]",
    deity: "Shri Hanuman",
    duration: "About 75 minutes",
    about:
      "Hanuman ji is known as the remover of obstacles and protector of devotees. This puja includes Hanuman Chalisa path and offerings, performed on your behalf to ease the effects of Shani dosha.",
    significance:
      "Saturdays and Tuesdays are considered especially auspicious for Hanuman worship. Many devotees perform it during Shani Sade Sati or Dhaiya.",
    includes: [
      "Sankalp in your name and gotra",
      "Hanuman Chalisa path and offerings",
      "Complete puja video",
      "Prasad details after completion",
    ],
    packages: [
      { name: "Individual", price: 1001, description: "Puja in one person's name" },
      { name: "Family", price: 1900, description: "Puja in the names of up to 5 family members" },
    ],
    faqs: commonFaqs,
  },
  {
    id: "4",
    slug: "mahamrityunjaya-jaap",
    category: "HEALTH & LONGEVITY",
    title: "Mahamrityunjaya Jaap",
    venue: "[Temple name], [City]",
    date: "[Puja date, tithi]",
    price: 1501,
    type: "Health",
    image: "/pujas/mahadev.jpg",
    description: "Mahadev's jaap for good health and long life.",
    benefits: [
      "Support for recovery and wellbeing",
      "Protection from untimely troubles",
      "Peace of mind for the family",
    ],
    gradient: "from-[#75404e] to-[#ffb21a]",
    deity: "Bhagwan Shiv (Mahadev)",
    duration: "About 2 hours",
    about:
      "The Mahamrityunjaya mantra is one of the most revered mantras of Bhagwan Shiv. In this jaap, pandits chant the mantra in a fixed count, followed by havan and aarti, with your name and gotra in the sankalp.",
    significance:
      "It is traditionally chanted for the health of a loved one, before or after a medical procedure, or for general protection and long life.",
    includes: [
      "Sankalp in your name and gotra",
      "Mantra jaap with havan",
      "Complete puja video",
      "Prasad details after completion",
    ],
    packages: [
      { name: "Individual", price: 1501, description: "Jaap in one person's name" },
      { name: "Family", price: 2800, description: "Jaap in the names of up to 5 family members" },
    ],
    faqs: commonFaqs,
  },
  {
    id: "5",
    slug: "ram-darbar-family-puja",
    category: "FAMILY HARMONY",
    title: "Ram Darbar Family Puja",
    venue: "[Temple name], [City]",
    date: "[Puja date, tithi]",
    price: 1100,
    type: "Family",
    image: "/pujas/satyanarayan.jpg",
    description: "A puja to Shri Ram and family for love and harmony at home.",
    benefits: [
      "Unity and understanding in the family",
      "Sweeter relationships",
      "Blessings for a peaceful home",
    ],
    gradient: "from-[#38183f] to-[#c83c2c]",
    deity: "Shri Ram Darbar",
    duration: "About 90 minutes",
    about:
      "Ram Darbar shows Shri Ram with Sita, Lakshman and Hanuman, a picture of an ideal family. This puja is offered for harmony, respect and togetherness among family members.",
    significance:
      "Families perform it on Ram Navami, after a wedding, or when starting life in a new home.",
    includes: [
      "Sankalp in your name and gotra",
      "Ram Darbar puja and Ramayan path",
      "Complete puja video",
      "Prasad details after completion",
    ],
    packages: [
      { name: "Individual", price: 1100, description: "Puja in one person's name" },
      { name: "Family", price: 2100, description: "Puja in the names of up to 5 family members" },
    ],
    faqs: commonFaqs,
  },
  {
    id: "6",
    slug: "ganesh-abhishek-puja",
    category: "REMOVING OBSTACLES",
    title: "Ganesh Abhishek Puja",
    venue: "[Temple name], [City]",
    date: "[Puja date, tithi]",
    price: 851,
    type: "Protection",
    image: "/pujas/ganesha.jpg",
    description: "A puja to Ganesh ji to remove obstacles and begin well.",
    benefits: [
      "Smooth start to new work",
      "Obstacles cleared from your path",
      "Wisdom in decisions",
    ],
    gradient: "from-[#ffb21a] to-[#45204f]",
    deity: "Bhagwan Ganesh",
    duration: "About 60 minutes",
    about:
      "Ganesh ji is worshipped first in every auspicious work. In this puja, the pandits perform abhishek of Ganesh ji with water, milk and panchamrit, followed by mantra and aarti in your name.",
    significance:
      "Devotees do this puja before a new business, a house move, a wedding, or whenever work keeps getting delayed.",
    includes: [
      "Sankalp in your name and gotra",
      "Abhishek with panchamrit and mantras",
      "Complete puja video",
      "Prasad details after completion",
    ],
    packages: [
      { name: "Individual", price: 851, description: "Puja in one person's name" },
      { name: "Family", price: 1600, description: "Puja in the names of up to 5 family members" },
    ],
    faqs: commonFaqs,
  },
];

export const pujaSteps: PujaStep[] = [
  {
    number: "1",
    title: "Choose a puja",
    description: "Pick a puja that matches your wish and the date.",
    color: "bg-[#f7e8c8]",
    text: "text-[#9f3426]",
  },
  {
    number: "2",
    title: "Share your details",
    description: "Add your name and gotra so the sankalp is taken in your name.",
    color: "bg-[#ebdff5]",
    text: "text-[#45245b]",
  },
  {
    number: "3",
    title: "Pandits perform it",
    description: "Experienced pandits perform the ritual at the temple.",
    color: "bg-[#f8dacf]",
    text: "text-[#ad402e]",
  },
  {
    number: "4",
    title: "Receive the video",
    description: "Get the puja video and prasad details after completion.",
    color: "bg-[#dcebd7]",
    text: "text-[#35583a]",
  },
];

// Helper functions
export const getAllPujas = () => pujas;

export const getPujaBySlug = (slug: string) =>
  pujas.find((p) => p.slug === slug);

export const getPujasByType = (type: string) =>
  type === "All Sevas" || type === "Upcoming"
    ? pujas
    : pujas.filter((p) => p.type === type);

// Detail page ke neeche "More pujas" ke liye
export const getRelatedPujas = (slug: string, limit = 3) =>
  pujas.filter((p) => p.slug !== slug).slice(0, limit);

export const formatPrice = (price: number) =>
  `₹${price.toLocaleString("en-IN")}`;