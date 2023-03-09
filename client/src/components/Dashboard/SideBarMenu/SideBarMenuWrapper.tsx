import { PropsWithChildren } from "react";

type Props = {
  title: string;
};

const SideBarMenuWrapper = ({ children, title }: Props & PropsWithChildren) => {
  return (
    <div className="flex flex-col items-start mb-4">
      <div className="text-left font-bold mb-4 text-gray-500">{title}</div>
      {children}
    </div>
  );
};

export default SideBarMenuWrapper;
