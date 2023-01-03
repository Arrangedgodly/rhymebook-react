const baseUrl = 'http://localhost:3001';

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error ${res.status}`);
}

const getNotes = (user) => {
  return fetch(`${baseUrl}/notes`, {
    headers: {
      'Content-type': 'application/json; charset=UTF-8', 
    }
  })
    .then(checkResponse)
}