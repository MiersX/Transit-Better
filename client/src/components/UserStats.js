import { useState } from 'react'

import QueryStatsIcon from '@mui/icons-material/QueryStats';
//import ShowChartIcon from '@mui/icons-material/ShowChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';


import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  const open = anchorEl;
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <IconButton variant="outlined" onClick={handleClick} color="primary">
        <QueryStatsIcon fontSize="small"/>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
      <List>

        <ListItem>
          <ListItemIcon>
              <DirectionsWalkIcon fontSize="small"/>
            </ListItemIcon>
            <ListItemText>
              <b>Total km's walked this month:</b> 21
            </ListItemText>
        </ListItem>
        <Divider/>
        <ListItem>
          <ListItemIcon>
            <DirectionsBikeIcon fontSize="small"/>
          </ListItemIcon>
          <ListItemText>
            <b>Total km's cycled this month:</b> 76
          </ListItemText>
        </ListItem>
        </List>

      </Popover>
    </div>
  );
}