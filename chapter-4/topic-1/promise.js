const axios = require("axios");

const URL = `https://jsonplaceholder.typicode.com`;

let data;
axios
  .get(`${URL}/posts/1`)
  .then((res) => {
    data = res?.data;
    const { userId } = res?.data;

    return axios.get(`${URL}/users/${userId}`);
  })
  .then((res) => {
    const dataUsers = res?.data;
    console.log([data, dataUsers]);
  })
  .catch((err) => {
    console.error(err);
  });

// const getDataUsers = async (params) => {
//   try {
//     const { data } = await axios.get(`${URL}/${params}`);
//     console.log(data);
//   } catch (error) {
//     throw new Error(error);
//   }
// };
