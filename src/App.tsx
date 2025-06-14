import { Avatar, Box, Button, Container, Grid, Typography } from '@mui/material';
import ListProductsHome from './components/ListProductsHome';
import Navbar from './components/Navbar';
import DrawerCartProducts from './components/DrawerCartProducts';

function App() {

  return (
    <>
      <Navbar />
      <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
        <ListProductsHome />
      </Container>
      <DrawerCartProducts />
    </>
  )
}

export default App
