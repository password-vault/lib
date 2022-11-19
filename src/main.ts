import {
  addPassword,
  checkConnectionAPI,
  getUser,
  postUser,
  removePassword,
} from "./axiosService";

/**
 * It calls the API function and returns the time it took to execute
 * @returns The time it took to check the connection.
 */
export function checkConnection() {
  const now = Date.now();

  checkConnectionAPI();

  console.info(`${Date.now() - now} ms`);

  return Date.now() - now;
}

export namespace user {
  /**
   * It finds a user by email and returns the user's name and email
   * @param {string} email - string
   * @returns The user's name and email.
   */
  export const get = getUser;

  /**
   * It creates a new user in the database
   * @param {UserSchema} data - UserSchema - The data that will be sent to the API.
   * @returns void
   */
  export const post = postUser;
}

export namespace password {
  /**
   * It add a new password in the database
   * @param {AddPassword} data - AddPassword - The data that will be sent to the API.
   * @returns void
   */
  export const add = addPassword;

  /**
   * It delete a password in the database
   * @param {DeletePassword} data - AddPassword - The data that will be sent to the API.
   * @returns void
   */
  export const remove = removePassword;
}
