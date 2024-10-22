// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Phone } from "@mui/icons-material";
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
    {
      icon: <Phone />,
      link: "tel:+917985535984",
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
        { name: "about us", href: "/about-us" },
        // { name: "freebies", href: "https://www.creative-tim.com/templates/free" },
        // { name: "premium tools", href: "https://www.creative-tim.com/templates/premium" },
        // { name: "blog", href: "https://www.creative-tim.com/blog" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "/contact-us" },
        // { name: "knowledge center", href: "https://www.creative-tim.com/knowledge-center" },
        // { name: "custom development", href: "https://services.creative-tim.com/" },
        // { name: "sponsorships", href: "https://www.creative-tim.com/sponsorships" },
      ],
    },
    {
      name: "site map",
      items: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about-us" },
        { name: "Contact", href: "/contact-us" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} AK Traders.
    </MKTypography>
  ),
};
