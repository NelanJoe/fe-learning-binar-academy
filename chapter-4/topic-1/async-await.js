const axios = require("axios");

const getData = async () => {
  try {
    const postResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/1`
    );

    const { userId } = postResponse?.data;
    const userResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    console.log({ post: postResponse?.data, user: userResponse?.data });
  } catch (error) {
    throw new Error(error);
  }
};

getData();
