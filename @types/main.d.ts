import { CreateUser, UserSchema, AddPassword, DeletePassword } from "./global";

export function checkConnection(): number;

export namespace user {
  export const get: (
    email: string
  ) => Promise<Pick<UserSchema, "name" | "email">>;
  export const post: (data: CreateUser) => Promise<void>;
}

export namespace password {
  export const addPassword: (data: AddPassword) => Promise<void>;
  const removePassword: (data: DeletePassword) => Promise<void>;
}
