import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const CategorySection = ({ catogary }) => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        padding: "10px 20px",
      }}
    >
      {catogary?.map((category, index) => (
        <Card
          key={index}
          sx={{
            maxWidth: 200,
            margin: "10px 20px 20px 0px",
            padding: "0px 0px 0px 0px",
            background: "white",
            minWidth: "150px",
          }}
        >
          <CardActionArea>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#ECF8F7",
              }}
            >
              <CardMedia
                component="img"
                height="100"
                style={{
                  maxWidth: "100px",
                  maxHeight: "100px",
                  minWidth: "100px",
                  minHeight: "100px",
                }}
                image={category.categoryImage}
                alt={category.categoryName}
              />
            </div>
            <CardContent
              style={{
                display: "flex",
                justifyContent: "center",
                background: "white",
              }}
            >
              <Typography
                style={{
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  color: "gray",
                }}
                gutterBottom
                component="div"
              >
                {category.categoryName}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Grid>
  );
};

export default CategorySection;
