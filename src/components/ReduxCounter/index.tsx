import {
  decrement,
  increment,
  useAppDispatch,
  useAppSelector,
} from 'redux-store';

export const ReduxCounter = () => {
  const count = useAppSelector((state) => state.counter.value);

  const dispatch = useAppDispatch();

  const handleButtonClick = (type: 'increment' | 'decrement') => {
    const actionToDispatch = type === 'increment' ? increment : decrement;

    dispatch(actionToDispatch());
  };

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => handleButtonClick('increment')}
        >
          Increment
        </button>

        <span role="contentinfo">{count}</span>

        <button
          aria-label="Decrement value"
          onClick={() => handleButtonClick('decrement')}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};
