import axios, { AxiosInstance } from "axios";
import { Country } from "../types/Country";
import { Response } from "../types/Response";

class CountryAPI {
  #client: AxiosInstance;

  constructor() {
    this.#client = axios.create({ baseURL: "https://restcountries.com/v3.1" });
  }

  /**
   * 
   * @returns config, data, headers, request, status, statusText
   */
  async getAll(): Promise<Country[]> {
    const response: Response<Country> = await this.#client.get("/all");
    if (response.status !== 200) {
      console.warn(response.statusText, response);
    }

    return response.data;
  }
}

const countryAPI = new CountryAPI();
export default countryAPI;