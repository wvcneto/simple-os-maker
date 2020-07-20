export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  document: string;
  type: string;
  created_at: Date;
  updated_at: Date;
}

export interface ResponseUsers {
  data: User[];
}

export interface ResponseUser {
  data: User;
}

// create
export interface RequestUser {
  name: string;
  email: string;
  phone: string;
  document: string;
  type: string;
}

export interface ResponseCreate {
  id: string;
  name: string;
  email: string;
  phone: string;
  document: string;
  type: string;
  created_at: Date;
  updated_at: Date;
}
