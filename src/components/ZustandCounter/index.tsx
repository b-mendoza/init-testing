import { useStore } from '@/zustand-store';

export const ZustandCounter = () => {
  const { count, increment } = useStore();

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={increment}>
          Increment
        </button>

        <span role="contentinfo">{count}</span>
      </div>
    </div>
  );
};
