import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[100px]">
      <div className="flex gap-2 flex-1">
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className="flex-1 text-center text-2xl font-bold">Samlee Blog</div>
      <div className="flex items-center gap-2 flex-1 text-lg">
        <ThemeToggle />
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
