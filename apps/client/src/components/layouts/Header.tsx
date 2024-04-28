import { Ubuntu } from "next/font/google";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SearchCommand } from "../custom-ui/SearchCommand";
const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});
export function Header() {
  return (
    <header
      className={`p-2 bg-zinc-900 text-white grid grid-cols-3 items-center ${ubuntu.className}`}
    >
      <nav className="justify-self-start">
        <Link href={"/"} className="hover:underline">
          Minitube
        </Link>
      </nav>
      <Button className="justify-self-stretch flex border-2 rounded-lg">
        <SearchCommand />
        {/* <Input className="border-none" />
        <Button className="border-l-2 rounded-l-none hover:bg-zinc-700 ">
          S
        </Button> */}
      </Button>
      <nav className="justify-self-end">
        <h1>Hello master</h1>
      </nav>
    </header>
  );
}
