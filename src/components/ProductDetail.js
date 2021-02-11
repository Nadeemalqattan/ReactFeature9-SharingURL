// Components
import DeleteButton from "./buttons/DeleteButton";
// Styling
import { DetailWrapper } from "../styles";
import { useParams, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import UpdateButton from "./buttons/UpdateButton";

const ProductDetail = () => {
  const { productSlug } = useParams();
  const products = useSelector((state) => state.products);
  const product = products.find((product) => product.Slug === productSlug);
  if (!product) return <Redirect to="/products" />;

  return (
    <DetailWrapper>
      <p>Back to Products</p>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD</p>
      <UpdateButton productSlug={productSlug} />
      <DeleteButton productId={product.id} />
    </DetailWrapper>
  );
};

export default ProductDetail;
