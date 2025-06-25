import UseCase from "./UseCase";

export default class LogDecorator implements UseCase {
  constructor(readonly useCase: UseCase) {}

  async execute(input: any): Promise<any> {
    console.log("security");
    return this.useCase.execute(input);
  }
}
