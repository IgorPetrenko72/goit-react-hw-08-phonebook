import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations.js';
import { selectVisibleContacts } from 'redux/contacts/selectors.js';
import { Box, Button } from '@mui/material';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  console.log(visibleContacts);

  return (
    <Box
      sx={{
        marginBottom: '50px',
        marginTop: '10px',
        gap: '5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {visibleContacts.map(({ name, number, id }) => (
        <Box
          sx={{
            width: '85%',

            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0px',
            marginTop: '0px',
            fontWeight: 500,
          }}
          key={id}
        >
          <p>{name}:</p> <p>{number}</p>
          <Button
            sx={{
              height: 30,
              width: 100,
              paddingBottom: '20px',
              paddingTop: '20px',

              color: 'white',
              backgroundColor: '#006064',
              borderRadius: '15px',

              '&:hover:not(.active)': {
                color: '#84ffff',
                backgroundColor: '#006064',
              },
            }}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </Button>
        </Box>
      ))}
    </Box>
  );
};