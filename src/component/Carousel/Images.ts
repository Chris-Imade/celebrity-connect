import BTS from "../../assets/bts.jpeg";
import Drake from "../../assets/drake.jpg";
import Grande from "../../assets/grande.webp";
import Swift from "../../assets/taylor-swift.webp";
import Edshereen from "../../assets/ed.webp";

interface Image {
  id: number;
  imageSrc: string;
  stage_name: string;
  excerpt: string;
}

export const IMAGES: Image[] = [
  {
    id: 0,
    imageSrc: Drake,
    stage_name: "Drake",
    excerpt:
      "Drake is a Canadian rapper, singer, and songwriter. He is one of the best-selling music artists in the world, known for hits like 'Hotline Bling' and 'God's Plan'. Born on October 24, 1986, in Toronto, Canada.",
  },
  {
    id: 1,
    imageSrc: BTS,
    stage_name: "BTS",
    excerpt:
      "BTS is a South Korean boy band formed in Seoul in 2013. The group consists of seven members: RM, Jin, Suga, J-Hope, Jimin, V, and Jungkook. They are known for their energetic performances and global popularity.",
  },
  {
    id: 2,
    imageSrc: Grande,
    stage_name: "Ariana Grande",
    excerpt:
      "Ariana Grande is an American singer, songwriter, and actress. She began her career in 2008 in the Broadway musical '13', before finding fame as a Nickelodeon star. Grande has since become one of the most successful pop artists of her generation.",
  },
  {
    id: 3,
    imageSrc: Swift,
    stage_name: "Taylor Swift",
    excerpt:
      "Taylor Swift is an American singer-songwriter known for her narrative songwriting and catchy melodies. She has won numerous awards, including 11 Grammy Awards. Swift is also an advocate for artists' rights and has spoken out against music industry practices.",
  },
  {
    id: 4,
    imageSrc: Edshereen,
    stage_name: "Ed Sheeran",
    excerpt:
      "Ed Sheeran is an English singer-songwriter known for his heartfelt lyrics and acoustic guitar-driven songs. He rose to fame in 2011 with his debut album '+'. Sheeran has since become one of the best-selling music artists worldwide.",
  },
];
