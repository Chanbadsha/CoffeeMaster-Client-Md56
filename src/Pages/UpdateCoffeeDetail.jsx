import React from 'react';

const UpdateCoffeeDetail = () => {
    return (
      <div className="hero bg-base-200  text-[#331A15] ">
        <div className="hero-content flex-col justify-center items-center">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Edit Coffee Details</h1>
            <p className="py-6">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-5xl mx-auto  shrink-0 shadow-2xl">
            <form
          
              className="card-body w-full space-y-2 lg:space-y-3"
            >
              <div className="flex w-full gap-2 flex-col md:flex-row md:gap-4">
                <div className="form-control w-full text-[#331A15] ">
                  <label className="label">
                    <span className="label-text text-xl font-semibold">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    defaultValue={coffeeName}
                    placeholder="Enter coffee name"
                    className="input input-bordered focus:border-none "
                    name="coffeeName"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-xl font-semibold">
                      Chef
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter chef name"
                    className="input input-bordered focus:border-none "
                    name="chefName"
                    defaultValue={chefName}
                    required
                  />
                </div>
              </div>
              <div className="flex w-full gap-2 flex-col md:flex-row md:gap-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-xl font-semibold">
                      Supplier
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter supplier name"
                    className="input input-bordered focus:border-none "
                    name="supplier"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-xl font-semibold">
                      Price
                    </span>
                  </label>
                  <input
                    type="Number"
                    placeholder="Enter coffee price"
                    className="input input-bordered focus:border-none "
                    name="price"
                    defaultValue={price}
                    required
                  />
                </div>
              </div>
              <div className="flex w-full gap-2 flex-col md:flex-row md:gap-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-xl font-semibold">
                      Category
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter coffee category"
                    className="input input-bordered focus:border-none "
                    name="category"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-xl font-semibold">
                      Details
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter coffee details"
                    className="input input-bordered focus:border-none "
                    name="details"
                  />
                </div>
              </div>
              <div className="flex w-full gap-2 flex-col md:flex-row md:gap-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-xl font-semibold">
                      PhotoUrl
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter coffee photoURl"
                    className="input input-bordered focus:border-none "
                    name="photoUrl"
                    required
                  />
                </div>
              </div>
              <div className="flex w-full gap-2 flex-col md:flex-row md:gap-4">
                <div className="form-control w-full">
                  <input type="submit" value="Add Coffee" className="btn" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default UpdateCoffeeDetail;