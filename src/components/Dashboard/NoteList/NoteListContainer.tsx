import React from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
};

const NoteListContainer = ({ title }: Props) => {
  return (
    <div>
      <h2 className=" text-2xl font-bold text-slate-500 my-4 ml-4">{title}</h2>

      <ul>
        {[1, 1, 1, 1, 1, 1, 1].map((item, index) => (
          <Link
            to={"/note/45551515"}
            className="flex items-center cursor-pointer p-3 rounded-md hover:bg-slate-600"
          >
            <div className=" w-5 h-5 bg-orange-500 rounded-full mr-4"></div>
            <div className="flex flex-col">
              <h3 className="text-lg text-white font-bold">Note Title</h3>
              <p className="text-gray-400">
                16/15/2020 <span>note content content</span>
              </p>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default NoteListContainer;
