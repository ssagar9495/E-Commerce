import React, { useLayoutEffect, useState } from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import Header from "./Header";
import NoOrderYet from "./NotYetOrder";
import OrderSummary from "./OrderSummary";
import Footer from "./Footer";
import Policy from "./Policy";
import BillingDetails from "./BillingDetails";

const DrawerContent = ({ productList, toggleDrawer, setProductList }) => {
  const [isEmptyCart, setIsEmptyCart] = useState(false);
  const [orderedData, setOrderedData] = useState([]);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useLayoutEffect(() => {
    setIsEmptyCart(productList.some((product) => product.orderQuantity > 0));
    setOrderedData(productList.filter((product) => product.orderQuantity > 0));
  }, [productList]);

  return (
    <Box
      sx={{ width: 450 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <Header toggleDrawer={toggleDrawer} />
      {!isEmptyCart && <NoOrderYet toggleDrawer={toggleDrawer} />}
      {isEmptyCart && (
        <>
          <div
            style={{
              height: "530px",
              overflowY: "auto",
            }}
          >
            <OrderSummary
              orderedData={orderedData}
              setProductList={setProductList}
            />
            <BillingDetails productList={productList} />
            <Policy />
          </div>
          <Footer isLoggedIn={isLoggedIn} productList={productList} />
        </>
      )}
    </Box>
  );
};

export default DrawerContent;
