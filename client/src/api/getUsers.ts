import type { User } from "../types/users";

export const getUsers = () => {
  return new Promise<User[]>((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "local" },
        { id: 4, name: "don" },
        { id: 5, name: "chacks" },
        { id: 6, name: "dax" },
        { id: 7, name: "luca" },
      ]);
    }, 2000);
  });
};
