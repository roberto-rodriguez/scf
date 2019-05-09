const axios = require("axios");
import { baseURL, TOKEN_COOKIE } from "../constants/Constants";

export function get(url, callback) {
  var separator = url.indexOf("?") >= 0 ? "&" : "?";
  url += separator + "token=" + "token_goes_here";

  axios
    .create({ baseURL })
    .get(url)
    .then(function(response) {
      callback && callback(response.data);
    })
    .catch(function(error) { 
    });
}