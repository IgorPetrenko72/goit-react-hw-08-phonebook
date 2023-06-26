import { NavLink } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import { Box } from '@mui/material';

import { useAuth } from '../../hooks/useAuth.js';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      sx={{
        gap: '25px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ListItem
        component={NavLink}
        sx={{
          color: 'white',

          '&.active': {
            color: '#84ffff',
            borderBottom: '2px solid #84ffff',
          },
          '&:hover:not(.active)': {
            color: '#84ffff',
          },
        }}
        to="/"
      >
        Home
      </ListItem>

      {isLoggedIn && (
        <ListItem
          component={NavLink}
          sx={{
            color: 'white',

            '&.active': {
              color: '#84ffff',
              borderBottom: '2px solid #84ffff',
            },
            '&:hover:not(.active)': {
              color: '#84ffff',
            },
          }}
          to="/contacts"
        >
          Contacts
        </ListItem>
      )}
    </Box>
  );
};