// Components
import DeleteButton from "./buttons/DeleteButton";
// Styling
import { DetailWrapper } from "../styles";
import { useParams, Redirect } from "react-router-dom";

const ProductDetail = (props) => {
  const productSlug = useParams().productSlug;
  const product = props.products.find(
    (product) => product.Slug === productSlug
  );
  if (!product) return <Redirect to="/products" />;

  return (
    <DetailWrapper>
      <p onClick={props.selectProduct}>Back to Products</p>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD</p>
      <DeleteButton
        productId={product.id}
        deleteProduct={props.deleteProduct}
      />
    </DetailWrapper>
  );
};

export default ProductDetail;
