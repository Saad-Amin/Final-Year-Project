import axios from "axios";

//Common Function For Request API
export const commonrequest = async (methods, url, body, header) => {
  let config = {
    method: methods,
    url,
    headers: header
      ? header
      : {
          "Content-Type": "application/json",
        },
    data: body,
  };

  //axios instance
  return axios(config)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};