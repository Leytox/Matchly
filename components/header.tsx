import Image from "next/image";
import ThemeSwitcher from "./theme-switcher";
import Link from "next/link";
export default function Header() {
  return (
    <header className="fixed z-50 w-full backdrop-blur-xl flex items-center justify-center p-4">
      <div className="container flex justify-between w-full">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" width={48} height={48} alt="MediaMatch Logo" />
          <h1 className="text-xl font-bold">MediaMatch</h1>
        </Link>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
