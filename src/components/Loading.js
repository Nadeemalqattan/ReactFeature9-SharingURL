import PacmanLoader from "react-spinners/PacmanLoader";
import { Description } from "../styles";

const Loading = () => {
  return (
    <>
      <Description>
        <PacmanLoader color="pink" size={40} />
      </Description>
    </>
  );
};

export default Loading;
