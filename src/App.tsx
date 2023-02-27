// We can use stripe's built-in components, but let's build it from scratch
import { useEffect, useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

function App() {
  const [number, setNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvc, setCVC] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(
      number.length === 19 &&
        cvc.length === 3 &&
        expDate.length === 7 &&
        !isNaN(new Date(expDate).getTime())
    );
  }, [number, expDate, cvc]);

  return (
    <div className="App">
      <div className="card">
        <FormInput
          id="card-number"
          mask="9999 9999 9999 9999"
          label="Card number"
          placeholder="1234 1234 1234 1234"
          value={number}
          setValue={setNumber}
        />
        <FormInput
          id="exp-date"
          mask="99 / 99"
          label="Expiration date"
          placeholder="MM / DD"
          value={expDate}
          setValue={setExpDate}
          className="mt-4"
        />
        <FormInput
          id="cvc-number"
          mask="999"
          label="CVC"
          placeholder="CVC"
          value={cvc}
          setValue={setCVC}
          className="mt-4"
        />
        <button
          id="pay-button"
          className="form-button mt-6 mb-4"
          disabled={!isValid}
        >
          PAY
        </button>
      </div>
    </div>
  );
}

export default App;
