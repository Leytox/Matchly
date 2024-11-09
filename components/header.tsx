import Image from "next/image";
import ThemeSwitcher from "./theme-switcher";
import Link from "next/link";
export default function Header() {
  return (
    <header className="fixed w-full backdrop-blur-xl flex items-center justify-center p-4">
      <div></div>
      <div className="container flex justify-between items-center">
        <div className="flex gap-2 items-center justify-center">
          <Image src="/logo.svg" width={48} height={48} alt="MediaMatch Logo" />
          <h1 className="text-xl font-bold">
            <Link href="/">MediaMatch</Link>
          </h1>
        </div>
        <ThemeSwitcher />
      </div>
      <div></div>
    </header>
  );
}
