import image from "../../assets/image/images.png";

const Touch = () => {
  return (
    <div className="md:flex gap-20 w-full max-w-7xl mx-auto my-10">
      <img src={image} alt="" className="w-[45%]" />
      <form className="card-body w-[45%]">
        <div className="form-control">
          <label className="label"></label>
          <input placeholder="Name" className="input input-bordered" required />
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
  );
};

export default Touch;
