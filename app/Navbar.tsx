import { defaultHead } from "next/head";

const Navbar = () => {
  return (
    <nav className=" bg-white flex justify-around flex-row text-blue-500 h-10 items-center ">
      <h1 className="text-lg font-bold">Freelance HUb</h1>
      <div className="flex flex-row gap-5 justify-between">
        <a href="/jobs">Jobs</a>
        <a href="/freelacers"> Freelancers</a>
      </div>
    </nav>
  );
};

export default Navbar;
