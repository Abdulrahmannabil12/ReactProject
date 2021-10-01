import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import animationData from "../../../animations/landinganimation/data";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../ButtonArrow";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CallToAction from "../CallToAction/CallToAction";

import customSoftwareIcon from "../../../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../../../assets/mobileIcon.svg";
import websitesIcon from "../../../assets/websiteIcon.svg";
import useStylesLanding from "./landinStyles";

export default function LandingPage(props) {
  console.log(props.value)
  const theme = useTheme();
  const classLanding = useStylesLanding();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Grid container
        direction="column"
        className={classLanding.mainContainer}  >
        <Grid item>
          {" "}
          {/*-----Hero Block-----*/}
          <Grid
            container
            justifyContent="flex-end"
            alignItems="center"
            direction="row"
          >
            <Grid
              sm
              item
              className={classLanding.heroTextContainer}>
              <Typography variant="h2" align="center">
                Bringing West Coast Technology
                <br />
                to the Midwest
              </Typography>
              <Grid
                container
                justifyContent="center"
                className={classLanding.buttonContainer}
              >
                <Grid item>
                  <Button
                    component={Link}
                    to="/estimate"
                    className={classLanding.estimateButton}
                    variant="contained"
                    onClick={() => props.setValue(5)}
                  >
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    component={Link}
                    to="/revolution"
                    className={classLanding.learnButtonHero}
                    variant="outlined"
                    onClick={() => props.setValue(2)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid className={classLanding.animation} sm item>
              <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {" "}
          {/*-----Custom Software Block-----*/}
          <Grid
            container
            direction="row"
            justifyContent={matchesSM ? "center" : undefined}
            className={classLanding.serviceContainer}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? 0 : "5em",
                textAlign: matchesSM ? "center" : undefined
              }}
            >
              <Typography variant="h4">Custom Software Development</Typography>
              <Typography variant="subtitle1" className={classLanding.subtitle}>
                Save Energy. Save Time. Save Money.
              </Typography>
              <Typography variant="subtitle1">
                Complete digital solutions, from investigation to{" "}
                <span className={classLanding.specialText}>celebration.</span>
              </Typography>
              <Button
                component={Link}
                to="/Custom-Software"
                variant="outlined"
                className={classLanding.learnButton}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item>
              <img
                className={classLanding.icon}
                alt="custom software icon"
                src={customSoftwareIcon}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {" "}
          {/*-----iOS/Android Block-----*/}
          <Grid
            container
            direction="row"
            justifyContent={matchesSM ? "center" : "flex-end"}
            className={classLanding.serviceContainer}
          >
            <Grid
              item
              style={{
                textAlign: matchesSM ? "center" : undefined
              }}
            >
              <Typography variant="h4">iOS/Android App Development</Typography>
              <Typography variant="subtitle1" className={classLanding.subtitle}>
                Extend Functionality. Extend Access. Increase Engagement.
              </Typography>
              <Typography variant="subtitle1">
                Integrate your web experience or create a standalone app
                {matchesSM ? null : <br />}with either mobile platform.
              </Typography>
              <Button
                component={Link}
                to="/Mobile-Application"
                variant="outlined"
                className={classLanding.learnButton}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
              <img
                className={classLanding.icon}
                alt="mobile phone icon"
                src={mobileAppsIcon}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {" "}
          {/*-----Websites Block-----*/}
          <Grid
            container
            direction="row"
            justifyContent={matchesSM ? "center" : undefined}
            className={classLanding.serviceContainer}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? 0 : "5em",
                textAlign: matchesSM ? "center" : undefined
              }}
            >
              <Typography variant="h4">Website Development</Typography>
              <Typography variant="subtitle1" className={classLanding.subtitle}>
                Reach More. Discover More. Sell More.
              </Typography>
              <Typography variant="subtitle1">
                Optimized for Search Engines, built for speed.
              </Typography>
              <Button
                component={Link}
                to="/Websites-Application"
                variant="outlined"
                className={classLanding.learnButton}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item>
              <img
                className={classLanding.icon}
                alt="website icon"
                src={websitesIcon}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/*-----The Revolution Block-----*/}
          <Grid
            container
            style={{ height: "100em", marginTop: "12em" }}
            alignItems="center"
            justifyContent="center"
          >
            <Card className={classLanding.revolutionCard}>
              <CardContent>
                <Grid
                  container
                  direction="column"
                  style={{ textAlign: "center" }}
                >
                  <Grid item>
                    <Typography variant="h3" gutterBottom>
                      The Revolution
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      Visionary insights coupled with cutting-edge technology is a
                      recipe for revolution.
                    </Typography>
                    <Button
                      component={Link}
                      to="/Revolution"
                      className={classLanding.learnButtonHero}
                      variant="outlined"
                      onClick={() => props.setValue(2)}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow
                        width={15}
                        height={15}
                        fill={theme.palette.common.blue}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <div className={classLanding.revolutionBackground} />
          </Grid>
        </Grid>
        <Grid item>
          {/*-----Information Block-----*/}
          <Grid
            container
            style={{ height: "80em" }}
            alignItems="center"
            direction="row"
            className={classLanding.infoBackground}
          >
            <Grid
              item
              container
              style={{
                textAlign: matchesXS ? "center" : "inherit"
              }}
              direction={matchesXS ? "column" : "row"}
            >
              <Grid
                item
                sm
                style={{ marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em" }}
              >
                <Grid
                  container
                  style={{ marginBottom: matchesXS ? "10em" : 0 }}
                  direction="column"
                >
                  <Typography variant="h2" style={{ color: "white" }}>
                    About Us
                  </Typography>
                  <Typography variant="subtitle2">Let's get personal.</Typography>
                  <Grid item>
                    <Button
                      component={Link}
                      to="/about"
                      variant="outlined"
                      style={{ color: "white", borderColor: "white" }}
                      className={classLanding.learnButton}
                      onClick={() => props.setValue(3)}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow width={10} height={10} fill="white" />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                sm
                style={{
                  marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                  textAlign: matchesXS ? "center" : "right"
                }}
              >
                <Grid container direction="column">
                  <Typography variant="h2" style={{ color: "white" }}>
                    Contact Us
                  </Typography>
                  <Typography variant="subtitle2">
                    Say hello!{" "}
                    <span role="img" aria-label="waving hand">
                      👋🏻
                    </span>
                  </Typography>
                  <Grid item>
                    <Button
                      component={Link}
                      to="/contact"
                      variant="outlined"
                      style={{ color: "white", borderColor: "white" }}
                      className={classLanding.learnButton}
                      onClick={() => props.setValue(4)}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow width={10} height={10} fill="white" />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/*-----Call To Action Block-----*/}
          <CallToAction setValue={props.setValue} />
        </Grid>

      </Grid>
    </>
  );
}
