export const getCartAmount = (productData) => {
  let amount = 0;
  productData.map((product) => {
    if (product.orderQuantity !== 0) {
      amount = amount + product.price * product.orderQuantity;
    }
  });

  return amount;
};
