import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Outlet></Outlet>
      <Toaster />
    </div>
  );
};

export default Main;
