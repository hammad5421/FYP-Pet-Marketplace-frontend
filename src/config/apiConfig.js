import { create } from "apisauce";
import { keys } from "../common";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = create({
  baseURL,
});

client.addAsyncRequestTransform(async (request) => {
  const token = localStorage.getItem(keys.qaswa_user);

  if (!token) {
    return;
  }

  request.headers["Authorization"] = `${token}`;
});

export const authConfig = async (token) => {
  return {
    headers: {
      Authorization: `${token}`,
      Accept: "application/json",
    },
  };
};

export const multipartConfig = async () => {
  const token = localStorage.getItem(keys.qaswa_user);

  return {
    headers: {
      Authorization: `${token}`,
      "Content-Type": "multipart/form-data",
    },
  };
};

const responseMonitor = (response) => {
  if (response.status === 401) {
    localStorage.clear();
    window.location.href = "/";
  }
};

client.addMonitor(responseMonitor);

export default client;
