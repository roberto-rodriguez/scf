import * as configActionsCreator from "./config.actions_creator";
const axios = require("axios");
import jsonpAdapter from "axios-jsonp";
import { HOST, TOKEN_COOKIE } from "../constants/Constants";
 

export function get(url, callback) {
  //send("GET", url, callback);
  debugger;
   axios.create({
    baseURL: "http://localhost:8088/MT/web/"
  }).get(url)
    .then(function(response) {
      callback && callback(response.data);
      debugger;
    })
    .catch(function(error) {
      alert(error);
      debugger;
    });
}

export function post(url, data, callback) {
  send("POST", url, data, callback);
}

export function send(method, url, data, callback) {
  var request = {
    url: HOST + url,
    method,
    // adapter: jsonpAdapter,
    crossdomain: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept"
    },
    proxy
    // headers: { [TOKEN_COOKIE]: "PutTokenHere" }
    // proxy: {
    //   host: "172.30.248.96",
    //   port: 8088
    // }
  };

  if (data) {
    request.data = data;
  }

  axios(request)
    .then(function(response) {
      callback && callback(response);
    })
    .catch(function(error) {
      alert(error);
      debugger;
    });
}
