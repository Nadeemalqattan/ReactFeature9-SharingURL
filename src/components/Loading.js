import BounceLoader from "react-spinners/BounceLoader";

const Loading = () => {
  return (
    <>
      <div>
        <h3>Cookies being prepared...</h3>
        <BounceLoader color="pink" size={50} />
      </div>
    </>
  );
};

export default Loading;
