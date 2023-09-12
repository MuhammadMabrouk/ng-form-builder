export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  gender: string;
  image: string;
}

export interface FetchUsersResponse {
  limit: number;
  skip: number;
  total: number;
  users: User[];
}
