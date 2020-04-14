import axios from "axios";

export function getEmployee(url, data) {
  return axios.get(url, data);
}

export function PostEmployee(url, data) {
  return axios.post(url, data);
}

export function PutEmployee(url, data) {
  return axios.put(url, data);
}
/*
        .then((response) => JSON.parse(response))
        .then((res) => SetHomeData({ res }));
*/
