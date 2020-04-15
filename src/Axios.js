import axios from "axios";

export function getEmployee(url) {
  return axios({
    method: "GET",
    url: url,
    contentType: "application/json",
    dataType: "json",
  });
}

export function postEmployee(url, data) {
  return axios({
    method: "POST",
    url: url,
    contentType: "application/json",
    dataType: "json",
    data: data,
  });
}

export function putEmployee(url, data) {
  return axios({
    method: "PUT",
    url: url,
    contentType: "application/json",
    dataType: "json",
    data: data,
  });
}
