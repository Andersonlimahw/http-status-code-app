import { create } from "zustand";
import { httpList } from "../constants";
import { ItemModel } from "../../../model/Item";

export const useHttpList = create((set) => ({
  httpList: httpList,
  filterList: (search: string) => set((state: any) => ({ httpList: state.httpList.filter((x: ItemModel) => x.family.includes(search)) })),
  resetFilter: () => set({ httpList: httpList }),
}));

