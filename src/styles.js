import {styled} from '@mui/material';
import {Link} from 'react-router-dom'


export const StlyedLink =  styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.palette.text.primary}; /* Use MUI theme if applicable */
  font-weight: bold;
  padding: 10px 15px;
  font-family: Inter,sans-serif;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    // background-color: #eee;
    // cursor: pointer;
  }
`;
// const icon = <ion-icon name='menu'></ion-icon>

// export const StlyedMenu = styled(JSON.stringify(icon))``;






