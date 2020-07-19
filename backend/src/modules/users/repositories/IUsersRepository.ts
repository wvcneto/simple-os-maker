import User from '../infra/typeorm/entities/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

export default interface UsersRepository {
  // findOne onde -> email
  findByEmail(email: string): Promise<User | undefined>;

  // findOne onde -> id
  findById(id: string): Promise<User | undefined>;

  // findAll
  index(): Promise<User[] | undefined>;

  // create
  create(date: ICreateUserDTO): Promise<User>;

  // save
  save(user: User): Promise<User>;
}
