import { Box, IconButton, Typography } from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import type { Product } from "../features/shooping/types";
import useHandleCart from "../features/shooping/hooks/useHandleCart";


type Props = {
  product: Product
}

function CardDrawerProduct({ product }: Props) {

  const { decrement } = useHandleCart()

  const handleClickRemoveToCart = () => {
    decrement(product.id)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        mb: 1,
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: '50px',
          height: '50px',
          objectFit: 'contain',
        }}
      />
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          fontSize={13}
          fontWeight={600}
          sx={{
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis',
          }}
        >
          {product.title}
        </Typography>
        <Typography fontSize={12} color="text.secondary">
          ${product.price.toFixed(2)}
        </Typography>

        {/* Controles de cantidad */}
        <Box display="flex" alignItems="center" gap={1} mt={0.5}>
          <IconButton size="small" color="primary">
            <Remove fontSize="small" />
          </IconButton>
          <Typography fontSize={13}>1</Typography>
          <IconButton size="small" color="primary">
            <Add fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      <IconButton size="small" color="error" onClick={handleClickRemoveToCart}>
        <Delete fontSize="small" />
      </IconButton>
    </Box>
  )
}

export default CardDrawerProduct;
