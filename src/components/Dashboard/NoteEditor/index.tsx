import NoteList from "../NoteList";
import TipTapEditor from "./TipTapEditor";
import NoteEditorHeader from "./NoteEditorHeader";

type Props = {};

const NoteEditor = (props: Props) => {
  return (
    <div className=" flex h-full">
      <NoteList />

      <div className="w-full h-full px-4">
        <NoteEditorHeader />
        <TipTapEditor />
      </div>
    </div>
  );
};

export default NoteEditor;
