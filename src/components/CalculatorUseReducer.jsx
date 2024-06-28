import { useReducer } from "react";
import "./Calculator.css";
import { reducer, initialState } from "./reducers/reducerCalculator";

const CalculatorUseReducer = () => {
  //initialState te başlangıç değerleri yani onlara state ile ulaşabiliriz destructring
  //dispatch reducer fonksiyonunu tetikleyecek metod
  const [state, dispatch] = useReducer(reducer, initialState);
  //console.log(state);

  const handleNumber1Change = (e) => {
    dispatch({ type: "SET_NUMBER1", payload: Number(e.target.value) });
  };

  const handleNumber2Change = (e) => {
    dispatch({ type: "SET_NUMBER2", payload: Number(e.target.value) });
  };

  const handleAddition = () => {
    dispatch({ type: "SET_RESULT", payload: state.number1 + state.number2 });
  };

  return (
    <div className="calculator-container">
      <h1>useReducer</h1>
      <div className="form-container">
        <div className="form-group">
          <label className="form-label" htmlFor="number1">
            Number 1
          </label>
          <input
            className="form-input"
            type="number"
            id="number1"
            onChange={handleNumber1Change}
            value={state.number1}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="number2">
            Number 2
          </label>
          <input
            className="form-input"
            type="number"
            id="number2"
            onChange={handleNumber2Change}
            value={state.number2}
          />
        </div>
        <button className="form-button" onClick={handleAddition}>
          Add
        </button>
        <div className="form-group">
          <label className="form-label" htmlFor="result">
            Result
          </label>
          <input
            className="form-input"
            type="number"
            id="result"
            value={state.result}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default CalculatorUseReducer;
