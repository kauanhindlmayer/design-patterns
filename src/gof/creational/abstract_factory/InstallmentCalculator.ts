import Installment from "./Installment";
import Loan from "./Loan";
import currency from "currency.js";

export default interface InstallmentCalculator {
  calculate(loan: Loan): Installment[];
}

export class SACInstallmentCalculator implements InstallmentCalculator {
  calculate(loan: Loan): Installment[] {
    const installments: Installment[] = [];
    let balance = currency(loan.amount);
    const rate = loan.rate / 100 / 12;
    let installmentNumber = 1;
    const amortization = currency(balance.value / loan.installments);

    while (balance.value > 0.1) {
      const interest = currency(balance.value * rate);
      const updatedBalance = currency(balance.value + interest.value);
      const amount = currency(interest.value + amortization.value);
      balance = currency(updatedBalance.value - amount.value);
      if (balance.value < 0.1) balance = currency(0);
      installments.push(
        new Installment(
          loan.loanId,
          installmentNumber,
          amount.value,
          amortization.value,
          interest.value,
          balance.value
        )
      );
      installmentNumber++;
    }

    return installments;
  }
}

export class PriceInstallmentCalculator implements InstallmentCalculator {
  calculate(loan: Loan): Installment[] {
    const installments: Installment[] = [];
    let balance = currency(loan.amount);
    const rate = loan.rate / 100 / 12;
    let installmentNumber = 1;
    const formula = Math.pow(1 + rate, loan.installments);
    const amount = balance.multiply((formula * rate) / (formula - 1));

    while (balance.value > 2) {
      const interest = balance.multiply(rate);
      const amortization = amount.subtract(interest);
      balance = balance.subtract(amortization);
      if (balance.value < 2) balance = currency(0);
      installments.push(
        new Installment(
          loan.loanId,
          installmentNumber,
          amount.value,
          amortization.value,
          interest.value,
          balance.value
        )
      );
      installmentNumber++;
    }

    return installments;
  }
}
