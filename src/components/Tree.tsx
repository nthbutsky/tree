import { ITreeEntry } from "@/types/tree-entry";
import React from "react";
import { TreeEntry } from "@/components/TreeEntry";

export function Tree({ entryList }: { entryList: ITreeEntry[] }) {
  return (
    <div className="flex flex-col items-start">
      {entryList.map((entry) => {
        return (
          <React.Fragment key={entry.id}>
            <TreeEntry entry={entry} />
          </React.Fragment>
        );
      })}
    </div>
  );
}