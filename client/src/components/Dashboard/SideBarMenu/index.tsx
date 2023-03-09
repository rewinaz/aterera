import {
  BackpackIcon,
  FileTextIcon,
  GearIcon,
} from "@radix-ui/react-icons";
import SideBarMenuButton from "./SideBarMenuButton";
import SideBarMenuWrapper from "./SideBarMenuWrapper";
import Profile from "./Profile";

type Props = {};

const SidebarMenu = (props: Props) => {
  return (
    <div className="w-56 bg-gray-800 px-4 pt-6">
      <Profile />
      <SideBarMenuWrapper title="Quick Links">
        <SideBarMenuButton
          type="link"
          text="All Notes"
          link="all-notes"
          Icon={FileTextIcon}
        />
        <SideBarMenuButton
          type="link"
          text="Remainders"
          link="remainders"
          Icon={GearIcon}
        />
      </SideBarMenuWrapper>
      <SideBarMenuWrapper title="Folders">
        <SideBarMenuButton
          type="link"
          text="Management"
          link="folder/management"
          Icon={BackpackIcon}
        />
        <SideBarMenuButton
          type="link"
          text="Images"
          link="folder/images"
          Icon={BackpackIcon}
        />
      </SideBarMenuWrapper>
    </div>
  );
};

export default SidebarMenu;
