// puja types

export type PujaType =
  | "Wealth"
  | "Weekly"
  | "Protection"
  | "Health"
  | "Family";

  export interface PujaPackage {
  name: string;
  price: number;
  description: string;
}
 
export interface PujaFaq {
  question: string;
  answer: string;
}
 
export interface Puja {
  id: string;
  slug: string;
  category: string;
  title: string;
  venue: string;
  date: string;
  price: number;
  type: PujaType;
  image: string;
  description: string;
  benefits: string[];
  gradient: string;
 
  // Detail page fields
  deity: string;
  duration: string;
  about: string;
  significance: string;
  includes: string[];
  packages: PujaPackage[];
  faqs: PujaFaq[];
}

export interface PujaStep {
  number: string;
  title: string;
  description: string;
  color: string;
  text: string;
}

export interface PujaStep {
  number: string;
  title: string;
  description: string;
  color: string;
  text: string;
}




// library types

export type Category = "Aarti" | "Chalisa" | "Mantra" | "Remedy";

export type LibraryItem = {
  id: number;
  title: string;
  category: Category;
  description?: string;
  image: string;
  gradient: string; // fallback while the image loads or if it is missing
};


// temple types



export type Deity = "Shiva" | "Ganesha" | "Vishnu" | "Devi";
export type TempleFilter = "All" | Deity;

export interface Temple {
  id: string;
  name: string;
  deity: Deity;
  location: string;
  description: string;
  gradient: string;
  image: string;
}