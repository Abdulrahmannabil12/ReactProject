import React, { useState, useEffect } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import logo from '../../../assets/logo.svg';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import useStylesHeader from '../header/headerClasses'

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
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Header(props) {
    const headerClasses = useStylesHeader();
    const [value, setValue] = useState(0);
    const handleChange = (e, newValue) => {
        setValue(newValue);
    };
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true)
    };
    const handleMenuClose = () => {
        setOpen(false)
        setAnchorEl(false)
    };
 
    
    useEffect(() => {
        if (window.location.pathname === "/" && value !== 0) {
            setValue(0);
        }
        else if (window.location.pathname === "/Services" && value !== 1) {
            setValue(1);

        }
        else if (window.location.pathname === "/Revolution" && value !== 2) {
            setValue(2);

        }
        else if (window.location.pathname === "/About" && value !== 3) {
            setValue(3);

        }
        else if (window.location.pathname === "/Contact" && value !== 4) {
            setValue(4);
        }

    }, [value])
    return (
        <>
            <ElevationScroll>
                <AppBar position='fixed' color='primary'>
                    <Toolbar disableGutters >
                        <Button component={Link}
                            to="/"
                            className={headerClasses.logoContainer}
                            onClick={() => { setValue(0) }}
                            disableRipple>
                            <img src={logo} className={headerClasses.logo} alt="Header Logo" />
                        </Button>
                        <Tabs value={value}
                            className={headerClasses.tabContainer}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                            indicatorColor="primary"
                        >
                            <Tab className={headerClasses.tab}
                                component={Link} to="/"
                                label="Home" {...a11yProps(0)}
                            />


                            <Tab

                                aria-controls="simple-menu"
                                aria-haspopup={anchorEl ? "true" : undefined}
                                aria-owns={anchorEl ? 'simple-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                onMouseOver={(e) => { handleMenuClick(e) }}
                                className={headerClasses.tab}
                                label="Services" {...a11yProps(1)}
                                component={Link} to="/Services" />

                            <Tab className={headerClasses.tab}
                                label="The Revolution" {...a11yProps(2)}
                                component={Link} to="/Revolution" />
                            <Tab className={headerClasses.tab}
                                label="About Us" {...a11yProps(3)}
                                component={Link} to="/About" />
                            <Tab className={headerClasses.tab}
                                label="Contact Us" {...a11yProps(4)}
                                component={Link} to="/Contact" />

                        </Tabs>
                        <Button variant="contained"
                            color='secondary'
                            className={headerClasses.button}
                        > Free estimate </Button>

                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleMenuClose}
                            MenuListProps={{ onMouseLeave: handleMenuClose }}
                            classes={{ paper:headerClasses.menu }}
                            elevation={0}
                        >
                            <MenuItem onClick={() => { handleMenuClose(); setValue(1) }}
                                component={Link} to="/Services"
                                classes={{ root: headerClasses.menuItem }}
                            >Services</MenuItem>
                            <MenuItem onClick={() => { handleMenuClose(); setValue(1) }}
                                component={Link} to="/Mobile Application"
                                classes={{ root: headerClasses.menuItem }}
                            >Mobile App Development</MenuItem>
                            <MenuItem onClick={() => { handleMenuClose(); setValue(1) }}
                                component={Link} to="/Websites Application"
                                classes={{ root: headerClasses.menuItem }}
                            >Website Development</MenuItem>
                            <MenuItem onClick={() => { handleMenuClose(); setValue(1) }}
                                component={Link} to="/Custom Software"
                                classes={{ root: headerClasses.menuItem }}
                            >Customer service</MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={headerClasses.toolbarMargin} />
        </>
    )
}