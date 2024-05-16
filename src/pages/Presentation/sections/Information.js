/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={2} my={2}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 3, mx: "auto", px: 0.75 }}
        >
          <MKTypography variant="h2" fontWeight="bold">
            Our Core Values
          </MKTypography>
        </Grid>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto", py: 0 }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={<>Vision</>}
                description="To be the trusted provider of innovative, quality services and products that enrich every aspect of life, creating a community of pleased customers who appreciate and trust in our firm commitment to sustainability and quality."
              />
              <RotatingCardBack
                image={bgBack}
                title="Mission"
                description="Our goal is to satisfy our clients' varied demands with outstanding goods and services that are convenient, high-quality, and satisfying. By embracing sustainable practices, encouraging innovation, and establishing enduring partnerships with our partners and consumers, we want to positively affect our community."
                // action={{
                //   type: "internal",
                //   route: "/sections/page-sections/page-headers",
                //   label: "start with header",
                // }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="thumbs_up_down"
                  title="Customer Satisfaction"
                  description="We strive to exceed your expectations, ensuring every interaction leaves you delighted and confident in our dedication to your happiness."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="verified"
                  title="Quality Product"
                  description="Committed to excellence, we deliver only the highest quality products, ensuring reliability, satisfaction, and a touch of joy in every purchase."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={0} md={2}></Grid>
              <Grid item xs={12} md={8}>
                <DefaultInfoCard
                  icon="design_services"
                  title="Personalized Service"
                  description="Enjoy personalized service from our dedicated team, where every detail is tailored to meet your unique needs with professionalism and care."
                />
              </Grid>
              {/* <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="local_pizza"
                  title="Fast food"
                  description="Experience the perfect blend of taste and convenience with our delicious range of fast food, from succulent patties and mouthwatering pizza to flavorful paneer rolls."
                />
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
// icon="icecream"
// title="Frozen Delights Catering"
// description="Enjoy a hassle-free event with our complete ice cream catering service, providing professional staff, a variety of flavors, and all the essentials for a delightful serving experience."
// icon="bakery_dining"
// title="Personalized Snack Boxes"
// description="Enjoy convenient and delicious snacks with our made-to-order snack boxes, customized to suit your preferences and dietary needs."
// icon="cake"
// title="Custom Delicacies"
// description="Transform your celebrations with our custom cakes, tailored to your taste and style. Order now for a truly personalized dessert experience."
// <MKTypography variant="body1" color="text">
// Embark on a journey of personalized experiences with our comprehensive range of
// services, meticulously crafted to exceed your expectations and create lasting memories.
// </MKTypography>
