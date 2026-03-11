import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-900 text-white p-4 flex gap-6">

      <Link to="/">Top</Link>
      <Link to="/tech">Tech</Link>
      <Link to="/cricket">Cricket</Link>
      <Link to="/trading">Trading</Link>
      <Link to="/entertainment">Entertainment</Link>

    </div>
  );
};

export default Navbar;