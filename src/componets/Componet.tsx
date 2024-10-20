import { useReducer } from "react";

const Component = () => {
  //   const [count, setCount] = useState<number>(0);

  const ACTIONS ={
INCREMENT: "increment",
DECREMENT: "decrement"
  }
  type State = {
    count: number;
  };


  type Action = { type: string } 

  const initialState = { count: 0 };

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case ACTIONS.INCREMENT:
        return { count: state.count + 1 };
      case ACTIONS.DECREMENT:
        return { count: state.count - 1 };
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
    </>
  );
};

export default Component;
