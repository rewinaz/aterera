import { IconProps } from "@radix-ui/react-icons/dist/types";

type Props = {
  Icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const HeaderButton = ({ Icon }: Props) => {
  return (
    <button className=" w-10 h-10 rounded-full flex justify-center items-center text-white hover:bg-slate-500">
      <Icon className=" w-6 h-6" />
    </button>
  );
};

export default HeaderButton;
