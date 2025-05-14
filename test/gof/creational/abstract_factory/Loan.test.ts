import {
  CarLoan,
  MortgageLoan,
} from "../../../../src/gof/creational/abstract_factory/Loan";

test("Deve criar um financiamento imobiliário", () => {
  const loan = MortgageLoan.create(100000, 10000, 240);
  expect(loan.loanId).toBeDefined();
  expect(loan.amount).toBe(100000);
  expect(loan.income).toBe(10000);
  expect(loan.installments).toBe(240);
});

test("Não deve criar um financiamento imobiliário com prazo superior a 420 meses", () => {
  expect(() => {
    MortgageLoan.create(100000, 10000, 421);
  }).toThrow(
    new Error("The maximum number of installments for a mortgage loan is 420")
  );
});

test("Não deve criar um financiamento imobiliário caso a parcela seja maior que 25% da renda", () => {
  expect(() => {
    MortgageLoan.create(200000, 1000, 240);
  }).toThrow(
    new Error("The maximum installment amount is 25% of the monthly income")
  );
});

test("Não deve criar um financiamento veicular com prazo superior a 60 meses", () => {
  expect(() => {
    CarLoan.create(100000, 10000, 72);
  }).toThrow(
    new Error("The maximum number of installments for a car loan is 60")
  );
});

test("Não deve criar um financiamento veicular caso a parcela seja maior que 30% da renda", () => {
  expect(() => {
    CarLoan.create(200000, 1000, 60);
  }).toThrow(
    new Error("The maximum installment amount is 30% of the monthly income")
  );
});
