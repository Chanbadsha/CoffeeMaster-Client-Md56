import heroBG from "../assets/images/more/3.png";
import icon1 from "../assets/images/icons/1.png";
import icon2 from "../assets/images/icons/2.png";
import icon3 from "../assets/images/icons/3.png";
import icon4 from "../assets/images/icons/4.png";
const AdminHero = () => {
  return (
    <div>
      <div
        className="hero bg-cover bg-right-center lg:bg-left-bottom "
        style={{
          backgroundImage: `url(${heroBG})`,
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-neutral-content  py-40">
          <div className="max-w-5xl flex flex-col  md:px-12 xl:px-0">
            <h1 className="mb-5 text-2xl lg:text-5xl font-bold text-[#fff5e8]">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="mb-5 text-[#f5ddbe]">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <div className="justify-start flex">
              <button className="btn btn-primary bg-[#E3B577] text-black border-none hover:bg-[#f1b566] justify-start w-auto  ">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#edeae3] px-6 md:px-12 text-[#331A15] ">
        <div className="grid grid-cols-1 gap-3 justify-center text-center items-center md:grid-cols-2 lg:grid-cols-4  max-w-7xl mx-auto py-12">
          <div className="space-y-1 flex justify-center items-center flex-col">
            <img src={icon1} alt="" />
            <h2 className="text-xl  font-bold">Awesome Aroma</h2>
            <p className="max-w-[90%]">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div className="space-y-1 flex justify-center items-center flex-col">
            <img src={icon2} alt="" />
            <h2 className="text-xl  font-bold">High Quality</h2>
            <p className="max-w-[90%]">
              We served the coffee to you maintaining the best quality
            </p>
          </div>
          <div className="space-y-1 flex justify-center items-center flex-col">
            <img src={icon3} alt="" />
            <h2 className="text-xl  font-bold">Pure Grades</h2>
            <p className="max-w-[90%]">
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
          <div className="space-y-1 flex justify-center items-center flex-col">
            <img src={icon4} alt="" />
            <h2 className="text-xl  font-bold">Proper Roasting</h2>
            <p className="max-w-[90%]">
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHero;
