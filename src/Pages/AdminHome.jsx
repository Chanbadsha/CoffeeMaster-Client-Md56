import React from "react";
import AdminHero from "../Components/AdminHero";
import PopularProducts from "../Components/PopularProducts";
import Modal from "../Components/Modal";
// import { useLoaderData } from "react-router-dom";

const AdminHome = () => {
  // const data = useLoaderData()

  return (
    <div>
      <AdminHero></AdminHero>
      <PopularProducts></PopularProducts>
 
      
    </div>
  );
};

export default AdminHome;
