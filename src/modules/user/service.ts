import { UserRepository } from './repository';

export class UserService {
  private readonly userRepo: UserRepository;

  constructor(userRepo: UserRepository) {
    this.userRepo = userRepo;
  }

  async findUserByID(id: number) {
    return this.userRepo.findUserByID(id);
  }
}
