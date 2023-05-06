import { httpList } from "../../../constants";
import { ItemModel } from "../../../model/Item";
import { EActionType, IAction } from "./actions";
import { initialState } from "./initial-state";

export const reducer = (state: any, { type, payload }: IAction) => {
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