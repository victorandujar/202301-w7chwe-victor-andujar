import { UserState, UserStructure } from "../../types/types";
import { loginUserActionCreator, usersReducer } from "./usersSlice";

const initialState: UserStructure = {
  id: "",
  username: "",
  isLogged: false,
  token: "",
};

describe("Guven a usersReducer", () => {
  describe("When it receives a new user state and the action to log in", () => {
    test("Then it should return the user state changed with the property isLogged set as true", () => {
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

      const loginUserAction = loginUserActionCreator(user);
      const newUser = usersReducer(initialState, loginUserAction);

      expect(newUser).toStrictEqual(expectedUser);
    });
  });
});
