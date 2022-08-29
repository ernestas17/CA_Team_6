// images imports
import MapImage from "../assets/images/map-img.png";
import contactImage from "../assets/images/contactBottom-img.png";

// GetInTouch component data
export const getInTouchData = {
  buttonText: "Send message",
  placeholders: [
    { placeholder: "Your full Name" },
    { placeholder: "Your Email" },
    { placeholder: "Select service type" },
    { placeholder: "Message" },
  ],
};

// Contacts component data
export const contactsData = [
  {
    title: "Address",
    subtitle: "NH 234   Public Square San Francisco  65368",
  },
  {
    title: "Contact  Details",
    subtitle: `1800 265 24 52
    Finsweet@gmail.com`,
  },
  {
    title: "Opening Hours",
    subtitle: "Monday to Friday 9:00 AM to 10:00  AM",
  },
];

// ContactPage component data
export const contactPageData = {
  headline: "Get in touch with our experts",
  map: MapImage,
  image: contactImage,
};
