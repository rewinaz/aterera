import React from "react";
import HeaderButton from "./HeaderButton";
import {
  BookmarkIcon,
  DotsVerticalIcon,
  Pencil1Icon,
} from "@radix-ui/react-icons";

type Props = {};

const NoteEditorHeader = (props: Props) => {
  return (
    <div className=" border-red-500 border-b-2 w-full flex justify-end items-center py-2">
      <div className="flex">
        <HeaderButton Icon={Pencil1Icon} />
        <HeaderButton Icon={BookmarkIcon} />
        <HeaderButton Icon={DotsVerticalIcon} />
      </div>
    </div>
  );
};

export default NoteEditorHeader;
