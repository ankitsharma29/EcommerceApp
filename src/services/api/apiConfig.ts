import qs from "query-string";
import { apiPaths } from "./apiPaths";

const api: any = {
  get: <TResponse>(apiPath: string, params?: any) => {
    return new Promise<TResponse>(async (resolve, reject) => {
      try {
        let queryParams = params
          ? `?${qs.stringify(params, { arrayFormat: "bracket" })}`
          : "";

        let apiUrl = `${apiPath}${queryParams}`;
        const headers = {
          Accept: "application/json",
          "Content-Type": "application/json",
        };

        const response = await fetch(apiUrl, {
          method: "GET",
          headers,
        });

        let responseJSON = await response.json();
        if (response.status === 200) {
          resolve(responseJSON as TResponse);
        } else if (response.status === 404) {
          reject(responseJSON);
        } else {
          let error = new Error("Something went wrong");
          reject(error);
        }
      } catch (error) {
        reject(error);
      }
    });
  },

  post: <TResponse>(apiPath: string, params?: any) => {
    return new Promise<TResponse>(async (resolve, reject) => {
      try {
        let url = `${apiPath}`;

        const headers = {
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await fetch(url, {
          method: "POST",
          headers,
          body: JSON.stringify(params),
        });
        let responseJSON = await response.json();
        if (response.status >= 200 && response.status < 210) {
          resolve(responseJSON);
        } else if (response.status >= 400) {
          let error = new Error(`${responseJSON.message || "Bad Request"}`);

          reject(error);
        } else {
          let error = new Error(`${response.status}`);
          reject(error);
        }
      } catch (error) {
        reject(error);
      }
    });
  },
};

const apiConfig = {
  api,
  apiPaths,
};

export default apiConfig;
