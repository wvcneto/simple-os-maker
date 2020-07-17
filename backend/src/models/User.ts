import { uuid } from 'uuidv4';

import Address from './Address';

class User {
  id: string;

  name: string;

  email: string;

  phone: string;

  document: string;

  type: string;

  // address: Address;

  constructor({ name, email, phone, document, type }: Omit<User, 'id'>) {
    this.id = uuid();
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.document = document;
    this.type = type;
    // this.address = address;
  }
}

export default User;
