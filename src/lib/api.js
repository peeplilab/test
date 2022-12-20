import axios from 'axios';

export async function get(url) {
  const response = await axios(url, {});
  return response.data;
}

export async function post(url, payload) {
  let args = {
    url: url,
    method: "POST",
    data: payload
  }
  const response = await axios(args);
  return response;
}
