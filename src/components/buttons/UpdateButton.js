import { Link } from "react-router-dom";

const UpdateButton = ({ productSlug }) => {
  return (
    <Link to={`/products/${productSlug}/edit`}>
      <button>Update</button>
    </Link>
  );
};

export default UpdateButton;
