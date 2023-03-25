import axios from "axios";

const getData = async (userId) => {
  //if argument is not a number, throw an error
  if (typeof userId !== "number") throw new Error("userId must be a number");

  //if argument is a number, but less than 1, throw an error
  if (userId < 1) throw new Error("userId must be greater than 0");

  //try to get user data and user's posts and combine them
  try {
    //get user data
    const user = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    //get user's posts
    const posts = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    //combine user data and posts
    const userData = {
      ...user.data,
      posts: posts.data,
    };

    return userData;
  } catch (error) {
    console.log("error :>> ", error);
  }
};

export default getData;
