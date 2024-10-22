import { useReducer } from "react";

const Component = () => {
  const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    INCREMENTBYPAYLOAD: "incrementByPayload",
    MULTIPLYBYPAYLOAD: "multiplyByPayload",
    UPDATEINPUT1: "updateInput1",
    UPDATEINPUT2: "updateInput2",
  } as const;

  type State = {
    count: number;
    inputValue1: number;
    inputValue2: number;
  };

  type Action =
    | { type: typeof ACTIONS.INCREMENT }
    | { type: typeof ACTIONS.DECREMENT }
    | { type: typeof ACTIONS.INCREMENTBYPAYLOAD; payload: number }
    | { type: typeof ACTIONS.MULTIPLYBYPAYLOAD; payload: number }
    | { type: typeof ACTIONS.UPDATEINPUT1; payload: number }
    | { type: typeof ACTIONS.UPDATEINPUT2; payload: number };

  const initialState = { count: 0, inputValue1: 0, inputValue2: 0 };

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case ACTIONS.INCREMENT:
        return { ...state, count: state.count + 1 };
      case ACTIONS.DECREMENT:
        return { ...state, count: state.count - 1 };
      case ACTIONS.INCREMENTBYPAYLOAD:
        return {
          ...state,
          count: state.count + action.payload,
          inputValue1: 0,
        };
      case ACTIONS.MULTIPLYBYPAYLOAD:
        return {
          ...state,
          count: state.count * action.payload,
          inputValue2: 0,
        };
      case ACTIONS.UPDATEINPUT1:
        return { ...state, inputValue1: action.payload };
      case ACTIONS.UPDATEINPUT2:
        return { ...state, inputValue2: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = (payload?: number) => {
    if (payload) {
      dispatch({
        type: ACTIONS.INCREMENTBYPAYLOAD,
        payload: state.inputValue1,
      });
    } else {
      dispatch({ type: ACTIONS.INCREMENT });
    }
  };

  const handleDecrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };

  const handleMultiplyByPayload = () => {
    dispatch({ type: ACTIONS.MULTIPLYBYPAYLOAD, payload: state.inputValue2 });
  };
  const handleChangeInputValue = (inputName : "inputValue1" | "inputValue2",e: React.ChangeEvent<HTMLInputElement>) => {
    if(inputName === "inputValue1") {
      dispatch({ type: ACTIONS.UPDATEINPUT1, payload: Number(e.target.value) })
    } else if (inputName === "inputValue2") {
      dispatch({ type: ACTIONS.UPDATEINPUT2, payload: Number(e.target.value) })
    }
    ;
  };

 
  return (
    <>
      <h3>{state.count}</h3>
      <button onClick={() => handleIncrement()}>+</button>
      <button onClick={handleDecrement}>-</button>
      <div>
        <input
          type="number"
          value={state.inputValue1}
          onChange={(e) => handleChangeInputValue("inputValue1", e)}
        />
        <button onClick={() => handleIncrement(state.inputValue1)}>
          +{state.inputValue1}
        </button>
      </div>

      <div>
        <input
          type="number"
          value={state.inputValue2}
          onChange={(e) => handleChangeInputValue( "inputValue2", e)}
        />
        <button onClick={handleMultiplyByPayload}>*{state.inputValue2}</button>
      </div>
    </>
  );
};

export default Component;
