import { Box, Button, Grid, Typography } from '@mui/material'
import GradeIcon from '@mui/icons-material/Grade';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

import type { Product } from '../features/shooping/types';
import useManageCartHome from '../features/shooping/hooks/useManageCartHome';

const maxRating = 5

type Props = {
  product: Product
}

function CardHomeProduct({ product }: Props) {
  const { decrement, increment, isInCart } = useManageCartHome()

  const isProductInCart = isInCart(product.id)

  const handleClickAddToCart = () => {
    if (isProductInCart) {
      decrement(product.id)
    } else {
      increment(product.id)
    }
  }

  return (

    <Grid container spacing={1} sx={{
      backgroundColor: '#ffffff',
      boxShadow: 2,
      overflow: 'hidden',
      borderRadius: 2,

    }}>
      <Grid size={4} sx={{ padding: '0.25rem' }}>
        <img src={product.image} style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }} />
      </Grid>
      <Grid size={8} sx={{ display: 'flex', flexDirection: 'column', paddingY: '10px', paddingRight: 1 }}>
        <Typography
          fontSize={14}
          variant='h3'
          fontWeight={200}
          sx={{
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis',
          }}
        >{product.title}</Typography>

        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 1
        }}>
          <Typography fontWeight={800} >${product.price.toFixed(2)}</Typography>

          <Box display="flex" gap={0.2}>
            {Array.from({ length: maxRating }).map((_, index) => (
              <GradeIcon
                key={index}
                fontSize='small'
                sx={{ color: index < product.rating.rate ? '#FFD700' : '#e0e0e0' }} // amarillo o gris
              />
            ))}
          </Box>
        </Box>
        <Box textAlign={'center'} sx={{ marginTop: 'auto' }}>
          <Button
            variant={isProductInCart ? 'contained' : 'outlined'}
            fullWidth
            startIcon={isProductInCart ? <ShoppingCart /> : <AddShoppingCartIcon />}
            onClick={handleClickAddToCart}
          >
            {isProductInCart ? 'Agregado' : 'Agregar'}
          </Button>
        </Box>
      </Grid>
    </Grid>

  )
}

export default CardHomeProduct
