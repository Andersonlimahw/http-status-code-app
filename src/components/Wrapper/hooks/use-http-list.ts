import { devtools } from "zustand/middleware";
import { create } from "zustand";
import { httpList } from "../../../constants";
import { ItemModel } from "../../../model/Item";

export enum EActionType {
  RESET = "RESET",
  FILTER_BY_FAMILY_CODE = "FILTER_BY_FAMILY_CODE",
}

export interface IAction {
  type: EActionType;
  payload: any;
}

const initialState = {
  httpList: httpList,
  selectedFilter: 'all'
}

const reducer = (state: any, { type, payload }: IAction) => {
  switch (type) {   
    case EActionType.RESET:
      return { ...initialState, httpList: httpList };
    case EActionType.FILTER_BY_FAMILY_CODE:
      return { 
          ...state, 
          selectedFilter: payload.search,
          httpList: httpList.filter((x: ItemModel) =>
        x.family.includes(payload.search)
      ), };    
  }
};

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

