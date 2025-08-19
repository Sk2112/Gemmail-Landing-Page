import Logo from "../assets/images/Logo.png";

const Navbar = () => {

  return (
    <header className="absolute top-0 left-0 w-full z-20  ">
      <div className="container mx-auto px-4 flex justify-between py-5 ">
      <div>
        <img src={Logo} alt="Logo" width={60}
        className="rounded-3xl "
        />
      </div>
      </div>
    </header>
  );
};
export default Navbar;