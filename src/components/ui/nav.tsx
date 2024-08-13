import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "@/assets/logo.svg";
import "@/App.css";

export default function Nav() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <div className="z-50 h-20 px-6 py-2 fixed top-0 w-full">
        <nav className="z-50 flex items-center justify-between h-full">
          {/* Logo */}
          <a onClick={scrollToTop} className="hover:cursor-pointer">
            <img src={Logo} alt="Ryan Dey Logo" className="h-6" />
          </a>

          <ul className="flex gap-3 sm:gap-5">
            {NAV_ITEMS.map((navItem) => (
              <li key={navItem.id}>
                <Link
                  to={navItem.url}
                  smooth
                  duration={300}
                  offset={-100}
                  className="transition-all duration-300 hover:cursor-pointer hover:text-muted-foreground"
                >
                  {navItem.title}
                </Link>
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
    url: "aboutSection",
  },
  {
    id: 1,
    title: "Experience",
    url: "experienceSection",
  },
  {
    id: 2,
    title: "Work",
    url: "workSection",
  },
  {
    id: 3,
    title: "Contact",
    url: "contactSection",
  },
];
