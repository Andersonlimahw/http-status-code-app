export enum EActionType {
  RESET = "RESET",
  FILTER_BY_FAMILY_CODE = "FILTER_BY_FAMILY_CODE",
}

export interface IAction {
  type: EActionType;
  payload: any;
}
