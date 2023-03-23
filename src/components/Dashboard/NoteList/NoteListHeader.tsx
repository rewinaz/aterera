import { PlusIcon } from "@radix-ui/react-icons";
import SearchBar from "./SearchBar";

type Props = {};

const NoteListHeader = (props: Props) => {
  return (
    <div className="flex justify-between items-center h-11 mx-auto">
      <SearchBar />
      <div className=" bg-blue-600 text-white w-11 h-10 flex items-center justify-center rounded-full cursor-pointer ml-2 hover:bg-blue-500">
        <PlusIcon className=" w-5 h-5" />
      </div>
    </div>
  );
};

export default NoteListHeader;
