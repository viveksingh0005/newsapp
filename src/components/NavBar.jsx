import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-gray-900 text-white">

      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold">NewsHub</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link to="/">Top</Link>
          <Link to="/tech">Tech</Link>
          <Link to="/cricket">Cricket</Link>
          <Link to="/trading">Trading</Link>
          <Link to="/entertainment">Entertainment</Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col gap-4 px-4 pb-4 md:hidden bg-gray-800">

          <Link to="/" onClick={() => setOpen(false)}>Top</Link>
          <Link to="/tech" onClick={() => setOpen(false)}>Tech</Link>
          <Link to="/cricket" onClick={() => setOpen(false)}>Cricket</Link>
          <Link to="/trading" onClick={() => setOpen(false)}>Trading</Link>
          <Link to="/entertainment" onClick={() => setOpen(false)}>Entertainment</Link>

        </div>
      )}

    </nav>
  )
}

export default Navbar