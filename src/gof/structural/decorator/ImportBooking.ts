import UseCase from "./UseCase";

// ImportDecorator
export default class ImportBooking implements UseCase {
  constructor(readonly useCase: UseCase) {}

  async execute(input: Input): Promise<Output> {
    const output: Output = {
      code: [],
    };
    const lines = input.file.split("\n");
    for (const line of lines.slice(1)) {
      const [email, checkinDate, checkoutDate, category] = line.split(";");
      const inputUseCase = {
        email,
        checkinDate: new Date(checkinDate),
        checkoutDate: new Date(checkoutDate),
        category,
      };
      const outputUseCase = await this.useCase.execute(inputUseCase);
      output.code.push(outputUseCase.code);
    }
    return output;
  }
}

type Input = {
  file: string;
};

type Output = {
  code: string[];
};
