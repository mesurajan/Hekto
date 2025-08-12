import leftImage1 from "../assets/images/lightimage.png";
import rightImage1 from "../assets/images/banner.png";
import chair01 from "../assets/images/chair01.png";
import chair02 from "../assets/images/chair02.png";
import chair03 from "../assets/images/chair03.png";
import chair04 from "../assets/images/chair04.png";

export const BannerData = [
  {
    id: 1,
    subtitle: "Best furniture For your Castle...",
    title1: "New Furniture Collection",
    title2: "Trends in 2020",
    description:
      "Discover the finest furniture crafted to make your home a true castle. Explore our new collection featuring the latest trends of 2020 stylish, comfortable, and made just for you.",
    leftImage: leftImage1,
    rightImage: rightImage1,
  },
  {
    id: 2,
    subtitle: "Modern Designs",
    title1: "Comfort & Style",
    title2: "For Every Home",
    description:
      "Experience the perfect blend of modern design and comfort with our exclusive furniture collection.",
    leftImage: leftImage1,
    rightImage: rightImage1,
  },
  {
    id: 3,
    subtitle: "Exclusive Offers",
    title1: "Furniture Sale",
    title2: "Up to 50% Off",
    description:
      "Don't miss our biggest sale! Upgrade your home with premium furniture at unbeatable prices.",
    leftImage: leftImage1,
    rightImage: rightImage1,
    discount:"50% OFF"
  },
];

export const BannerData2 = [
  {
    id: 1,
    chairs: [
      { id: 1, title: "Pure wooden chair", price: "$350", chairimage: chair01 },
      { id: 2, title: "Modern comfy chair", price: "$420", chairimage: chair02 },
      { id: 3, title: "Classic style chair", price: "$380", chairimage: chair03 },
      { id: 4, title: "Ergonomic chair", price: "$450", chairimage: chair04 },
    ],
  },
  {
    id: 2,
    chairs: [
      { id: 5, title: "Vintage chair", price: "$370", chairimage: chair04 },
      { id: 6, title: "Office chair", price: "$390", chairimage: chair01 },
      { id: 7, title: "Gaming chair", price: "$430", chairimage: chair02 },
      { id: 8, title: "Minimalist chair", price: "$400", chairimage: chair03 },
    ],
  },
  {
    id: 3,
    chairs: [
      { id: 9, title: "Luxury chair", price: "$480", chairimage: chair02 },
      { id: 10, title: "Outdoor chair", price: "$360", chairimage: chair03 },
      { id: 11, title: "Folding chair", price: "$300", chairimage: chair04 },
      { id: 12, title: "Classic wooden chair", price: "$410", chairimage: chair01 },
    ],
  },
  {
    id: 4,
    chairs: [
      { id: 13, title: "Luxury chair", price: "$480", chairimage: chair03 },
      { id: 14, title: "Outdoor chair", price: "$360", chairimage: chair01 },
      { id: 15, title: "Folding chair", price: "$300", chairimage: chair04 },
      { id: 16, title: "Classic wooden chair", price: "$410", chairimage: chair02 },
    ],
  },
];