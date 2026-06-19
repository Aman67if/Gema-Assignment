import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "Fun Activities",
    "Blog",
    "Kidrove Go",
    "FAQ",
    "Get In Touch",
  ];

  const navLinkLocation = {
    "Fun Activities": "",
    "Blog": "",
    "Kidrove Go": "",
    "FAQ": "#FAQ",
    "Get In Touch": "#userform",
  }

  return (
    <>
      <header className="body-font sticky top-0 left-0 w-full bg-[#8d6f57] z-[70] shadow-md">
        <div className="container mx-auto flex px-4 sm:px-6 lg:px-12 py-4 items-center">
          <a className="flex title-font font-medium items-center text-white">
            <span className="text-xl sm:text-2xl font-bold tracking-wide">KIDROVE</span>
          </a>

          <nav className="hidden md:flex md:ml-auto md:mr-auto items-center text-sm md:text-base gap-x-5">
            {navLinks.map((link) => (
              <a
                key={link}
                className="text-gray-300 font-bold cursor-pointer transition-colors duration-300 hover:text-[#3e2723]"
                href={navLinkLocation[link]}
              >
                {link}
              </a>
            ))}
          </nav>

          <a href="#userform"><button className="hidden md:inline-flex bg-white/10 backdrop-blur-md border-white/20 shadow-lg
            hover:bg-white/20 hover:border-white/40 duration-300 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg transition-colors text-white font-bold rounded-full">
            Enroll Now
          </button></a>

          <button
            className="md:hidden ml-auto p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200 focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      <div
        className={`md:hidden fixed top-[57px] left-0 w-full z-[60] transition-transform duration-500 ease-in-out
          ${menuOpen ? "translate-y-4" : "-translate-y-full pointer-events-none"}`}
      >
        <div className="backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-2xl px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link}
              className="text-white text-base font-medium cursor-pointer transition-colors duration-300 hover:text-[#3e2723] border-b border-white/10 pb-4 last:border-none last:pb-0"
              onClick={() => setMenuOpen(false)}
              href={navLinkLocation[link]}
            >
              {link}
            </a>
          ))}

          <a href="#userform"><button className="inline-flex bg-white/10 backdrop-blur-md border-white/20 shadow-lg
            hover:bg-white/20 hover:border-white/40 duration-300 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg transition-colors text-white font-bold rounded-full">
            Enroll Now
          </button></a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
