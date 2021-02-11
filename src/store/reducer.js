import productData from "../products";
import slugify from "react-slugify";
import { CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "./actions";

const initialState = {
  products: productData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      const { newProduct } = action.payload;
      newProduct.id = state.products[state.products.length - 1].id + 1;
      newProduct.Slug = slugify(newProduct.name);
      return {
        ...state,
        products: [...state.products, newProduct],
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.productId
        ),
      };

    case UPDATE_PRODUCT:
      const { updatedProduct } = action.payload;
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        ),
      };
    default:
      return state;
  }
};

export default reducer;
