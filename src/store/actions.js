import axios from "axios";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:8000/products");
      console.log(
        "🚀 ~ file: App.js ~ line 35 ~ fetchProducts ~ response",
        response.data
      );
      dispatch({
        type: FETCH_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      console.log("🚀 ~ file: App.js ~ line 40 ~ fetchProducts ~ error", error);
    }
  };
};

export const createProduct = (newProduct) => {
  return async (dispatch) => {
    try {
      await axios.post(`http://localhost:8000/products/`, newProduct);
      dispatch({
        type: CREATE_PRODUCT,
        payload: { newProduct: newProduct },
      });
    } catch (error) {
      console.log("🚀 ~ file: actions.js ~ line 47 ~ return ~ error", error);
    }
  };
};

export const updateProduct = (updatedProduct) => {
  return async (dispatch) => {
    try {
      await axios.put(
        `http://localhost:8000/products/${updatedProduct.id}`,
        updatedProduct
      );
      dispatch({
        type: UPDATE_PRODUCT,
        payload: { updatedProduct: updatedProduct },
      });
    } catch (error) {
      console.log("🚀 ~ file: actions.js ~ line 48 ~ return ~ error", error);
    }
  };
};

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:8000/products/${productId}`);
      dispatch({
        type: DELETE_PRODUCT,
        payload: { productId: productId },
      });
    } catch (error) {
      console.log("🚀 ~ file: actions.js ~ line 44 ~ return ~ error", error);
    }
  };
};
