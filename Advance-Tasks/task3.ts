/*Use TypeScript utility types (Partial, Readonly, Record) in a practical example:
Create an object that:
Has some optional properties using Partial.
Is read-only using Readonly.
Maps specific keys to values using Record.
 */
//used readonly
interface user {
  readonly id: number;
  name: string;
  password: number;
  isLoggedin: true;
}

type partialUser = Partial<user>;
//used partial user
let abc: partialUser = {
  id: 12,
  password: 1212,
  isLoggedin: true,
};
type userMap = Record<number, partialUser>;
//used recdord
let newUser: userMap = {
  1: { id: 12, name: "syed khizar" },
};
