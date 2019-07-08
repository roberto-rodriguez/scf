import { TOKEN_COOKIE, BROWSER_ID } from "../../../constants/Constants";
import * as string from "../../../utils/string";
import cookie from "react-cookies";
import * as Proxy from "../../../actions/Proxy";



export function addCity(cityName,callback) {
  return function(dispatch) {
      var browserId = cookie.load(BROWSER_ID);
      if (!browserId) {
        browserId = string.buildBrowserId();
        cookie.save(BROWSER_ID, browserId);
      }
     Proxy.post(
      "addNewCity/addCity",
      { cityName, browserId },
      (data, status, statusMessage) => {

        callback(status, statusMessage);
      }
    );
  };
}
