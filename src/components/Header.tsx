import { APP_NAME } from "@/data/constants";
import { ChefHat, ChevronDown, Search, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import NavItemAreas from "./NavItemAreas";

type Props = {};

export default function Header(props: Props) {
  const {} = props;

  return (
    <header className="flex justify-between items-center px-[5vw] py-4">
      <Link href={"/"} className="flex gap-1 items-center">
        <ChefHat size={32} className="text-[#ea580c]" />
        <span className="text-xl font-bold">{APP_NAME}</span>
      </Link>

      <nav className="flex items-center gap-2">
        <Link className="p-2" href={"/categories"}>
          Categories
        </Link>
        <NavItemAreas />
      </nav>

      <div className="flex items-center">
        <Search className="translate-x-[130%]" />
        <input
          className="pl-10 py-1 outline-0"
          type="text"
          placeholder="Search Recipes..."
        />
      </div>

      <div className="flex gap-2 items-center font-semibold">
        <button className="flex gap-2 p-2 hover:bg-[#fff5ef] rounded-lg hover:text-[#ea580c] cursor-pointer">
          <User />
          <span>Sign In</span>
        </button>
        <button className="flex gap-2 text-white bg-[#ea580c] p-2 px-3 rounded-lg">
          <span>Sign Up</span>
        </button>
      </div>
    </header>
  );
}
