import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import useDrawerCart from '../features/shooping/hooks/useDrawerCart';
import { useAppSelector } from '../redux/hooks';

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

function IconButtonWithBadge() {

  const { toggle } = useDrawerCart()
  const { cartItems } = useAppSelector(state => state.shooping)


  return (
    <IconButton onClick={toggle}>
      <ShoppingCartIcon fontSize="small" />
      <CartBadge badgeContent={cartItems.length} color="secondary" overlap="circular" />
    </IconButton>
  );
}


export default IconButtonWithBadge;
