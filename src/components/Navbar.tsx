import { AppBar, Toolbar, Typography } from "@mui/material";
import IconButtonWithBadge from "./IconButtonWithBadge";

function Navbar() {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h2" sx={{ flexGrow: 1, fontSize: '1.5rem', fontWeight: 'bold' }}>Shooping</Typography>
        <IconButtonWithBadge />
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;