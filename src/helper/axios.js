import axios from "axios";
import auth from "../config/auth";

// export const BaseURL = API.endpoint + "/";
// export const BaseURL = process.env.REACT_APP_LOCAL_API_URL;
export const BaseURL = "https://hotel-backend.manzzari.in";
// export const BaseURL = "https://manzzri-backend.vercel.app";

const defaultHeaders = {
  isAuth: true,
  AdditionalParams: {},
  isJsonRequest: true,
};

export const ApiGet = (type) => { 
  return new Promise((resolve, reject) => {
    // const s = type.includes("?") ? "&" : "?";
    axios
      .get(BaseURL + type, getHttpOptions(defaultHeaders))
      .then((responseJson) => {
        resolve(responseJson.data);
      })
      .catch((error) => {
        reject({
          code: error?.response?.status,
          error: error?.response?.data?.error,
          message: error?.response?.data?.message,
        });
      });
  });
};

export const ApiDelete = (type) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(BaseURL + type, getHttpOptions(defaultHeaders))
      .then((responseJson) => {
        resolve(responseJson.data);
      })
      .catch((error) => {
        reject({
          code: error?.response?.status,
          error: error?.response?.data?.error,
        });
      });
  });
};

export const ApiPut = (type, data) => {
  return new Promise((resolve, reject) => {
    axios
      .put(BaseURL + type, data, getHttpOptions())
      .then((responseJson) => {
        resolve(responseJson.data);
      })
      .catch((error) => {
        reject({
          code: error?.response?.status,
          error: error?.response?.data?.error,
        });
      });
  });
};

export const ApiPatch = (type, data) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(BaseURL + type, data, getHttpOptions())
      .then((responseJson) => {
        resolve(responseJson.data);
      })
      .catch((error) => {
        reject({
          code: error?.response?.status,
          error: error?.response?.data?.error,
        });
      });
  });
};

export const ApiGetNoAuth = (type) => {
  return new Promise((resolve, reject) => {
    // const s = type.includes("?") ? "&" : "?";
    axios
      .get(BaseURL + type, getHttpOptions({ ...defaultHeaders, isAuth: false }))
      .then((responseJson) => {
        resolve(responseJson.data);
      })
      .catch((error) => {
        reject({
          code: error?.response?.status,
          error: error?.response?.data?.error,
        });
      });
  });
};

export const ApiPost = async (type, userData) => {
  const res = await axios.post(BaseURL + type, userData, getHttpOptions());
  return res;
};

export const ApiPostNoAuth = (type, userData) => {
  return new Promise((resolve, reject) => {
    // const s = type.includes("?") ? "&" : "?";
    axios
      .post(
        BaseURL + type,
        userData,
        getHttpOptions({ ...defaultHeaders, isAuth: false })
      )
      .then((responseJson) => {
        resolve(responseJson.data);
        if (
          responseJson.data &&
          responseJson.data.data &&
          responseJson.data.data.token
        ) {
        }
        // Auth.setAuthToken(JSON.stringify(responseJson.data.data.token));
      })
      .catch((error) => {
        reject({
          code: error?.response?.status,
          error: error?.response?.data?.error,
          message: error?.response?.data?.message,
        });
      });
  });
};

export const getHttpOptions = (options = defaultHeaders) => {
  let headers = {
    Authorization: "",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-credentials": true,
  };
  // "Origin, X-Requested-With, Content-Type, Accept"
  if (options.hasOwnProperty("isAuth") && options.isAuth) {
    headers["Authorization"] = auth.getToken() ?? "";
  }

  if (options.hasOwnProperty("isJsonRequest") && options.isJsonRequest) {
    headers["Content-Type"] = "application/json";
  }

  if (options.hasOwnProperty("AdditionalParams") && options.AdditionalParams) {
    headers = { ...headers, ...options.AdditionalParams };
  }

  return { headers };
};
