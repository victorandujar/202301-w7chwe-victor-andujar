import { UserState, UserStructure } from "../../types/types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./usersSlice";

const initialState: UserStructure = {
  id: "",
  username: "",
  isLogged: false,
  token: "",
};

const user: UserState = {
  username: "ammavaru",
  token: "12378218934bd",
  id: "13421312",
};

const expectedUser: UserStructure = {
  username: "ammavaru",
  token: "12378218934bd",
  id: "13421312",
  isLogged: true,
};

describe("Guven a usersReducer", () => {
  describe("When it receives a new user state and the action to log in", () => {
    test("Then it should return the user state changed with the property isLogged set as true", () => {
      const loginUserAction = loginUserActionCreator(user);
      const newUserState = userReducer(initialState, loginUserAction);

      expect(newUserState).toStrictEqual(expectedUser);
    });
  });

  describe("When it receives a new user state and the action to log out", () => {
    test("Then it should return the user state changed with the property isLogged set as false", () => {
      const logoutUserAction = logoutUserActionCreator();
      const newUserState = userReducer(expectedUser, logoutUserAction);

      expect(newUserState).toStrictEqual(initialState);
    });
  });
});
