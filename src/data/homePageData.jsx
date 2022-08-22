// Image imports
import HomeHeaderImage from "../assets/images/HomeHeader-image.png";

import Image1 from "../assets/images/feature1-img.png";
import Image2 from "../assets/images/feature2-img.png";
import Image3 from "../assets/images/feature3-img.png";

import TestimonialsAvatar1 from "../assets/images/testimonials1-img.png";
import TestimonialsAvatar2 from "../assets/images/testimonials2-img.png";

// Svgs imports
import {
  ClockIcon,
  StarIcon,
  ArrowIcon,
  SliderArrowIcon,
  PlusIcon,
  MinusIcon,
} from "../assets/svgs/svgs";

import {
  Brand1Icon,
  Brand2Icon,
  Brand3Icon,
  Brand4Icon,
  Brand5Icon,
} from "../assets/svgs/svgs";

import {
  CarIcon,
  EngineIcon,
  WheelIcon,
  OilIcon,
  Car2Icon,
  BatteriesIcon,
  InsuranceIcon,
  WrenchIcon,
} from "../assets/svgs/svgs";

// HomeHeader component data
export const homePageHeaderData = {
  headline: "Get your vehicle service done online at one place",
  buttonText: "Book a service",
  clockIcon: <ClockIcon />,
  starIcon: <StarIcon />,
  captionText: "We are open",
  bodyText: "Monday to Friday 9:00 AM to 10:00 AM",
  serviceHours: { numbers: "24", hour: "hr", text: "Quick service" },
  rating: { numbers: "4.5/5", text: "Rating" },
  image: HomeHeaderImage,
};

// Qoute component data
export const qouteData = {
  headline: "We are taking car servicing seriously",
  linkText: "Know more about us",
  formTitle: "Get a quote for the car service",
  buttonText: "Get your quote",
  icon: <ArrowIcon />,
  placeholder: "Enter your location",
  qouteFeatureData: [
    {
      icon: Image1,
      title: "Convenient service",
      text: "Through True Rich Attended does no end it his mother since real had half every him.",
    },
    {
      icon: Image2,
      title: "Expert mechanics",
      text: "Through True Rich Attended does no end it his mother since real had half every him.",
    },
    {
      icon: Image3,
      title: "Transparent pricing",
      text: "Through True Rich Attended does no end it his mother since real had half every him.",
    },
  ],
};

// Process component data
export const processData = {
  headline: "We follow a clear process to help you out.",
  subHeadline:
    "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire",
  buttonText: "Learn more",
  processStepsData: [
    {
      step: "01",
      title: "Get a Quote",
      text: "Through True Rich Attended does no end it his mother since real had half every.",
      line: true,
    },
    {
      step: "02",
      title: "Book an Appointment",
      text: "Through True Rich Attended does no end it his mother since real had half every.",
      line: true,
    },
    {
      step: "03",
      title: "Get your Service Done",
      text: "Through True Rich Attended does no end it his mother since real had half every.",
    },
  ],
};

// Offer component data
export const offerData = {
  title: "What we Offer",
  headline: "We offer full service auto repair & maintenance",
  linkText: "Learn about services",
  icon: <ArrowIcon />,
  offerGridData: [
    { icon: <CarIcon />, text: "Diagnostics" },
    { icon: <EngineIcon />, text: "Engine Repair" },
    { icon: <WheelIcon />, text: "Wheel Repair" },
    { icon: <OilIcon />, text: "Oil Filter" },
    { icon: <Car2Icon />, text: "Body Work" },
    { icon: <BatteriesIcon />, text: "Batteries" },
    { icon: <InsuranceIcon />, text: "Insurance Claim" },
    { icon: <WrenchIcon />, text: "Custom Service" },
  ],
};

// Experience component data
export const experienceData = [
  { headline: "20+", title: "Proffesional" },
  { headline: "10+", title: "Years Eperience" },
  { headline: "12K+", title: "Service Closed" },
  { headline: "100%", title: "Customer Satisfaction" },
];

// Brands component data
export const brandsData = {
  headline: "Brands we Serve",
  brands: [
    { image: <Brand1Icon /> },
    { image: <Brand2Icon /> },
    { image: <Brand3Icon /> },
    { image: <Brand4Icon /> },
    { image: <Brand5Icon /> },
  ],
};

// Testimonials component data
export const testimonialsData = {
  headline: "Our customers say the nicest things about our service",
  arrowIcon: <SliderArrowIcon />,
  usersData: [
    {
      image: TestimonialsAvatar1,
      name: "Jonathan Vallem",
      city: "New york",
      description:
        "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working",
    },
    {
      image: TestimonialsAvatar2,
      name: "Smith Johnson",
      city: "New york",
      description:
        "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working",
    },
    {
      image: TestimonialsAvatar1,
      name: "John Doe",
      city: "New york",
      description:
        "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working",
    },
    {
      image: TestimonialsAvatar2,
      name: "Jim Carrey",
      city: "Los Angeles",
      description:
        "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working",
    },
  ],
};

// Faq component data
export const faqData = {
  headline: "Frequently Asked Questions",
  openIcon: <PlusIcon />,
  closeIcon: <MinusIcon />,
  questions: [
    {
      question: "How long should a car repair take?",
      answer:
        "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car I have got my car repaired at Finsweet I have got my car repaired at Finsweet",
    },
    {
      question: "How do I schedule my car's appointment ?",
      answer:
        "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car I have got my car repaired at Finsweet I have got my car repaired at Finsweet",
    },
    {
      question: "What are the repair services provided?",
      answer:
        "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car I have got my car repaired at Finsweet I have got my car repaired at Finsweet",
    },
    {
      question: "How do I find auto body shops near me?",
      answer:
        "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car I have got my car repaired at Finsweet I have got my car repaired at Finsweet",
    },
    {
      question: "Genuine spare parts during car repair?",
      answer:
        "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car I have got my car repaired at Finsweet I have got my car repaired at Finsweet",
    },
  ],
};
