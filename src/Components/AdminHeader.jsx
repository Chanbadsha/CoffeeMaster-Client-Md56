import { Link } from "react-router-dom";
import logo from "../assets/images/logo1.gif";
const AdminHeader = () => {
  return (
    <div className="navbar bg-[#382828] flex items-center justify-center text-primary-content">
      <Link to="/">
        <button className="btn flex items-center justify-center bg-transparent outline-none border-none hover:border-none text-white md:text-3xl   hover:outline-none hover:bg-transparent text-xl">
          <img
            className="bg-transparent bg-blend-overlay rounded-full w-12 h-12"
            src={logo}
            alt=""
          />{" "}
          <p>daisyUI</p>
        </button>
      </Link>
    </div>
  );
};

export default AdminHeader;
