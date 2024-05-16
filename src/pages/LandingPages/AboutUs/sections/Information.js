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

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
// import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function Information() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={12}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={12}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    title="Our History"
                    description={
                      <>
                        In 2008, we started with a small store specializing in snacks and cakes. The
                        appreciative response from our community encouraged us to expand into bakery
                        products. In 2014, we broadened our offerings on a larger scale to include
                        daily essentials and grocery items, further meeting the needs of our
                        customer base.
                        <br />
                        In 2016, we took a significant step by setting up our own bakery. This
                        enabled us to produce a variety of baked goods including cakes, pastries,
                        patties, breads, and cookies. Our commitment to quality and innovation led
                        to increased customer satisfaction and loyalty.
                        <br />
                        By 2019, we had established our second store, which was an extension of the
                        first, primarily focusing on beauty and cosmetic products. Our customer base
                        continued to grow, reaching over 250 daily visitors.
                        <br />
                        During the COVID-19 pandemic, we adapted by switching to a delivery mode and
                        started home delivery services to ensure our customer s safety and
                        convenience. With the easing of restrictions, we returned to in-store
                        shopping and have since increased our daily customer count to over 300.
                      </>
                    }
                  />
                </MKBox>
              </Grid>
              {/* <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    title="Payments functionality"
                    description="We get insulted by others, lose trust for those We get back freezes"
                  />
                </MKBox>
              </Grid> */}
              {/* <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="apps"
                    title="Prebuilt components"
                    description="We get insulted by others, lose trust for those We get back freezes"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="3p"
                    title="Improved platform"
                    description="We get insulted by others, lose trust for those We get back freezes"
                  />
                </MKBox>
              </Grid> */}
            </Grid>
          </Grid>
          {/* <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              title="Get insights on Search"
              description="Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards."
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "find out more",
              }}
            />
          </Grid> */}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
