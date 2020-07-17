import { uuid } from 'uuidv4';

class Address {
  id: string;

  state: string;

  city: string;

  neighborhood: string;

  street: string;

  number: string;

  complement: string;

  zip: string;

  constructor({
    state,
    city,
    neighborhood,
    street,
    number,
    complement,
    zip,
  }: Omit<Address, 'id'>) {
    this.id = uuid();
    this.state = state;
    this.city = city;
    this.neighborhood = neighborhood;
    this.street = street;
    this.number = number;
    this.complement = complement;
    this.zip = zip;
  }
}

export default Address;
