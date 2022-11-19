export type UserSchema = {
  name: string;
  email: string;
  password: string;
  passwords?: passwords[];
};

type passwords = { name: string; password: string };

export type CreateUser = {
  name: string;
  email: string;
  password: string;
};

export type AddPassword = {
  email: string;
  passwords;
};

export type DeletePassword = {
  email: string;
  passwordsName: string;
};
