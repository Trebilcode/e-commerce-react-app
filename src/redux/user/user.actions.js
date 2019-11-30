import { userActionTypes } from "./useractions.types";

export const setCurrentUser = user => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
})