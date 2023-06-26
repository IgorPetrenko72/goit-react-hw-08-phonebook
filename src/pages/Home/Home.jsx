import { Container } from '@mui/material';

export default function Home() {
  return (
    <main>
      <Container
        sx={{
          pt: '40px',
          textAlign: 'center',
        }}
      >
        <h1>Register or Log In</h1>
      </Container>
    </main>
  );
}