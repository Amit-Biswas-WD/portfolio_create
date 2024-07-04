import image from "../../assets/image/images.png";

const Touch = () => {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <h2 className=" text-4xl font-bold text-blacktext-center my-2 text-center">
        Get In Touch
      </h2>
      <div className="md:flex gap-20 w-full">
        <img src={image} alt="" className="md:w-[45%] w-full" />
        <form className="card-body md:w-[45%]">
          <div className="form-control">
            <label className="label"></label>
            <input
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label"></label>
            <input
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label"></label>
            <input
              placeholder="Phone"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label"></label>
            <textarea
              placeholder="Message"
              className="input input-bordered h-24"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Touch;
