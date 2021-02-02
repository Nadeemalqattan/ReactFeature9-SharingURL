import { useState } from "react";
import { CreateButtonStyled } from "../styles";
import { useDispatch } from "react-redux";
import { createProduct } from "../store/actions";
import { useHistory } from "react-router-dom";
import { ListWrapper } from "../styles";

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  const history = useHistory();

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createProduct(product));
    history.push("/products");
  };
  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  return (
    <ListWrapper>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              value={product.name}
              name="name"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              value={product.price}
              name="price"
              type="number"
              min="1"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            value={product.description}
            name="description"
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            value={product.image}
            name="image"
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <CreateButtonStyled className="btn float-right">
          Create
        </CreateButtonStyled>
      </form>
    </ListWrapper>
  );
};

export default ProductForm;
