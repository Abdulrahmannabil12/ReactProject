
import { createTheme } from "@material-ui/core/styles";
const arcBlue = "#0B72B9";
const arcOrang = "#FFBA60";
/*const arcGrey = "#868686";
*/

export default createTheme({
    palette: {
        common: {
            arcBlue: `${arcBlue}`,
            arcOrang: `${arcOrang}`
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrang}`
        },
    },
    typography: {
        tab: {

            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 700,
            color: "white",
            fontSize: "1rem"
        },
        estimate: {
           
                fontFamily: "Pacifico",
                fontSize: "1rem",
                textTransform: "none",
                color: "white",

        
        },
    },

   
})
