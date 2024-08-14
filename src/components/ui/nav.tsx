import { HashLink, NavHashLink } from "react-router-hash-link";
import Logo from "@/assets/logo.svg";
import "@/App.css";

export default function Nav() {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <>
      <div className="z-50 h-20 px-6 py-2 fixed top-0 w-full">
        <nav className="z-50 flex items-center justify-between h-full">
          {/* Logo */}
          <HashLink
            to="/#"
            scroll={scrollWithOffset}
            className="hover:cursor-pointer"
          >
            <img src={Logo} alt="Ryan Dey Logo" className="h-6" />
          </HashLink>

          {/* Links */}
          <ul className="flex gap-3 sm:gap-5">
            {NAV_ITEMS.map((navItem) => (
              <li key={navItem.id}>
                <NavHashLink
                  to={`/#${navItem.url}`}
                  className="transition-all duration-300 hover:cursor-pointer hover:text-muted-foreground"
                  scroll={scrollWithOffset}
                >
                  {navItem.title}
                </NavHashLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Progressive blur element */}
      <div className="gradient-blur md:max-h-24">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

const NAV_ITEMS = [
  {
    id: 0,
    title: "About",
    url: "about-me",
  },
  {
    id: 1,
    title: "Experience",
    url: "experience",
  },
  {
    id: 2,
    title: "Work",
    url: "my-work",
  },
  {
    id: 3,
    title: "Contact",
    url: "contact-me",
  },
];
