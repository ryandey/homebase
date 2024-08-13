import Logo from "@/assets/logo.svg";
import "@/App.css";

export default function Nav() {
  return (
    <>
      <div className="z-50 h-20 px-6 py-2 fixed top-0 w-full">
        <nav className="z-50 flex items-center justify-between h-full">
          {/* Logo */}
          <a href="/">
            <img src={Logo} alt="Ryan Dey Logo" className="h-6" />
          </a>

          <ul className="flex gap-3">
            {NAV_ITEMS.map((navItem) => (
              <li key={navItem.id}>
                <a href={navItem.url}>{navItem.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Progressive blur element */}
      <div className="gradient-blur">
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
    url: "/#aboutSection",
  },
  {
    id: 1,
    title: "Experience",
  },
  {
    id: 2,
    title: "Work",
  },
  {
    id: 3,
    title: "Contact",
  },
];
