import StarsIcon from '@mui/icons-material/Stars';


const Saved = (props) => (
  <StarsIcon
    color="primary"
    fontSize="medium"
    alt={props.text}
    key={props.key}
    onClick={props.onClick}
  />
);


export default Saved;
