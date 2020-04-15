import axios from "axios";

export function getEmployee(url) {
  return axios.get(url, {
    headers: { "content-type": "application/json", dataType: "json" },
  });
}

export function postEmployee(url, data) {
  return axios.post(url, data, {
    headers: { "content-type": "application/json", dataType: "json" },
  });
}

export function putEmployee(url, data) {
  return axios.put(url, data, {
    headers: { "content-type": "application/json", dataType: "json" },
  });
}
