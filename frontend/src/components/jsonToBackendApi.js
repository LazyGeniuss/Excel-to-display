import { API } from '../config.js';

export const addDataToModel = async (data) => {
  // console.log("addDataToModel"+data);
  return await fetch(`${API}api/user`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body : data,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const readData = async () => {
  return await fetch(`${API}api/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

