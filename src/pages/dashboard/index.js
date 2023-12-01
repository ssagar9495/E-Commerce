import React, { useState, useEffect } from "react";
import NavBar from "../../components/navbar";
import { useSelector } from "react-redux";
import { Drawer } from "@mui/material";
import { PRODUCTS } from "../../constants/dummyData";
import DrawerContent from "../../components/drawerContent";
import CategorySection from "./categorySection";
import MainContent from "./mainContent";
import { ISOFFER } from "../../constants/dummyData";
import BannerSection from "./bannerSection";
import Footer from "./footer";

const Dashboard = () => {
  const user = useSelector((state) => state.auth);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [productList, setProductList] = useState(PRODUCTS);
  const [catogary, setCatogries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const newArray = [];
    PRODUCTS.forEach((item) => {
      const exists = newArray.some(
        (obj) =>
          obj.categoryName === item.catogary &&
          obj.categoryImage === item.catogaryImage
      );

      if (!exists) {
        newArray.push({
          categoryName: item.catogary,
          categoryImage: item.catogaryImage,
        });
      }

      setCatogries(newArray || []);
    });
  }, [productList]);

  const toggleDrawer = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };

  return (
    <>
      <NavBar
        userData={user}
        toggleDrawer={toggleDrawer}
        productList={productList}
        setSearch={setSearch}
      />
      <div style={{ marginTop: "100px" }}>
        {ISOFFER && <BannerSection />}
        <CategorySection catogary={catogary} />
        <MainContent
          catogary={catogary}
          productList={productList}
          setProductList={setProductList}
        />
        <Footer />
      </div>
      <Drawer
        anchor={"right"}
        open={isDrawerVisible}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            backgroundColor: "lightgray",
          },
        }}
      >
        <DrawerContent
          productList={productList}
          toggleDrawer={toggleDrawer}
          setProductList={setProductList}
        />
      </Drawer>
    </>
  );
};

export default Dashboard;
