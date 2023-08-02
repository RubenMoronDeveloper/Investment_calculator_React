import React from 'react'
import classes from "./Table.module.css"
export const Table = (props) => {
  return (
    <table className={classes.result}>
    <thead>
      <tr>
        <th>Year</th>
        <th>Total Savings</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>YEAR NUMBER</td>
        <td>TOTAL SAVINGS END OF YEAR</td>
        <td>INTEREST GAINED IN YEAR</td>
        <td>TOTAL INTEREST GAINED</td>
        <td>TOTAL INVESTED CAPITAL</td>
      </tr>
      {props.investmentData.map((investData) => (
        <tr key={investData.year}>
          <td>
            <p>{investData.year}</p>
          </td>
          <td>
            <p>{investData.savingsEndOfYear}</p>
          </td>
          <td>
            <p>{investData.yearlyInterest}</p>
          </td>
          <td>
            <p>{investData.totalInterestGained}</p>
          </td>
          <td>
            <p>{investData.totalInvested}</p>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}
