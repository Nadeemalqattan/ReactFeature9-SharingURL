import { Link } from "react-router-dom";
import { BsPlusCircle } from "react-icons/bs";

const AddButton = () => {
  return (
    <Link to="/products/new">
      <button>
        <BsPlus className="float-right" size="2em" />
        <BsPlusCircle className="float-right" size="2em" />
      </button>
    </Link>
  );
};
export default AddButton;
