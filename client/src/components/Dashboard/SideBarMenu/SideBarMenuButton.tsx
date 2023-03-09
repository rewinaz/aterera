import { IconProps } from "@radix-ui/react-icons/dist/types";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  text: string;
  type: "link" | "button";
  link?: string;
  Icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const SideBarMenuButton = ({ onClick, text, Icon, type, link }: Props) => {
  return type === "button" ? (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-start text-white w-max h-8 mb-2 rounded-full p-4 hover:bg-blue-500 transition-colors"
    >
      {Icon && <Icon />}
      <div className=" ml-1">{text}</div>
    </button>
  ) : (
    <Link
      to={link ? link : "/"}
      className="flex items-center justify-start text-white w-max h-8 mb-2 rounded-full p-4 hover:bg-blue-500 transition-colors"
    >
      {Icon && <Icon />}
      <div className=" ml-1">{text}</div>
    </Link>
  );
};

export default SideBarMenuButton;
