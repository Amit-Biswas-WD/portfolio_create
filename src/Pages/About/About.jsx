import photo from "../../assets/image/amit.jpg";
const About = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h2 className="my-8 text-center mx-auto text-4xl font-bold text-black">
        About <span className="text-red-500">Me</span>
      </h2>
      <div className="md:flex">
        <img src={photo} alt="" className="rounded-sm" />
        <div className="bg-fuchsia-200 py-8 p-4">
          <h3 className="text-2xl font-bold my-8 md:mt-20 text-black md:ml-20  md:mr-8">
            I,m Amit
          </h3>
          <div className="font-normal text-lg text-black md:ml-20 md:mr-8">
            <p>Font-end Web Developer.</p>
            <p className="my-8">
              I am a font-end web developer. I have been associated with
              Programming Hero course for the past six months as a font-end web
              developer. I am very passionate about improving my coding skills
              and developing websites. I build websites using MERN stack.
              Working on myself to improve my skills.
            </p>
            <p>
              <span className="text-cyan-700 font-semibold">Email</span> :
              amitbiswas9282@gmail.com
            </p>
            <p className="my-3">
              <span className="text-cyan-700 font-semibold">Place</span> :
              Mirpur, Dhaka, Bangladesh
            </p>
            <button className="btn">Resume </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
