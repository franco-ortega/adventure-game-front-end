const API_URL = process.env.API_URL;

export const postSignup = (username, email, password) => {
  return fetch(`${API_URL}/api/v1/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ username, email, password })
  })
    .then(res => res.json());
};
