// Image imports
import headerImage from "../assets/images/servicesHeader-img.png";
import servicesImage from "../assets/images/services-img.png";
import howImage1 from "../assets/images/howFirst1-img.png";
import howImage2 from "../assets/images/howFirst2-img.png";
import howImage3 from "../assets/images/howSecond1-img.png";
import howImage4 from "../assets/images/howSecond2-img.png";
// Svgs imports
import { ArrowIcon, CheckmarkIcon } from "../assets/svgs/svgs";

import {
  CarIcon,
  EngineIcon,
  Car2Icon,
  BatteriesIcon,
} from "../assets/svgs/svgs";

// ServicesHeader component data
export const servicesPageHeaderData = {
  image: headerImage,
  headline: "Our services",
  text: "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw Through True Rich Attended does",
  buttonText: "Book a service",
};

// Services component data
export const servicesData = {
  headline: "Auto Diagnostics",
  text: "Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic. Through True Rich Attended does no end it his mother.",
  image: servicesImage,
  linkText: "See service details",
  icon: <ArrowIcon />,
  services: [
    { icon: <CarIcon />, text: "Auto Dignostics", to: "auto-diagnostics" },
    { icon: <EngineIcon />, text: "Engine Repair", to: "engine-repair" },
    { icon: <Car2Icon />, text: "Body Work", to: "body-work" },
    { icon: <BatteriesIcon />, text: "Batteries", to: "batteries" },
    { icon: <CarIcon />, text: "Car wash", to: "car-wash" },
    { icon: <EngineIcon />, text: "AC Repair", to: "ac-repair" },
  ],
};

// HowFirst component data
export const howFirstData = {
  headline: "How we work and the process we follow",
  leftImage: howImage1,
  rightImage: howImage2,
  checkmarks: [
    {
      icon: <CheckmarkIcon />,
      text: "Through True Rich Attended does no end it his mother since",
    },
    {
      icon: <CheckmarkIcon />,
      text: "Attended does no end it his mother since real had half every",
    },
    {
      icon: <CheckmarkIcon />,
      text: "Since real had half every him case in packages enquire we up ecstatic",
    },
  ],
};

// HowSecond component data
export const howSecondData = {
  headline: "Diagnose Car Problems If You Don’t Know Much About Cars",
  text: "We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes everything from struts, shocks, and tie rod ends to ball joints, springs everything from struts, shocks, and tie rod ends to ball joints, springs",
  buttonText: "Book a service",
  leftImage: howImage3,
  rightImage: howImage4,
};
