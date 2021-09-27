import React from "react";
import footerAdornment from "../../../assets/Footer Adornment.svg";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import facebook from "../../../assets/facebook.svg";
import twitter from "../../../assets/twitter.svg";
import instagram from "../../../assets/instagram.svg";
import FooterStyles from "./FooterStyles";

export default function Footer(props) {
  const footerClasses = FooterStyles();

  return (
    <>
      <footer className={footerClasses.footer}>
        <Hidden mdDown>
          <Grid
            container
            justifyContent="center"
            className={footerClasses.mainContainer}
          >
            <Grid item className={footerClasses.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  className={footerClasses.link}
                  component={Link}
                  to="/"
                  onClick={() => props.setValue(0)}
                >
                  Home
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={footerClasses.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  className={footerClasses.link}
                  component={Link}
                  to="/Services"
                  onClick={() => {
                    props.setValue(1);
                    props.setSelectedIndex(0);
                  }}
                >
                  Services
                </Grid>
                <Grid
                  item
                  className={footerClasses.link}
                  component={Link}
                  to="/Custom-Software"
                  onClick={() => {
                    props.setValue(1);
                    props.setSelectedIndex(1);
                  }}
                >
                  Custom Software
                </Grid>
                <Grid
                  item
                  className={footerClasses.link}
                  component={Link}
                  to="/Mobile-Application"
                  onClick={() => {
                    props.setValue(1);
                    props.setSelectedIndex(2);
                  }}
                >
                  Mobile Application
                </Grid>
                <Grid
                  item
                  className={footerClasses.link}
                  component={Link}
                  to="/Websites-Application"
                  onClick={() => {
                    props.setValue(1);
                    props.setSelectedIndex(3);
                  }}
                >
                  Websites Application
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={footerClasses.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  className={footerClasses.link}
                  component={Link}
                  to="/Revolution"
                  onClick={() => props.setValue(2)}
                >
                  Revolution
                </Grid>
                <Grid
                  item
                  className={footerClasses.link}
                  component={Link}
                  to="/Revolution"
                  onClick={() => props.setValue(2)}
                >
                  Vision
                </Grid>
                <Grid
                  item
                  className={footerClasses.link}
                  component={Link}
                  to="/Revolution"
                  onClick={() => props.setValue(2)}
                >
                  Techonology
                </Grid>
                <Grid
                  item
                  className={footerClasses.link}
                  component={Link}
                  to="/Revolution"
                  onClick={() => props.setValue(2)}
                >
                  Process
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={footerClasses.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  className={footerClasses.link}
                  component={Link}
                  to="/About"
                  onClick={() => props.setValue(3)}
                >
                  About Us
                </Grid>
                <Grid
                  item
                  className={footerClasses.link}
                  component={Link}
                  to="/About"
                  onClick={() => props.setValue(3)}
                >
                  History
                </Grid>
                <Grid
                  item
                  className={footerClasses.link}
                  component={Link}
                  to="/About"
                  onClick={() => props.setValue(3)}
                >
                  Team
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={footerClasses.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  className={footerClasses.link}
                  component={Link}
                  to="/Contact"
                  onClick={() => props.setValue(4)}
                >
                  Contact Us
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
        <img
          className={footerClasses.Adornment}
          src={footerAdornment}
          alt="Black Decorative"
        />
        <Grid
          container
          justifyContent="flex-end"
          spacing={2}
          className={footerClasses.socialContainer}
        >
          <Grid
            item
            component={"a"}
            href="https://www.facebook.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="facebook logo"
              src={facebook}
              className={footerClasses.icon}
            />
          </Grid>
          <Grid
            item
            component={"a"}
            href="https://www.twitter.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="twitter logo"
              src={twitter}
              className={footerClasses.icon}
            />
          </Grid>
          <Grid
            item
            component={"a"}
            href="https://www.instagram.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="instagram logo"
              src={instagram}
              className={footerClasses.icon}
            />
          </Grid>
        </Grid>
      </footer>
    </>
  );
}
