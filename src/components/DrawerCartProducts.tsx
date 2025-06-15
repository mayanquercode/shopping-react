import { Box, Button, Container, Divider, Drawer, IconButton, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import useDrawerCart from "../features/shooping/hooks/useDrawerCart";
import useGetProductCart from "../features/shooping/hooks/useGetProductCart";
import CardDrawerProduct from "./CardDrawerProduct";
import useHandleCart from "../features/shooping/hooks/useHandleCart";

function DrawerCartProducts() {
  const { isCartOpen, toggle } = useDrawerCart()
  const { products } = useGetProductCart();
  const { clearAll } = useHandleCart()

  const toggleDrawer = () => {
    toggle()
  };

  const handleClearAllCart = () => {
    clearAll()
  }


  return (
    <Drawer anchor="right" open={isCartOpen} onClose={toggleDrawer}>
      <Container sx={{ width: '100%', py: 2, position: 'relative', height: '100%' }}>
        <Box display="flex" alignItems="center" justifyContent={'space-between'} mb={2}>
          <Typography variant="h6" fontWeight={700}>
            Carrito de compras
          </Typography>

          <IconButton onClick={toggleDrawer}>
            <Close />
          </IconButton>

        </Box>

        {/* Lista de productos con scroll */}
        <Box
          sx={{
            overflowY: 'auto',
            maxHeight: 'calc(100vh - 180px)', // Ajusta según la altura del header/footer
            pr: 1 // para que el scrollbar no tape contenido
          }}
        >

          <Box sx={{ pb: 2 }}>
            {products.map((item, index) => (
              <Box key={item.id}>
                <CardDrawerProduct product={item} />
                {index < products.length - 1 && <Divider />}
              </Box>
            ))}
          </Box>
        </Box>


        {/* Footer fijo */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            backgroundColor: '#fff',
            py: 2,
            borderTop: '1px solid #eee',
          }}
        >
          <Container>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Typography fontWeight={600}>Total:</Typography>
              <Typography fontWeight={600}>$0.00</Typography>
            </Box>

            <Box display="flex" flexDirection="column" gap={1}>
              <Button variant="outlined" color="error" fullWidth onClick={handleClearAllCart}>
                Limpiar carrito
              </Button>
              <Button variant="contained" color="primary" fullWidth>
                Pagar
              </Button>
            </Box>
          </Container>
        </Box>
      </Container>
    </Drawer>
  );
}

export default DrawerCartProducts;
