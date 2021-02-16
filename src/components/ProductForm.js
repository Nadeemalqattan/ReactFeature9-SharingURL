import { useState } from "react";
import { CreateButtonStyled, ListWrapper } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, updateProduct } from "../store/actions";
import { useHistory, useParams } from "react-router-dom";

const ProductForm = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const { productSlug } = useParams();
  const _product = useSelector((state) => state.products).find(
    (product) => product.slug === productSlug
  );

  const [product, setProduct] = useState(
    _product ?? {
      name: "",
      price: 0,
      description: "",
      image: "",
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    if (_product) dispatch(updateProduct(product));
    else dispatch(createProduct(product));
    history.push("/products");
  };
  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleImage = (event) =>
    setProduct({ ...product, image: event.target.files[0] });

  return (
    <ListWrapper>
      <h1 className="text-center">{_product ? "Update" : "Create"} Cookie</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              name="name"
              type="text"
              value={product.name}
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              name="price"
              type="number"
              min="1"
              value={product.price}
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            name="description"
            type="text"
            value={product.description}
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            name="image"
            type="file"
            className="form-control"
            onChange={handleImage}
          />
        </div>
        <CreateButtonStyled className="btn float-right">
          {_product ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </ListWrapper>
  );
};

export default ProductForm;
