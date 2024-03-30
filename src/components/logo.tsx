import Image from "next/image";
import { useTheme } from "next-themes";

function Logo() {
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case "light":
      src = "/logo-dark.png";
      break;
    case "dark":
      src = "/logo-light.png";
      break;
    default:
      src =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
      break;
  }

  return (
    <Image
      src={src}
      width={30}
      height={40}
      alt="Ryan Dey logo"
      className="w-auto"
    />
  );
}

export default Logo;
