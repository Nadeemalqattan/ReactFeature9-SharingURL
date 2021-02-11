// Components
import UpdateButton from "./buttons/UpdateButton";
import DeleteButton from "./buttons/DeleteButton";
// Styling
import { ProductWrapper } from "../styles";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <ProductWrapper>
      <Link to={`/Products/${product.Slug}`}>
        <img alt={product.name} src={product.image} />
      </Link>
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
      <UpdateButton productSlug={product.Slug} />
      <DeleteButton productId={product.id} />
    </ProductWrapper>
  );
};

export default ProductItem;
