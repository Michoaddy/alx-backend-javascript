// Await / Async
// Import uploadPhoto and createUser from utils.js

// Write an async function named asyncUploadUser that will call these 
// two functions and return an object with the following format:

import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let res = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    res = { photo, user };
  } catch (err) {
    res = { photo: null, user: null };
  }
  return res;
}
