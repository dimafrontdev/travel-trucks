import { Outlet } from "react-router-dom";
import { Header } from "../Header";

const BaseLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export { BaseLayout };
