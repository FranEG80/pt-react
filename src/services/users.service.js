import { API_URL } from "../configs/constants";
import fetch, { PARAMS } from "../utils/fetchData";

export const login = (user) =>
  fetch({
    url: `${API_URL}/signin`,
    params: { ...PARAMS.POST, body: JSON.stringify(user) },
  });

export const logout = () =>
  fetch({
    url: `${API_URL}/logout`,
    params: { ...PARAMS.POST, body:JSON.stringify({}) },
  });

export const register = (user) => 
  fetch({
    url: `${API_URL}/register`,
    params: { ...PARAMS.POST, body: JSON.stringify(user) }
  })
