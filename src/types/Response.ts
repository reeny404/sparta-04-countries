import { AxiosHeaders } from "axios";

export type Response<T> = {
  headers: AxiosHeaders,
  data: T[],
  status: number,
  statusText: string
}