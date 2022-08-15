import React from "react";

const HomePage = React.lazy(() => import("../pages/HomePage"));
const AboutPage = React.lazy(() => import("../pages/AboutPage"));
const ServicesPage = React.lazy(() => import("../pages/ServicesPage"));
const BlogPage = React.lazy(() => import("../pages/BlogPage"));
const ContactPage = React.lazy(() => import("../pages/ContactPage"));

export const routes = [
  { to: "/", text: "Home", element: <HomePage /> },
  { to: "about", text: "About us", element: <AboutPage /> },
  { to: "services", text: "Services", element: <ServicesPage /> },
  { to: "blog", text: "Blog", element: <BlogPage /> },
  {
    to: "contact",
    text: ["Contact", "Contact Us"],
    element: <ContactPage />,
  },
];

export default routes;
