import { makeStyles } from "@material-ui/styles";
const useStylesHeader = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em",

    },
    logo: {
        height: "7em",

    },
    logoContainer: {
        padding: '0',
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    flexContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabContainer: {
        marginLeft: "auto",

    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px",
        fontFamily: "Raleway",
        textTransform: "none",
        fontWeight: 700,
        color: "white",
        fontSize: "1rem"

    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        height: "45px",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }

    },
    menu: {
        backgroundColor: theme.palette.primary.main,
        color: "white",
        borderRadius:'0px'
     },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    },
}));

export default useStylesHeader;