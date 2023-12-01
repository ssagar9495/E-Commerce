import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import AddButton from "../../../components/addButton";

const MainContent = ({ catogary, productList, setProductList }) => {
  return (
    <Grid
      container
      sx={{
        margin: "30px 20px",
        padding: "10px 20px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "start",
        minHeight: "200px",
      }}
    >
      {catogary?.map((category, index) => (
        <div key={index}>
          <h2 style={{ textTransform: "capitalize" }}>
            {category.categoryName}
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {productList.map((product) => (
              <>
                {product.catogary === category.categoryName && (
                  <Card
                    sx={{
                      maxWidth: 225,
                      width: "200px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      minWidth: "20%",
                      margin: "10px 10px",
                      padding: "5px 10px",
                    }}
                    key={product.id}
                  >
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <img
                        src={product.productImage}
                        alt={product.productName}
                      />
                    </div>
                    <CardActionArea>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                          style={{ minHeight: "65px" }}
                        >
                          {product.productName}
                        </Typography>
                        <Typography color="div" sx={{ margin: "10px 0" }}>
                          {product.quantity}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography>₹ {product.price}</Typography>
                          <AddButton
                            product={product}
                            setProductList={setProductList}
                          />
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                )}
              </>
            ))}
          </div>
        </div>
      ))}
    </Grid>
  );
};
export default MainContent;
