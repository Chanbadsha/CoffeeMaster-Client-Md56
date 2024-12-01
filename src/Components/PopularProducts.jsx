import { NavLink, useLoaderData } from "react-router-dom";
import dashboardBG from "../assets/images/more/1.png";
import { useEffect, useState } from "react";
import CoffeeCard from "./CoffeeCard";
const PopularProducts = () => {
  const coffee = useLoaderData()

  const [coffeeCard, setCoffeeCard] = useState([]);
  useEffect(() => {
    setCoffeeCard(coffee)

  }, []);


  return (
    <div
      className="bg-cover px-6 lg:px-12 w-full bg-no-repeat bg-center xl:bg-bottom "
      style={{
        backgroundImage: `url(${dashboardBG})`,
      }}
    >
      {/* Dashboard Header  */}
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center py-12 text-[#331A15] gap-4">
        <p>--- Sip & Savor ---</p>
        <h2 className=" font-bold text-xl md:text-2xl lg:text-3xl xl:text-5xl">
          Our Popular Products
        </h2>
        <NavLink to="/admin/addcoffeedetail">
          <button className="btn  bg-[#e9c98a] hover:bg-[#e7af3f] rounded-none border border-black hover:border hover:border-black">
            Add Coffee
          </button>
        </NavLink>
      </div>
      {/* Dashboard Menu */}
      <div className="grid grid-cols-1 gap-5 lg:gap-10 md:grid-cols-2 max-w-7xl mx-auto">
        {coffeeCard.length ? (
          coffeeCard
            .slice(0, 6)
            .map((coffee) => (
              <CoffeeCard
             
                coffeeInfo={coffee}
                key={coffee.id}
              ></CoffeeCard>
            ))
        ) : (
          <p>No popular products available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default PopularProducts;
