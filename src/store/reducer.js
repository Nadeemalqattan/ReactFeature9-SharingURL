import productData from "../products";
import slugify from "react-slugify";

const initialState = {
  products: productData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PRODUCT":
      action.payload.newProduct.id =
        state.products[state.products.length - 1].id + 1;
      action.payload.newProduct.slug = slugify(action.payload.newProduct);
      return {
        ...state,
        products: [...state.products, action.payload.newProduct],
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.productId
        ),
      };
    default:
      return state;
  }
};
export default reducer;
