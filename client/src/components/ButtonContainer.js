import React from "react";
import Button from './Button'
import BasicPopover from "./UserStats";
import './ButtonContainer.css'
import './DirectionForm.css'

export default function ButtonContainer(props) {

  
  return(
    <div className="button-container">
      {/* <BasicPopover></BasicPopover> */}
      <Button text="Current Location"/>
      <Button text="Show Nearby Stops" onClick={props.getNearbyStations}/>
    </div>
  )
}

// onClick={props.showNearbyStations}