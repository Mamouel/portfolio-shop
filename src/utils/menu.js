/* eslint-disable */
import NewsMenuImg from "@/assets/handbags-2251092_640.jpg";
import WomenMenuImg from "@/assets/pexels-dziana-hasanbekava-5480693.jpg";
import MenMenuImg from "@/assets/people-2590813_640.jpg";

const menus = [
  {
    name: "News",
    img: NewsMenuImg,
    firstPanel: {
      links: [
        {
          en: "Women",
          fr: "Femmes",
          id: "women",
        },
        {
          en: "Men",
          fr: "Hommes",
          id: "men",
        },
      ],
    },
    secondPanel: {
      men: [
        {
          en: "What's new",
          fr: "Dernières nouveautés",
          to: "men/news",
        },
        {
          en: "Fragrance",
          fr: "Parfums",
          to: "men/fragrance",
        },
        {
          en: "What's new",
          fr: "Dernières nouveautés",
          to: "men/news",
        },
      ],
      women: [
        {
          en: "What's new",
          fr: "Dernières nouveautés",
          to: "women/news",
        },
        {
          en: "What's new",
          fr: "Dernières nouveautés",
          to: "women/news",
        },
        {
          en: "What's new",
          fr: "Dernières nouveautés",
          to: "women/news",
        },
      ],
    },
  },
  {
    name: "Women",
    img: WomenMenuImg,
    firstPanel: {
      links: [
        {
          en: "Handbags",
          fr: "Sacs à main",
          id: "handbags",
        },
        {
          en: "Shoes",
          fr: "Chaussures",
          id: "shoesWomen",
        },
      ],
    },
    secondPanel: {
      handbags: [
        {
          en: "All bags",
          fr: "Tous les sacs",
          to: "women/handbags",
        },
        {
          en: "Pouches",
          fr: "Pochettes",
          to: "women/handbags/pouches",
        },
        {
          en: "What's new",
          fr: "Dernières nouveautés",
          to: "women/handbags/news",
        },
      ],
      shoesWomen: [
        {
          en: "All shoes",
          fr: "Toutes les chaussures",
          to: "women/handbags",
        },
        {
          en: "Pouches",
          fr: "Pochettes",
          to: "women/handbags/pouches",
        },
        {
          en: "What's new",
          fr: "Dernières nouveautés",
          to: "women/handbags/news",
        },
      ],
    },
  },
  {
    name: "Men",
    img: MenMenuImg,
    firstPanel: {
      links: [
        {
          en: "Bags",
          fr: "Sacs",
          id: "bags",
        },
        {
          en: "Shoes",
          fr: "Chaussures",
          id: "shoesMen",
        },
      ],
    },
    secondPanel: {
      bags: [
        {
          en: "All bags",
          fr: "Tous les sacs",
          to: "men/bags",
        },
        {
          en: "What's new",
          fr: "Dernières nouveautés",
          to: "men/bags/news",
        },
      ],
      shoesMen: [
        {
          en: "All shoes",
          fr: "Toutes les chaussures",
          to: "men/shoes",
        },
        {
          en: "Pouches",
          fr: "Pochettes",
          to: "men/shoes/pouches",
        },
        {
          en: "What's new",
          fr: "Dernières nouveautés",
          to: "men/shoes/news",
        },
      ],
    },
  },
  {
    name: "Fragrance",
    img: WomenMenuImg,
    firstPanel: {
      links: [
        {
          en: "Women",
          fr: "Femme",
          id: "fragranceWomen",
        },
        {
          en: "Men",
          fr: "Homme",
          id: "fragranceMen",
        },
      ],
    },
    secondPanel: {
      fragranceWomen: [
        {
          en: "All fragrance",
          fr: "Tous les parfums",
          to: "women/fragrance",
        },
        {
          en: "Selection",
          fr: "Sélection",
          to: "women/fragrance/selection",
        },
        {
          en: "What's new",
          fr: "Dernières nouveautés",
          to: "women/fragrance/news",
        },
      ],
      fragranceMen: [
        {
          en: "All fragrance",
          fr: "Tous les parfums",
          to: "men/fragrance",
        },
        {
          en: "Selection",
          fr: "Sélection",
          to: "men/fragrance/selection",
        },
        {
          en: "What's new",
          fr: "Dernières nouveautés",
          to: "men/fragrance/news",
        },
      ],
    },
  },
];

export default menus;
