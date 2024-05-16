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
// import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images
// import appleLogo from "assets/images/logos/gray-logos/logo-apple.svg";
// import facebookLogo from "assets/images/logos/gray-logos/logo-facebook.svg";
// import nasaLogo from "assets/images/logos/gray-logos/logo-nasa.svg";
// import vodafoneLogo from "assets/images/logos/gray-logos/logo-vodafone.svg";
// import digitalOceanLogo from "assets/images/logos/gray-logos/logo-digitalocean.svg";

function Information() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2" color="info">
            Trusted by over 10,000+ families
          </MKTypography>
          {/* <MKTypography variant="h2" color="info" textGradient mb={2}>
            
          </MKTypography> */}
          <MKTypography variant="body1" color="text" mb={2}>
            Many individuals, organization and governmental institutions love AKT&apos;s products
            and services.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Shubham Barnwal"
              date="a weeks ago"
              review="All grocery items available"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="D4 Defence D4D"
              date="2 weeks ago"
              review="Good for daily shopping but very limited space... Since there are not a lot of these types of shopping places in the area the owner should focus on expanding it more.. moreover please add more varieties of items.. A good place to shop at a good location but the queue is longer please add more billing desks as well....
                      Update: it's becoming very congested day by day as there is an increased number of customers."
              rating={2}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Praful Singh"
              date="2 months ago"
              review="A perfect confectionery store with wide range of products & now cosmetics also included."
              rating={5}
            />
          </Grid>
        </Grid>
        {/* <Divider sx={{ my: 6 }} /> */}
        {/* <Grid container spacing={3} justifyContent="center">
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={appleLogo} alt="Apple" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={facebookLogo} alt="Facebook" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={nasaLogo} alt="Nasa" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={vodafoneLogo} alt="Vodafone" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={digitalOceanLogo}
              alt="DigitalOcean"
              width="100%"
              opacity={0.6}
            />
          </Grid>
        </Grid> */}
      </Container>
    </MKBox>
  );
}

export default Information;
