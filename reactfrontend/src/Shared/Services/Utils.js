import { API_ENDPOINTS, API_ENVIRONMENT } from '../Environments/config';
import { BASE_PATH, DEPLOYED_ENVIRONMENT, ENVIRONMENTS } from '../Environments/Environments';
import axios from 'axios';
import { BehaviorSubject } from 'rxjs';


const loaderSubject = new BehaviorSubject();


const get = (urlKey,params, showLoader = true) => {
  let url;
  const environment = API_ENVIRONMENT[urlKey] || DEPLOYED_ENVIRONMENT;
  if (environment === 'local') {
    url = BASE_PATH + `/Assets/json/${urlKey}.json`;
  } else {
    url = params ? ENVIRONMENTS[environment].baseurl + API_ENDPOINTS[urlKey] + params : ENVIRONMENTS[environment].baseurl + API_ENDPOINTS[urlKey];
  }
  loaderSubject.next(showLoader);

  // const userSession = sessionService.getSession();
  const config = {
    headers: {
      // token: userSession?.[VARIABLES.accessToken],
      'Access-Control-Allow-Origin': '*',
    },
    withCredentials:true
  };

  return axios.get(url, config);
}

const post = (url, params, showLoader = true) => {
  loaderSubject.next(showLoader);

  return axios.post(url, params);
}

const ServiceUtils = {
  getRequest: get,
  postRequest: post,
};
export { ServiceUtils };
