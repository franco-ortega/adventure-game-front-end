const API_URL = process.env.API_URL;

const request = (path, method, body) => {
  return fetch(`${API_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(body)
  });
};

export const post = (path, body) => request(path, 'POST', body);
export const get = (path) => request(path, 'GET');
export const put = (path, body) => request(path, 'PUT', body);
export const del = (path) => request(path, 'DELETE');
