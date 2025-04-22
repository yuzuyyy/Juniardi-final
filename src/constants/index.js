import { logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, person1, person2, person3, person4, person5, person6, project1, project2, project3,  showcase1,  showcase2,  showcase3,  showcase4,  showcase5,  showcase6,  socmed1, socmed2, socmed3, socmed4, socmed5,  } from "../assets";

export const socmeds = [
    {
        icon: socmed1,
        link: "https://twitter.com"
    },
    {
        icon: socmed2,
        link: "https://instagram.com"
    },
    {
        icon: socmed3,
        link: "https://dribbble.com"
    },
    {
        icon: socmed4,
        link: "https://behance.net"
    },
    {
        icon: socmed5,
        link: "https://linkedin.com"
    },
]

export const stats = [
    {
        number: "20",
        simbol: "+",
        text: "clients"
    },
    {
        number: "45",
        simbol: "+",
        text: "projects"
    },
    {
        number: "100",
        simbol: "%",
        text: "clients satisfaction"
    },
    
]

export const services = [
    "Product design",
    "User Research",
    "Concept Development",
    "User Experience Design"
]



export const projects = [
    {
        image: showcase1,
        title: "Product1",
        description: "Product design"
    },
    {
        image: showcase2,
        title: "Product2",
        description: "Product design"
    },
    {
        image: showcase3,
        title: "Product3",
        description: "product design"
    },
    {
        image: showcase4,
        title: "Product4",
        description: "Product design"
    },
    {
        image: showcase5,
        title: "Product5",
        description: "Product design"
    },
    {
        image: showcase6,
        title: "Product6",
        description: "product design"
    },
];


export const navItems = [
    { text: "home", link: "#home" },
    { text: "about", link: "#about" },
    { text: "project", link: "#project" },
    { text: "review", link: "#review" },
    { text: "footer", link: "#footer" },
];


export const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    // logo6,
    logo7,
    logo8
]

// src/constants/reviews.js
import { hero, star } from '../assets';

export const reviews = [
  {
    photo: person1, // Menggunakan foto default
    name: "John vincent",
    role: "Product Manager",
    comment: "This product completely transformed our workflow. The efficiency gains are incredible!",
    amount: 5
  },
  {
    photo: person2, // Diubah ke foto default
    name: "William Johnson",
    role: "UX Designer",
    comment: "Beautiful design and intuitive interface. Our users love it!",
    amount: 4
  },
  {
    photo: person4,
    name: "Michael Chen",
    role: "CTO at TechCorp",
    comment: "The technical implementation is rock solid. Highly recommended for enterprise use.",
    amount: 5
  },
  {
    photo: person5, // Diubah ke foto default
    name: "Emily Wilson",
    role: "Marketing Director",
    comment: "Our conversion rates improved by 30% after implementing this solution.",
    amount: 4
  },
  {
    photo: person3,
    name: "David Kim",
    role: "",
    comment: "Simply outstanding service and support. Will definitely purchase again.",
    amount: 5
  },
  {
    photo: person6, // Diubah ke foto default
    name: "Josh Rodriguez",
    role: "Small Business Owner",
    comment: "Affordable yet powerful. Perfect for businesses like mine.",
    amount: 3
  }
];