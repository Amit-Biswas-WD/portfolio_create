const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen w-full">
      <div className="hero-content flex-col lg:flex-row-reverse gap-20">
        <img
          src="https://i.ibb.co/DDKmn37/me.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Hi There, I,m Amit Biswas</h1>
          <p className="py-6">I am Fond-end Web Developer.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
