import { ITreeEntry } from "@/types/tree-entry";

export const treeList: ITreeEntry[] = [
  {
    id: "1",
    name: "public",
    children: [
      {
        id: "1",
        name: "index.html",
      },
    ],
  },
  {
    id: "2",
    name: "src",
    children: [
      {
        id: "1",
        name: "assets",
        children: [
          {
            id: "1",
            name: "images",
            children: [],
          },
        ],
      },
      {
        id: "2",
        name: "App.js",
      },
      {
        id: "3",
        name: "index.js",
      },
      {
        id: "4",
        name: "styles.css",
      },
    ],
  },
  {
    id: "3",
    name: "package.json",
  },
  {
    id: "4",
    name: "tsconfig.json",
  },
];