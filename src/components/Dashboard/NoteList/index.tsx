import NoteListContainer from "./NoteListContainer";
import NoteListHeader from "./NoteListHeader";

type Props = {};

const NoteList = (props: Props) => {
  return (
    <div className=" bg-slate-900 h-screen w-96 pt-2 px-4">
      <NoteListHeader />
      <NoteListContainer title="All Notes" />
    </div>
  );
};

export default NoteList;
