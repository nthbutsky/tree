export interface ITreeEntry {
  id: string;
  name: string;
  children?: ITreeEntry[];
}