// @mui material components
import Grid from "@mui/material/Grid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import emailjs from "@emailjs/browser";

// Image
import bgImage from "assets/images/illustrations/illustration-reset.jpg";
import { useRef, useState } from "react";
// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

function ContactUs() {
  document.title = "AK Traders | Contact Us";
  const form = useRef();

  const [values, setValues] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  const [load, setLoad] = useState(false);
  const sendMail = async (e) => {
    e.preventDefault();
    try {
      if (!values.from_name || !values.from_email) {
        toast.warn("Fill all the required fields", {
          position: "top-center",
        });
      } else {
        setLoad(true);
        const res = await emailjs.sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_ID
        );
        console.log(res.text);
        setTimeout(() => {
          toast.success("Message Sent successfully", {
            position: "top-center",
          });
        }, 100);
        setValues({
          from_name: "",
          from_email: "",
          message: "",
        });
        setLoad(false);
      }
    } catch (error) {
      setLoad(false);
      console.log(error);
      toast.warn("Request not sent", {
        position: "top-center",
      });
    }
  };
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar routes={routes} />
      </MKBox>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{ backgroundImage: `url(${bgImage})` }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Contact us
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
                For further questions, including partnership opportunities, please email
                info@aktraders.shop or call us at +917985535984 or contact using our contact form.
              </MKTypography>
              <MKBox
                width="100%"
                component="form"
                method="post"
                ref={form}
                onSubmit={sendMail}
                autoComplete="off"
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Full Name"
                      InputLabelProps={{ shrink: true }}
                      value={values.from_name}
                      onChange={handleChange}
                      name="from_name"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label="Email"
                      value={values.from_email}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                      name="from_email"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="How can we help you?"
                      // placeholder="Describe your problem in at least 250 characters"
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                      onChange={handleChange}
                      value={values.message}
                      name="message"
                      rows={6}
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton type="submit" variant="gradient" color="info">
                    {load ? "Sending..." : "Send Message"}
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
        <ToastContainer />
      </MKBox>
    </>
  );
}

export default ContactUs;
