import Header from "./assets/components/Header";
import Input from "./assets/components/input";
import Results from "./assets/components/Results";
import { useState } from "react";

function App() {
  const [returns, setReturns] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 9,
    duration: 5,
  });
  const isValid = returns.duration > 0;
  const handleInputChange = (value, name) => {
    setReturns((prevReturns) => ({
      ...prevReturns,
      [name]: +value,
    }));
  };

  return (
    <div>
      <Header />
      <div className="row m-4">
        <div className="col-lg-6">
          <Input
            id="annualInvestment"
            value={returns.annualInvestment}
            onChange={handleInputChange}
          />
          <Input
            id="initialInvestment"
            value={returns.initialInvestment}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-lg-6">
          <Input
            id="expectedReturn"
            value={returns.expectedReturn}
            onChange={handleInputChange}
          />
          <Input
            id="duration"
            value={returns.duration}
            onChange={handleInputChange}
          />
        </div>
        <div className="results">
          {(isValid) ? (
            <Results userInputs={returns}></Results>
          ) : (
            <div
              class="alert alert-primary d-flex align-items-center"
              role="alert"
            >
             
              <div>Duration should be greator than zero</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
