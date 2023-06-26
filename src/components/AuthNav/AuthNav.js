import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';

import ListItem from '@mui/material/ListItem';

export const AuthNav = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '25px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ListItem
        component={NavLink}
        sx={{
          color: 'white',
          textAlign: 'center',

          '&.active': {
            color: '#84ffff',
            borderBottom: '2px solid #84ffff',
          },
          '&:hover:not(.active)': {
            color: '#84ffff',
          },
        }}
        to="/register"
      >
        Register
      </ListItem>

      <ListItem
        component={NavLink}
        sx={{
          color: 'white',
          textAlign: 'center',

          '&.active': {
            color: '#84ffff',
            borderBottom: '2px solid #84ffff',
          },
          '&:hover:not(.active)': {
            color: '#84ffff',
          },
        }}
        to="/login"
      >
        Log In
      </ListItem>
    </Box>
  );
};
