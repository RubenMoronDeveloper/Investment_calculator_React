import React, { useState } from "react";
import classes from "./Form.module.css"
export const Form = (props) => {
  const [currentSavingsForm, setCurrentSavings] = useState(0);
  const [yearlyContributionForm, setYearlyContribution] = useState(0);
  const [expectedReturnForm, setExpectedReturn] = useState(0);
  const [durationForm, setDuration] = useState(0);

  const currentSavingsHandler = (event) => {
    setCurrentSavings(event.target.value);
  };
  const yearlyContributionHandler = (event) => {
    setYearlyContribution(event.target.value);
  };
  const expectedReturnHandler = (event) => {
    setExpectedReturn(event.target.value);
  };
  const durationHandler = (event) => {
    setDuration(event.target.value);
  };

  const calculateHandler = (event) => {
    event.preventDefault();

    let currentSavings = +currentSavingsForm;
    let totalInvested = currentSavings;
    let totalInterestGained = 0
    const yearlyData = [];
    const yearlyContribution = +yearlyContributionForm;
    const expectedReturn = +expectedReturnForm / 100;
    const duration = +durationForm;

    for (let i = 0; i < duration; i++) {
      totalInvested += yearlyContribution;
      const yearlyInterest = currentSavings * expectedReturn;
      totalInterestGained += yearlyInterest
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInvested: totalInvested,
        totalInterestGained : totalInterestGained
      });
    }
    props.handleInvestmentData(yearlyData);
    setCurrentSavings(0);
    setDuration(0);
    setExpectedReturn(0);
    setYearlyContribution(0);
  };
  return (
    <form onSubmit={calculateHandler} className={classes.form}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            value={currentSavingsForm}
            onChange={currentSavingsHandler}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            value={yearlyContributionForm}
            onChange={yearlyContributionHandler}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            value={expectedReturnForm}
            onChange={expectedReturnHandler}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            value={durationForm}
            onChange={durationHandler}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className={classes["actions"]}>
        <button type="reset" className={classes["buttonAlt"]}>
          Reset
        </button>
        <button type="submit" className={classes["button"]}>
          Calculate
        </button>
      </p>
    </form>
  );
};
