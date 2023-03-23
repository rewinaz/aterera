"use client";
import { usePathname } from "next/navigation";

type Props = {};

const page = (props: Props) => {
  const pathName = usePathname()
  return <div> NOTE : {pathName.split("/")[2]} </div>;
};

export default page;
