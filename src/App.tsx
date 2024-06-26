import React from "react";
import { Tree } from "@/components/Tree";
import { treeList } from "@/api/dummy-data";

export default function App() {
  return (
    <div className="w-fit p-4">
      <Tree entryList={treeList} />
    </div>
  );
}
