export default (state: any, action: any) => {
  switch (action.type) {
    case "NEW_SETTINGS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
