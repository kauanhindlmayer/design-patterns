import UserRepository, { UserRepositoryMemory } from "./UserRepository";

export default class Login {
  userRepository: UserRepository;

  constructor() {
    this.userRepository = UserRepositoryMemory.getInstance();
  }

  async execute(input: Input): Promise<Output> {
    const user = await this.userRepository.getByEmail(input.email);
    if (!user || !user.isCorrectPassword(input.password)) {
      return { success: false };
    }
    return { success: true };
  }
}

type Input = {
  email: string;
  password: string;
};

type Output = {
  success: boolean;
};
