import { Ubuntu } from "next/font/google";
import Link from "next/link";
import { SearchCommand } from "../custom-ui/SearchCommand";
import { DropDownMenuAvatar } from "../headers/DropDownMenuAvatar";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { useSetting } from "@/lib/zustand/settings";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export function Header() {
  const toggleNav = useSetting((state) => state.toggleOpenNav);
  console.log("Hello world");
  return (
    <header
      className={`p-2 bg-zinc-900 text-white grid grid-cols-3 sticky top-0 z-50 items-center ${ubuntu.className}`}
    >
      <nav className="justify-self-start flex items-center">
        <Button variant={"link"} onClick={() => toggleNav()}>
          <Menu className="text-white" />
        </Button>
        <Link href={"/"} className="hover:underline">
          Minitube
        </Link>
      </nav>
      <SearchCommand />
      <nav className="justify-self-end">
        <DropDownMenuAvatar />
      </nav>
    </header>
  );
}
