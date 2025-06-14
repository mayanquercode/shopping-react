import { Grid } from "@mui/material";
import CardHomeProduct from "./CardHomeProduct";
import useGetAllProducts from "../shooping/hooks/useGetAllProducts";

function ListProductsHome() {
  const { products } = useGetAllProducts()
  return (
    <Grid container spacing={2} >
      {products.map((item) => (
        <CardHomeProduct key={item.id} product={item} />
      ))}
    </Grid>
  )
}

export default ListProductsHome;