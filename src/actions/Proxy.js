const axios = require("axios");
import { baseURL, TOKEN_COOKIE } from "../constants/Constants";
import cookie from "react-cookies";

export function get(url, callback) {
  var token = cookie.load(TOKEN_COOKIE); 

  if (token) {
    var separator = url.indexOf("?") >= 0 ? "&" : "?";
    url += separator + TOKEN_COOKIE + "=" + token ;
  }

  send(url, callback);
}

export function post(url, data, callback) {
  var token = cookie.load(TOKEN_COOKIE); 

  data[TOKEN_COOKIE] = token; 

  send(url, callback, data);
}

function send(url, callback, data) {
  var instance = axios.create({ baseURL });

  var promise = data ? instance.post(url, data) : instance.get(url);

  promise
    .then(function(response) {
      var result = response.data;

      if (result) {
        //TODO add && result.status is OK
        var { data, status, statusMessage } = result;

        callback && callback(data, status, statusMessage);
      }
    })
    .catch(function(/*error*/) {});
}
