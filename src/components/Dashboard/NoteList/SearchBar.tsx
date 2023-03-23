import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { cva } from "class-variance-authority";
import { useState } from "react";

type Props = {};

const inputFocusStyle = cva(
  "w-full h-full flex items-center rounded-full bg-slate-700 px-2 py-1 transition-all duration-200 ease-in-out",
  {
    variants: {
      focus: {
        true: "text-slate-200 ring-2 ring-slate-500",
        false: "text-slate-800",
      },
    },
  }
);

const SearchBar = (props: Props) => {
  const [focus, setFocus] = useState(false);

  return (
    <div className={inputFocusStyle({ focus })}>
      <MagnifyingGlassIcon className=" w-10 h-full bg-inherit text-inherit rounded-full" />
      <input
        type="text"
        placeholder="Search"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className=" w-full h-full bg-inherit text-inherit rounded-full outline-none text-lg"
      />
    </div>
  );
};

export default SearchBar;
