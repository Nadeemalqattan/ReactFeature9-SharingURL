// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const ProductList = () => {
  const [query, setQuery] = useState("");
  const products = useSelector((state) => state.products);

  const loading = useSelector((state) => state.loading);
  if (loading) return <Loading />;

  const productList = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => <ProductItem product={product} key={product.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />

      <ListWrapper>
        {productList}
        <Link to="/products/new">
          <BsPlusCircle className="float-right" size="2em" />
        </Link>
      </ListWrapper>
    </div>
  );
};

export default ProductList;
