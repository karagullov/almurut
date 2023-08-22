import axios, { AxiosResponse } from "axios";
import { RacerAPI } from "./racer";

const API_BASE_URL = "https://devapi.almurut.com/api/test";

export const API = axios.create({
  baseURL: API_BASE_URL,
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

export const requests = {
  get: <T>(url: string) => API.get<T>(url).then(responseBody),
  post: <T>(url: string, body: any) =>
    API.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: any) => API.put<T>(url, body).then(responseBody),
  del: <T>(url: string, body?: any) =>
    API.delete<T>(url, body && { data: body }).then(responseBody),
};

export const Agent = {
  racers: RacerAPI,
};
