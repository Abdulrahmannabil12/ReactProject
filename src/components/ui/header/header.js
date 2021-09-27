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
 
export default function Header(props) {
  const theme = useTheme();
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const headerClasses = useStylesHeader();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
 /* const [value, setValue] = useState(0);
   const [selectedIndex, setSelectedIndex] = useState(0);

 */

  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  };
  const [anchorEl, setAnchorEl] = useState(null);


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
    props.setSelectedIndex(i);
  };
  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: (event) => handleMenuClick(event),
    },
    { name: "The Revolution", link: "/revolution", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 },
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
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case "/estimate":
          props.setValue(5);
          break;
        default:
          break;
      }
    });
  }, [props.value, menuOptions, props.selectedIndex, routes]);
  const tabs = (
    <>
      <Tabs
        value={props.value}
        className={headerClasses.tabContainer}
        onChange={handleChange}
        aria-label="basic tabs example"
        indicatorColor="primary"
      >
               {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={headerClasses.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
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
        style={{ zIndex: 1302 }}
        keepMounted
      >
        {menuOptions.map((option, index) => (
          <MenuItem
            key={`${option}${index}`}
            component={Link}
            to={option.link}
            classes={{ root: headerClasses.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, index);
              props.setValue(1);
              handleMenuClose();
            }}
            selected={index === props.selectedIndex && props.value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
  const drawer = (
    <>
      <SwipeableDrawer
        anchor="right"
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: headerClasses.drawer }}
      >
        <div className={headerClasses.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              divider
              key={`${route}${route.activeIndex}`}
              button
              component={Link}
              to={route.link}
              selected={props.value === route.activeIndex}
              classes={{ selected: headerClasses.drawerItemSelected }}
              onClick={() => {
                setOpenDrawer(false);
                props.setValue(route.activeIndex);
              }}
            >
              <ListItemText
                className={headerClasses.drawerItem}
                disableTypography
              >
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(5);
            }}
            divider
            button
            component={Link}
            classes={{
              root: headerClasses.drawerItemEstimate,
              selected: headerClasses.drawerItemSelected,
            }}
            to="/estimate"
            selected={props.value === 5}
          >
            <ListItemText
              className={headerClasses.drawerItem}
              disableTypography
            >
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
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary" className={headerClasses.appbar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={headerClasses.logoContainer}
              onClick={() => {
                props.setValue(0);
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
