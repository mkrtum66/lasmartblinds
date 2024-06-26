import { v4 as uuid } from "uuid";
import advice from "../../assets/icons/advice.png";
import measuring from "../../assets/icons/tape-measure.png";
import quality from "../../assets/icons/badge.png";

import adviceImg from "../../assets/servicesImages/freeAdvice.jpg";
import measuringImg from "../../assets/servicesImages/measuring.jpg";
import qualityImg from "../../assets/servicesImages/topquality.jpg";

export const services = [
  {
    id: uuid(),
    icon: advice,
    imgUrl: adviceImg,
    title: "GET FREE ADVICE FROM EXPERTS",
    description:
      "LA Smart Blinds is here to provide you with the best blinds that will give your home the facelift it needs.",
    moreDescription:
      "At LA Smart Blinds, we believe that making informed decisions about your window treatments is essential to achieving the perfect balance of style, functionality, and comfort in your home or office. That’s why we offer free expert advice to guide you through every step of the process. Our team of experienced professionals is here to answer all your questions and provide personalized recommendations tailored to your unique needs and preferences. Transform your space with the perfect window treatments from LA Smart Blinds. Contact us today to schedule your free consultation and take the first step towards enhancing the beauty, functionality, and comfort of your home or office.",
  },
  {
    id: uuid(),
    icon: measuring,
    imgUrl: measuringImg,
    title: "MEASURING SATISFACTION",
    description:
      "LA Smart Blinds is here to provide you with the best blinds that will give your home the facelift it needs.",
    moreDescription:
      "At LA Smart Blinds, customer satisfaction is at the heart of everything we do. We understand that our success depends on the happiness of our clients, and we are committed to ensuring that every customer experiences the highest level of service and satisfaction. Our dedication to excellence drives us to continually measure and improve our performance, ensuring that we exceed your expectations every step of the way. At LA Smart Blinds, we stand behind our products and services with a satisfaction guarantee. If for any reason you are not completely satisfied with your purchase, we will work with you to make it right. Your happiness is our top priority, and we are dedicated to ensuring that you are thrilled with your new window treatments.",
  },
  {
    id: uuid(),
    icon: quality,
    imgUrl: qualityImg,
    title: "TOP QUALITY & BEST RATES",
    description:
      "LA Smart Blinds is here to provide you with the best blinds that will give your home the facelift it needs.",
    moreDescription:
      "At LA Smart Blinds, we understand that you want the best value for your investment. That’s why we are committed to offering top-quality products at the best rates, ensuring you don’t have to compromise on style, functionality, or affordability. Our goal is to provide you with premium window treatments that enhance your space while fitting your budget perfectly. Discover the perfect combination of top quality and best rates with LA Smart Blinds. Contact us today to schedule your free consultation and find out how we can enhance your home or office with our premium window treatments. Experience the LA Smart Blinds difference. Enjoy top quality at the best rates and transform your space with beautiful, functional, and affordable window treatments.",
  },
];
