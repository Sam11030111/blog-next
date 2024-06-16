import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[100px]">
      <div className="hidden lg:flex lg:gap-2 lg:flex-1">
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className="flex-1 text-left text-md sm:text-xl lg:text-center md:text-2xl font-bold">
        Samlee Blog
      </div>
      <div className="flex items-center justify-end gap-2 xl:gap-4 flex-1 text-lg xl:text-xl">
        <ThemeToggle />
        <Link className="hidden sm:flex" href="/">
          Homepage
        </Link>
        <Link className="hidden sm:flex" href="/">
          Contact
        </Link>
        <Link className="hidden sm:flex" href="/">
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
