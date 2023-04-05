import axios from "axios";
import qs from "query-string";

const httpClient = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const getUsers = (options = {}) => {
  const defaultOptions = {
    limit: 5,
    offset: 5,
  };
  const readyOptions = {
    ...defaultOptions,
    ...options,
  };
  return httpClient.get(`/users?${qs.stringify(readyOptions)}`);
};

export const postUser = (values) => httpClient.post("users", values);
