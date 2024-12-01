import { MdDelete, MdRemoveRedEye } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
const CoffeeCard = ({ coffeeInfo }) => {
  const {
    coffeeName,
    chefName,
    price,
    _id,
    photoUrl,
    supplier,
    details,
    category,
  } = coffeeInfo || {};

  const handleDelete = (id) => {


    fetch(`http://localhost:5000/coffees/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="grid  items-center grid-cols-5 bg-[#edeae3] shadow-xl">
      <div className="flex col-span-2 justify-center items-center py-12">
        <img
          src={photoUrl}
          alt={coffeeName}
          className="rounded-xl w-full h-full"
        />
      </div>
      <div className="  col-span-2 flex flex-col justify-center gap-3  ">
        <p>
          <span className="font-bold">Name: {coffeeName}</span>
        </p>
        <p>
          <span className="font-bold">Chef: {chefName}</span>
        </p>
        <p>
          <span className="font-bold">Price: {price}</span>
          Taka
        </p>
      </div>
      <div className="flex flex-col gap-3 justify-start items-start w-full">
        <label htmlFor="my_modal_7" className="btn btn-primary">
          <span>
            <MdRemoveRedEye />
          </span>
        </label>
        <Link to="/admin/updatecoffeedetail" className="btn btn-primary">
          <span>
            <FaPen />
          </span>
        </Link>
        <button onClick={() => handleDelete(_id)} className="btn btn-primary">
          <span>
            <MdDelete />
          </span>
        </button>
      </div>

      {/* Modal Section */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box max-w-xl flex justify-center items-center w-full ">
          <div className="flex col-span-2 justify-center items-center py-12">
            <img
              src={photoUrl}
              alt={coffeeName}
              className="rounded-xl w-full h-full"
            />
          </div>
          <div className="  col-span-2 flex flex-col justify-center gap-3  ">
            <h1 className="font-bold text-xl">{coffeeName}</h1>
            <p>
              <span className="font-bold">Category:</span> {category}
            </p>
            <p>
              <span className="font-bold">Chef: </span>
              {chefName}
            </p>
            <p>
              <span className="font-bold">Price: </span>
              {price} Taka
            </p>
            <p>
              <span className="font-bold">Supplier: </span>
              {supplier}
            </p>
            <p>
              <span className="font-bold">Details: </span> {details}
            </p>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </div>
  );
};

export default CoffeeCard;
