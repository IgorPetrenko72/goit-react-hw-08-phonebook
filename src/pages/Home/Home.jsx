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
        <h1>Hello there. Register or Log In and see more :D</h1>
      </Container>
    </main>
  );
}