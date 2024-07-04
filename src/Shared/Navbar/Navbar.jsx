const Navbar = () => {
  const navItem = (
    <>
      <li className="md:mr-6 font-semibold">Home</li>
      <li className="md:mr-6 font-semibold">About</li>
      <li className="md:mr-6 font-semibold">Skills</li>
      <li className="md:mr-6 font-semibold">Work</li>
      <li className="md:mr-6 font-semibold">Contact</li>
    </>
  );
  return (
    <div className="navbar bg-gray-200 fixed z-10">
      <div className="fixed top-0 left-0 right-0 max-w-[1280px] mx-auto mt-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <a className="text-xl">Amit</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
