export type Category = "Aarti" | "Chalisa" | "Mantra" | "Remedy";

export type LibraryItem = {
  id: number;
  title: string;
  category: Category;
  description?: string;
  image: string;
  gradient: string; // fallback while the image loads or if it is missing
};

export const categories = [
  { name: "Aarti", description: "Complete aartis for every deity.", color: "bg-[#f6e8c7]" },
  { name: "Chalisa", description: "Read along during your puja.", color: "bg-[#ebdef5]" },
  { name: "Mantra", description: "Mantras with meaning and benefits.", color: "bg-[#f7d9cf]" },
  { name: "Home remedies", description: "Ayurvedic and household wisdom.", color: "bg-[#dcebd7]" },
];

export const filters = ["All", "Aarti", "Chalisa", "Mantra", "Home remedies"];

export const books: LibraryItem[] = [
  {
    id: 1,
    title: "Om Jai Jagdish Hare",
    category: "Aarti",
    image: "/library/jagdish.jpg",
    gradient: "from-[#492b61] to-[#c43d30]",
  },
  {
    id: 2,
    title: "Ganesh Aarti",
    category: "Aarti",
    image: "/library/ganesh.jpg",
    gradient: "from-[#38214b] to-[#e99d20]",
  },
  {
    id: 3,
    title: "Shiv Aarti",
    category: "Aarti",
    image: "/library/shiv.jpg",
    gradient: "from-[#c43b2d] to-[#382044]",
  },
  {
    id: 4,
    title: "Hanuman Chalisa",
    category: "Chalisa",
    image: "/library/hanuman.jpg",
    gradient: "from-[#f1a51e] to-[#50305e]",
  },
  {
    id: 5,
    title: "Durga Chalisa",
    category: "Chalisa",
    image: "/library/durga.jpg",
    gradient: "from-[#482750] to-[#c84032]",
  },
  {
    id: 6,
    title: "Shiv Chalisa",
    category: "Chalisa",
    image: "/library/shiv_chalisa.jpg",
    gradient: "from-[#40234d] to-[#e99e20]",
  },
  {
    id: 7,
    title: "Gayatri Mantra",
    category: "Mantra",
    image: "/library/gayatri.jpg",
    gradient: "from-[#c63d2e] to-[#382044]",
  },
  {
    id: 8,
    title: "Mahamrityunjaya Mantra",
    category: "Mantra",
    image: "/library/mahamrityunjaya.jpg",
    gradient: "from-[#f2a51c] to-[#4a2a56]",
  },
  {
    id: 9,
    title: "Om Namah Shivaya",
    category: "Mantra",
    image: "/library/om_namah.jpg",
    gradient: "from-[#492754] to-[#c83d2f]",
  },
  {
    id: 10,
    title: "Tulsi tea for cold",
    category: "Remedy",
    image: "/library/tulsi.jpg",
    gradient: "from-[#48254f] to-[#efa51f]",
  },
  {
    id: 11,
    title: "Turmeric milk",
    category: "Remedy",
    image: "/library/turmeric.jpg",
    gradient: "from-[#c83e30] to-[#392044]",
  },
  {
    id: 12,
    title: "Ajwain for digestion",
    category: "Remedy",
    image: "/library/ajwain.jpg",
    gradient: "from-[#f0a31d] to-[#4a2b58]",
  },
];