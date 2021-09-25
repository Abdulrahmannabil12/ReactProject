import React, { useState} from "react";
import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/styles";
import spinner from "./../../animations/loader/spinner-2.json";

export default function Loading(props) {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setisPaused] = useState(false);

  const spinnerOptions = {
    loop: true,
    autoplay: true,
    animationData: spinner,
    rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
 
    
  };
 const useStylesHeader = makeStyles((theme) => ({
    Container: {
      display: "flex",
      position: "fixed",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginRight: "auto",
      marginLeft: "auto",
      top: 30000,
      bottom: 0,
      right: 0,
      left: 0,
    },
  }));
  return (
    <>
      <div className={useStylesHeader.Container}>
        <Lottie
          options={spinnerOptions}
          isClickToPauseDisabled={true}
          height={400}
          width={400}
          isStopped={isStopped ?? setIsStopped(true)}
          isPaused={ isPaused ?? setisPaused(true)}
          
        />
      </div>
     
    </>
  );
}
