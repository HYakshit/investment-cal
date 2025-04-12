import { calculateInvestmentResults, formatter } from "../../util/investment";

export default function Results({ userInputs }) {
  const result = calculateInvestmentResults(userInputs);

  return (
    <div className="result">
      <table className="center table">
        <thead className="thead">
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {result.map((row, index) => {
        
            const totalInterest = row.valueEndOfYear - (userInputs.initialInvestment + row.annualInvestment * row.year);

            const investedCapital = userInputs.initialInvestment + row.annualInvestment * row.year;

            return (
              <tr key={index}>
                <td>{row.year}</td>
                <td>{formatter.format(row.valueEndOfYear)}</td>
                <td>{formatter.format(row.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(investedCapital)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
