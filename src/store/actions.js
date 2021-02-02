const DELETE_PRODUCT = "DELETE_PRODUCT";
const CREATE_PRODUCT = "CREATE_PRODUCT";

export const createProduct = (newProduct) => {
  console.log(
    "🚀 ~ file: actions.js ~ line 6 ~ createProduct ~ newProduct",
    newProduct
  );
  return {
    type: CREATE_PRODUCT,
    payload: { newProduct },
  };
};

export const deleteProduct = (productId) => {
  return {
    type: DELETE_PRODUCT,
    payload: { productId },
  };
};
