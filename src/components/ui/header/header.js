import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import logo from "../../../assets/logo.svg";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import useStylesHeader from "../header/headerClasses";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Header(props) {
  const theme = useTheme();
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const headerClasses = useStylesHeader();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [value, setValue] = useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };
  const handleMenuClose = () => {
    setOpenMenu(false);
    setAnchorEl(false);
  };
  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };
  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: event => handleMenuClick(event)
    },
    { name: "The Revolution", link: "/revolution", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 }
  ];

  const menuOptions = [
    {
      name: "Services",
      link: "/Services",
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: "Custom Software Development",
      link: "/Custom-Software",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "iOS/Android App Development",
      link: "/Mobile-Application",
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: "Website Development",
      link: "/Websites-Application",
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;
      case "/Services":
        console.log("da");

        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case "/Custom-Software":
        console.log("da");
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case "/Mobile-Application":
        console.log("da");
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case "/Websites-Application":
        console.log("da");
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;
      case "/Revolution":
        console.log("da");
        if (value !== 2) {
          setValue(2);
        }
        break;
      case "/About":
        if (value !== 3) {
          setValue(3);
        }
        break;
      case "/Contact":
        if (value !== 4) {
          setValue(4);
        }
        break;
      case "/Estimate":
        if (value !== 5) {
          setValue(5);
        }
        break;

      default:
        break;
    }
  }, [value, selectedIndex]);
  const tabs = (
    <>
      <Tabs
        value={value}
        className={headerClasses.tabContainer}
        onChange={handleChange}
        aria-label="basic tabs example"
        indicatorColor="primary"
      >
        <Tab
          className={headerClasses.tab}
          component={Link}
          to="/"
          label="Home"
          {...a11yProps(0)}
        />

        <Tab
          aria-controls="simple-menu"
          aria-haspopup={anchorEl ? "true" : undefined}
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-expanded={openMenu ? "true" : undefined}
          onMouseOver={(e) => {
            handleMenuClick(e);
          }}
          onClick={(e) => {
            handleMenuClick(e);
          }}
          className={headerClasses.tab}
          label="Services"
          {...a11yProps(1)}
          component={Link}
          to="/Services"
        />

        <Tab
          className={headerClasses.tab}
          label="The Revolution"
          {...a11yProps(2)}
          component={Link}
          to="/Revolution"
        />
        <Tab
          className={headerClasses.tab}
          label="About Us"
          {...a11yProps(3)}
          component={Link}
          to="/About"
        />
        <Tab
          className={headerClasses.tab}
          label="Contact Us"
          {...a11yProps(4)}
          component={Link}
          to="/Contact"
        />
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        className={headerClasses.button}
      >
        {" "}
        Free estimate{" "}
      </Button>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleMenuClose}
        MenuListProps={{ onMouseLeave: handleMenuClose }}
        classes={{ paper: headerClasses.menu }}
        elevation={0}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
            component={Link}
            to={option.link}
            classes={{ root: headerClasses.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, i);
              setValue(1);
              handleMenuClose();
            }}
            selected={i === selectedIndex && value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
  const drawer = (
    < >
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: headerClasses.drawer }}
      >
        <div className={headerClasses.toolbarMargin} />
        <List disablePadding>
          {routes.map(route => (
            <ListItem
              divider
              key={`${route}${route.activeIndex}`}
              button
              component={Link}
              to={route.link}
              selected= {value === route.activeIndex}
              classes={{ selected: headerClasses.drawerItemSelected }}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
            >
              <ListItemText className={headerClasses.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            divider
            button
            component={Link}
            classes={{
              root: headerClasses.drawerItemEstimate,
              selected: headerClasses.drawerItemSelected
            }}
            to="/estimate"
            selected={value === 5}
          >
            <ListItemText className={headerClasses.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={headerClasses.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={headerClasses.drawerIcon} />
        
      </IconButton>
   
    </ >
  );

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={headerClasses.logoContainer}
              onClick={() => {
                setValue(0);
              }}
              disableRipple
            >
              <img
                src={logo}
                className={headerClasses.logo}
                alt="Header Logo"
              />
            </Button>

            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={headerClasses.toolbarMargin} />
    </>
  );
}
