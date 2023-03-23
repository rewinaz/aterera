import { IconProps } from "@radix-ui/react-icons/dist/types";
import React from "react";
import Link from "next/link";

type Props = {
  text: string;
  link?: string;
  Icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const SideBarMenuItems = ({ onClick, text, Icon, link }: Props) => {
  return (
    <Link
      href={link ? link : "/"}
      className="flex items-center justify-start text-white w-max h-8 mb-2 rounded-full p-4 hover:bg-blue-500 transition-colors"
    >
      {Icon && <Icon />}
      <div className=" ml-1">{text}</div>
    </Link>
  );
};

export default SideBarMenuItems;
