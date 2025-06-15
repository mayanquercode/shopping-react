import { Box, IconButton, Typography } from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import type { Product } from "../features/shooping/types";
import useManageCartCards from "../features/shooping/hooks/useManageCartCards";

type Props = {
  product: Product
}

function CardDrawerProduct({ product }: Props) {

  const { cartItems, addOneToCart, removeOneFromCart, removeToCart } = useManageCartCards()

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
          <IconButton size="small" color="primary" onClick={() => removeOneFromCart(product.id)}>
            <Remove fontSize="small" />
          </IconButton>
          <Typography fontSize={13}>{cartItems.find(item => item.id === product.id)?.quantity ?? '0'}</Typography>
          <IconButton size="small" color="primary" onClick={() => addOneToCart(product.id)}>
            <Add fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      <IconButton size="small" color="error" onClick={() => removeToCart(product.id)}>
        <Delete fontSize="small" />
      </IconButton>
    </Box>
  )
}

export default CardDrawerProduct;
