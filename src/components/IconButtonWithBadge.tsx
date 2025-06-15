import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import useInfoCart from '../features/shooping/hooks/useInfoCart';
import useDrawerCart from '../features/shooping/hooks/useDrawerCart';

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

function IconButtonWithBadge() {

  const { toggle } = useDrawerCart()
  const { counter } = useInfoCart()

  return (
    <IconButton onClick={toggle}>
      <ShoppingCartIcon fontSize="small" />
      <CartBadge badgeContent={counter} color="secondary" overlap="circular" />
    </IconButton>
  );
}


export default IconButtonWithBadge;
