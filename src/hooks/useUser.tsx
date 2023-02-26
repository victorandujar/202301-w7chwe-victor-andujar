import { useAppDispatch } from "../store/hooks";
import {
  CustomTokenPayload,
  LoginResponse,
  UserCredentials,
} from "../types/types";
import decodeToken from "jwt-decode";
import { loginUserActionCreator } from "../store/features/usersSlice";

interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
}
const loginEndpoint = "/login";
const path = "/users";
const urlApi = process.env.REACT_APP_URL_API;

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();

  const loginUser = async (userCredentials: UserCredentials) => {
    const response = await fetch(`${urlApi}${path}${loginEndpoint}`, {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: { "Content-Type": "application/json" },
    });

    const { token } = (await response.json()) as LoginResponse;

    const tokenPayload: CustomTokenPayload = decodeToken(token);

    const { sub: id, username } = tokenPayload;

    dispatch(loginUserActionCreator({ id, token, username }));

    localStorage.setItem("token", token);
  };

  return { loginUser };
};

export default useUser;
