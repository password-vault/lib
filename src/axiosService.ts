import { AddPassword, CreateUser, DeletePassword } from "../global";
import axios, { AxiosResponse } from "axios";

import dotenv from "dotenv";
dotenv.config();

const AxiosAPI = axios.create({ baseURL: process.env.API_URL });

const checkConnectionAPI = async () => await AxiosAPI.get("/ping");

const getUser = async (
  email: string
): Promise<AxiosResponse<{ name: string; email: string }>> =>
  await AxiosAPI.get("/user", { params: { email } });

const postUser = async (data: CreateUser): Promise<AxiosResponse<void>> =>
  await AxiosAPI.post("/user", data);

const addPassword = async (data: AddPassword) =>
  await AxiosAPI.patch("/password", data);

const removePassword = async (data: DeletePassword) =>
  await AxiosAPI.delete("/password", {
    params: { email: data.email, passwordName: data.passwordsName },
  });

export { checkConnectionAPI, getUser, postUser, addPassword, removePassword };
