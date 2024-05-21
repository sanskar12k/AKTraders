// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/akt-logo.png";
import { Mail } from "@mui/icons-material";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "AK Traders",
    address: "Kachahari Road, Nawapura",
    city: "Ghazipur, 233001",
    state: "Uttar Pradesh",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/aktraders0302",
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/a_k_traders/",
    },
    {
      icon: <Mail />,
      link: "mailto:info@aktraders.shop",
    },
    // {
    //   icon: <TwitterIcon />,
    //   link: "https://twitter.com/creativetim",
    // },
    // {
    //   icon: <GitHubIcon />,
    //   link: "https://github.com/creativetimofficial",
    // },
    // {
    //   icon: <YouTubeIcon />,
    //   link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    // },
  ],
  menus: [
    // {
    //   name: "AK Traders",
    //   address: "Kachahari Road, Nawapura",
    //   city: "Ghazipur, 233001",
    //   state: "Uttar Pradesh",
    //   items: [{ name: "Kachahari Road, Nawapura" }, { name: "Ghazipur, U.P." }, { name: "233001" }],
    // },
    {
      name: "company",
      items: [
        { name: "about us", href: "/pages/landing-pages/about-us" },
        // { name: "freebies", href: "https://www.creative-tim.com/templates/free" },
        // { name: "premium tools", href: "https://www.creative-tim.com/templates/premium" },
        // { name: "blog", href: "https://www.creative-tim.com/blog" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "/pages/landing-pages/contact-us" },
        // { name: "knowledge center", href: "https://www.creative-tim.com/knowledge-center" },
        // { name: "custom development", href: "https://services.creative-tim.com/" },
        // { name: "sponsorships", href: "https://www.creative-tim.com/sponsorships" },
      ],
    },
    {
      name: "site map",
      items: [
        { name: "Home", href: "/presentation" },
        { name: "About Us", href: "pages/landing-pages/about-us" },
        { name: "Contact", href: "/pages/landing-pages/contact-us" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} AK Traders.
    </MKTypography>
  ),
};
