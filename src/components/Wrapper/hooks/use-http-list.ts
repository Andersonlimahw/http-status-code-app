import { devtools } from "zustand/middleware";
import { create } from "zustand";
import { IAction, initialState, reducer } from "../flux";
import { httpList } from "../../../constants";

export const useHttpListStore = (set : any) => ({
  ...initialState,
  httpList: httpList,
  dispatch: ({ type, payload } : IAction) => set(
    (state : any) => reducer(state, { type, payload }),
    true,
    {
      type: type, 
      payload: payload,
    }
  ),  
});

export const useHttpList = create(devtools(useHttpListStore))

