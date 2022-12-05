import React from "react";
import Button from './Button'
import BasicPopover from "./UserStats";
import TemporaryDrawer from "./UserDrawer";
import './LoggedButtonContainer.css'



export default function LoggedButtonContainer(props) {

  
  return(
    <div className="logged-button-container">
      <BasicPopover/>
      <TemporaryDrawer/>
    </div>
  )
}

// onClick={props.showNearbyStations}