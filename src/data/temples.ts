import type { Temple, TempleFilter } from "./types";

export const TEMPLE_FILTERS: TempleFilter[] = [
  "All",
  "Shiva",
  "Ganesha",
  "Vishnu",
  "Devi",
];

const G_PURPLE_RED = "from-[#4A2362] to-[#C8432B]";
const G_DARK_AMBER = "from-[#2A1548] to-[#F5A21A]";
const G_RED_PURPLE = "from-[#C8432B] to-[#3A1F66]";
const G_AMBER_PURPLE = "from-[#F5A21A] to-[#4A2362]";

export const TEMPLES: Temple[] = [
  {
    id: "1",
    name: "Kashi Vishwanath",
    deity: "Shiva",
    location: "Varanasi, Uttar Pradesh",
    description: "Dedicated to Lord Shiva on the banks of the Ganga.",
    img: "/temples/varanasi.jpg",
    gradient: G_PURPLE_RED,
  },
  {
    id: "2",
    name: "Siddhivinayak",
    deity: "Ganesha",
    location: "Mumbai, Maharashtra",
    description: "A beloved Ganesha temple visited by millions every year.",
    img: "/temples/mumbai.jpg",
    gradient: G_DARK_AMBER,
  },
  {
    id: "3",
    name: "Tirumala Venkateswara",
    deity: "Vishnu",
    location: "Tirupati, Andhra Pradesh",
    description: "The sacred hill shrine of Lord Venkateswara.",
    img: "/temples/tirupati.jpg",
    gradient: G_RED_PURPLE,
  },
  {
    id: "4",
    name: "Vaishno Devi",
    deity: "Devi",
    location: "Katra, Jammu & Kashmir",
    description: "A sacred cave shrine of the Divine Mother Goddess.",
    img: "/temples/jammu.jpg",
    gradient: G_AMBER_PURPLE,
  },
  {
    id: "5",
    name: "Meenakshi Amman",
    deity: "Devi",
    location: "Madurai, Tamil Nadu",
    description: "A Dravidian temple of towering gopurams.",
    img: "/temples/madurai.jpg",
    gradient: G_PURPLE_RED,
  },
  {
    id: "6",
    name: "Jagannath Temple",
    deity: "Vishnu",
    location: "Puri, Odisha",
    description: "Home of the world-famous Rath Yatra festival.",
    img: "/temples/puri.jpg",
    gradient: G_DARK_AMBER,
  },
  {
    id: "7",
    name: "Somnath  Temple",
    deity: "Shiva",
    location: "Prabhas Patan, Gujarat",
    description: "Home of the grand and world-famous Rath Yatra festival.",
    img: "/temples/gujarat.jpg",
    gradient: G_DARK_AMBER,
  },
  {
    id: "8",
    name: "Konark Sun Temple",
    deity: "Surya",
    location: "Konark, Odisha",
    description: "A magnificent UNESCO World Heritage monument.",
    img: "/temples/odisha.jpg",
    gradient: G_DARK_AMBER,
  },
];