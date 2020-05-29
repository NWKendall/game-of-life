interface IState {
  rows: number,
  columns: number,
  speed: number
}

interface IAction {
  type: string,
  payload: object
}

export default (state: IState, action: IAction) => {
  switch (action.type) {
    case "NEW_SETTINGS":
      console.log("FIRED")
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
