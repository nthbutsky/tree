import React from "react";
import { useState } from "react";
import { ITreeEntry } from "@/types/tree-entry";

export function TreeEntry({ entry }: { entry: ITreeEntry }) {
  const [isEntryOpen, setIsEntryOpen] = useState<boolean>(false);
  const handleOnButtonClick = () => {
    setIsEntryOpen(!isEntryOpen);
  };
  return (
    <div className="group text-gray-500">
      {entry.children ? (
        <button
          type="button"
          className="flex flex-row items-center gap-1 border-0 bg-transparent"
          onClick={handleOnButtonClick}
        >
          <span className="min-w-3">{isEntryOpen ? "- " : "+ "}</span>
          <span className="">{entry.name}</span>
          <span className="text-xs text-gray-400">{` (${entry.children.length})`}</span>
        </button>
      ) : (
        <div className="pl-4">{entry.name}</div>
      )}
      {isEntryOpen && (
        <div className="border-l-2 border-l-transparent pl-2 group-hover:border-l-2 group-hover:border-l-gray-300">
          {entry.children?.map((item: ITreeEntry) => {
            return (
              <React.Fragment key={item.id}>
                <TreeEntry entry={item} />
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
}
