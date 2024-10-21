import { useReducer } from "react";

const Component = () => {
  //   const [count, setCount] = useState<number>(0);

  const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    INCREMENTBYPAYLOAD: "incrementByPayload",
    MULTIPLYBYPAYLOAD: "multiplyByPayload",
  } as const;

  type State = {
    count: number;
  };


  type Action = { type: typeof ACTIONS.INCREMENT} |
 { type: typeof ACTIONS.DECREMENT} |
 { type: typeof ACTIONS.INCREMENTBYPAYLOAD; payload: number } |
   { type: typeof ACTIONS.MULTIPLYBYPAYLOAD; payload: number } 


  

  const initialState = { count: 0 };

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case ACTIONS.INCREMENT:
        return { count: state.count + 1 };
      case ACTIONS.DECREMENT:
        return { count: state.count - 1 };
      case ACTIONS.INCREMENTBYPAYLOAD:
        return { count: state.count + action.payload };
      case ACTIONS.MULTIPLYBYPAYLOAD:
        return { count: state.count * action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  //   const increment = () => {
  //     setCount((prevCount) => prevCount + 1);
  //   };

  //   const decrement = () => {
  //     setCount((prevCount) => prevCount - 1);
  //   };
  return (
    <>
      <h3>{state.count}</h3>
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENTBYPAYLOAD, payload: 7 })}>-7</button>
      <button onClick={() => dispatch({ type: ACTIONS.MULTIPLYBYPAYLOAD, payload: 5 })}>*5</button>
    </>
  );
};

export default Component;
