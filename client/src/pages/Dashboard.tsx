import { PropsWithChildren } from "react";
import SidebarMenu from "../components/Dashboard/SideBarMenu";
import { Outlet } from "react-router-dom";
import NoteList from "../components/Dashboard/NoteList";

type Props = {};

const Dashboard = ({ children }: Props & PropsWithChildren) => {
  return (
    <div className="flex h-screen">
      <SidebarMenu />
      <div className=" flex-1">
        <Outlet context={<NoteList />} />
      </div>
    </div>
  );
};

export default Dashboard;
