import { BackpackIcon, FileTextIcon } from "@radix-ui/react-icons";
import SideBarMenuItems from "./SideBarMenuItems";
import SideBarMenuWrapper from "./SideBarMenuWrapper";
import Profile from "./Profile";

type Props = {};

const SidebarMenu = (props: Props) => {
  return (
    <div className="w-56 bg-gray-800 px-4 pt-6">
      <Profile />
      <SideBarMenuWrapper title="Notes">
        <SideBarMenuItems
          text="note 1"
          link="notes/note1"
          Icon={FileTextIcon}
        />
        <SideBarMenuItems
          text="note 2"
          link="notes/note2"
          Icon={FileTextIcon}
        />
      </SideBarMenuWrapper>
      <SideBarMenuWrapper title="Folders">
        <SideBarMenuItems
          text="Management"
          link="folder/management"
          Icon={BackpackIcon}
        />
        <SideBarMenuItems
          text="Images"
          link="folder/images"
          Icon={BackpackIcon}
        />
      </SideBarMenuWrapper>
    </div>
  );
};

export default SidebarMenu;
