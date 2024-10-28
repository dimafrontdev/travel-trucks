import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      radius="9"
      ariaLabel="loader"
      color="#e44848"
    />
  );
};

export { Loader };
