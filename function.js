const setAlet = (msg, type = "danger") => {
  return `<p class="alert alert-${type} d-flex justify-content-between"> ${msg}<button 
  data-bs-dismiss="alert" class="btn-close"><?button></p>`;
};

/*
 *
 *
 *@param {*} key
 */

const getLSData = (key) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return false;
  }
};

const createLSData = (key, value) => {
  let data = [];

  if (localStorage.getItem(key)) {
    data = JSON.parse(localStorage.getItem(key));
  }
  data.push(value);

  localStorage.setItem(key, JSON.stringify(data));
};

const updateLSData = (key, array) => {
  localStorage.setItem(key, JSON.stringify(array));
};
