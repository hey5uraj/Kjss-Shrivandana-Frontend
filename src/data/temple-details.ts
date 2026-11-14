// data/temple-details.ts
// Extra content for the details page. Keys must match the `id` values in your TEMPLES array.

export type TempleDetail = {
  tagline: string;
  about: string[];
  history: string;
  architecture: string;
  facts: { label: string; value: string }[];
  rituals: { title: string; description: string }[];
  festivals: { name: string; description: string }[];
  visit: {
    bestTime: string;
    timings: string;
    dressCode: string;
    howToReach: string;
    nearby: string[];
  };
  tips: string[];
};

export const TEMPLE_DETAILS: Record<string, TempleDetail> = {
  "kashi-vishwanath": {
    tagline: "The luminous Jyotirlinga on the banks of the Ganga.",
    about: [
      "Kashi Vishwanath is one of the twelve Jyotirlingas, the most sacred shrines of Lord Shiva. It stands in Varanasi, among the oldest continuously inhabited cities in the world.",
      "Devotees believe a visit, a dip in the Ganga and darshan here bring liberation (moksha), which is why pilgrims come from every corner of India.",
    ],
    history:
      "The temple has been destroyed and rebuilt several times over the centuries. The present structure was built in 1780 by Maharani Ahilyabai Holkar of Indore. In the early 19th century, Maharaja Ranjit Singh donated gold for the spire and domes. The Kashi Vishwanath Corridor, opened in 2021, connects the temple directly to the Ganga ghats.",
    architecture:
      "The complex is built in the Nagara style. Its three domes and spire are covered in gold plating, and the sanctum holds a dark stone lingam set in a silver altar.",
    facts: [
      { label: "Deity", value: "Lord Shiva (Vishwanath)" },
      { label: "Location", value: "Varanasi, Uttar Pradesh" },
      { label: "Significance", value: "One of 12 Jyotirlingas" },
      { label: "Architecture", value: "Nagara style" },
      { label: "Rebuilt", value: "1780 by Ahilyabai Holkar" },
      { label: "River", value: "Ganga" },
    ],
    rituals: [
      { title: "Mangala Aarti", description: "The early-morning aarti that begins the day of worship." },
      { title: "Rudrabhishek", description: "Ritual bathing of the lingam with water, milk, honey and bael leaves." },
      { title: "Shringar & Saptarishi Aarti", description: "Evening adornment and aarti, an atmospheric time to attend." },
    ],
    festivals: [
      { name: "Maha Shivaratri", description: "The biggest celebration, with night-long worship and long queues." },
      { name: "Dev Deepawali", description: "The ghats are lit with lakhs of diyas on the full moon after Diwali." },
      { name: "Shravan Month", description: "Devotees offer Ganga water every Monday." },
    ],
    visit: {
      bestTime: "October to March, when the weather is pleasant.",
      timings: "Opens very early morning and closes late at night, with short closures for aartis. Check the official temple trust site for current timings.",
      dressCode: "Modest, traditional clothing is recommended.",
      howToReach:
        "Varanasi has an airport, a major railway junction and good road links. The temple is in the old city, reached on foot or by e-rickshaw from Godowlia.",
      nearby: ["Dashashwamedh Ghat", "Sankat Mochan Temple", "Sarnath", "Annapurna Devi Temple"],
    },
    tips: [
      "Phones, bags and electronics are usually not allowed inside. Use the cloakrooms.",
      "Book darshan or Sugam entry online where available to skip queues.",
      "Beware of unofficial guides who promise quick darshan for money.",
    ],
  },

  siddhivinayak: {
    tagline: "Mumbai's most beloved Ganesha, visited by millions.",
    about: [
      "Shree Siddhivinayak Ganapati Temple in Prabhadevi, Mumbai is dedicated to Lord Ganesha, the remover of obstacles. The idol is notable for its trunk turned to the right, a rarer form believed to be especially powerful.",
      "Politicians, film stars and ordinary Mumbaikars alike queue here, especially on Tuesdays, which are sacred to Ganesha.",
    ],
    history:
      "The temple was first built in 1801. The original shrine was small, and over time it grew into the large, well-organised complex seen today, managed by the Shree Siddhivinayak Ganapati Mandir Trust.",
    architecture:
      "The sanctum has a gilded wooden ceiling and an inner roof decorated with images of Ashtavinayak. The main idol is carved from a single black stone, flanked by Riddhi and Siddhi.",
    facts: [
      { label: "Deity", value: "Lord Ganesha" },
      { label: "Location", value: "Prabhadevi, Mumbai, Maharashtra" },
      { label: "Built", value: "1801" },
      { label: "Special Day", value: "Tuesday" },
      { label: "Idol", value: "Right-turned trunk, single black stone" },
      { label: "Managed by", value: "Siddhivinayak Temple Trust" },
    ],
    rituals: [
      { title: "Kakad Aarti", description: "The first aarti of the day, performed at dawn." },
      { title: "Modak Offering", description: "Modaks, Ganesha's favourite sweet, are offered as prasad." },
      { title: "Abhishek", description: "Ritual bathing of the idol on special occasions." },
    ],
    festivals: [
      { name: "Ganesh Chaturthi", description: "The grandest festival, with huge crowds and special programmes." },
      { name: "Sankashti Chaturthi", description: "Monthly observance with fasting and moonrise prayers." },
      { name: "Magh Chaturthi", description: "Marks Ganesha's birth with large celebrations." },
    ],
    visit: {
      bestTime: "Weekday mornings for shorter queues. Avoid Tuesdays if you dislike crowds.",
      timings: "Open from early morning to night with aarti breaks. Check the official site for current timings.",
      dressCode: "Modest clothing is advised.",
      howToReach:
        "Prabhadevi is well connected by road and local trains. Dadar and Prabhadevi (Elphinstone Road) stations are the nearest, and taxis are readily available.",
      nearby: ["Worli Sea Face", "Haji Ali Dargah", "Mahalaxmi Temple", "Shivaji Park"],
    },
    tips: [
      "Online darshan slot booking is available and saves hours on busy days.",
      "Mobile phones and large bags may not be allowed inside the sanctum.",
      "Buy prasad only from the official counters.",
    ],
  },

  "tirumala-venkateswara": {
    tagline: "The hill shrine of Lord Venkateswara, among the most visited in the world.",
    about: [
      "The Sri Venkateswara Temple sits on the Tirumala hills, part of the Seshachalam range near Tirupati. Lord Venkateswara, also called Balaji or Govinda, is a form of Vishnu.",
      "The temple is among the busiest pilgrimage sites on earth, and devotees often walk up the hill as an act of devotion.",
    ],
    history:
      "The temple is ancient, with references in Tamil literature and inscriptions from the Pallava, Chola and Vijayanagara dynasties. The Vijayanagara emperor Krishnadevaraya was a major patron, donating jewels and funding expansions.",
    architecture:
      "Built in the Dravidian style, the temple has a gold-plated vimana (Ananda Nilayam) above the sanctum, towering gopurams and pillared mandapams with detailed carvings.",
    facts: [
      { label: "Deity", value: "Lord Venkateswara (Vishnu)" },
      { label: "Location", value: "Tirumala, Tirupati, Andhra Pradesh" },
      { label: "Style", value: "Dravidian" },
      { label: "Hill Range", value: "Seshachalam" },
      { label: "Famous Prasad", value: "Tirupati Laddu" },
      { label: "Managed by", value: "TTD (Tirumala Tirupati Devasthanams)" },
    ],
    rituals: [
      { title: "Suprabhatam", description: "The early-morning awakening of the Lord with hymns." },
      { title: "Kalyanotsavam", description: "A ceremonial celestial wedding performed daily." },
      { title: "Tonsure (Mokku)", description: "Devotees offer their hair as a vow of surrender." },
    ],
    festivals: [
      { name: "Brahmotsavam", description: "A nine-day annual festival with grand processions." },
      { name: "Vaikuntha Ekadashi", description: "The special northern door is opened for darshan." },
      { name: "Rathasapthami", description: "The deity is carried on seven different vahanas in one day." },
    ],
    visit: {
      bestTime: "September to February. Avoid peak festival days for shorter waits.",
      timings: "Open almost around the clock, with brief closures for rituals. Check the TTD website for the current schedule.",
      dressCode: "Traditional attire is required. Check TTD guidelines.",
      howToReach:
        "Tirupati has an airport, a major railway station and a bus stand. From Tirupati, buses and taxis go up the ghat road to Tirumala, or you can walk the Alipiri footpath.",
      nearby: ["Padmavathi Temple, Tiruchanur", "Sri Kalahasti Temple", "Silathoranam", "Akasa Ganga"],
    },
    tips: [
      "Book the Special Entry Darshan or accommodation online through the official TTD portal well in advance.",
      "Walking the Alipiri steps takes a few hours, so carry water.",
      "Avoid middlemen offering quick darshan.",
    ],
  },

  "vaishno-devi": {
    tagline: "The cave shrine of the Mother Goddess in the Trikuta hills.",
    about: [
      "Mata Vaishno Devi is a sacred cave shrine in the Trikuta mountains near Katra, Jammu & Kashmir. It is dedicated to the Mother Goddess in her three forms.",
      "Pilgrims travel from the base camp at Katra to the shrine, chanting 'Jai Mata Di' along the way.",
    ],
    history:
      "According to tradition, the goddess took shelter in the cave to escape the demon Bhairav Nath. The shrine has been a pilgrimage for centuries, and the Shri Mata Vaishno Devi Shrine Board now manages facilities for pilgrims.",
    architecture:
      "The holy cave houses three natural rock formations called pindis, representing Maha Kali, Maha Lakshmi and Maha Saraswati, rather than a carved idol.",
    facts: [
      { label: "Deity", value: "Mata Vaishno Devi" },
      { label: "Location", value: "Katra, Jammu & Kashmir" },
      { label: "Form", value: "Three natural pindis in a cave" },
      { label: "Trek", value: "About 12 km from Katra" },
      { label: "Base Camp", value: "Katra" },
      { label: "Managed by", value: "Shri Mata Vaishno Devi Shrine Board" },
    ],
    rituals: [
      { title: "Atka Aarti", description: "The morning and evening aartis held at the shrine." },
      { title: "Darshan of the Pindis", description: "Devotees pass through the cave to see the three pindis." },
      { title: "Bhairav Temple Visit", description: "The pilgrimage is traditionally completed with a visit to Bhairav Ghati." },
    ],
    festivals: [
      { name: "Navratri", description: "The most important period, with large crowds and special pujas." },
      { name: "Diwali", description: "The shrine and Katra are beautifully decorated." },
      { name: "Durga Ashtami", description: "Marked with special worship of the goddess." },
    ],
    visit: {
      bestTime: "March to June and September to November. Winters can bring snow and cold.",
      timings: "The shrine is open throughout the day and night, with short breaks for aarti. Check the Shrine Board site.",
      dressCode: "Wear comfortable clothes and sturdy walking shoes for the trek.",
      howToReach:
        "Jammu is the nearest major airport and railhead, and Katra also has a railway station. From Katra you can walk, take a pony or palanquin, or use the helicopter service.",
      nearby: ["Bhairav Temple", "Shiv Khori", "Patnitop", "Raghunath Temple, Jammu"],
    },
    tips: [
      "Register for the Yatra Parchi online or at Katra before starting the trek.",
      "Carry light luggage, water and warm clothes for the cold at higher points.",
      "Book helicopter and accommodation early during Navratri.",
    ],
  },
    "meenakshi-amman": {
    tagline: "A Dravidian masterpiece of towering gopurams in the temple city of Madurai.",
    about: [
      "The Meenakshi Amman Temple in Madurai is dedicated to Goddess Meenakshi, a form of Parvati, and her consort Lord Sundareswarar, a form of Shiva.",
      "The temple is the heart of Madurai's religious and cultural life, and the city's streets are laid out around it.",
    ],
    history:
      "The temple is ancient and is mentioned in early Tamil literature. Much of the present complex was built or rebuilt under the Nayak rulers in the 16th and 17th centuries, notably Thirumalai Nayak.",
    architecture:
      "The complex has 14 colourful gopurams covered in thousands of sculpted figures. Highlights include the Hall of a Thousand Pillars and the Golden Lotus Tank (Potramarai Kulam).",
    facts: [
      { label: "Deity", value: "Goddess Meenakshi & Lord Sundareswarar" },
      { label: "Location", value: "Madurai, Tamil Nadu" },
      { label: "Style", value: "Dravidian" },
      { label: "Gopurams", value: "14 main towers" },
      { label: "Famous For", value: "Hall of a Thousand Pillars" },
      { label: "Sacred Tank", value: "Golden Lotus Tank" },
    ],
    rituals: [
      { title: "Palliyarai Puja", description: "The nightly ritual in which the deities are carried to the bedchamber." },
      { title: "Abhishekam", description: "Ritual bathing of the deities with sacred offerings." },
      { title: "Kumkum Archana", description: "Devotees worship the Goddess with kumkum offerings." },
    ],
    festivals: [
      { name: "Chithirai Festival", description: "The grand April-May festival with the celestial wedding of Meenakshi and Sundareswarar." },
      { name: "Navaratri", description: "The Goddess is decorated in different forms each night." },
      { name: "Float Festival (Teppam)", description: "Deities are taken on a decorated float in the Mariamman Teppakulam tank." },
    ],
    visit: {
      bestTime: "October to March for cooler weather.",
      timings: "Opens early morning, with a midday break, and closes at night. Check the temple's official site for current timings.",
      dressCode: "Traditional, modest attire. Check current temple guidelines.",
      howToReach:
        "Madurai has an airport and a major railway junction. The temple is in the city centre and easily reached by auto-rickshaw or taxi.",
      nearby: ["Thirumalai Nayak Palace", "Gandhi Memorial Museum", "Alagar Koil", "Vandiyur Mariamman Teppakulam"],
    },
    tips: [
      "Mobile phones are generally not allowed inside. Use the cloakroom.",
      "Visit early morning to avoid crowds and the midday heat.",
      "Look up at the gopuram sculptures. A guide adds a lot of context.",
    ],
  },

  "jagannath-temple": {
    tagline: "The abode of Lord Jagannath and home of the world-famous Rath Yatra.",
    about: [
      "The Jagannath Temple in Puri is dedicated to Lord Jagannath, a form of Vishnu, who is worshipped along with his brother Balabhadra and sister Subhadra.",
      "It is one of the four Char Dham pilgrimage sites and holds a central place in the culture of Odisha.",
    ],
    history:
      "The present temple was built in the 12th century by King Anantavarman Chodagangadeva of the Eastern Ganga dynasty. It has since been expanded and maintained by later rulers.",
    architecture:
      "The temple is built in the Kalinga style, with a tall curvilinear spire topped by the Nila Chakra, a wheel of eight metals. A high boundary wall encloses the complex, which has four gateways.",
    facts: [
      { label: "Deity", value: "Lord Jagannath, Balabhadra & Subhadra" },
      { label: "Location", value: "Puri, Odisha" },
      { label: "Style", value: "Kalinga architecture" },
      { label: "Pilgrimage", value: "One of the Char Dham" },
      { label: "Famous Festival", value: "Rath Yatra" },
      { label: "Built", value: "12th century" },
    ],
    rituals: [
      { title: "Mahaprasad", description: "Food cooked in the temple kitchen and offered to the Lord, then shared with devotees." },
      { title: "Daily Sevas", description: "A long sequence of rituals from the morning awakening to the night rest of the deities." },
      { title: "Flag Changing", description: "The flag on top of the temple is changed daily by a dedicated family of priests." },
    ],
    festivals: [
      { name: "Rath Yatra", description: "The deities are pulled in massive chariots to the Gundicha Temple." },
      { name: "Snana Yatra", description: "The ritual bathing of the deities before the Rath Yatra." },
      { name: "Nabakalebara", description: "A rare ritual in which the wooden idols are replaced." },
    ],
    visit: {
      bestTime: "October to March. Rath Yatra (June-July) is spectacular but extremely crowded.",
      timings: "Opens in the early morning and closes at night, with breaks for rituals. Check the temple administration for current timings.",
      dressCode: "Modest, traditional attire.",
      howToReach:
        "Puri is connected by rail and road. The nearest airport is Bhubaneswar, about 60 km away. Taxis and buses are available from there.",
      nearby: ["Puri Beach", "Gundicha Temple", "Konark Sun Temple", "Chilika Lake"],
    },
    tips: [
      "Entry to the temple is restricted to Hindus. Others can view it from the Raghunandan Library rooftop.",
      "Mobile phones, cameras and bags are not allowed inside.",
      "Try the Mahaprasad at Anand Bazaar inside the complex.",
    ],
  },

  "somnath-temple": {
    tagline: "The eternal shrine, the first of the twelve Jyotirlingas, by the Arabian Sea.",
    about: [
      "The Somnath Temple at Prabhas Patan in Gujarat is regarded as the first of the twelve Jyotirlingas of Lord Shiva.",
      "It stands on the shore of the Arabian Sea and is a powerful symbol of resilience, having been rebuilt many times.",
    ],
    history:
      "Tradition holds that the temple is ancient, and it has been destroyed and rebuilt many times through history. The present temple was completed in 1951 after an effort supported by Sardar Vallabhbhai Patel.",
    architecture:
      "The temple is built in the Chalukya style, with a tall spire and intricately carved walls. The Baan Stambh, a pillar facing the sea, marks the point where there is no land between it and Antarctica.",
    facts: [
      { label: "Deity", value: "Lord Shiva (Somnath)" },
      { label: "Location", value: "Prabhas Patan, Gujarat" },
      { label: "Significance", value: "First of 12 Jyotirlingas" },
      { label: "Style", value: "Chalukya style" },
      { label: "Present Temple", value: "Completed 1951" },
      { label: "Sea", value: "Arabian Sea" },
    ],
    rituals: [
      { title: "Aarti", description: "Three aartis a day: morning, noon and evening." },
      { title: "Abhishek & Rudrabhishek", description: "Devotees can book abhishek of the Jyotirlinga." },
      { title: "Sound & Light Show", description: "An evening show narrating the temple's history." },
    ],
    festivals: [
      { name: "Maha Shivaratri", description: "The biggest festival, with night-long prayers." },
      { name: "Kartik Purnima Fair", description: "A large fair held in the month of Kartik." },
      { name: "Shravan Month", description: "Special worship every Monday." },
    ],
    visit: {
      bestTime: "October to March for pleasant weather.",
      timings: "Opens early morning and closes at night. Check the Shree Somnath Trust site for current timings.",
      dressCode: "Modest clothing is advised.",
      howToReach:
        "Veraval, about 6 km away, is the nearest railway station. The nearest airport is Diu, and Rajkot is the major hub. Taxis and buses connect to the temple.",
      nearby: ["Triveni Sangam", "Bhalka Tirth", "Junagadh", "Gir National Park"],
    },
    tips: [
      "Phones and cameras are not allowed inside the temple.",
      "Visit around sunset for the sea view and the evening aarti.",
      "Book abhishek and accommodation through the Somnath Trust in advance.",
    ],
  },

  "konark-sun-temple": {
    tagline: "A UNESCO World Heritage chariot of the Sun God on the Odisha coast.",
    about: [
      "The Konark Sun Temple is dedicated to Surya, the Sun God, and is designed as a giant stone chariot with intricately carved wheels and horses.",
      "It is one of India's most celebrated monuments and a UNESCO World Heritage Site.",
    ],
    history:
      "The temple was built in the 13th century by King Narasimhadeva I of the Eastern Ganga dynasty. Over the centuries it fell into ruin, and conservation work has since preserved much of the structure.",
    architecture:
      "Designed as a chariot with 24 elaborately carved wheels drawn by seven horses, the temple is a masterpiece of Kalinga architecture. The wheels work as sundials, and the walls are covered in sculptures of deities, dancers, musicians and everyday life.",
    facts: [
      { label: "Deity", value: "Surya (Sun God)" },
      { label: "Location", value: "Konark, Odisha" },
      { label: "Style", value: "Kalinga architecture" },
      { label: "Built", value: "13th century" },
      { label: "Heritage Status", value: "UNESCO World Heritage Site" },
      { label: "Design", value: "Chariot with 24 wheels, 7 horses" },
    ],
    rituals: [
      { title: "Sunrise Viewing", description: "Visitors gather to see the first rays of the sun fall on the monument." },
      { title: "Sun Worship", description: "Devotees offer prayers to Surya, especially during festivals." },
      { title: "Wheel Sundial", description: "Guides show how the wheels can tell time using shadows." },
    ],
    festivals: [
      { name: "Konark Dance Festival", description: "A classical dance festival held against the temple backdrop, usually in winter." },
      { name: "Chandrabhaga Mela", description: "A pilgrimage and fair at the nearby beach during Magha Saptami." },
      { name: "Magha Saptami", description: "A day of sun worship at Konark." },
    ],
    visit: {
      bestTime: "October to February. Visit early morning or late afternoon for good light.",
      timings: "Open during daytime hours as a protected monument. Check the Archaeological Survey of India listing for current timings and tickets.",
      dressCode: "Casual, comfortable clothing for walking.",
      howToReach:
        "Konark is about 65 km from Bhubaneswar and 35 km from Puri, with regular buses and taxis. The nearest airport is Bhubaneswar.",
      nearby: ["Chandrabhaga Beach", "Puri Jagannath Temple", "Ramachandi Temple", "Pipili"],
    },
    tips: [
      "Hire a licensed guide to understand the sculptures.",
      "Carry water and a hat, as the site is open and sunny.",
      "Stay for the sound and light show if it is running.",
    ],
  },
};