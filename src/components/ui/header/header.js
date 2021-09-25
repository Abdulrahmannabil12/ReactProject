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

    const handleMenuItemClick = (e, i) => {
         
        setAnchorEl(null);
        setOpen(false);
        setSelectedIndex(i);
    };
    const menuOptions = [
        {
            name: "Services",
            link: "/Services",
            activeIndex: 1,
            selectedIndex: 0
        },
        {
            name: "Custom Software Development",
            link: "/Custom-Software",
            activeIndex: 1,
            selectedIndex: 1
        },
        {
            name: "iOS/Android App Development",
            link: "/Mobile-Application",
            activeIndex: 1,
            selectedIndex: 2
        },
        {
            name: "Website Development",
            link: "/Websites-Application",
            activeIndex: 1,
            selectedIndex: 3
        }
    ];


    useEffect(() => {


        switch (window.location.pathname) {
            case "/":
                if (value !== 0) {
                    setValue(0)
                }
                break;
            case "/Services":
                console.log('da')

                if (value !== 1) {
                    setValue(1)
                    setSelectedIndex(0);
                }
                break;
            case "/Custom-Software":
                console.log('da')
                if (value !== 1) {
                    setValue(1)
                    setSelectedIndex(1);
                }
                break;
            case "/Mobile-Application":
                console.log('da')
                if (value !== 1) {
                    setValue(1)
                    setSelectedIndex(2);
                }
                break;
            case "/Websites-Application":
                console.log('da')
                if (value !== 1) {
                    setValue(1)
                    setSelectedIndex(3);
                }
                break;
            case "/Revolution":
                console.log('da')
                if (value !== 2) {
                    setValue(2)
                }
                break;
            case "/About":
                if (value !== 3) {
                    setValue(3)
                }
                break;
            case "/Contact":
                if (value !== 4) {
                    setValue(4)
                }
                break;
            case "/Estimate":
                if (value !== 5) {
                    setValue(5)
                }
                break;

            default:

                break;
        }

    }, [value, selectedIndex]);

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
                            classes={{ paper: headerClasses.menu }}
                            elevation={0}
                        >

                            {menuOptions.map((option, i) => (
                                <MenuItem
                                    key={`${option}${i}`}
                                    component={Link}
                                    to={option.link}
                                    classes={{ root: headerClasses.menuItem }}
                                    onClick={event => {
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
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={headerClasses.toolbarMargin} />
        </>
    )
}